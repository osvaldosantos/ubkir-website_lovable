import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, BookOpen, Users, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("team.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("team.subtitle")}
          </p>
        </div>

        {/* CEO Spotlight */}
        <section className="mb-20">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 rounded-full p-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{t("team.osvaldo.title")}</h2>
                      <p className="text-lg text-primary font-semibold">{t("team.osvaldo.subtitle")}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {t("team.osvaldo.bio")}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t("team.osvaldo.achievements.title")}</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• {t("team.osvaldo.achievements.enviheb")}</li>
                        <li>• {t("team.osvaldo.achievements.cited")}</li>
                        <li>• {t("team.osvaldo.achievements.research")}</li>
                        <li>• {t("team.osvaldo.achievements.clinical")}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">{t("team.osvaldo.specializations.title")}</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• {t("team.osvaldo.specializations.clinical")}</li>
                        <li>• {t("team.osvaldo.specializations.health")}</li>
                        <li>• {t("team.osvaldo.specializations.leadership")}</li>
                        <li>• {t("team.osvaldo.specializations.methodology")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://orcid.org/0000-0002-0836-4314" target="_blank" rel="noopener noreferrer">
                        ORCID Profile <ExternalLink className="ml-2" size={14} />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.linkedin.com/in/osvaldorsantos/" target="_blank" rel="noopener noreferrer">
                        LinkedIn <ExternalLink className="ml-2" size={14} />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://isamb.medicina.ulisboa.pt/en/enviheb-lab/" target="_blank" rel="noopener noreferrer">
                        EnviHeB Lab <ExternalLink className="ml-2" size={14} />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  {/* CEO Photo */}
                  <div className="mb-6">
                    <img 
                      src="/lovable-uploads/383f7e0f-7e49-44bd-9e3c-2035355fd892.png" 
                      alt="Dr. Osvaldo Santos - CEO & Clinical Health Psychologist"
                      className="w-48 h-48 object-cover rounded-lg mx-auto shadow-lg"
                    />
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg p-8 mb-6">
                    <Brain className="h-20 w-20 text-primary mx-auto mb-4" />
                    <div className="text-sm text-muted-foreground">Leading Expert in</div>
                    <div className="text-lg font-semibold text-primary">Health Psychology</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">20+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Research Publications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15 000+</div>
                      <div className="text-sm text-muted-foreground">Citations</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Expertise Areas */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("team.expertise.title")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{t("team.expertise.research")}</CardTitle>
                <CardDescription>
                  {t("team.expertise.research.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{t("team.expertise.clinical")}</CardTitle>
                <CardDescription>
                  {t("team.expertise.clinical.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{t("team.expertise.training")}</CardTitle>
                <CardDescription>
                  {t("team.expertise.training.desc")}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{t("team.expertise.publishing")}</CardTitle>
                <CardDescription>
                  {t("team.expertise.publishing.desc")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Research Lab Connection */}
        <section className="bg-muted rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t("team.partnership.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("team.partnership.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("team.partnership.leadership")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("team.partnership.leadership.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("team.partnership.network")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("team.partnership.network.desc")}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("team.partnership.impact")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("team.partnership.impact.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            {t("team.specializations.title")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              t("team.prof.spec.clinical"),
              t("team.prof.spec.health"), 
              t("team.prof.spec.research"),
              t("team.prof.spec.statistical"),
              t("team.prof.spec.psychometric"),
              t("team.prof.spec.cbt"),
              t("team.prof.spec.communication"),
              t("team.prof.spec.training"),
              t("team.prof.spec.qualitative"),
              t("team.prof.spec.quantitative"),
              t("team.prof.spec.digital"),
              t("team.prof.spec.leadership")
            ].map((specialization, index) => (
              <Badge key={index} variant="secondary" className="text-sm p-3 justify-center">
                {specialization}
              </Badge>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t("team.cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("team.cta.desc")}
          </p>
          <Button size="lg" asChild>
            <Link to="/contacts">
              {t("team.cta.button")}
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Team;