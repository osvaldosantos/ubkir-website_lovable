import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import AdminLogin from "@/components/admin/AdminLogin";
import TextManager from "@/components/admin/TextManager";
import ImageManager from "@/components/admin/ImageManager";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { LogOut, ExternalLink, ShieldAlert } from "lucide-react";

const Admin = () => {
  const { session, isAdmin, loading } = useAdminAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">A carregar...</div>;
  }

  if (!session) return <AdminLogin />;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-4">
          <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertDescription>
              Esta conta não tem permissões de administração.
            </AlertDescription>
          </Alert>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>
            <LogOut className="mr-2 h-4 w-4" /> Terminar sessão
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="border-b bg-background sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold">Gestão de conteúdos</h1>
            <p className="text-sm text-muted-foreground">{session.user.email}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ExternalLink className="mr-2 h-4 w-4" /> Ver site
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => supabase.auth.signOut()}>
              <LogOut className="mr-2 h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="texts">
          <TabsList className="mb-6">
            <TabsTrigger value="texts">Textos (PT / EN)</TabsTrigger>
            <TabsTrigger value="images">Imagens</TabsTrigger>
          </TabsList>
          <TabsContent value="texts">
            <TextManager />
          </TabsContent>
          <TabsContent value="images">
            <ImageManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
