import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { langFromPathname } from "@/lib/routes";

/** Keeps the active language in sync with the URL language prefix. */
const LanguageRouteSync = () => {
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const routeLang = langFromPathname(pathname);
    if (routeLang !== language) setLanguage(routeLang);
  }, [pathname, language, setLanguage]);

  return null;
};

export default LanguageRouteSync;
