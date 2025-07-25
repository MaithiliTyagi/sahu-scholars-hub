import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Globe, Clock, Building } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "bbsahu@university.edu",
      subtitle: "Primary contact for academic inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 (0) 1234-567890",
      subtitle: "Office hours: Monday - Friday"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "Room 123, Academic Block",
      subtitle: "University Campus, City - 123456"
    },
    {
      icon: Building,
      title: "Department",
      details: "Department of Research",
      subtitle: "Faculty of Academic Sciences"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9:00 AM - 5:00 PM",
      subtitle: "Appointments preferred"
    },
    {
      icon: Globe,
      title: "Research Profile",
      details: "university.edu/faculty/bbsahu",
      subtitle: "Complete academic profile"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for research collaborations, academic inquiries, or to learn more 
            about joining our research group.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 text-center">
              <CardHeader>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {contact.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="font-medium text-foreground mb-2">
                  {contact.details}
                </p>
                <p className="text-sm text-muted-foreground">
                  {contact.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Research inquiry, collaboration, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please describe your inquiry or interest in detail..."
                  />
                </div>
                
                <Button size="lg" className="w-full gap-2">
                  <Mail className="h-5 w-5" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;