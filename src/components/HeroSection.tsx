import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
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
              className="hero-button text-white px-8 py-3 text-lg font-medium"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-white"
            >
              Download CV
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 fade-in fade-in-delay-3">
            <a href="#" className="p-3 rounded-full bg-card hover:bg-primary hover:text-white transition-all duration-300 shadow-soft">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card hover:bg-secondary hover:text-white transition-all duration-300 shadow-soft">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-card hover:bg-accent hover:text-white transition-all duration-300 shadow-soft">
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