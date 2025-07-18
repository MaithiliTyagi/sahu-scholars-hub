import { Button } from '@/components/ui/button';
import { Mail, FileText, Users } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Academic Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 text-white">
            {/* Professor Photo */}
            <div className="animate-fade-in lg:w-1/3">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Prof. B.B Sahu" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">BS</span>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="animate-fade-in lg:w-2/3 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Prof. B.B Sahu
              </h1>
              <h2 className="text-2xl md:text-3xl mb-4 opacity-90 text-accent">
                Nuclear Physics Lab
              </h2>
              <h3 className="text-xl md:text-2xl mb-6 opacity-80">
                KIIT University
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl lg:max-w-none">
                Leading innovative research in nuclear physics and mentoring the next generation of scientists in cutting-edge research.
              </p>
            </div>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
              onClick={() => scrollToSection('publications')}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Publications
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection('students')}
            >
              <Users className="mr-2 h-5 w-5" />
              Research Group
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent opacity-20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-primary-glow opacity-20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;