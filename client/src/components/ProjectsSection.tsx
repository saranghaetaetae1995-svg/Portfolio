import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Neural Visualizer",
    description: "Interactive 3D visualization of neural networks with real-time training data and performance metrics.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Three.js", "Python", "TensorFlow"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "DeFi Trading Platform",
    description: "Decentralized trading platform with smart contracts, yield farming, and advanced analytics dashboard.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Solidity", "React", "Web3"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "SecOps Dashboard",
    description: "Real-time cybersecurity monitoring dashboard with threat intelligence and incident response automation.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "D3.js", "ElasticSearch"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "IoT Home Hub",
    description: "Comprehensive IoT platform for smart home automation with ML-powered energy optimization.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Arduino", "Node.js", "MQTT"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Quantum Simulator",
    description: "Educational quantum computing simulator with interactive quantum circuit builder and visualization.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Qiskit", "Python", "WebGL"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "MetaVerse Platform",
    description: "Immersive VR/AR platform for virtual collaboration with spatial computing and haptic feedback.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Unity", "C#", "WebXR"],
    githubUrl: "#",
    liveUrl: "#"
  }
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
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card glow-border rounded-lg bg-card/50 overflow-hidden group"
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
              className="neon-button font-mono text-lg px-8 py-3"
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
