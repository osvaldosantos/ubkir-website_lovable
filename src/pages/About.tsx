import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Award, Globe, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">{t("about.mission.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.mission.desc")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">{t("about.vision.title")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("about.vision.desc")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("about.values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{t("about.values.excellence")}</h3>
              <p className="text-muted-foreground">
                {t("about.values.excellence.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{t("about.values.innovation")}</h3>
              <p className="text-muted-foreground">
                {t("about.values.innovation.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{t("about.values.collaboration")}</h3>
              <p className="text-muted-foreground">
                {t("about.values.collaboration.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{t("about.values.integrity")}</h3>
              <p className="text-muted-foreground">
                {t("about.values.integrity.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* ... keep existing code (Company Background and Specializations sections) */}
        
        {/* Company Background */}
        <section className="bg-muted rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t("about.story.title")}
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              {t("about.story.p1")}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {t("about.story.p2")}
            </p>
            <p className="text-lg leading-relaxed">
              {t("about.story.p3")}
            </p>
          </div>
        </section>

        {/* Specializations */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("about.specializations.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              t("about.spec.quantResearch"),
              t("about.spec.qualResearch"),
              t("about.spec.statAnalysis"),
              t("about.spec.psychometric"),
              t("about.spec.realWorld"),
              t("about.spec.marketing"),
              t("about.spec.healthComm"),
              t("about.spec.leadership"),
              t("about.spec.cbt"),
              t("about.spec.eatingDisorders"),
              t("about.spec.chronicDisease"),
              t("about.spec.publishing")
            ].map((specialization, index) => (
              <Badge key={index} variant="secondary" className="text-sm p-3 justify-center">
                {specialization}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;