export type Lang = "en" | "pt";

export type PageKey = "home" | "about" | "services" | "team" | "contacts";

interface PageDef {
  paths: Record<Lang, string>;
  meta: Record<Lang, { title: string; description: string }>;
}

export const BASE_URL = "https://www.ubkir.pt";

export const PAGES: Record<PageKey, PageDef> = {
  home: {
    paths: { en: "/", pt: "/pt/" },
    meta: {
      en: {
        title: "UBKIR | Applied Research, Training & Digital Health",
        description:
          "UBKIR provides quantitative, qualitative and mixed-methods research, training, clinical psychology, digital health and scientific publishing services.",
      },
      pt: {
        title: "UBKIR | Investigação Aplicada, Formação e Saúde Digital",
        description:
          "A UBKIR realiza investigação quantitativa, qualitativa e mista, formação, psicologia clínica, soluções digitais em saúde e edição científica.",
      },
    },
  },
  about: {
    paths: { en: "/about", pt: "/pt/sobre" },
    meta: {
      en: {
        title: "About UBKIR | Research, Health & Innovation in Portugal",
        description:
          "Learn how UBKIR combines research, psychology, health, training and digital expertise to support evidence-informed decisions and practical solutions.",
      },
      pt: {
        title: "Sobre a UBKIR | Investigação, Saúde e Inovação em Portugal",
        description:
          "Saiba como a UBKIR articula investigação, psicologia, saúde, formação e competências digitais para apoiar decisões informadas e soluções práticas.",
      },
    },
  },
  services: {
    paths: { en: "/services", pt: "/pt/servicos" },
    meta: {
      en: {
        title: "UBKIR Services | Research, Training, Clinical & Digital",
        description:
          "Explore UBKIR services in research, training, clinical psychology, digital solutions, data analysis and scientific and editorial support.",
      },
      pt: {
        title: "Serviços UBKIR | Investigação, Formação, Clínica e Digital",
        description:
          "Conheça os serviços da UBKIR em investigação, formação, psicologia clínica, soluções digitais, análise de dados e apoio científico e editorial.",
      },
    },
  },
  team: {
    paths: { en: "/team", pt: "/pt/equipa" },
    meta: {
      en: {
        title: "UBKIR Team | Research, Psychology & Digital Expertise",
        description:
          "Meet the UBKIR team and its expertise in research, psychology, public health, training, data analysis, digital development and scientific communication.",
      },
      pt: {
        title: "Equipa UBKIR | Investigação, Psicologia e Digital",
        description:
          "Conheça a equipa UBKIR e a sua experiência em investigação, psicologia, saúde pública, formação, análise de dados e soluções digitais.",
      },
    },
  },
  contacts: {
    paths: { en: "/contacts", pt: "/pt/contactos" },
    meta: {
      en: {
        title: "Contact UBKIR | Research & Health Innovation",
        description:
          "Contact UBKIR to discuss research, training, clinical psychology, digital solutions or scientific and editorial projects in Portugal.",
      },
      pt: {
        title: "Contactos UBKIR | Investigação e Inovação em Saúde",
        description:
          "Contacte a UBKIR para falar sobre investigação, formação, psicologia clínica, soluções digitais ou projetos científicos e editoriais em Portugal.",
      },
    },
  },
};

export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

export function langFromPathname(pathname: string): Lang {
  return pathname === "/pt" || pathname.startsWith("/pt/") ? "pt" : "en";
}

export function pageKeyFromPathname(pathname: string): PageKey | null {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  for (const key of PAGE_KEYS) {
    const { en, pt } = PAGES[key].paths;
    const enN = en.length > 1 && en.endsWith("/") ? en.slice(0, -1) : en;
    const ptN = pt.length > 1 && pt.endsWith("/") ? pt.slice(0, -1) : pt;
    if (normalized === enN || normalized === ptN) return key;
  }
  return null;
}

export function pathFor(key: PageKey, lang: Lang) {
  return PAGES[key].paths[lang];
}
