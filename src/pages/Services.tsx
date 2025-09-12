import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Users, 
  Heart, 
  BookOpen, 
  Laptop, 
  BarChart3, 
  MessageSquare, 
  Target,
  ExternalLink
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'research';
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("services.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue={activeTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
            <TabsTrigger value="research">{t("nav.research")}</TabsTrigger>
            <TabsTrigger value="training">{t("nav.training")}</TabsTrigger>
            <TabsTrigger value="clinical">{t("nav.clinical")}</TabsTrigger>
            <TabsTrigger value="digital">{t("nav.digital")}</TabsTrigger>
            <TabsTrigger value="publishing">{t("nav.publishing")}</TabsTrigger>
          </TabsList>

          {/* Research Activities */}
          <TabsContent value="research" className="space-y-8">
            <div className="text-center mb-12">
              <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("services.research.title")}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("services.research.evidence.desc")}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{t("services.research.quant")}</CardTitle>
                  <CardDescription>
                    {t("services.research.quant.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• {t("services.research.examples.survey")}</li>
                    <li>• {t("services.research.examples.statistical")}</li>
                    <li>• {t("services.research.examples.visualization")}</li>
                    <li>• {t("services.research.examples.epidemiological")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{t("services.research.qual")}</CardTitle>
                  <CardDescription>
                    {t("services.research.qual.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• {t("services.research.examples.focus")}</li>
                    <li>• {t("services.research.examples.interviews")}</li>
                    <li>• {t("services.research.examples.worldcafe")}</li>
                    <li>• {t("services.research.examples.thematic")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{t("services.research.specialized")}</CardTitle>
                  <CardDescription>
                    {t("services.research.specialized.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• {t("services.research.examples.delphi")}</li>
                    <li>• {t("services.research.examples.psychometric")}</li>
                    <li>• {t("services.research.examples.realworld")}</li>
                    <li>• {t("services.research.examples.marketing")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ... keep existing code for other tabs but update key text elements */}

          {/* Training Programs */}
          <TabsContent value="training" className="space-y-8">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("services.training.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.training.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>{t("services.training.adherence.example")}</CardTitle>
                  <CardDescription>
                    {t("services.training.adherence.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {t("services.training.adherence.text")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{t("services.training.adherence.item1")}</Badge>
                      <Badge variant="secondary">{t("services.training.adherence.item2")}</Badge>
                      <Badge variant="secondary">{t("services.training.adherence.item3")}</Badge>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contacts">{t("contacts.training.enroll")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>{t("services.training.communication.example")}</CardTitle>
                  <CardDescription>
                    {t("services.training.communication.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {t("services.training.communication.text")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{t("services.training.communication.item1")}</Badge>
                      <Badge variant="secondary">{t("services.training.communication.item2")}</Badge>
                      <Badge variant="secondary">{t("services.training.communication.item3")}</Badge>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contacts">{t("contacts.training.enroll")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>{t("contacts.training.research")}</CardTitle>
                  <CardDescription>
                    {t("services.training.methods.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {t("services.training.methods.text")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{t("services.training.methods.item1")}</Badge>
                      <Badge variant="secondary">{t("services.training.methods.item2")}</Badge>
                      <Badge variant="secondary">{t("services.training.methods.item3")}</Badge>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contacts">{t("contacts.training.enroll")}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ... keep existing code for remaining tabs */}

          {/* Clinical Services */}
          <TabsContent value="clinical" className="space-y-8">
            <div className="text-center mb-12">
              <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("services.clinical.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.clinical.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t("services.clinical.individual.example")}</CardTitle>
                  <CardDescription>
                    {t("services.clinical.individual.desc")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• {t("services.clinical.individual.item1")}</li>
                    <li>• {t("services.clinical.individual.item2")}</li>
                    <li>• {t("services.clinical.individual.item3")}</li>
                  </ul>
                  <Button size="sm" asChild>
                    <Link to="/contacts">{t("services.clinical.schedule")}</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("services.clinical.specialized.example")}</CardTitle>
                  <CardDescription>
                    {t("services.clinical.specialized.desc2")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• {t("services.clinical.specialized.item1")}</li>
                    <li>• {t("services.clinical.specialized.item2")}</li>
                    <li>• {t("services.clinical.specialized.item3")}</li>
                    <li>• {t("services.clinical.specialized.item4")}</li>
                  </ul>
                  <Button size="sm" asChild>
                    <Link to="/contacts">{t("services.clinical.learnmore")}</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Digital Development */}
          <TabsContent value="digital" className="space-y-8">
            <div className="text-center mb-12">
              <Laptop className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("services.digital.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.digital.desc")}
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t("services.digital.solutions.example")}</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {t("services.digital.solutions.desc")}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <Badge>{t("services.digital.badge1")}</Badge>
                    <Badge>{t("services.digital.badge2")}</Badge>
                    <Badge>{t("services.digital.badge3")}</Badge>
                    <Badge>{t("services.digital.badge4")}</Badge>
                    <Badge>{t("services.digital.badge5")}</Badge>
                  </div>
                  <Button asChild>
                    <Link to="/contacts">{t("services.digital.discuss")}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Publishing Services */}
          <TabsContent value="publishing" className="space-y-8">
            <div className="text-center mb-12">
              <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("services.publishing.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("services.publishing.desc")}
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{t("services.publishing.excellence.example")}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t("services.publishing.excellence.desc")}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{t("services.publishing.scientific")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{t("services.publishing.fiction")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{t("services.publishing.consulting")}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{t("services.publishing.manuscript")}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button asChild>
                        <a href="https://www.acendalha.pt" target="_blank" rel="noopener noreferrer">
                          {t("services.publishing.visit")} <ExternalLink className="ml-2" size={16} />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/contacts">{t("services.publishing.inquiry")}</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-lg p-8 text-center">
                    <BookOpen className="h-20 w-20 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">Acendalha</div>
                    <div className="text-muted-foreground">{t("services.publishing.division")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;