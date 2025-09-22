import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
      
      {/* Floating vibrant elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-xl animate-pulse shadow-glow"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-pulse shadow-vibrant" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in fade-in-delay-1">
            Full-Stack Developer & UI/UX Designer crafting digital experiences 
            that blend creativity with cutting-edge technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in fade-in-delay-2">
            <Button 
              size="lg" 
              className="hero-button px-8 py-3 text-lg font-medium"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary"
              asChild
            >
              <a href="/KRUTHIKA_K_Resume.pdf" download="KRUTHIKA_K_Resume.pdf">
                Download CV
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 fade-in fade-in-delay-3">
            <a href="#" className="p-3 rounded-full bg-card hover:bg-primary transition-all duration-300 shadow-soft hover:shadow-glow">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card hover:bg-secondary transition-all duration-300 shadow-soft hover:shadow-glow">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card hover:bg-accent transition-all duration-300 shadow-soft hover:shadow-vibrant">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;