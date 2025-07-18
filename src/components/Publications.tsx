import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Calendar, Users } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Advanced Research Methodologies in Modern Academic Practice",
      journal: "International Journal of Academic Research",
      year: "2024",
      authors: "B.B Sahu, et al.",
      abstract: "This paper explores innovative methodologies that enhance research quality and impact in contemporary academic environments.",
      type: "Journal Article",
      status: "Published"
    },
    {
      title: "Innovative Approaches to Student Engagement in Higher Education",
      journal: "Educational Innovation Quarterly",
      year: "2023",
      authors: "B.B Sahu, Research Team",
      abstract: "A comprehensive study on modern pedagogical techniques that improve student engagement and learning outcomes.",
      type: "Research Paper",
      status: "Published"
    },
    {
      title: "Collaborative Research Networks: Building Academic Communities",
      journal: "Academic Collaboration Review",
      year: "2023",
      authors: "B.B Sahu, International Collaborators",
      abstract: "Examining the role of collaborative networks in advancing research quality and international academic partnerships.",
      type: "Conference Paper",
      status: "Published"
    },
    {
      title: "Future Directions in Academic Research Excellence",
      journal: "Frontiers in Higher Education",
      year: "2024",
      authors: "B.B Sahu",
      abstract: "A forward-looking analysis of emerging trends and opportunities in academic research and institutional development.",
      type: "Review Article",
      status: "In Press"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'In Press':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Journal Article':
        return 'bg-primary/10 text-primary';
      case 'Conference Paper':
        return 'bg-accent/10 text-accent-foreground';
      case 'Review Article':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Publications & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore Professor B.B Sahu's extensive research contributions and published works 
            that advance knowledge in academic fields.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="text-xl font-semibold text-foreground leading-tight">
                    {pub.title}
                  </CardTitle>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className={getTypeColor(pub.type)}>
                      {pub.type}
                    </Badge>
                    <Badge className={getStatusColor(pub.status)}>
                      {pub.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span className="font-medium">{pub.journal}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{pub.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{pub.authors}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                  
                  <div className="pt-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      View Publication
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            <FileText className="h-5 w-5" />
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;