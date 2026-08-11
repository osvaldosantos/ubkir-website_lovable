import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { BASE_URL, PAGES, langFromPathname } from "@/lib/routes";

const ORG_ID = `${BASE_URL}/#organization`;

const ORG_DESCRIPTION: Record<"en" | "pt", string> = {
  en: PAGES.home.meta.en.description,
  pt: PAGES.home.meta.pt.description,
};

export const OrganizationSchema = () => {
  const { pathname } = useLocation();
  const lang = langFromPathname(pathname);

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "UBKIR",
    alternateName: "Unbreakable Idea Research",
    url: `${BASE_URL}/`,
    logo: `${BASE_URL}/favicon.png`,
    description: ORG_DESCRIPTION[lang],
    email: "info@ubkir.pt",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@ubkir.pt",
        availableLanguage: ["Portuguese", "English"],
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

const SERVICES: Record<"en" | "pt", { name: string; description: string }[]> = {
  en: [
    {
      name: "Research Activities",
      description:
        "Evidence-based research solutions using advanced methodologies and cutting-edge analytics, including quantitative, qualitative and specialised research.",
    },
    {
      name: "Training Programs",
      description:
        "Professional development programs designed to enhance skills and knowledge in healthcare and research.",
    },
    {
      name: "Clinical Services",
      description:
        "Evidence-based psychological and clinical services for individuals and couples.",
    },
    {
      name: "Digital Development",
      description:
        "Health-related software and digital solutions to enhance healthcare delivery and research capabilities.",
    },
    {
      name: "Acendalha Publishing",
      description:
        "Editorial services for scientific publications and science-fiction literature.",
    },
  ],
  pt: [
    {
      name: "Atividades de Investigação",
      description:
        "Soluções de investigação baseadas em evidência utilizando metodologias avançadas e análises de ponta, incluindo investigação quantitativa, qualitativa e especializada.",
    },
    {
      name: "Programas de Formação",
      description:
        "Programas de desenvolvimento profissional para melhorar competências e conhecimentos em cuidados de saúde e investigação.",
    },
    {
      name: "Serviços Clínicos",
      description:
        "Serviços psicológicos e clínicos baseados em evidência para indivíduos e casais.",
    },
    {
      name: "Desenvolvimento Digital",
      description:
        "Software relacionado com saúde e soluções digitais para melhorar a prestação de cuidados de saúde e capacidades de investigação.",
    },
    {
      name: "Publicação Acendalha",
      description:
        "Serviços editoriais para publicações científicas e literatura de ficção científica.",
    },
  ],
};

export const ServicesSchema = () => {
  const { pathname } = useLocation();
  const lang = langFromPathname(pathname);
  const pageUrl = `${BASE_URL}${PAGES.services.paths[lang]}`;

  const data = SERVICES[lang].map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    inLanguage: lang === "pt" ? "pt-PT" : "en",
    url: pageUrl,
    provider: { "@id": ORG_ID },
  }));

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};