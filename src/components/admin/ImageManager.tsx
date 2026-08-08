import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useSiteImages } from "@/hooks/useSiteImages";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, RotateCcw } from "lucide-react";

import heroResearch from "@/assets/hero-research.png";
import heroTraining from "@/assets/hero-training.png";
import heroClinical from "@/assets/hero-clinical.png";
import heroSoftware from "@/assets/hero-software.png";
import heroEditorial from "@/assets/hero-editorial.png";

const TEN_YEARS = 60 * 60 * 24 * 365 * 10;

export const IMAGE_SLOTS: { key: string; label: string; description: string; fallback: string }[] = [
  { key: "hero.research", label: "Carrossel — Investigação", description: "Recomendado: 1920x800 px", fallback: heroResearch },
  { key: "hero.training", label: "Carrossel — Formação", description: "Recomendado: 1920x800 px", fallback: heroTraining },
  { key: "hero.clinical", label: "Carrossel — Clínica", description: "Recomendado: 1920x800 px", fallback: heroClinical },
  { key: "hero.digital", label: "Carrossel — Digital", description: "Recomendado: 1920x800 px", fallback: heroSoftware },
  { key: "hero.editorial", label: "Carrossel — Acendalha", description: "Recomendado: 1920x800 px", fallback: heroEditorial },
  { key: "team.osvaldo.photo", label: "Fotografia — Osvaldo Santos", description: "Recomendado: quadrada, 600x600 px", fallback: "/lovable-uploads/383f7e0f-7e49-44bd-9e3c-2035355fd892.png" },
];

const ImageManager = () => {
  const { images, reloadImages } = useSiteImages();
  const { toast } = useToast();
  const [busy, setBusy] = useState<string | null>(null);

  const upload = async (key: string, file: File) => {
    if (!file.type.startsWith("image/")) {
      toast({ title: "Ficheiro inválido", description: "Selecione uma imagem.", variant: "destructive" });
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      toast({ title: "Imagem demasiado grande", description: "Máximo 8 MB.", variant: "destructive" });
      return;
    }
    setBusy(key);
    const ext = file.name.split(".").pop() || "jpg";
    const path = `${key.replace(/\./g, "-")}-${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage.from("site-images").upload(path, file, {
      cacheControl: "3600",
      upsert: true,
    });
    if (uploadError) {
      setBusy(null);
      toast({ title: "Erro no carregamento", description: uploadError.message, variant: "destructive" });
      return;
    }

    const { data: signed, error: signError } = await supabase.storage
      .from("site-images")
      .createSignedUrl(path, TEN_YEARS);
    if (signError || !signed) {
      setBusy(null);
      toast({ title: "Erro", description: signError?.message ?? "Não foi possível gerar o endereço.", variant: "destructive" });
      return;
    }

    const { error: dbError } = await supabase
      .from("site_images")
      .upsert({ key, url: signed.signedUrl }, { onConflict: "key" });
    setBusy(null);
    if (dbError) {
      toast({ title: "Erro ao guardar", description: dbError.message, variant: "destructive" });
      return;
    }
    await reloadImages();
    toast({ title: "Imagem atualizada", description: "Já está visível no site." });
  };

  const reset = async (key: string) => {
    setBusy(key);
    const { error } = await supabase.from("site_images").delete().eq("key", key);
    setBusy(null);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    await reloadImages();
    toast({ title: "Imagem reposta", description: "Voltou à imagem original." });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {IMAGE_SLOTS.map((slot) => (
        <Card key={slot.key}>
          <CardHeader>
            <CardTitle className="text-lg">{slot.label}</CardTitle>
            <CardDescription>{slot.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <img
              src={images[slot.key] || slot.fallback}
              alt={slot.label}
              className="w-full h-40 object-cover rounded-md border"
            />
            <div className="flex flex-wrap gap-2">
              <Button asChild size="sm" variant="outline" disabled={busy === slot.key}>
                <label className="cursor-pointer">
                  <Upload className="mr-2 h-4 w-4" />
                  {busy === slot.key ? "A carregar..." : "Substituir imagem"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) upload(slot.key, file);
                      e.target.value = "";
                    }}
                  />
                </label>
              </Button>
              {images[slot.key] && (
                <Button size="sm" variant="ghost" onClick={() => reset(slot.key)} disabled={busy === slot.key}>
                  <RotateCcw className="mr-2 h-4 w-4" /> Repor original
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImageManager;
