import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { BASE_URL, PAGES, PageKey, langFromPathname } from "@/lib/routes";
import { OrganizationSchema } from "./StructuredData";

interface SeoProps {
  page: PageKey;
}

const Seo = ({ page }: SeoProps) => {
  const { pathname } = useLocation();
  const lang = langFromPathname(pathname);
  const def = PAGES[page];
  const { title, description } = def.meta[lang];

  const enUrl = `${BASE_URL}${def.paths.en}`;
  const ptUrl = `${BASE_URL}${def.paths.pt}`;
  const selfUrl = lang === "pt" ? ptUrl : enUrl;

  return (
    <>
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={selfUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="pt" href={ptUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={selfUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === "pt" ? "pt_PT" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
    <OrganizationSchema />
    </>
  );
};

export default Seo;
