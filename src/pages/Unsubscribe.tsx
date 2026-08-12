import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "valid" | "invalid" | "used" | "done" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    const validate = async () => {
      try {
        const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data?.valid) setState("valid");
        else if (data?.used) setState("used");
        else setState("invalid");
      } catch {
        setState("error");
      }
    };
    validate();
  }, [token]);

  const confirm = async () => {
    setSubmitting(true);
    const { error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    setSubmitting(false);
    setState(error ? "error" : "done");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Subscrições de email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {state === "loading" && (
            <p className="text-muted-foreground">A validar o pedido…</p>
          )}
          {state === "valid" && (
            <>
              <p className="text-muted-foreground">
                Confirme que pretende deixar de receber emails da UBKIR.
              </p>
              <Button onClick={confirm} disabled={submitting} className="w-full">
                {submitting ? "A processar…" : "Confirmar cancelamento"}
              </Button>
            </>
          )}
          {state === "used" && (
            <p className="text-muted-foreground">
              Este endereço já tinha sido removido. Não receberá mais emails.
            </p>
          )}
          {state === "done" && (
            <p className="text-muted-foreground">
              Cancelamento concluído. Não receberá mais emails da UBKIR.
            </p>
          )}
          {state === "invalid" && (
            <p className="text-muted-foreground">
              Link inválido ou expirado. Contacte-nos em info@ubkir.pt.
            </p>
          )}
          {state === "error" && (
            <p className="text-muted-foreground">
              Ocorreu um erro. Tente novamente mais tarde.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Unsubscribe;