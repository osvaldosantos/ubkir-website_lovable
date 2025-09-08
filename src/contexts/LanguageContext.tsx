import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.training': 'Training',
    'nav.clinical': 'Clinical',
    'nav.research': 'Research',
    'nav.digital': 'Digital Development',
    'nav.publishing': 'Acendalha Publishing',
    'nav.team': 'Team',
    'nav.contacts': 'Contacts',
    
    // Home page
    'home.hero.title': 'Unbreakable Idea Research',
    'home.hero.subtitle': 'Advancing Health Through Innovation, Research, and Education',
    'home.hero.services': 'Our Services',
    'home.hero.learn': 'Learn More',
    'home.expertise.title': 'Our Areas of Expertise',
    'home.expertise.subtitle': 'Comprehensive solutions for health research, education, and innovation',
    'home.research.title': 'Research Activities',
    'home.research.desc': 'Quantitative & qualitative research, statistical analysis, and data visualization',
    'home.training.title': 'Training Programs',
    'home.training.desc': 'Leadership development, health communication, and research methodology training',
    'home.clinical.title': 'Clinical Services',
    'home.clinical.desc': 'Cognitive-behavioral therapy, psychological assessment, and specialized treatments',
    'home.editorial.title': 'Editorial Services',
    'home.editorial.desc': 'Scientific and science-fiction publishing through Acendalha Publishing',
    'home.innovation.title': 'Leading Innovation in Health Research',
    'home.innovation.desc1': 'Under the leadership of CEO Osvaldo Santos, a renowned clinical and health psychologist, UBKIR combines cutting-edge research methodologies with practical applications in healthcare, education, and digital innovation.',
    'home.innovation.desc2': 'Our multidisciplinary approach ensures comprehensive solutions that bridge the gap between academic research and real-world healthcare challenges.',
    'home.innovation.team': 'Meet Our Team',
    'home.stats.years': 'Years of Experience',
    'home.stats.projects': 'Research Projects',
    'home.cta.title': 'Ready to Collaborate?',
    'home.cta.desc': 'Let\'s discuss how our expertise can support your research, training, or clinical needs.',
    'home.cta.contact': 'Get in Touch',
    
    // About page
    'about.title': 'About UBKIR',
    'about.subtitle': 'Pioneering Research and Innovation in Health Sciences',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To advance health sciences through innovative research methodologies, evidence-based training programs, and comprehensive clinical services that bridge the gap between academic excellence and practical healthcare solutions.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be a leading research organization that transforms healthcare delivery through cutting-edge research, education, and digital innovation, contributing to improved health outcomes globally.',
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Scientific Excellence',
    'about.values.excellence.desc': 'Commitment to rigorous research methodologies and evidence-based practices',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Embracing new technologies and methodologies to solve complex health challenges',
    'about.values.collaboration': 'Collaboration',
    'about.values.collaboration.desc': 'Building partnerships with healthcare professionals, researchers, and institutions',
    'about.values.integrity': 'Integrity',
    'about.values.integrity.desc': 'Maintaining the highest ethical standards in all our research and clinical activities',
    
    // Team page
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the experts driving innovation at UBKIR',
    'team.ceo.name': 'Osvaldo Santos',
    'team.ceo.title': 'CEO & Clinical Psychologist',
    'team.ceo.desc': 'Clinical and health psychologist with extensive experience in research, teaching, and clinical practice. Head of the EnviHeB Lab and one of Portugal\'s most cited psychologists.',
    'team.ceo.experience': '15+ Years Experience',
    'team.ceo.publications': '100+ Publications',
    'team.ceo.specializations': 'Research Methods, Clinical Psychology, Health Psychology',
    'team.join.title': 'Join Our Team',
    'team.join.desc': 'We\'re always looking for talented researchers, clinicians, and innovators to join our mission.',
    'team.join.button': 'View Opportunities',
    
    // Services page
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive solutions for health research, training, and clinical practice',
    'services.research.title': 'Research Activities',
    'services.research.quant': 'Quantitative Research',
    'services.research.quant.desc': 'Surveys, statistical analysis, and data visualization including dashboard development',
    'services.research.qual': 'Qualitative Research',
    'services.research.qual.desc': 'Focus groups, in-depth interviews, World Cafés, and consensus-building through Delphi panels',
    'services.research.specialized': 'Specialized Research',
    'services.research.specialized.desc': 'Psychometric analysis, real-world evidence research, and marketing research',
    'services.training.title': 'Training Programs',
    'services.training.leadership': 'Leadership Development',
    'services.training.leadership.desc': 'Specialized programs for health professionals teams and healthcare management',
    'services.training.communication': 'Health Communication',
    'services.training.communication.desc': 'Effective communication strategies for healthcare settings and patient engagement',
    'services.training.methods': 'Research Methods',
    'services.training.methods.desc': 'Comprehensive training in qualitative and quantitative research methodologies',
    'services.clinical.title': 'Clinical Services',
    'services.clinical.therapy': 'Cognitive-Behavioral Therapy',
    'services.clinical.therapy.desc': 'Evidence-based therapeutic interventions for various psychological conditions',
    'services.clinical.specialized': 'Specialized Treatments',
    'services.clinical.specialized.desc': 'Eating disorders, depression, anxiety, chronic disease adjustment, and couple therapy',
    'services.digital.title': 'Digital Development',
    'services.digital.desc': 'Health-related software and digital solutions to enhance healthcare delivery and research capabilities',
    'services.publishing.title': 'Acendalha Publishing',
    'services.publishing.desc': 'Editorial services for scientific publications and science-fiction literature',
    
    // Contacts page
    'contacts.title': 'Contact Us',
    'contacts.subtitle': 'Get in touch with our team',
    'contacts.address': 'Address',
    'contacts.phone': 'Phone',
    'contacts.email': 'Email',
    'contacts.form.title': 'Send us a message',
    'contacts.form.name': 'Full Name',
    'contacts.form.email': 'Email Address',
    'contacts.form.subject': 'Subject',
    'contacts.form.message': 'Message',
    'contacts.form.send': 'Send Message',
    'contacts.training.title': 'Training Program Enrollment',
    'contacts.training.program': 'Select Program',
    'contacts.training.adherence': 'Treatment Adherence Promotion',
    'contacts.training.leadership': 'Leadership Development',
    'contacts.training.research': 'Qualitative Research Methods',
    'contacts.training.organization': 'Organization',
    'contacts.training.enroll': 'Enroll Now',
    
    // Footer
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre Nós',
    'nav.services': 'Serviços',
    'nav.training': 'Formação',
    'nav.clinical': 'Clínica',
    'nav.research': 'Investigação',
    'nav.digital': 'Desenvolvimento Digital',
    'nav.publishing': 'Publicação Acendalha',
    'nav.team': 'Equipa',
    'nav.contacts': 'Contactos',
    
    // Home page
    'home.hero.title': 'Unbreakable Idea Research',
    'home.hero.subtitle': 'Promovendo a Saúde Através da Inovação, Investigação e Educação',
    'home.hero.services': 'Os Nossos Serviços',
    'home.hero.learn': 'Saber Mais',
    'home.expertise.title': 'As Nossas Áreas de Especialização',
    'home.expertise.subtitle': 'Soluções abrangentes para investigação em saúde, educação e inovação',
    'home.research.title': 'Atividades de Investigação',
    'home.research.desc': 'Investigação quantitativa e qualitativa, análise estatística e visualização de dados',
    'home.training.title': 'Programas de Formação',
    'home.training.desc': 'Desenvolvimento de liderança, comunicação em saúde e formação em metodologia de investigação',
    'home.clinical.title': 'Serviços Clínicos',
    'home.clinical.desc': 'Terapia cognitivo-comportamental, avaliação psicológica e tratamentos especializados',
    'home.editorial.title': 'Serviços Editoriais',
    'home.editorial.desc': 'Publicação científica e de ficção científica através da Acendalha Publishing',
    'home.innovation.title': 'Liderando a Inovação na Investigação em Saúde',
    'home.innovation.desc1': 'Sob a liderança do CEO Osvaldo Santos, um renomado psicólogo clínico e da saúde, a UBKIR combina metodologias de investigação de vanguarda com aplicações práticas em cuidados de saúde, educação e inovação digital.',
    'home.innovation.desc2': 'A nossa abordagem multidisciplinar garante soluções abrangentes que fazem a ponte entre a investigação académica e os desafios reais dos cuidados de saúde.',
    'home.innovation.team': 'Conheça a Nossa Equipa',
    'home.stats.years': 'Anos de Experiência',
    'home.stats.projects': 'Projetos de Investigação',
    'home.cta.title': 'Pronto para Colaborar?',
    'home.cta.desc': 'Vamos discutir como a nossa experiência pode apoiar as suas necessidades de investigação, formação ou clínicas.',
    'home.cta.contact': 'Entre em Contacto',
    
    // About page
    'about.title': 'Sobre a UBKIR',
    'about.subtitle': 'Pioneiros em Investigação e Inovação nas Ciências da Saúde',
    'about.mission.title': 'A Nossa Missão',
    'about.mission.desc': 'Avançar as ciências da saúde através de metodologias de investigação inovadoras, programas de formação baseados em evidência e serviços clínicos abrangentes que fazem a ponte entre a excelência académica e as soluções práticas de cuidados de saúde.',
    'about.vision.title': 'A Nossa Visão',
    'about.vision.desc': 'Ser uma organização de investigação líder que transforma a prestação de cuidados de saúde através de investigação de ponta, educação e inovação digital, contribuindo para melhores resultados de saúde globalmente.',
    'about.values.title': 'Os Nossos Valores',
    'about.values.excellence': 'Excelência Científica',
    'about.values.excellence.desc': 'Compromisso com metodologias de investigação rigorosas e práticas baseadas em evidência',
    'about.values.innovation': 'Inovação',
    'about.values.innovation.desc': 'Abraçar novas tecnologias e metodologias para resolver desafios complexos de saúde',
    'about.values.collaboration': 'Colaboração',
    'about.values.collaboration.desc': 'Construir parcerias com profissionais de saúde, investigadores e instituições',
    'about.values.integrity': 'Integridade',
    'about.values.integrity.desc': 'Manter os mais altos padrões éticos em todas as nossas atividades de investigação e clínicas',
    
    // Team page
    'team.title': 'A Nossa Equipa',
    'team.subtitle': 'Conheça os especialistas que impulsionam a inovação na UBKIR',
    'team.ceo.name': 'Osvaldo Santos',
    'team.ceo.title': 'CEO e Psicólogo Clínico',
    'team.ceo.desc': 'Psicólogo clínico e da saúde com vasta experiência em investigação, ensino e prática clínica. Chefe do Laboratório EnviHeB e um dos psicólogos mais citados de Portugal.',
    'team.ceo.experience': '15+ Anos de Experiência',
    'team.ceo.publications': '100+ Publicações',
    'team.ceo.specializations': 'Métodos de Investigação, Psicologia Clínica, Psicologia da Saúde',
    'team.join.title': 'Junte-se à Nossa Equipa',
    'team.join.desc': 'Estamos sempre à procura de investigadores, clínicos e inovadores talentosos para se juntarem à nossa missão.',
    'team.join.button': 'Ver Oportunidades',
    
    // Services page
    'services.title': 'Os Nossos Serviços',
    'services.subtitle': 'Soluções abrangentes para investigação em saúde, formação e prática clínica',
    'services.research.title': 'Atividades de Investigação',
    'services.research.quant': 'Investigação Quantitativa',
    'services.research.quant.desc': 'Inquéritos, análise estatística e visualização de dados incluindo desenvolvimento de dashboards',
    'services.research.qual': 'Investigação Qualitativa',
    'services.research.qual.desc': 'Grupos focais, entrevistas em profundidade, World Cafés e construção de consenso através de painéis Delphi',
    'services.research.specialized': 'Investigação Especializada',
    'services.research.specialized.desc': 'Análise psicométrica, investigação de evidência do mundo real e investigação de marketing',
    'services.training.title': 'Programas de Formação',
    'services.training.leadership': 'Desenvolvimento de Liderança',
    'services.training.leadership.desc': 'Programas especializados para equipas de profissionais de saúde e gestão de cuidados de saúde',
    'services.training.communication': 'Comunicação em Saúde',
    'services.training.communication.desc': 'Estratégias de comunicação eficazes para ambientes de cuidados de saúde e envolvimento de pacientes',
    'services.training.methods': 'Métodos de Investigação',
    'services.training.methods.desc': 'Formação abrangente em metodologias de investigação qualitativa e quantitativa',
    'services.clinical.title': 'Serviços Clínicos',
    'services.clinical.therapy': 'Terapia Cognitivo-Comportamental',
    'services.clinical.therapy.desc': 'Intervenções terapêuticas baseadas em evidência para várias condições psicológicas',
    'services.clinical.specialized': 'Tratamentos Especializados',
    'services.clinical.specialized.desc': 'Distúrbios alimentares, depressão, ansiedade, adaptação a doenças crónicas e terapia de casal',
    'services.digital.title': 'Desenvolvimento Digital',
    'services.digital.desc': 'Software relacionado com saúde e soluções digitais para melhorar a prestação de cuidados de saúde e capacidades de investigação',
    'services.publishing.title': 'Publicação Acendalha',
    'services.publishing.desc': 'Serviços editoriais para publicações científicas e literatura de ficção científica',
    
    // Contacts page
    'contacts.title': 'Contacte-nos',
    'contacts.subtitle': 'Entre em contacto com a nossa equipa',
    'contacts.address': 'Morada',
    'contacts.phone': 'Telefone',
    'contacts.email': 'Email',
    'contacts.form.title': 'Envie-nos uma mensagem',
    'contacts.form.name': 'Nome Completo',
    'contacts.form.email': 'Endereço de Email',
    'contacts.form.subject': 'Assunto',
    'contacts.form.message': 'Mensagem',
    'contacts.form.send': 'Enviar Mensagem',
    'contacts.training.title': 'Inscrição em Programa de Formação',
    'contacts.training.program': 'Selecionar Programa',
    'contacts.training.adherence': 'Promoção da Adesão ao Tratamento',
    'contacts.training.leadership': 'Desenvolvimento de Liderança',
    'contacts.training.research': 'Métodos de Investigação Qualitativa',
    'contacts.training.organization': 'Organização',
    'contacts.training.enroll': 'Inscrever Agora',
    
    // Footer
    'footer.company': 'Empresa',
    'footer.services': 'Serviços',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos os direitos reservados.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('ubkir-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ubkir-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};