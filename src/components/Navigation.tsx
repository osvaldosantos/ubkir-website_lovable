import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.team"), path: "/team" },
    { name: t("nav.contacts"), path: "/contacts" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-primary font-bold text-xl">UBKIR</div>
            <div className="hidden sm:block text-sm text-muted-foreground">
              Unbreakable Idea Research
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-1"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </Button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-popover border border-border rounded-md shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors ${
                      language === 'en' ? 'bg-accent text-accent-foreground' : 'text-foreground'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('pt');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors ${
                      language === 'pt' ? 'bg-accent text-accent-foreground' : 'text-foreground'
                    }`}
                  >
                    Português
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              >
                <Globe size={16} />
              </Button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-popover border border-border rounded-md shadow-lg z-50">
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors ${
                      language === 'en' ? 'bg-accent text-accent-foreground' : 'text-foreground'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('pt');
                      setIsLanguageMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors ${
                      language === 'pt' ? 'bg-accent text-accent-foreground' : 'text-foreground'
                    }`}
                  >
                    Português
                  </button>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary bg-accent" : "text-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;