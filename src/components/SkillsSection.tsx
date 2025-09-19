import { Card } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Zap,
  Globe,
  GitBranch 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      skills: ["Git", "Webpack", "Jest", "Agile", "Scrum"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.title} 
                  className="skill-card p-6 text-center bg-card border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Tech Stack Highlight */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8">
              Currently Working With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"].map((tech) => (
                <div 
                  key={tech}
                  className="px-6 py-3 bg-gradient-primary text-white rounded-full font-medium shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;