import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Users, TrendingUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Unbreakable Idea Research
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Advancing Health Through Innovation, Research, and Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">
                Our Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for health research, education, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Research Activities</CardTitle>
                <CardDescription>
                  Quantitative & qualitative research, statistical analysis, and data visualization
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Training Programs</CardTitle>
                <CardDescription>
                  Leadership development, health communication, and research methodology training
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Clinical Services</CardTitle>
                <CardDescription>
                  Cognitive-behavioral therapy, psychological assessment, and specialized treatments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Editorial Services</CardTitle>
                <CardDescription>
                  Scientific and science-fiction publishing through Acendalha Publishing
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Leading Innovation in Health Research
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Under the leadership of CEO Osvaldo Santos, a renowned clinical and health psychologist,
                UBKIR combines cutting-edge research methodologies with practical applications in healthcare,
                education, and digital innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our multidisciplinary approach ensures comprehensive solutions that bridge the gap between
                academic research and real-world healthcare challenges.
              </p>
              <Button asChild>
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg text-muted-foreground mb-4">Years of Experience</div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-lg text-muted-foreground">Research Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our expertise can support your research, training, or clinical needs.
          </p>
          <Button size="lg" asChild>
            <Link to="/contacts">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;