import { useEffect, useRef } from "react";
import { Code, Server, Gavel, Database, Globe, GitBranch, Palette, Cpu, Cloud, Container, Box, Smartphone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "primary",
    skills: [
      { name: "Html", level: 100 },
      { name: "Css", level: 60 },
      { name: "Javascript", level: 70 },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "secondary",
    skills: [
      { name: "Python", level: 100 },
      { name: "MongoDB", level: 100 },
      { name: "SQL", level: 100 },
      { name: "Django", level: 70 },
    ]
  },
  {
    title: "DevOps",
    icon: Gavel,
    color: "accent",
    skills: [
      { name: "Git / Github", level: 90 },
      { name: "Jenkins", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Kubernetes", level: 40 },
    ]
  }
];

const techIcons = [
  { name: "React", icon: Code, color: "primary" },
  { name: "Python", icon: Cpu, color: "secondary" },
  { name: "Node.js", icon: Server, color: "accent" },
  { name: "Docker", icon: Container, color: "primary" },
  { name: "AWS", icon: Cloud, color: "secondary" },
  { name: "Git", icon: GitBranch, color: "accent" },
  { name: "Figma", icon: Palette, color: "primary" },
  { name: "Database", icon: Database, color: "secondary" },
  { name: "TypeScript", icon: Box, color: "accent" },
  { name: "Mobile", icon: Smartphone, color: "primary" },
  { name: "Web", icon: Globe, color: "secondary" },
  { name: "DevOps", icon: Gavel, color: "accent" },
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
            
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center">
              {techIcons.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="tech-icon group cursor-pointer transition-all duration-500 hover:scale-125 hover:rotate-6 transform-gpu"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`tech-icon-${tech.name.toLowerCase().replace('.', '-')}`}
                >
                  <div className={`
                    relative p-4 rounded-xl bg-card/30 border border-border/50
                    group-hover:bg-${tech.color}/10 group-hover:border-${tech.color}/50
                    group-hover:shadow-lg group-hover:shadow-${tech.color}/20
                    transition-all duration-500 ease-out
                    animate-float
                  `}>
                    <tech.icon 
                      className={`
                        h-8 w-8 text-muted-foreground 
                        group-hover:text-${tech.color} 
                        transition-all duration-500 ease-out
                        group-hover:drop-shadow-[0_0_8px_var(--${tech.color})]
                      `} 
                    />
                    <div className={`
                      absolute inset-0 rounded-xl opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-t from-${tech.color}/5 to-transparent
                    `} />
                  </div>
                  <span className={`
                    block text-xs font-mono mt-2 text-center
                    text-muted-foreground group-hover:text-${tech.color}
                    transition-colors duration-300 opacity-0 group-hover:opacity-100
                  `}>
                    {tech.name}
                  </span>
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
