import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocalizedPaths } from "@/hooks/useLocalizedPaths";
import Seo from "@/components/Seo";

interface Section {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface Copy {
  breadcrumb: string;
  title: string;
  org: string;
  metaLabels: { status: string; version: string; period: string; approvedBy: string; date: string };
  metaValues: { status: string; version: string; period: string; approvedBy: string; date: string };
  tocTitle: string;
  sections: Section[];
  baseline: {
    id: string;
    heading: string;
    intro: string[];
    columns: string[];
    rows: { group: string; women: string; men: string; total: string; note: string }[];
    after: string[];
  };
  action: {
    id: string;
    heading: string;
    columns: string[];
    rows: { id: string; action: string; indicator: string; timing: string; responsible: string }[];
  };
  checklist: {
    id: string;
    heading: string;
    columns: string[];
    rows: { type: string; requirement: string; response: string }[];
  };
  approval: { id: string; heading: string; statement: string; name: string; role: string; org: string; date: string };
  references: { id: string; heading: string; items: { label: string; url: string }[] };
}

export const EN: Copy = {
  breadcrumb: "Governance & Policies",
  title: "Gender Equality, Diversity & Inclusion Plan (GEP) 2026–2029",
  org: "Unbreakable Idea Research, Lda. (UBKIR)",
  metaLabels: {
    status: "Document status",
    version: "Version",
    period: "Effective period",
    approvedBy: "Approved by",
    date: "Approval / effective date",
  },
  metaValues: {
    status: "Public institutional policy document",
    version: "1.0",
    period: "31 August 2026 – 31 December 2029",
    approvedBy: "Osvaldo Santos, Managing Partner",
    date: "31 August 2026",
  },
  tocTitle: "Contents",
  sections: [
    {
      id: "purpose",
      heading: "1. Purpose and framing",
      paragraphs: [
        "UBKIR voluntarily adopts this Plan and structures it around the four process requirements of a Horizon Europe Gender Equality Plan (public document, dedicated resources, data collection and monitoring, and training) and the five thematic areas recommended by the European Commission.",
        "As a private for-profit small and medium-sized enterprise, UBKIR is not generally within the entity categories to which the Horizon Europe GEP eligibility criterion automatically applies. UBKIR nevertheless voluntarily adopts the same governance standard as a matter of institutional practice. This document does not constitute or imply certification, assessment or endorsement by the European Commission or any other body.",
      ],
    },
    {
      id: "commitment",
      heading: "2. Management commitment",
      paragraphs: [
        "UBKIR is committed to a culture in which people are treated with dignity, fairness and respect, and have equal opportunity to contribute, develop and lead.",
        "Recruitment, project participation, allocation of responsibilities and development opportunities are guided by technical and scientific competence, interpersonal capability, integrity and the requirements of the role — not by gender or by irrelevant or protected personal characteristics.",
        "UBKIR does not use rigid gender quotas. It seeks instead to prevent bias, widen access to opportunities, and consider gender balance whenever there is a realistic choice among suitably qualified people.",
        "The Managing Partner approves this Plan and is accountable for its implementation, monitoring, associated training and any corrective action.",
      ],
    },
    {
      id: "scope",
      heading: "3. Scope and principles",
      paragraphs: [
        "This Plan applies proportionately to paid employees and, where relevant, to recurring project-based collaborators, researchers, consultants, trainers, interns and trainees, and other people working under UBKIR's direction or within UBKIR-led activities.",
      ],
      bullets: [
        "Equal opportunity and non-discrimination.",
        "Competence and fairness in all decisions.",
        "Proportionality to a microenterprise.",
        "Privacy and data minimisation.",
        "Intersectional awareness.",
        "Evidence and continuous improvement.",
      ],
    },
    {
      id: "context",
      heading: "4. Organisational context",
      paragraphs: [
        "UBKIR is a small Portuguese company active in research, consultancy, training and innovation. Work is project-based, collaborative and predominantly research-oriented.",
        "Current work is fully remote, with substantial schedule flexibility, subject to agreed workload, deadlines, necessary meetings, coordination availability and contractual or project obligations. This model supports work–life balance, but requires attention to workload, availability expectations and equal access to opportunities.",
      ],
    },
    {
      id: "governance",
      heading: "6. Governance and resources",
      paragraphs: [
        "The Managing Partner is designated GEP Responsible unless another person is formally appointed.",
        "GEP implementation, annual monitoring and awareness activities count as legitimate company work and receive the necessary working time. External specialist support may be used where specific expertise or independence is needed. Project leads share responsibility for implementation within their projects.",
      ],
    },
    {
      id: "monitoring-annual",
      heading: "7. Annual monitoring",
      paragraphs: ["At least annually, UBKIR reviews:"],
      bullets: [
        "Sex/gender composition of paid staff and recurring collaborators.",
        "Participation in project responsibility and training opportunities.",
        "Recruitment processes and outcomes.",
        "Use of work–life flexibility.",
        "Completion of GEP awareness and training activities.",
        "Gender and diversity screening in research and innovation projects.",
        "Any equality or harassment concerns raised.",
      ],
    },
    {
      id: "worklife",
      heading: "8. Work–life balance and organisational culture",
      paragraphs: [
        "The default model is remote and highly flexible. People organise their working time with substantial autonomy while meeting agreed workload, deadlines, necessary meetings, coordination needs and contractual obligations.",
        "Flexibility applies consistently, without gender assumptions about care or family roles. Reasonable needs related to parental or family responsibilities, health or disability are considered in good faith, subject to project and legal feasibility.",
        "UBKIR avoids unnecessary expectations of constant availability. Performance is assessed primarily on quality, reliability, outputs, collaboration and agreed responsibilities — not on visibility or time online.",
      ],
    },
    {
      id: "leadership",
      heading: "9. Leadership, decision-making and opportunities",
      paragraphs: [
        "UBKIR seeks equal access to responsibility, visibility, representation and leadership. Gender balance is considered in project teams, coordination roles, speakers and trainers, and external representation whenever there is a realistic choice among suitably qualified people.",
        "No rigid quotas are applied. Competence — technical, scientific and interpersonal — integrity, availability and project fit remain decisive. Persistent imbalances are reviewed to determine whether they arise from the company's small size and talent pool or from organisational practice.",
      ],
    },
    {
      id: "recruitment",
      heading: "10. Recruitment, selection and development",
      bullets: [
        "Clear, inclusive and non-discriminatory job and project descriptions.",
        "Avoidance of unnecessary exclusionary requirements.",
        "Selection criteria defined in advance and focused on competence, experience, interpersonal capability, integrity and role fit.",
        "No disadvantage on grounds of gender, pregnancy, parental or family responsibilities, disability, nationality or origin, age, sexual orientation, gender identity or expression, or any other protected characteristic.",
        "Broadening of candidate networks where feasible.",
        "Equitable access to development and to project responsibility.",
      ],
    },
    {
      id: "research",
      heading: "11. Gender and diversity in research, innovation and training",
      paragraphs: [
        "For every new research and innovation project, UBKIR explicitly assesses whether sex, gender and other diversity dimensions are scientifically relevant to the research question, methods, sampling, analysis, interpretation, dissemination or impact. Both \u201crelevant\u201d and \u201cnot relevant\u201d are valid outcomes; what is required is a reasoned assessment.",
        "Where relevant, these dimensions are incorporated methodologically. Sex and gender terminology is used correctly where the concepts are distinct. Participant-facing materials avoid unnecessary stereotypes and binary assumptions, and findings are not generalised beyond the populations represented.",
        "Training content is reviewed for inclusive language, representation, stereotypes and reasonable accessibility needs.",
      ],
    },
    {
      id: "harassment",
      heading: "12. Discrimination, gender-based violence and sexual harassment",
      paragraphs: [
        "UBKIR maintains zero tolerance for discrimination, harassment, sexual harassment, gender-based violence, retaliation and degrading or intimidating conduct.",
        "Concerns may be raised confidentially through UBKIR's published contact channels, clearly marked confidential and addressed to the Managing Partner in the capacity of GEP Responsible. Where the matter concerns the Managing Partner, or where independence is reasonably required, UBKIR appoints an appropriate independent external professional to receive and/or handle the matter.",
        "Reporting in good faith will not in itself lead to retaliation. Responses are prompt, impartial, proportionate and confidentiality-aware, subject to applicable law and procedural fairness.",
      ],
    },
    {
      id: "training",
      heading: "13. Training and awareness",
      paragraphs: [
        "At least one relevant awareness or training activity is carried out each year, covering gender equality and inclusion, inclusive practice, unconscious bias, respectful workplace behaviour and harassment prevention. Activities may be internal, external, or based on appropriate European or national resources.",
        "New paid employees and recurring collaborators are informed about this Plan and the expected standards during onboarding or project integration.",
      ],
    },
    {
      id: "review",
      heading: "16. Monitoring and review of the Plan",
      paragraphs: [
        "Implementation is reviewed at least annually, considering action completion, monitoring indicators, staffing and project changes, feedback received, concerns raised, and relevant changes in European or Portuguese requirements. Corrective actions are documented internally.",
        "A full review will be completed by 31 December 2029, with an earlier review if significant organisational change creates new requirements.",
      ],
    },
  ],
  baseline: {
    id: "baseline",
    heading: "5. Baseline as at 31 August 2026",
    intro: [],
    columns: ["Group", "Women", "Men", "Total", "Note"],
    rows: [
      {
        group: "Paid employees",
        women: "0",
        men: "2",
        total: "2",
        note: "Currently paid employees of UBKIR.",
      },
      {
        group: "Recurring project-based research collaborators",
        women: "2",
        men: "2",
        total: "4",
        note: "Participate and are remunerated only when involved in specific projects; no regular employment relationship.",
      },
      {
        group: "Current extended professional community",
        women: "2",
        men: "4",
        total: "6",
        note: "Contextual monitoring snapshot; project participation varies over time.",
      },
    ],
    after: [
      "With numbers this small, one person joining or leaving substantially changes percentages. The Plan therefore focuses on fair processes and trends rather than fixed quotas.",
      "For privacy reasons, UBKIR does not publish data on nationality, ethnicity, disability, sexual orientation, gender identity or other potentially sensitive characteristics in small groups. Diversity within the team is acknowledged only in general terms. Public reporting always protects confidentiality; a concise progress note is published annually when it can be done safely.",
    ],
  },
  action: {
    id: "action-plan",
    heading: "14. Action plan 2026–2029",
    columns: ["ID", "Action", "Indicator & target", "Timing", "Responsible"],
    rows: [
      {
        id: "A1",
        action: "Publish, approve and actively communicate the GEP; keep a GEP Responsible designated.",
        indicator: "Public accessibility and responsibility continuously assigned.",
        timing: "2026 / ongoing",
        responsible: "Managing Partner / GEP Responsible",
      },
      {
        id: "A2",
        action: "Annual sex/gender-disaggregated review, protecting small-group privacy.",
        indicator: "1 internal review per year and 1 public progress note per year, when it can be done safely.",
        timing: "Annual",
        responsible: "GEP Responsible",
      },
      {
        id: "A3",
        action: "Inclusive and non-discriminatory recruitment language and competence-based selection.",
        indicator: "100% of new recruitment processes reviewed with the GEP checklist.",
        timing: "Ongoing",
        responsible: "Recruitment responsible / Managing Partner",
      },
      {
        id: "A4",
        action: "Promote balanced project participation and leadership, without rigid quotas or lowering competence requirements.",
        indicator: "Gender balance considered and documented in team formation; equal access monitored.",
        timing: "Ongoing",
        responsible: "Project leads",
      },
      {
        id: "A5",
        action: "Maintain remote work and high schedule flexibility while meeting agreed workload, deadlines, meetings and project obligations.",
        indicator: "Flexibility available to 100% of eligible employees and collaborators; issues reviewed annually.",
        timing: "Ongoing",
        responsible: "Managing Partner / Project leads",
      },
      {
        id: "A6",
        action: "At least one annual awareness or training action.",
        indicator: "≥1 action per year, made available to all paid employees and recurring collaborators.",
        timing: "Annual",
        responsible: "GEP Responsible",
      },
      {
        id: "A7",
        action: "Assess sex, gender and diversity relevance in each new research and innovation project.",
        indicator: "100% of new R&I projects with a documented relevance assessment at project start.",
        timing: "From 2026",
        responsible: "Project lead",
      },
      {
        id: "A8",
        action: "Review formal training and communication materials for inclusive language, stereotypes and reasonable accessibility.",
        indicator: "100% of new formal training programmes and materials proportionately reviewed.",
        timing: "From 2026",
        responsible: "Training / project lead",
      },
      {
        id: "A9",
        action: "Maintain a confidential route for discrimination, harassment and gender-based violence concerns, with independent external handling when management is involved.",
        indicator: "Procedure available and communicated; all concerns received acknowledged and handled promptly and confidentially.",
        timing: "2026 / ongoing",
        responsible: "Managing Partner / external independent contact when needed",
      },
      {
        id: "A10",
        action: "Annual implementation review and end-of-cycle evaluation.",
        indicator: "Annual review conducted; full evaluation completed by 31 December 2029.",
        timing: "Annual / 2029",
        responsible: "Managing Partner / GEP Responsible",
      },
    ],
  },
  checklist: {
    id: "horizon-europe",
    heading: "15. Horizon Europe alignment checklist",
    columns: ["Type", "Requirement", "UBKIR response"],
    rows: [
      {
        type: "Mandatory",
        requirement: "Public document",
        response: "Formal, management-approved public GEP on the UBKIR website and communicated internally.",
      },
      {
        type: "Mandatory",
        requirement: "Dedicated resources",
        response: "Managing Partner designated GEP Responsible; implementation, monitoring and training recognised as working time; external support where appropriate.",
      },
      {
        type: "Mandatory",
        requirement: "Data collection & monitoring",
        response: "Annual sex/gender-disaggregated monitoring with privacy-safe public reporting.",
      },
      {
        type: "Mandatory",
        requirement: "Training",
        response: "At least one annual equality, inclusion, unconscious-bias and respectful workplace activity.",
      },
      {
        type: "Recommended",
        requirement: "Work–life balance & organisational culture",
        response: "Remote model and high flexibility, with explicit protections.",
      },
      {
        type: "Recommended",
        requirement: "Gender balance in leadership & decision-making",
        response: "Equal access; gender balance considered without rigid quotas.",
      },
      {
        type: "Recommended",
        requirement: "Gender equality in recruitment & career progression",
        response: "Inclusive language, transparent competence-based criteria, equality of opportunity and monitoring.",
      },
      {
        type: "Recommended",
        requirement: "Gender dimension in research, innovation and training",
        response: "Relevance assessment for new projects and integration when scientifically or pedagogically relevant.",
      },
      {
        type: "Recommended",
        requirement: "Gender-based violence & sexual harassment",
        response: "Zero tolerance, confidential route and independent handling when management is involved.",
      },
    ],
  },
  approval: {
    id: "approval",
    heading: "17. Approval",
    statement:
      "Approved as a public institutional policy of Unbreakable Idea Research, Lda. (UBKIR), effective 31 August 2026.",
    name: "Osvaldo Santos",
    role: "Managing Partner",
    org: "Unbreakable Idea Research, Lda. (UBKIR)",
    date: "31 August 2026",
  },
  references: {
    id: "references",
    heading: "18. References",
    items: [
      {
        label: "European Research Executive Agency — Gender in EU research and innovation",
        url: "https://rea.ec.europa.eu/gender-eu-research-and-innovation_en",
      },
      {
        label: "European Commission — Gender equality in research and innovation",
        url: "https://research-and-innovation.ec.europa.eu/strategy/strategy-research-and-innovation/democracy-and-rights/gender-equality-research-and-innovation_en",
      },
      {
        label: "European Commission — Gender Equality Plans (GEPs): Frequently Asked Questions",
        url: "https://research-and-innovation.ec.europa.eu/document/download/4b3945e6-441c-4f81-ba3a-d50bc1929735_en",
      },
      {
        label: "European Institute for Gender Equality (EIGE) — GEAR tool",
        url: "https://eige.europa.eu/gender-mainstreaming/toolkits/gear",
      },
    ],
  },
};

export const PT: Copy = {
  breadcrumb: "Governação e Políticas",
  title: "Plano para a Igualdade de Género, Diversidade e Inclusão (GEP) 2026–2029",
  org: "Unbreakable Idea Research, Lda. (UBKIR)",
  metaLabels: {
    status: "Estado do documento",
    version: "Versão",
    period: "Período de vigência",
    approvedBy: "Aprovado por",
    date: "Data de aprovação / entrada em vigor",
  },
  metaValues: {
    status: "Documento público de política institucional",
    version: "1.0",
    period: "31 de agosto de 2026 – 31 de dezembro de 2029",
    approvedBy: "Osvaldo Santos, Gerente",
    date: "31 de agosto de 2026",
  },
  tocTitle: "Índice",
  sections: [
    {
      id: "purpose",
      heading: "1. Finalidade e enquadramento",
      paragraphs: [
        "A UBKIR adota voluntariamente este Plano, estruturando-o em torno dos quatro requisitos de processo de um Plano para a Igualdade de Género do Horizonte Europa (documento público, recursos dedicados, recolha de dados e monitorização, e formação) e das cinco áreas temáticas recomendadas pela Comissão Europeia.",
        "Enquanto pequena e média empresa privada com fins lucrativos, a UBKIR não se inclui, em geral, nas categorias de entidades a que se aplica automaticamente o critério de elegibilidade GEP do Horizonte Europa. Ainda assim, adota voluntariamente o mesmo padrão de governação enquanto prática institucional. Este documento não constitui nem implica certificação, avaliação ou aprovação pela Comissão Europeia ou por qualquer outra entidade.",
      ],
    },
    {
      id: "commitment",
      heading: "2. Compromisso da gerência",
      paragraphs: [
        "A UBKIR está comprometida com uma cultura em que as pessoas são tratadas com dignidade, equidade e respeito, e têm igual oportunidade de contribuir, desenvolver-se e liderar.",
        "O recrutamento, a participação em projetos, a atribuição de responsabilidades e as oportunidades de desenvolvimento são orientados pela competência técnica e científica, pela capacidade interpessoal, pela integridade e pelos requisitos da função — e não pelo género ou por características pessoais irrelevantes ou protegidas.",
        "A UBKIR não utiliza quotas rígidas de género. Procura, antes, prevenir enviesamentos, alargar o acesso a oportunidades e considerar o equilíbrio de género sempre que exista uma escolha realista entre pessoas devidamente qualificadas.",
        "O Gerente aprova este Plano e é responsável pela sua implementação, monitorização, formação associada e eventuais ações corretivas.",
      ],
    },
    {
      id: "scope",
      heading: "3. Âmbito e princípios",
      paragraphs: [
        "Este Plano aplica-se, de forma proporcional, aos trabalhadores remunerados e, quando pertinente, a colaboradores recorrentes em regime de projeto, investigadores, consultores, formadores, estagiários e formandos, e outras pessoas que trabalhem sob a direção da UBKIR ou em atividades por esta lideradas.",
      ],
      bullets: [
        "Igualdade de oportunidades e não discriminação.",
        "Competência e equidade em todas as decisões.",
        "Proporcionalidade à dimensão de uma microempresa.",
        "Privacidade e minimização de dados.",
        "Consciência interseccional.",
        "Evidência e melhoria contínua.",
      ],
    },
    {
      id: "context",
      heading: "4. Contexto organizacional",
      paragraphs: [
        "A UBKIR é uma pequena empresa portuguesa que atua em investigação, consultoria, formação e inovação. O trabalho é organizado por projetos, é colaborativo e predominantemente orientado para a investigação.",
        "Atualmente, o trabalho é totalmente remoto, com flexibilidade substancial de horário, sujeita à carga de trabalho acordada, prazos, reuniões necessárias, disponibilidade para coordenação e obrigações contratuais ou de projeto. Este modelo favorece a conciliação entre vida profissional e pessoal, mas exige atenção à carga de trabalho, às expectativas de disponibilidade e à igualdade de acesso a oportunidades.",
      ],
    },
    {
      id: "governance",
      heading: "6. Governação e recursos",
      paragraphs: [
        "O Gerente é designado Responsável pelo GEP, salvo se outra pessoa for formalmente nomeada.",
        "A implementação do GEP, a monitorização anual e as atividades de sensibilização constituem trabalho legítimo da empresa e dispõem do tempo de trabalho necessário. Poderá ser mobilizado apoio externo especializado quando se exija competência específica ou independência. Os responsáveis de projeto partilham a responsabilidade pela implementação nos seus projetos.",
      ],
    },
    {
      id: "monitoring-annual",
      heading: "7. Monitorização anual",
      paragraphs: ["Pelo menos anualmente, a UBKIR analisa:"],
      bullets: [
        "Composição por sexo/género dos trabalhadores remunerados e dos colaboradores recorrentes.",
        "Participação em responsabilidades de projeto e em oportunidades de formação.",
        "Processos e resultados de recrutamento.",
        "Utilização da flexibilidade de conciliação.",
        "Realização de atividades de sensibilização e formação no âmbito do GEP.",
        "Triagem das dimensões de género e diversidade nos projetos de investigação e inovação.",
        "Eventuais preocupações relativas a igualdade ou assédio.",
      ],
    },
    {
      id: "worklife",
      heading: "8. Conciliação e cultura organizacional",
      paragraphs: [
        "O modelo por defeito é remoto e altamente flexível. As pessoas organizam o seu tempo de trabalho com autonomia substancial, cumprindo a carga de trabalho acordada, prazos, reuniões necessárias, necessidades de coordenação e obrigações contratuais.",
        "A flexibilidade aplica-se de forma consistente, sem pressupostos de género quanto a papéis de cuidado ou familiares. Necessidades razoáveis relacionadas com responsabilidades parentais ou familiares, saúde ou deficiência são consideradas de boa-fé, sujeitas à viabilidade do projeto e ao enquadramento legal.",
        "A UBKIR evita expectativas desnecessárias de disponibilidade permanente. O desempenho é avaliado sobretudo pela qualidade, fiabilidade, resultados, colaboração e responsabilidades acordadas — não pela visibilidade ou pelo tempo em linha.",
      ],
    },
    {
      id: "leadership",
      heading: "9. Liderança, decisão e oportunidades",
      paragraphs: [
        "A UBKIR procura assegurar igualdade de acesso a responsabilidade, visibilidade, representação e liderança. O equilíbrio de género é considerado nas equipas de projeto, funções de coordenação, oradores e formadores e na representação externa, sempre que exista uma escolha realista entre pessoas devidamente qualificadas.",
        "Não são aplicadas quotas rígidas. A competência — técnica, científica e interpessoal —, a integridade, a disponibilidade e a adequação ao projeto permanecem decisivas. Desequilíbrios persistentes são analisados para determinar se decorrem da pequena dimensão da empresa e do universo de talento disponível, ou de práticas organizacionais.",
      ],
    },
    {
      id: "recruitment",
      heading: "10. Recrutamento, seleção e desenvolvimento",
      bullets: [
        "Descrições de funções e de projetos claras, inclusivas e não discriminatórias.",
        "Eliminação de requisitos desnecessariamente excludentes.",
        "Critérios de seleção definidos previamente e centrados em competência, experiência, capacidade interpessoal, integridade e adequação à função.",
        "Ausência de prejuízo por motivo de género, gravidez, responsabilidades parentais ou familiares, deficiência, nacionalidade ou origem, idade, orientação sexual, identidade ou expressão de género, ou qualquer outra característica protegida.",
        "Alargamento das redes de candidatos sempre que viável.",
        "Acesso equitativo ao desenvolvimento e à responsabilidade em projetos.",
      ],
    },
    {
      id: "research",
      heading: "11. Género e diversidade na investigação, inovação e formação",
      paragraphs: [
        "Em cada novo projeto de investigação e inovação, a UBKIR avalia explicitamente se o sexo, o género e outras dimensões de diversidade são cientificamente relevantes para a questão de investigação, métodos, amostragem, análise, interpretação, disseminação ou impacto. Tanto \u201crelevante\u201d como \u201cnão relevante\u201d são resultados válidos; o que se exige é uma avaliação fundamentada.",
        "Quando relevantes, estas dimensões são incorporadas metodologicamente. A terminologia de sexo e género é utilizada corretamente sempre que os conceitos sejam distintos. Os materiais dirigidos a participantes evitam estereótipos desnecessários e pressupostos binários, e os resultados não são generalizados para além das populações representadas.",
        "Os conteúdos de formação são revistos quanto a linguagem inclusiva, representação, estereótipos e necessidades razoáveis de acessibilidade.",
      ],
    },
    {
      id: "harassment",
      heading: "12. Discriminação, violência baseada no género e assédio sexual",
      paragraphs: [
        "A UBKIR mantém tolerância zero face a discriminação, assédio, assédio sexual, violência baseada no género, retaliação e condutas degradantes ou intimidatórias.",
        "As preocupações podem ser comunicadas de forma confidencial através dos canais de contacto públicos da UBKIR, claramente identificadas como confidenciais e dirigidas ao Gerente na qualidade de Responsável pelo GEP. Caso a situação envolva o Gerente, ou quando a independência seja razoavelmente exigível, a UBKIR designa um profissional externo independente adequado para receber e/ou tratar a matéria.",
        "A comunicação de boa-fé não dará, por si, lugar a retaliação. As respostas são céleres, imparciais, proporcionais e respeitadoras da confidencialidade, no quadro da lei aplicável e da equidade processual.",
      ],
    },
    {
      id: "training",
      heading: "13. Formação e sensibilização",
      paragraphs: [
        "É realizada, pelo menos, uma atividade anual de sensibilização ou formação sobre igualdade de género e inclusão, prática inclusiva, enviesamento inconsciente, respeito no local de trabalho e prevenção do assédio. As atividades podem ser internas, externas ou baseadas em recursos europeus ou nacionais adequados.",
        "Os novos trabalhadores remunerados e os colaboradores recorrentes são informados sobre este Plano e sobre os padrões esperados durante a integração na empresa ou a integração no projeto.",
      ],
    },
    {
      id: "review",
      heading: "16. Monitorização e revisão do Plano",
      paragraphs: [
        "A implementação é revista pelo menos anualmente, considerando a execução das ações, os indicadores de monitorização, alterações de equipa e de projetos, os comentários e contributos recebidos, as preocupações comunicadas e alterações relevantes nos requisitos europeus ou portugueses. As ações corretivas são documentadas internamente.",
        "Uma revisão completa será concluída até 31 de dezembro de 2029, podendo ser antecipada se alterações organizacionais significativas criarem novos requisitos.",
      ],
    },
  ],
  baseline: {
    id: "baseline",
    heading: "5. Situação de referência a 31 de agosto de 2026",
    intro: [],
    columns: ["Grupo", "Mulheres", "Homens", "Total", "Nota"],
    rows: [
      {
        group: "Trabalhadores remunerados",
        women: "0",
        men: "2",
        total: "2",
        note: "Atuais trabalhadores remunerados da UBKIR.",
      },
      {
        group: "Colaboradores de investigação recorrentes em regime de projeto",
        women: "2",
        men: "2",
        total: "4",
        note: "Participam e são remunerados apenas quando envolvidos em projetos específicos; sem relação laboral regular.",
      },
      {
        group: "Comunidade profissional alargada atual",
        women: "2",
        men: "4",
        total: "6",
        note: "Retrato contextual de monitorização; a participação em projetos varia ao longo do tempo.",
      },
    ],
    after: [
      "Com números tão reduzidos, a entrada ou saída de uma pessoa altera substancialmente as percentagens. O Plano centra-se, por isso, em processos justos e em tendências, e não em quotas fixas.",
      "Por razões de privacidade, a UBKIR não publica dados sobre nacionalidade, etnia, deficiência, orientação sexual, identidade de género ou outras características potencialmente sensíveis em grupos de pequena dimensão. A diversidade da equipa é reconhecida apenas em termos gerais. A divulgação pública protege sempre a confidencialidade; é publicada anualmente uma nota de progresso concisa quando tal possa ser feito com segurança.",
    ],
  },
  action: {
    id: "action-plan",
    heading: "14. Plano de ação 2026–2029",
    columns: ["ID", "Ação", "Indicador e meta", "Calendário", "Responsável"],
    rows: [
      {
        id: "A1",
        action: "Publicar, aprovar e comunicar ativamente o GEP; manter designado um Responsável pelo GEP.",
        indicator: "Acessibilidade pública e responsabilidade continuamente atribuída.",
        timing: "2026 / contínuo",
        responsible: "Gerente / Responsável pelo GEP",
      },
      {
        id: "A2",
        action: "Revisão anual desagregada por sexo/género, protegendo a privacidade em grupos pequenos.",
        indicator: "1 revisão interna por ano e 1 nota pública de progresso por ano, quando seguro.",
        timing: "Anual",
        responsible: "Responsável pelo GEP",
      },
      {
        id: "A3",
        action: "Linguagem de recrutamento inclusiva e não discriminatória e seleção baseada em competência.",
        indicator: "100% dos novos processos de recrutamento revistos com a lista de verificação do GEP.",
        timing: "Contínuo",
        responsible: "Responsável pelo recrutamento / Gerente",
      },
      {
        id: "A4",
        action: "Promover participação e liderança equilibradas em projetos, sem quotas rígidas nem redução de exigência de competência.",
        indicator: "Equilíbrio de género considerado e documentado na formação de equipas; igualdade de acesso monitorizada.",
        timing: "Contínuo",
        responsible: "Responsáveis de projeto",
      },
      {
        id: "A5",
        action: "Manter o trabalho remoto e elevada flexibilidade de horário, cumprindo carga de trabalho, prazos, reuniões e obrigações de projeto acordados.",
        indicator: "Flexibilidade disponível para 100% dos trabalhadores e colaboradores elegíveis; questões revistas anualmente.",
        timing: "Contínuo",
        responsible: "Gerente / Responsáveis de projeto",
      },
      {
        id: "A6",
        action: "Pelo menos uma ação anual de sensibilização ou formação.",
        indicator: "≥1 ação por ano, disponibilizada a todos os trabalhadores remunerados e colaboradores recorrentes.",
        timing: "Anual",
        responsible: "Responsável pelo GEP",
      },
      {
        id: "A7",
        action: "Avaliar a relevância de sexo, género e diversidade em cada novo projeto de investigação e inovação.",
        indicator: "100% dos novos projetos de I&I com avaliação de relevância documentada no início do projeto.",
        timing: "A partir de 2026",
        responsible: "Responsável de projeto",
      },
      {
        id: "A8",
        action: "Rever materiais formais de formação e comunicação quanto a linguagem inclusiva, estereótipos e acessibilidade razoável.",
        indicator: "100% dos novos programas e materiais formais de formação revistos de forma proporcional.",
        timing: "A partir de 2026",
        responsible: "Responsável de formação / de projeto",
      },
      {
        id: "A9",
        action: "Manter uma via confidencial para preocupações de discriminação, assédio e violência baseada no género, com tratamento externo independente quando a gerência esteja envolvida.",
        indicator: "Procedimento disponível e comunicado; todas as preocupações recebidas acusadas e tratadas com celeridade e confidencialidade.",
        timing: "2026 / contínuo",
        responsible: "Gerente / contacto externo independente quando necessário",
      },
      {
        id: "A10",
        action: "Revisão anual da implementação e avaliação final de ciclo.",
        indicator: "Revisão anual realizada; avaliação completa concluída até 31 de dezembro de 2029.",
        timing: "Anual / 2029",
        responsible: "Gerente / Responsável pelo GEP",
      },
    ],
  },
  checklist: {
    id: "horizon-europe",
    heading: "15. Lista de verificação de alinhamento com o Horizonte Europa",
    columns: ["Tipo", "Requisito", "Resposta da UBKIR"],
    rows: [
      {
        type: "Obrigatório",
        requirement: "Documento público",
        response: "GEP público, aprovado pela gerência, disponível no sítio institucional da UBKIR e comunicado internamente.",
      },
      {
        type: "Obrigatório",
        requirement: "Recursos dedicados",
        response: "Gerente designado Responsável pelo GEP; implementação, monitorização e formação reconhecidas como tempo de trabalho; apoio externo quando adequado.",
      },
      {
        type: "Obrigatório",
        requirement: "Recolha de dados e monitorização",
        response: "Monitorização anual desagregada por sexo/género, com divulgação pública protetora da privacidade.",
      },
      {
        type: "Obrigatório",
        requirement: "Formação",
        response: "Pelo menos uma atividade anual sobre igualdade, inclusão, enviesamento inconsciente e respeito no local de trabalho.",
      },
      {
        type: "Recomendado",
        requirement: "Conciliação e cultura organizacional",
        response: "Modelo remoto e elevada flexibilidade, com proteções explícitas.",
      },
      {
        type: "Recomendado",
        requirement: "Equilíbrio de género na liderança e decisão",
        response: "Igualdade de acesso; equilíbrio de género considerado sem quotas rígidas.",
      },
      {
        type: "Recomendado",
        requirement: "Igualdade no recrutamento e progressão",
        response: "Linguagem inclusiva, critérios transparentes baseados em competência, igualdade de oportunidades e monitorização.",
      },
      {
        type: "Recomendado",
        requirement: "Dimensão de género na I&I e na formação",
        response: "Avaliação de relevância para novos projetos e integração quando científica ou pedagogicamente relevante.",
      },
      {
        type: "Recomendado",
        requirement: "Violência baseada no género e assédio sexual",
        response: "Tolerância zero, via confidencial e tratamento independente quando a gerência esteja envolvida.",
      },
    ],
  },
  approval: {
    id: "approval",
    heading: "17. Aprovação",
    statement:
      "Aprovado como documento público de política institucional da Unbreakable Idea Research, Lda. (UBKIR), com entrada em vigor em 31 de agosto de 2026.",
    name: "Osvaldo Santos",
    role: "Gerente",
    org: "Unbreakable Idea Research, Lda. (UBKIR)",
    date: "31 de agosto de 2026",
  },
  references: {
    id: "references",
    heading: "18. Referências",
    items: EN.references.items,
  },
};

const SectionBlock = ({ section }: { section: Section }) => (
  <section id={section.id} className="scroll-mt-24 mb-10">
    <h2 className="text-2xl font-semibold text-foreground mb-4">{section.heading}</h2>
    {section.paragraphs?.map((p, i) => (
      <p key={i} className="text-muted-foreground leading-relaxed mb-4">
        {p}
      </p>
    ))}
    {section.bullets && (
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        {section.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
  </section>
);

const GenderEqualityPlan = () => {
  const { language } = useLanguage();
  const { localePath } = useLocalizedPaths();
  const c = language === "pt" ? PT : EN;

  const ordered = [
    ...c.sections.slice(0, 4),
    c.baseline,
    ...c.sections.slice(4, 12),
  ];

  const toc = [
    ...c.sections.slice(0, 4).map((s) => ({ id: s.id, heading: s.heading })),
    { id: c.baseline.id, heading: c.baseline.heading },
    ...c.sections.slice(4, 12).map((s) => ({ id: s.id, heading: s.heading })),
    { id: c.action.id, heading: c.action.heading },
    { id: c.checklist.id, heading: c.checklist.heading },
    { id: c.sections[12].id, heading: c.sections[12].heading },
    { id: c.approval.id, heading: c.approval.heading },
    { id: c.references.id, heading: c.references.heading },
  ];

  return (
    <div className="min-h-screen py-20">
      <Seo page="genderEqualityPlan" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link to={localePath("governance")} className="text-sm text-primary hover:underline">
            ← {c.breadcrumb}
          </Link>
        </nav>

        <header className="mb-10 border-b border-border pb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">{c.org}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{c.title}</h1>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {(
              [
                ["status", c.metaLabels.status, c.metaValues.status],
                ["version", c.metaLabels.version, c.metaValues.version],
                ["period", c.metaLabels.period, c.metaValues.period],
                ["approvedBy", c.metaLabels.approvedBy, c.metaValues.approvedBy],
                ["date", c.metaLabels.date, c.metaValues.date],
              ] as const
            ).map(([key, label, value]) => (
              <div key={key}>
                <dt className="font-semibold text-foreground">{label}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section aria-labelledby="official-document" className="mb-12">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h2 id="official-document" className="text-lg font-semibold text-foreground mb-4">
                {language === "pt" ? "Documento oficial" : "Official document"}
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a
                    href={language === "pt" ? "/UBKIR_GEP_2026-2029_PT.pdf" : "/UBKIR_GEP_2026-2029_EN.pdf"}
                    download
                    aria-label={
                      language === "pt"
                        ? "Descarregar GEP oficial — Português (PDF)"
                        : "Download official GEP — English (PDF)"
                    }
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {language === "pt"
                      ? "Descarregar GEP oficial — Português (PDF)"
                      : "Download official GEP — English (PDF)"}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={language === "pt" ? "/UBKIR_GEP_2026-2029_EN.pdf" : "/UBKIR_GEP_2026-2029_PT.pdf"}
                    download
                    aria-label={
                      language === "pt"
                        ? "Descarregar GEP — Inglês (PDF)"
                        : "Download GEP — Portuguese (PDF)"
                    }
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    {language === "pt" ? "Descarregar GEP — Inglês (PDF)" : "Download GEP — Portuguese (PDF)"}
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {language === "pt"
                  ? "O PDF descarregável é a versão formal destinada à assinatura pela gerência e à publicação institucional."
                  : "The downloadable PDF is the formal version intended for management signature and institutional publication."}
              </p>
            </CardContent>
          </Card>
        </section>

        <nav aria-label={c.tocTitle} className="mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">{c.tocTitle}</h2>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-primary hover:underline">
                      {item.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </nav>

        <article>
          {ordered.map((s) =>
            "columns" in s ? (
              <section key={s.id} id={s.id} className="scroll-mt-24 mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">{s.heading}</h2>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full min-w-[640px] text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        {s.columns.map((col) => (
                          <th key={col} scope="col" className="text-left font-semibold text-foreground py-3 pr-4">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.rows.map((row) => (
                        <tr key={row.group} className="border-b border-border align-top">
                          <th scope="row" className="text-left font-medium text-foreground py-3 pr-4">
                            {row.group}
                          </th>
                          <td className="py-3 pr-4 text-muted-foreground">{row.women}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.men}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{row.total}</td>
                          <td className="py-3 text-muted-foreground">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {s.after.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mt-4">
                    {p}
                  </p>
                ))}
              </section>
            ) : (
              <SectionBlock key={s.id} section={s as Section} />
            )
          )}

          <section id={c.action.id} className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{c.action.heading}</h2>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[760px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    {c.action.columns.map((col) => (
                      <th key={col} scope="col" className="text-left font-semibold text-foreground py-3 pr-4">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.action.rows.map((row) => (
                    <tr key={row.id} className="border-b border-border align-top">
                      <th scope="row" className="text-left font-semibold text-primary py-3 pr-4">
                        {row.id}
                      </th>
                      <td className="py-3 pr-4 text-muted-foreground">{row.action}</td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.indicator}</td>
                      <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">{row.timing}</td>
                      <td className="py-3 text-muted-foreground">{row.responsible}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id={c.checklist.id} className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{c.checklist.heading}</h2>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[640px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    {c.checklist.columns.map((col) => (
                      <th key={col} scope="col" className="text-left font-semibold text-foreground py-3 pr-4">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.checklist.rows.map((row) => (
                    <tr key={row.requirement} className="border-b border-border align-top">
                      <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">{row.type}</td>
                      <th scope="row" className="text-left font-medium text-foreground py-3 pr-4">
                        {row.requirement}
                      </th>
                      <td className="py-3 text-muted-foreground">{row.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id={c.approval.id} className="scroll-mt-24 mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{c.approval.heading}</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <p className="text-foreground leading-relaxed mb-6">{c.approval.statement}</p>
                <div className="border-t border-border pt-6">
                  <div className="h-10 border-b border-foreground/40 max-w-xs mb-3" aria-hidden="true" />
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    {language === "pt" ? "Assinatura" : "Signature"}
                  </p>
                  <p className="font-semibold text-foreground">{c.approval.name}</p>
                  <p className="text-muted-foreground">{c.approval.role}</p>
                  <p className="text-muted-foreground">{c.approval.org}</p>
                  <p className="text-muted-foreground mt-2">{c.approval.date}</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id={c.references.id} className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{c.references.heading}</h2>
            <ul className="space-y-3">
              {c.references.items.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 text-primary hover:underline"
                  >
                    <span>{r.label}</span>
                    <ExternalLink className="h-4 w-4 mt-1 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
};

export default GenderEqualityPlan;
