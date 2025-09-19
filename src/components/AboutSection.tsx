import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-square bg-gradient-primary rounded-3xl p-1">
                <div className="w-full h-full bg-card rounded-3xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6">
              <Card className="p-6 glass-card">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Passionate Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 5 years of experience in web development, I specialize in 
                  creating scalable applications using modern technologies like React, 
                  Node.js, and TypeScript. I'm passionate about clean code, user 
                  experience, and bringing innovative ideas to life.
                </p>
              </Card>
              
              <Card className="p-6 glass-card">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  Creative Problem Solver
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in the power of design thinking and agile methodologies 
                  to solve complex problems. My approach combines technical expertise 
                  with creative vision to deliver solutions that not only work 
                  flawlessly but also provide exceptional user experiences.
                </p>
              </Card>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;