import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLanguage } from "@/contexts/LanguageContext";

const Contacts = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t("contacts.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contacts.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  {t("contacts.office.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">{t("contacts.office.address")}</p>
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
                      {t("contacts.map.placeholder")}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("contacts.map.note")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  {t("contacts.info.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">{t("contacts.email")}</p>
                  <p className="text-muted-foreground">geral@ubkir.pt</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">{t("contacts.hours.title")}</p>
                  <div className="text-muted-foreground text-sm space-y-1">
                    <p>{t("contacts.hours.monday")}</p>
                    <p>{t("contacts.hours.saturday")}</p>
                    <p>{t("contacts.hours.sunday")}</p>
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
                <CardTitle>{t("contacts.general.title")}</CardTitle>
                <CardDescription>
                  {t("contacts.general.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Alert className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {t("contacts.alert")}
                  </AlertDescription>
                </Alert>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">{t("contacts.form.firstName")}</Label>
                      <Input id="firstName" placeholder={t("contacts.form.firstName.placeholder")} />
                    </div>
                    <div>
                      <Label htmlFor="lastName">{t("contacts.form.lastName")}</Label>
                      <Input id="lastName" placeholder={t("contacts.form.lastName.placeholder")} />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">{t("contacts.form.email")}</Label>
                    <Input id="email" type="email" placeholder={t("contacts.form.email.placeholder")} />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">{t("contacts.form.subject")}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t("contacts.form.subject.placeholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="research">{t("contacts.form.subject.research")}</SelectItem>
                        <SelectItem value="training">{t("contacts.form.subject.training")}</SelectItem>
                        <SelectItem value="clinical">{t("contacts.form.subject.clinical")}</SelectItem>
                        <SelectItem value="digital">{t("contacts.form.subject.digital")}</SelectItem>
                        <SelectItem value="publishing">{t("contacts.form.subject.publishing")}</SelectItem>
                        <SelectItem value="collaboration">{t("contacts.form.subject.collaboration")}</SelectItem>
                        <SelectItem value="other">{t("contacts.form.subject.other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t("contacts.form.message")}</Label>
                    <Textarea 
                      id="message" 
                      placeholder={t("contacts.form.message.placeholder")}
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full">{t("contacts.form.send")}</Button>
                </form>
              </CardContent>
            </Card>

            {/* Training Enrollment Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t("contacts.training.enrollment")}</CardTitle>
                <CardDescription>
                  {t("contacts.training.enrollment.desc")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="trainingName">{t("contacts.training.name")}</Label>
                      <Input id="trainingName" placeholder={t("contacts.training.name.placeholder")} />
                    </div>
                    <div>
                      <Label htmlFor="trainingEmail">{t("contacts.form.email")}</Label>
                      <Input id="trainingEmail" type="email" placeholder={t("contacts.training.email.placeholder")} />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="organization">{t("contacts.training.organization")}</Label>
                    <Input id="organization" placeholder={t("contacts.training.organization.placeholder")} />
                  </div>
                  
                  <div>
                    <Label htmlFor="trainingProgram">{t("contacts.training.program")}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t("contacts.training.program.placeholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="adherence">{t("contacts.training.adherence")}</SelectItem>
                        <SelectItem value="leadership">{t("contacts.training.leadership")}</SelectItem>
                        <SelectItem value="qualitative">{t("contacts.training.qualitative")}</SelectItem>
                        <SelectItem value="custom">{t("contacts.training.custom")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="trainingComments">{t("contacts.training.comments")}</Label>
                    <Textarea 
                      id="trainingComments" 
                      placeholder={t("contacts.training.comments.placeholder")}
                      rows={3}
                    />
                  </div>
                  
                  <Button className="w-full">{t("contacts.training.submit")}</Button>
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
                  {t("contacts.cta.title")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t("contacts.cta.desc")}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t("contacts.response.title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("contacts.response.desc")}
                  </p>
                </div>
                
                <div>
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t("contacts.direct.title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("contacts.direct.desc")}
                  </p>
                </div>
                
                <div>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{t("contacts.visit.title")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("contacts.visit.desc")}
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