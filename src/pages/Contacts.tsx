import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contacts = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch to discuss your research, training, or clinical service needs.
            We're here to help you advance your health-related projects and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      Estrada Nacional 115, nº1<br />
                      2550-426 Painho<br />
                      Portugal
                    </p>
                  </div>
                  
                  {/* Map Placeholder */}
                  <div className="bg-muted rounded-lg p-8 text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map with satellite view coming soon
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      (Requires Supabase integration for full functionality)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">geral@ubkir.pt</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Business Hours</p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Forms */}
          <div className="space-y-8">
            {/* General Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>General Inquiry</CardTitle>
                <CardDescription>
                  Send us a message about our services or general questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Email functionality requires Supabase integration to be fully operational.
                  </AlertDescription>
                </Alert>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="research">Research Services</SelectItem>
                        <SelectItem value="training">Training Programs</SelectItem>
                        <SelectItem value="clinical">Clinical Services</SelectItem>
                        <SelectItem value="digital">Digital Development</SelectItem>
                        <SelectItem value="publishing">Publishing Services</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Training Enrollment Form */}
            <Card>
              <CardHeader>
                <CardTitle>Training Program Enrollment</CardTitle>
                <CardDescription>
                  Register your interest in our professional training programs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="trainingName">Full Name</Label>
                      <Input id="trainingName" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="trainingEmail">Email</Label>
                      <Input id="trainingEmail" type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input id="organization" placeholder="Your organization or institution" />
                  </div>
                  
                  <div>
                    <Label htmlFor="trainingProgram">Training Program</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select training program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adherence">Promotion of Treatment Adherence</SelectItem>
                        <SelectItem value="leadership">Leadership in Healthcare</SelectItem>
                        <SelectItem value="qualitative">Qualitative Research Methods</SelectItem>
                        <SelectItem value="custom">Custom Training (specify in comments)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="trainingComments">Additional Comments</Label>
                    <Textarea 
                      id="trainingComments" 
                      placeholder="Any specific requirements or questions about the training?"
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full">Submit Enrollment</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Info */}
        <section className="mt-20">
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Whether you need research support, training programs, clinical services, or digital solutions,
                  our team is ready to help you achieve your goals with evidence-based approaches.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>
                
                <div>
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Direct Communication</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach out directly to geral@ubkir.pt for immediate assistance.
                  </p>
                </div>
                
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule an in-person consultation at our Painho office.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contacts;