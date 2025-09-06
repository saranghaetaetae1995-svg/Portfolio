import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Neural Tech Solutions",
    period: "2022 - Present",
    description: "Led development of AI-powered enterprise applications serving 100K+ users. Architected microservices infrastructure that improved system performance by 300%.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    color: "primary"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "CyberSpace Innovations",
    period: "2020 - 2022",
    description: "Developed responsive web applications with focus on performance optimization. Implemented cutting-edge UI/UX designs that increased user engagement by 150%.",
    technologies: ["Vue.js", "TypeScript", "GraphQL", "Figma"],
    color: "secondary"
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Quantum Labs",
    period: "2019 - 2020",
    description: "Contributed to machine learning research projects and developed data visualization tools. Implemented algorithms that improved model accuracy by 25%.",
    technologies: ["Python", "TensorFlow", "Jupyter", "Pandas"],
    color: "accent"
  }
];

const techColors: { [key: string]: string } = {
  "React": "primary",
  "Node.js": "secondary",
  "AWS": "accent",
  "Docker": "primary",
  "Vue.js": "primary",
  "TypeScript": "secondary",
  "GraphQL": "accent",
  "Figma": "primary",
  "Python": "primary",
  "TensorFlow": "secondary",
  "Jupyter": "accent",
  "Pandas": "primary"
};

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(timelineRef, { threshold: 0.2 });

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text font-mono" data-testid="experience-title">
            work.history[]
          </h2>
          
          <div className="relative" ref={timelineRef}>
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary" data-testid="timeline-line"></div>
            
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`timeline-item relative pl-12 pb-12 ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                data-testid={`experience-item-${experience.id}`}
              >
                <div className={`absolute left-2 w-4 h-4 bg-${experience.color} rounded-full border-4 border-background`}></div>
                
                <div className="glow-border rounded-lg p-6 bg-card/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold font-mono text-${experience.color}`} data-testid={`experience-title-${experience.id}`}>
                        {experience.title}
                      </h3>
                      <p className="text-lg text-secondary" data-testid={`experience-company-${experience.id}`}>
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-muted-foreground font-mono text-sm" data-testid={`experience-period-${experience.id}`}>
                      {experience.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4" data-testid={`experience-description-${experience.id}`}>
                    {experience.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 bg-${techColors[tech] || 'primary'}/20 text-${techColors[tech] || 'primary'} text-xs rounded font-mono`}
                        data-testid={`experience-tech-${experience.id}-${tech.toLowerCase().replace('.', '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
