import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Award, Globe, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About UBKIR
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unbreakable Idea Research is a pioneering organization dedicated to advancing health 
            through innovative research, comprehensive training, and evidence-based clinical services.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To bridge the gap between cutting-edge research and practical healthcare solutions, 
                providing comprehensive services that enhance health outcomes, professional development, 
                and scientific knowledge across multiple disciplines.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be a leading international organization in health research and innovation, 
                fostering evidence-based practices that transform healthcare delivery and 
                improve quality of life for individuals and communities worldwide.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Commitment to the highest standards in research, training, and clinical practice.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Compassion</h3>
              <p className="text-muted-foreground">
                Putting human wellbeing at the center of everything we do.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Embracing new technologies and methodologies to advance healthcare.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Maintaining the highest ethical standards in all our activities.
              </p>
            </div>
          </div>
        </section>

        {/* Company Background */}
        <section className="bg-muted rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Founded with the vision of creating unbreakable connections between research, 
              education, and clinical practice, UBKIR has grown into a multidisciplinary 
              organization that serves clients across Portugal and internationally.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Based in Painho, Portugal, we combine local expertise with global perspectives, 
              offering comprehensive services that span from individual psychological support 
              to large-scale research initiatives and professional training programs.
            </p>
            <p className="text-lg leading-relaxed">
              Our diverse portfolio includes quantitative and qualitative research, 
              statistical analysis, psychometric evaluation, clinical psychology services, 
              professional training, and editorial services through our Acendalha Publishing division.
            </p>
          </div>
        </section>

        {/* Specializations */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Areas of Specialization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Quantitative Research & Surveys",
              "Qualitative Research & Focus Groups",
              "Statistical Analysis & Data Visualization",
              "Psychometric Analysis",
              "Real World Evidence Research",
              "Marketing Research",
              "Health Communication Training",
              "Leadership Development",
              "Cognitive-Behavioral Therapy",
              "Eating Disorders Treatment",
              "Chronic Disease Management",
              "Scientific Publishing"
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