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

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions spanning research, training, clinical services, 
            and digital innovation in the health sector.
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="clinical">Clinical</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
            <TabsTrigger value="publishing">Publishing</TabsTrigger>
          </TabsList>

          {/* Research Activities */}
          <TabsContent value="research" className="space-y-8">
            <div className="text-center mb-12">
              <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Research Activities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Evidence-based research solutions using advanced methodologies and cutting-edge analytics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Quantitative Research</CardTitle>
                  <CardDescription>
                    Comprehensive surveys, statistical analysis, and data-driven insights for informed decision-making.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Survey design and implementation</li>
                    <li>• Statistical analysis and modeling</li>
                    <li>• Data visualization and dashboards</li>
                    <li>• Epidemiological studies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Qualitative Research</CardTitle>
                  <CardDescription>
                    In-depth exploration of human experiences through focus groups, interviews, and ethnographic studies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Focus group facilitation</li>
                    <li>• In-depth interviews</li>
                    <li>• World Café methodology</li>
                    <li>• Thematic analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Specialized Methods</CardTitle>
                  <CardDescription>
                    Advanced research methodologies for complex health and behavioral studies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Delphi consensus panels</li>
                    <li>• Psychometric analysis</li>
                    <li>• Real-world evidence research</li>
                    <li>• Marketing research</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Training Programs */}
          <TabsContent value="training" className="space-y-8">
            <div className="text-center mb-12">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Training Programs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional development programs designed to enhance skills and knowledge in healthcare and research.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>Promotion of Treatment Adherence</CardTitle>
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
                      <Badge variant="secondary">Behavioral Change</Badge>
                      <Badge variant="secondary">Patient Engagement</Badge>
                      <Badge variant="secondary">Communication</Badge>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contacts">Enroll Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>Leadership in Healthcare</CardTitle>
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
                      <Badge variant="secondary">Team Management</Badge>
                      <Badge variant="secondary">Strategic Planning</Badge>
                      <Badge variant="secondary">Healthcare Systems</Badge>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contacts">Enroll Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle>Qualitative Research Methods</CardTitle>
                  <CardDescription>
                    Master advanced qualitative research techniques and analysis methods.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Hands-on training in qualitative methodologies, from study design to data collection 
                      and analysis using state-of-the-art techniques and software.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Interview Techniques</Badge>
                      <Badge variant="secondary">Data Analysis</Badge>
                      <Badge variant="secondary">Research Design</Badge>
                    </div>
                    <Button size="sm" asChild>
                      <Link to="/contacts">Enroll Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Clinical Services */}
          <TabsContent value="clinical" className="space-y-8">
            <div className="text-center mb-12">
              <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Clinical Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Evidence-based psychological and clinical services for individuals and couples.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Individual Therapy</CardTitle>
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
                  <CardTitle>Specialized Services</CardTitle>
                  <CardDescription>
                    Comprehensive psychological assessment and couple therapy services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Psychological assessment</li>
                    <li>• Couple therapy</li>
                    <li>• Health psychology interventions</li>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Digital Development</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Innovative health-related software and digital solutions for modern healthcare challenges.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Health Software Solutions</h3>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Acendalha Publishing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional editorial services for scientific and science-fiction publications.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Editorial Excellence</h3>
                    <p className="text-muted-foreground mb-6">
                      Acendalha Publishing specializes in high-quality scientific publications and 
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