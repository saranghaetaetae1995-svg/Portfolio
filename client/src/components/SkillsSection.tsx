import { useEffect, useRef } from "react";
import { Code, Server, Gavel, Database } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "primary",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Vue.js", level: 82 },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "secondary",
    skills: [
      { name: "Node.js", level: 93 },
      { name: "Python", level: 91 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 80 },
    ]
  },
  {
    title: "DevOps",
    icon: Gavel,
    color: "accent",
    skills: [
      { name: "Docker", level: 89 },
      { name: "AWS", level: 87 },
      { name: "Kubernetes", level: 78 },
      { name: "CI/CD", level: 84 },
    ]
  }
];

const techIcons = [
  { name: "React", icon: "fab fa-react", color: "primary" },
  { name: "Python", icon: "fab fa-python", color: "secondary" },
  { name: "Node.js", icon: "fab fa-node-js", color: "accent" },
  { name: "Docker", icon: "fab fa-docker", color: "primary" },
  { name: "AWS", icon: "fab fa-aws", color: "secondary" },
  { name: "Git", icon: "fab fa-git-alt", color: "accent" },
  { name: "Figma", icon: "fab fa-figma", color: "primary" },
  { name: "Database", icon: "fas fa-database", color: "secondary" },
];

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(skillsRef, { threshold: 0.3 });

  return (
    <section id="skills" className="min-h-screen py-20 relative" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text font-mono" data-testid="skills-title">
            skills.json
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="glow-border rounded-lg p-6 bg-card/50" data-testid={`skill-category-${category.title.toLowerCase()}`}>
                <h3 className={`text-xl font-bold mb-6 text-${category.color} font-mono flex items-center`}>
                  <category.icon className="mr-2 h-5 w-5" />
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace('.', '-')}`}>
                      <div className="flex justify-between mb-2">
                        <span className="font-mono text-sm">{skill.name}</span>
                        <span className="font-mono text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                          data-testid={`skill-progress-${skill.name.toLowerCase().replace('.', '-')}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-center font-mono text-muted-foreground" data-testid="tech-stack-title">
              my_tech_stack = [
            </h3>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
              {techIcons.map((tech, index) => (
                <div 
                  key={tech.name}
                  className={`tech-icon group cursor-pointer transition-all duration-300 hover:scale-110 hover:text-${tech.color}`}
                  data-testid={`tech-icon-${tech.name.toLowerCase().replace('.', '-')}`}
                >
                  <i className={`${tech.icon} text-4xl text-muted-foreground group-hover:text-${tech.color} transition-colors`} />
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground font-mono mt-8">]</p>
          </div>
        </div>
      </div>
    </section>
  );
}
