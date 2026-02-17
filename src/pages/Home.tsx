import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Users, TrendingUp, BookOpen, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroCarousel from "@/components/HeroCarousel";

const Home = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("home.expertise.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("home.expertise.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Link to="/services?tab=research">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardHeader>
                  <Brain className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("home.research.title")}</CardTitle>
                  <CardDescription>
                    {t("home.research.desc")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/services?tab=training">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("home.training.title")}</CardTitle>
                  <CardDescription>
                    {t("home.training.desc")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/services?tab=clinical">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("home.clinical.title")}</CardTitle>
                  <CardDescription>
                    {t("home.clinical.desc")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/services?tab=digital">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardHeader>
                  <Monitor className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("home.digital.title")}</CardTitle>
                  <CardDescription>
                    {t("home.digital.desc")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link to="/services?tab=publishing">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{t("home.editorial.title")}</CardTitle>
                  <CardDescription>
                    {t("home.editorial.desc")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("home.innovation.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("home.innovation.desc1")}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t("home.innovation.desc2")}
              </p>
              <Button asChild>
                <Link to="/team">{t("home.innovation.team")}</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg text-muted-foreground mb-4">{t("home.stats.years")}</div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg text-muted-foreground">{t("home.stats.projects")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("home.cta.desc")}
          </p>
          <Button size="lg" asChild>
            <Link to="/contacts">
              {t("home.cta.contact")} <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;