import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Brain, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Clinical = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("services.clinical.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {t("services.clinical.desc")}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Individual Therapy */}
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{t("services.clinical.individual")}</CardTitle>
                <CardDescription>
                  {t("services.clinical.individual.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">CBT</Badge>
                    {t("services.clinical.cbt")}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">{t("services.clinical.counseling")}</Badge>
                    {t("services.clinical.counseling.desc")}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">{t("services.clinical.behavioral")}</Badge>
                    {t("services.clinical.behavioral.desc")}
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/contacts">{t("services.clinical.schedule")}</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Specialized Services */}
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle>{t("services.clinical.specialized")}</CardTitle>
                <CardDescription>
                  {t("services.clinical.specialized.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">{t("services.clinical.couples")}</Badge>
                    {t("services.clinical.couples")}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">{t("services.clinical.eating")}</Badge>
                    {t("services.clinical.eating.desc")}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">{t("services.clinical.obesity")}</Badge>
                    {t("services.clinical.obesity.desc")}
                  </li>
                  <li className="flex items-center">
                    <Badge variant="outline" className="mr-2">{t("services.clinical.chronic")}</Badge>
                    {t("services.clinical.chronic.desc")}
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/contacts">{t("services.clinical.schedule")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("services.clinical.cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("services.clinical.cta.desc")}
          </p>
          <Button size="lg" asChild>
            <Link to="/contacts">
              <Calendar className="mr-2" size={20} />
              {t("services.clinical.schedule")}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Clinical;