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
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
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
        <Tabs defaultValue="research" className="w-full">
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
                    <li>• Delphi consensus panels</li>
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
                Professional development programs designed to enhance skills and knowledge in healthcare and research.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>{t("services.training.adherence.example")}</CardTitle>
                  <CardDescription>
                    Evidence-based strategies to improve patient compliance and treatment outcomes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Learn effective techniques to enhance patient engagement and medication adherence 
                      through behavioral interventions and communication strategies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Motivational interview</Badge>
                      <Badge variant="secondary">Behavioral Change</Badge>
                      <Badge variant="secondary">Patient Engagement</Badge>
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
                    Develop essential leadership skills for health professionals and team management.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Comprehensive leadership training covering team dynamics, conflict resolution, 
                      strategic planning, and effective communication in healthcare settings.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Team leadership</Badge>
                      <Badge variant="secondary">Conflict management and resolution</Badge>
                      <Badge variant="secondary">Development and implementation of public health strategies</Badge>
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
                    Master research methods including design, qualitative approaches, and questionnaire development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Comprehensive training in research methods from study design to questionnaire 
                      development and psychometric evaluation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Research design</Badge>
                      <Badge variant="secondary">Qualitative research</Badge>
                      <Badge variant="secondary">Development of questionnaires: from questioning to psychometric development</Badge>
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
                Evidence-based psychological and clinical services for individuals and couples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t("services.clinical.individual.example")}</CardTitle>
                  <CardDescription>
                    Specialized psychological interventions using cognitive-behavioral approaches.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Cognitive-Behavioral Therapy (CBT)</li>
                    <li>• Eating disorders treatment</li>
                    <li>• Depression and anxiety management</li>
                    <li>• Chronic disease adjustment</li>
                  </ul>
                  <Button size="sm" asChild>
                    <Link to="/contacts">Schedule Consultation</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("services.clinical.specialized.example")}</CardTitle>
                  <CardDescription>
                    Comprehensive psychological assessment and couple therapy services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Couple therapy</li>
                    <li>• Intervention in eating disorders (anorexia, bulimia, compulsive eating)</li>
                    <li>• Psychological treatment of obesity</li>
                    <li>• Behavioral modification programs</li>
                  </ul>
                  <Button size="sm" asChild>
                    <Link to="/contacts">Learn More</Link>
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
                    Custom software development for healthcare organizations, including patient management systems, 
                    research platforms, and digital health interventions.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <Badge>Digital Health</Badge>
                    <Badge>Patient Management</Badge>
                    <Badge>Research Platforms</Badge>
                    <Badge>Data Analytics</Badge>
                    <Badge>Mobile Health Apps</Badge>
                  </div>
                  <Button asChild>
                    <Link to="/contacts">Discuss Your Project</Link>
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
                      {t("services.publishing.division.example")} specializes in high-quality scientific publications and 
                      creative science-fiction works, bridging the gap between academic rigor and 
                      accessible storytelling.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Scientific book publishing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Science-fiction publications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Editorial consulting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Manuscript development</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button asChild>
                        <a href="https://www.acendalha.pt" target="_blank" rel="noopener noreferrer">
                          Visit Acendalha <ExternalLink className="ml-2" size={16} />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/contacts">Publishing Inquiry</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-lg p-8 text-center">
                    <BookOpen className="h-20 w-20 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-primary mb-2">Acendalha</div>
                    <div className="text-muted-foreground">Publishing Division</div>
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