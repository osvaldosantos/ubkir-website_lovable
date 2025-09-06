import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, BookOpen, Users, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Led by renowned experts in clinical psychology, health research, and innovation,
            our multidisciplinary team brings together decades of experience and cutting-edge expertise.
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
                      <h2 className="text-3xl font-bold text-foreground">Osvaldo Santos</h2>
                      <p className="text-lg text-primary font-semibold">CEO & Clinical Health Psychologist</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    Dr. Osvaldo Santos is a distinguished clinical and health psychologist with extensive 
                    experience in clinical practice, research, and teaching. As the head of the EnviHeB Lab 
                    and one of Portugal's most cited psychologists, Dr. Santos brings unparalleled expertise 
                    to UBKIR's mission of advancing health through innovation and research.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Key Achievements</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Head of EnviHeB Lab at ISAMB</li>
                        <li>• One of Portugal's most cited psychologists</li>
                        <li>• Extensive research in health psychology</li>
                        <li>• Clinical expertise in multiple therapeutic approaches</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Specializations</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Clinical Psychology</li>
                        <li>• Health Psychology Research</li>
                        <li>• Academic Leadership</li>
                        <li>• Research Methodology</li>
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
                  <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg p-8 mb-6">
                    <Brain className="h-20 w-20 text-primary mx-auto mb-4" />
                    <div className="text-sm text-muted-foreground">Leading Expert in</div>
                    <div className="text-lg font-semibold text-primary">Health Psychology</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100+</div>
                      <div className="text-sm text-muted-foreground">Research Publications</div>
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
            Our Collective Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Research Excellence</CardTitle>
                <CardDescription>
                  Advanced methodologies in quantitative and qualitative research across health sciences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Clinical Practice</CardTitle>
                <CardDescription>
                  Evidence-based therapeutic interventions and psychological assessment expertise.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Training & Education</CardTitle>
                <CardDescription>
                  Professional development programs and academic training in health sciences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Publishing & Innovation</CardTitle>
                <CardDescription>
                  Editorial excellence and digital innovation in health-related technologies.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Research Lab Connection */}
        <section className="bg-muted rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              EnviHeB Lab Partnership
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Through Dr. Osvaldo Santos' leadership of the EnviHeB Lab at ISAMB, 
              UBKIR maintains strong connections with cutting-edge academic research 
              and international collaboration networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Research Leadership</h3>
              <p className="text-sm text-muted-foreground">
                Leading innovative research projects in environmental health and behavior.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Academic Network</h3>
              <p className="text-sm text-muted-foreground">
                Strong connections with national and international research institutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Publication Impact</h3>
              <p className="text-sm text-muted-foreground">
                High-impact research publications contributing to global health knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Specialization Areas */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Professional Specializations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Clinical Psychology",
              "Health Psychology", 
              "Research Methodology",
              "Statistical Analysis",
              "Psychometric Assessment",
              "Cognitive-Behavioral Therapy",
              "Health Communication",
              "Leadership Training",
              "Qualitative Research",
              "Data Visualization",
              "Digital Health Solutions",
              "Editorial Services"
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
            Work with Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to collaborate with leading experts in health research and clinical psychology? 
            Contact us to discuss your project or service needs.
          </p>
          <Button size="lg" asChild>
            <Link to="/contacts">
              Start a Conversation
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Team;