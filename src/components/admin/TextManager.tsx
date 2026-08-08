import { useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { translations, useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Save, Search, RotateCcw } from "lucide-react";

const SECTION_LABELS: Record<string, string> = {
  nav: "Menu de navegação",
  home: "Página inicial",
  about: "Sobre nós",
  services: "Serviços",
  team: "Equipa",
  contacts: "Contactos",
  contact: "Contactos",
  footer: "Rodapé",
  common: "Comum",
};

const TextManager = () => {
  const { overrides, reloadContent } = useLanguage();
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [drafts, setDrafts] = useState<Record<string, { pt?: string; en?: string }>>({});
  const [saving, setSaving] = useState<string | null>(null);

  const keys = useMemo(() => {
    const all = new Set([...Object.keys(translations.en), ...Object.keys(translations.pt)]);
    return Array.from(all).sort();
  }, []);

  const value = (key: string, lang: "pt" | "en") =>
    drafts[key]?.[lang] ?? overrides[lang]?.[key] ?? translations[lang][key] ?? "";

  const isEdited = (key: string) => !!overrides.pt?.[key] || !!overrides.en?.[key];

  const setDraft = (key: string, lang: "pt" | "en", val: string) =>
    setDrafts((d) => ({ ...d, [key]: { ...d[key], [lang]: val } }));

  const save = async (key: string) => {
    setSaving(key);
    const rows = (["pt", "en"] as const).map((lang) => ({
      key,
      lang,
      value: value(key, lang),
    }));
    const { error } = await supabase.from("site_texts").upsert(rows, { onConflict: "key,lang" });
    setSaving(null);
    if (error) {
      toast({ title: "Erro ao guardar", description: error.message, variant: "destructive" });
      return;
    }
    setDrafts((d) => {
      const next = { ...d };
      delete next[key];
      return next;
    });
    await reloadContent();
    toast({ title: "Texto guardado", description: "As alterações já estão visíveis no site." });
  };

  const reset = async (key: string) => {
    const { error } = await supabase.from("site_texts").delete().eq("key", key);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
      return;
    }
    setDrafts((d) => {
      const next = { ...d };
      delete next[key];
      return next;
    });
    await reloadContent();
    toast({ title: "Texto reposto", description: "Voltou ao conteúdo original." });
  };

  const filtered = keys.filter((k) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      k.toLowerCase().includes(q) ||
      value(k, "pt").toLowerCase().includes(q) ||
      value(k, "en").toLowerCase().includes(q)
    );
  });

  const grouped = filtered.reduce<Record<string, string[]>>((acc, key) => {
    const section = key.split(".")[0];
    (acc[section] ||= []).push(key);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-9"
          placeholder="Procurar texto ou secção..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Accordion type="multiple" className="space-y-3">
        {Object.entries(grouped).map(([section, sectionKeys]) => (
          <AccordionItem key={section} value={section} className="border rounded-lg px-4">
            <AccordionTrigger className="hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="font-semibold">{SECTION_LABELS[section] || section}</span>
                <Badge variant="secondary">{sectionKeys.length}</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pb-4">
              {sectionKeys.map((key) => {
                const long = value(key, "pt").length > 90 || value(key, "en").length > 90;
                const Field = long ? Textarea : Input;
                return (
                  <Card key={key}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                        {key}
                        {isEdited(key) && <Badge variant="outline">editado</Badge>}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label className="text-xs">Português</Label>
                          <Field
                            value={value(key, "pt")}
                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                              setDraft(key, "pt", e.target.value)
                            }
                            rows={long ? 4 : undefined}
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Inglês</Label>
                          <Field
                            value={value(key, "en")}
                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                              setDraft(key, "en", e.target.value)
                            }
                            rows={long ? 4 : undefined}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => save(key)} disabled={saving === key}>
                          <Save className="mr-2 h-4 w-4" />
                          {saving === key ? "A guardar..." : "Guardar"}
                        </Button>
                        {isEdited(key) && (
                          <Button size="sm" variant="outline" onClick={() => reset(key)}>
                            <RotateCcw className="mr-2 h-4 w-4" /> Repor original
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TextManager;
