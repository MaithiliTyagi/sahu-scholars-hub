import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Mail, ExternalLink, BookOpen, Linkedin } from 'lucide-react';

const Students = () => {
  const currentStudents = [
    {
      name: "Priya Sharma",
      level: "PhD Student",
      year: "3rd Year",
      research: "Theoretical Nuclear Physics and Quantum Models",
      email: "priya.sharma@kiit.ac.in",
      linkedin: "priya-sharma-nuclear",
      photo: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Rajesh Kumar",
      level: "PhD Student", 
      year: "2nd Year",
      research: "Nuclear Reactor Physics and Safety Analysis",
      email: "rajesh.kumar@kiit.ac.in",
      linkedin: "rajesh-kumar-nuclear",
      photo: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Anita Patel",
      level: "PhD Student",
      year: "1st Year", 
      research: "Heavy Ion Collisions and Nuclear Structure",
      email: "anita.patel@kiit.ac.in",
      linkedin: "anita-patel-physics",
      photo: "photo-1438761681033-6461ffad8d80"
    },
    {
      name: "Vikram Singh",
      level: "Masters Student",
      year: "2nd Year",
      research: "Nuclear Astrophysics and Stellar Nucleosynthesis",
      email: "vikram.singh@kiit.ac.in",
      linkedin: "vikram-singh-astrophysics",
      photo: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Sneha Gupta",
      level: "Masters Student",
      year: "1st Year",
      research: "Radiation Detection and Nuclear Instrumentation",
      email: "sneha.gupta@kiit.ac.in",
      linkedin: "sneha-gupta-nuclear",
      photo: "photo-1544005313-94ddf0286df2"
    },
    {
      name: "Amit Joshi",
      level: "Research Scholar",
      year: "Visiting",
      research: "Nuclear Waste Management and Sustainability",
      email: "amit.joshi@kiit.ac.in",
      linkedin: "amit-joshi-nuclear",
      photo: "photo-1519345182560-3f2917c472ef"
    }
  ];

  const alumni = [
    {
      name: "Dr. Neha Agarwal",
      year: "2023",
      currentPosition: "Assistant Professor, IIT Delhi",
      thesis: "Nuclear Shell Model and Exotic Nuclei",
      email: "neha.agarwal@iitd.ac.in",
      linkedin: "neha-agarwal-iitd",
      photo: "photo-1487412720507-e7ab37603c6f"
    },
    {
      name: "Dr. Suresh Yadav", 
      year: "2022",
      currentPosition: "Research Scientist, BARC",
      thesis: "Fusion Plasma Physics and Reactor Design",
      email: "suresh.yadav@barc.gov.in",
      linkedin: "suresh-yadav-barc",
      photo: "photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Dr. Kavita Reddy",
      year: "2021", 
      currentPosition: "Senior Nuclear Engineer, NPCIL",
      thesis: "Nuclear Safety Systems and Risk Assessment",
      email: "kavita.reddy@npcil.co.in",
      linkedin: "kavita-reddy-npcil",
      photo: "photo-1534528741775-53994a69daeb"
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
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${student.photo}?w=150&h=150&fit=crop&crop=face`}
                      alt={student.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {student.name}
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Badge className={getLevelColor(student.level)}>
                      {student.level}
                    </Badge>
                    <Badge variant="outline">
                      {student.year}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center justify-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Research Focus
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed text-center">
                        {student.research}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={`mailto:${student.email}`}>
                          <Mail className="h-4 w-4" />
                          Email
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={`https://linkedin.com/in/${student.linkedin}`} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
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
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={`https://images.unsplash.com/${alum.photo}?w=150&h=150&fit=crop&crop=face`}
                      alt={alum.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {alum.name}
                  </CardTitle>
                  <Badge variant="outline" className="mt-2">
                    Graduated {alum.year}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
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
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                      <a href={`mailto:${alum.email}`}>
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                      <a href={`https://linkedin.com/in/${alum.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
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