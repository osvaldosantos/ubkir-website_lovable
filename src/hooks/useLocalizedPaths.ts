import { useLocation } from "react-router-dom";
import { PAGES, PageKey, langFromPathname, pageKeyFromPathname, pathFor } from "@/lib/routes";

/** Language-aware helpers for internal links and the language switcher. */
export function useLocalizedPaths() {
  const { pathname, search } = useLocation();
  const lang = langFromPathname(pathname);
  const currentPage = pageKeyFromPathname(pathname);

  const localePath = (key: PageKey) => pathFor(key, lang);

  const switchTo = (target: "en" | "pt") => {
    if (!currentPage) return target === "pt" ? PAGES.home.paths.pt : PAGES.home.paths.en;
    return `${pathFor(currentPage, target)}${search}`;
  };

  return { lang, currentPage, localePath, switchTo };
}
