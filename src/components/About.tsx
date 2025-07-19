import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import profPhoto from '@/assets/prof-bb-sahu.jpg';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Distinguished professor with extensive research experience"
    },
    {
      icon: Award,
      title: "Research Recognition",
      description: "Multiple awards and recognitions for outstanding contributions"
    },
    {
      icon: BookOpen,
      title: "Published Research",
      description: "Numerous publications in top-tier academic journals"
    },
    {
      icon: Users,
      title: "Student Mentorship",
      description: "Guiding and inspiring the next generation of researchers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Professor B.B Sahu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated academic professional committed to advancing knowledge through research, 
            innovation, and excellence in education.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative">
              <img 
                src={profPhoto}
                alt="Professor B.B Sahu"
                className="w-64 h-64 rounded-full object-cover shadow-card-hover border-4 border-primary/20"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Research Focus</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professor B.B Sahu's research encompasses cutting-edge developments in nuclear physics, 
                contributing significantly to both theoretical understanding and practical applications. 
                His work bridges the gap between academic research and real-world solutions in nuclear science.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a commitment to excellence and innovation, Professor Sahu continues to push 
                the boundaries of nuclear physics while fostering an environment of learning and discovery 
                for students and fellow researchers.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Academic Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Believing in the transformative power of education, Professor Sahu emphasizes 
                critical thinking, collaborative research, and the practical application of nuclear physics 
                to address contemporary challenges in energy and technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His approach combines rigorous academic standards with innovative teaching methods, 
                creating an engaging environment that encourages students to explore, question, and discover 
                the mysteries of atomic and nuclear phenomena.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {achievement.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;