import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Mail, ExternalLink, BookOpen } from 'lucide-react';

const Students = () => {
  const currentStudents = [
    {
      name: "Priya Sharma",
      level: "PhD Student",
      year: "3rd Year",
      research: "Machine Learning Applications in Data Analysis",
      email: "priya.sharma@university.edu"
    },
    {
      name: "Rajesh Kumar",
      level: "PhD Student", 
      year: "2nd Year",
      research: "Advanced Statistical Methods in Research",
      email: "rajesh.kumar@university.edu"
    },
    {
      name: "Anita Patel",
      level: "PhD Student",
      year: "1st Year", 
      research: "Computational Methods in Academic Research",
      email: "anita.patel@university.edu"
    },
    {
      name: "Vikram Singh",
      level: "Masters Student",
      year: "2nd Year",
      research: "Research Methodology and Academic Writing",
      email: "vikram.singh@university.edu"
    },
    {
      name: "Sneha Gupta",
      level: "Masters Student",
      year: "1st Year",
      research: "Literature Review and Systematic Analysis",
      email: "sneha.gupta@university.edu"
    },
    {
      name: "Amit Joshi",
      level: "Research Scholar",
      year: "Visiting",
      research: "Collaborative Research Methodologies",
      email: "amit.joshi@university.edu"
    }
  ];

  const alumni = [
    {
      name: "Dr. Neha Agarwal",
      year: "2023",
      currentPosition: "Assistant Professor, IIT Delhi",
      thesis: "Advanced Research Techniques in Modern Academia"
    },
    {
      name: "Dr. Suresh Yadav", 
      year: "2022",
      currentPosition: "Research Scientist, CSIR",
      thesis: "Innovation in Academic Research Methodologies"
    },
    {
      name: "Dr. Kavita Reddy",
      year: "2021", 
      currentPosition: "Senior Researcher, Industry Research Lab",
      thesis: "Collaborative Approaches to Academic Excellence"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'PhD Student':
        return 'bg-primary/10 text-primary';
      case 'Masters Student':
        return 'bg-accent/10 text-accent-foreground';
      case 'Research Scholar':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="students" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and scholars working under Professor B.B Sahu's guidance, 
            contributing to cutting-edge research and academic excellence.
          </p>
        </div>

        {/* Current Students */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Current Students
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStudents.map((student, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {student.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {student.year}
                      </p>
                    </div>
                    <Badge className={getLevelColor(student.level)}>
                      {student.level}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Research Focus
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {student.research}
                      </p>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Mail className="h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Alumni */}
        <div>
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Notable Alumni
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {alumni.map((alum, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {alum.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Graduated {alum.year}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Current Position
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {alum.currentPosition}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Thesis
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {alum.thesis}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            <ExternalLink className="h-5 w-5" />
            Join Our Research Group
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Students;