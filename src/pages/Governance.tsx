import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollText, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedPaths } from "@/hooks/useLocalizedPaths";
import Seo from "@/components/Seo";

const COPY = {
  en: {
    title: "Governance & Policies",
    intro:
      "UBKIR is committed to responsible research, ethical practice, equality, transparency and proportionate governance. This area provides public access to the institutional policies and plans that guide our work with researchers, clients, trainees, public bodies and international partners.",
    activeTitle: "Current policies",
    gepTitle: "Gender Equality, Diversity & Inclusion Plan (GEP) 2026–2029",
    gepDesc:
      "Public institutional policy document setting out UBKIR's commitments on equality, diversity and inclusion, the gender dimension in research and training, and prevention of discrimination and harassment.",
    gepMeta: "Version 1.0 · Effective 31 August 2026 – 31 December 2029",
    read: "Read the plan",
    active: "In force",
    futureTitle: "Further policies",
    future:
      "Additional policies will be published here as they are adopted (for example ethics and research integrity, training quality, data protection and research data governance, open science and sustainability). Only documents listed above are currently in force.",
  },
  pt: {
    title: "Governação e Políticas",
    intro:
      "A UBKIR está comprometida com investigação responsável, prática ética, igualdade, transparência e uma governação proporcional à sua dimensão. Esta área disponibiliza publicamente as políticas e planos institucionais que orientam o nosso trabalho com investigadores, clientes, formandos, entidades públicas e parceiros internacionais.",
    activeTitle: "Políticas em vigor",
    gepTitle: "Plano para a Igualdade de Género, Diversidade e Inclusão (GEP) 2026–2029",
    gepDesc:
      "Documento público de política institucional que define os compromissos da UBKIR em matéria de igualdade, diversidade e inclusão, dimensão de género na investigação e formação, e prevenção da discriminação e do assédio.",
    gepMeta: "Versão 1.0 · Em vigor de 31 de agosto de 2026 a 31 de dezembro de 2029",
    read: "Ler o plano",
    active: "Em vigor",
    futureTitle: "Outras políticas",
    future:
      "Serão publicadas aqui outras políticas à medida que forem adotadas (por exemplo, ética e integridade na investigação, qualidade da formação, proteção de dados e governação de dados de investigação, ciência aberta e sustentabilidade). Apenas os documentos acima listados se encontram atualmente em vigor.",
  },
} as const;

const Governance = () => {
  const { language } = useLanguage();
  const { localePath } = useLocalizedPaths();
  const c = COPY[language];

  return (
    <div className="min-h-screen py-20">
      <Seo page="governance" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="h-9 w-9 text-primary" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{c.title}</h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">{c.intro}</p>
        </header>

        <section className="mb-12" aria-labelledby="active-policies">
          <h2 id="active-policies" className="text-2xl font-semibold text-foreground mb-6">
            {c.activeTitle}
          </h2>
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <ScrollText className="h-7 w-7 text-primary shrink-0" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-foreground">{c.gepTitle}</h3>
                </div>
                <Badge variant="secondary">{c.active}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">{c.gepDesc}</p>
              <p className="text-sm text-muted-foreground mb-6">{c.gepMeta}</p>
              <Link
                to={localePath("genderEqualityPlan")}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                {c.read}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="future-policies">
          <h2 id="future-policies" className="text-xl font-semibold text-muted-foreground mb-3">
            {c.futureTitle}
          </h2>
          <p className="text-muted-foreground/80 leading-relaxed">{c.future}</p>
        </section>
      </div>
    </div>
  );
};

export default Governance;
