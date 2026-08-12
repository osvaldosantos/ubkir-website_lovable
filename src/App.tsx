import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SiteImagesProvider } from "./hooks/useSiteImages";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Admin from "./pages/Admin";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";
import LanguageRouteSync from "./components/LanguageRouteSync";

const queryClient = new QueryClient();

const SiteLayout = () => (
  <div className="min-h-screen flex flex-col">
    <LanguageRouteSync />
    <Navigation />
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* Portuguese routes */}
        <Route path="/pt" element={<Home />} />
        <Route path="/pt/" element={<Home />} />
        <Route path="/pt/sobre" element={<About />} />
        <Route path="/pt/servicos" element={<Services />} />
        <Route path="/pt/equipa" element={<Team />} />
        <Route path="/pt/contactos" element={<Contacts />} />
        <Route path="/unsubscribe" element={<Unsubscribe />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <SiteImagesProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<SiteLayout />} />
            </Routes>
          </BrowserRouter>
        </SiteImagesProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
