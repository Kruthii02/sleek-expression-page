import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Finance Tracker",
      description:"A user-friendly web application to manage personal finances effectively. Track income, expenses, budgets, and savings with intuitive charts and reports. Helps users make smarter financial decisions, set goals, and stay on top of their financial health.",
      image: "📈",
      tags: ["React", "Node.ja", "CSS"],
      githubUrl: "https://github.com/Kruthii02/personal-finance-tracker02.git",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "📋",
      tags: ["React.js", "Supabase"],
      githubUrl: "https://github.com/Kruthii02/live-task-share.git",
      featured: true
    },
    
    {
      title: "Portfolio Website",
      description: "Modern portfolio website showcasing responsive design, smooth animations, and optimized performance.",
      image: "💼",
      tags: ["React.js", "Tailwind","Supabase,Vercel"],
      githubUrl: "https://github.com/Kruthii02/sleek-expression-page.git",
      featured: false
    },
   
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="project-card p-0 overflow-hidden bg-card border-0"
              >
                {/* Project Image/Icon with dynamic gradient */}
                <div className={`h-48 relative flex items-center justify-center ${
                  index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-accent'
                }`}>
                  <div className="text-6xl">{project.image}</div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 hover:bg-secondary hover:text-white"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Other Projects Grid */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-12">
              More <span className="gradient-text">Projects</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="project-card p-6 bg-card border-0"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{project.image}</div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
