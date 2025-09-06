import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "X-Plore India 1.0",
    description: "Designed and developed a responsive travel guide website for users across India.",
    image: "https://drive.google.com/file/d/1VzPdCMFqfVeE7ugzwBjDxOCshczQcTC3/view?usp=sharing",
    technologies: ["Html", "Css", "Javascript", "SQL"],
    liveUrl: "https://vinaydattarao.github.io/X-Plore-India/"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Designed a Gui to handle employee records, attendance, salaries, and departmental data.",
    image: "https://drive.google.com/file/d/1vPcuwXR7OUrLFn2b-d5rfqHyJTWZXGuq/view?usp=sharing",
    technologies: ["Python", "SQL-lite", "Tkinter"],
  },
  {
    id: 3,
    title: "MP3 Music Player",
    description: "Designed a fully functional MP3 Music Player using Python and Tkinter GUI framework.",
    image: "https://drive.google.com/file/d/1qZZy0iIRlNESX9k8CXFiefe9G8glLSox/view?usp=sharing",
    technologies: ["Python", "Tkinter"],
  },
];

const techColors: { [key: string]: string } = {
  "Three.js": "primary",
  "Python": "secondary",
  "TensorFlow": "accent",
  "Solidity": "primary",
  "React": "secondary",
  "Web3": "accent",
  "D3.js": "secondary",
  "ElasticSearch": "accent",
  "Arduino": "primary",
  "Node.js": "secondary",
  "MQTT": "accent",
  "Qiskit": "primary",
  "WebGL": "accent",
  "Unity": "primary",
  "C#": "secondary",
  "WebXR": "accent"
};

export default function ProjectsSection() {
  const viewAllRepositories = () => {
    window.open("https://github.com", "_blank");
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text font-mono" data-testid="projects-title">
            featured.projects()
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card glow-border rounded-lg bg-card/50 overflow-hidden group animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
                data-testid={`project-card-${project.id}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${project.id}`}
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold font-mono" data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    
                    <div className="flex space-x-2">
                      <a 
                        href={project.githubUrl}
                        className="text-primary hover:text-secondary transition-colors"
                        data-testid={`project-github-${project.id}`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="text-primary hover:text-secondary transition-colors"
                        data-testid={`project-live-${project.id}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-2 py-1 bg-${techColors[tech] || 'primary'}/20 text-${techColors[tech] || 'primary'} text-xs rounded font-mono`}
                        data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace('.', '-')}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    className="w-full neon-button text-sm font-mono"
                    data-testid={`project-explore-${project.id}`}
                  >
                    explore_project()
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              className="neon-button font-mono text-lg px-8 py-3 animate-float"
              style={{ animationDelay: "3s" }}
              onClick={viewAllRepositories}
              data-testid="button-view-all-repositories"
            >
              <Github className="mr-2 h-5 w-5" />
              view_all_repositories()
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
