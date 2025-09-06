import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "X-Plore India 1.0",
    description: "Designed and developed a responsive travel guide website for users across India.",
    image: "https://images.pexels.com/photos/33797056/pexels-photo-33797056.jpeg",
    technologies: ["HTML", "CSS", "Javascript", "SQL"],
    liveUrl: "https://vinaydattarao.github.io/X-Plore-India/",
    exploreUrl: "https://github.com/VinayDattarao/X-Plore-India"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Designed a GUI to handle employee records, attendance, salaries, and departmental data.",
    image: "https://images.pexels.com/photos/33797203/pexels-photo-33797203.jpeg",
    technologies: ["Python", "SQLite", "Tkinter"],
    exploreUrl: "https://github.com/VinayDattarao/Employee-Management-System"
  },
  {
    id: 3,
    title: "MP3 Music Player",
    description: "Designed a fully functional MP3 Music Player using Python and Tkinter GUI framework.",
    image: "https://images.pexels.com/photos/33797217/pexels-photo-33797217.png",
    technologies: ["Python", "Tkinter"],
    exploreUrl: "https://github.com/VinayDattarao/Python-Projects/tree/main/Mp3%20Player"
  }
];

const techColors: { [key: string]: string } = {
  "HTML": "primary",
  "CSS": "secondary", 
  "Javascript": "accent",
  "Python": "secondary",
  "SQL": "accent",
  "SQLite": "primary",
  "Tkinter": "secondary"
};

export default function ProjectsSection() {
  const viewAllRepositories = () => {
    window.open("https://github.com/VinayDattarao", "_blank");
  };

  const handleExploreProject = (project: any) => {
    if (project.exploreUrl) {
      window.open(project.exploreUrl, '_blank');
    } else if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
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
                className="project-card glow-border rounded-lg glass-card overflow-hidden group animate-float"
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
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                          data-testid={`project-github-${project.id}`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                          data-testid={`project-live-${project.id}`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
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
                    onClick={() => handleExploreProject(project)}
                    data-testid={`project-explore-${project.id}`}
                  >
                    explore_project()
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button 
              className="neon-button font-mono text-lg px-8 py-3 animate-float flex items-center justify-center"
              style={{ animationDelay: "3s" }}
              onClick={viewAllRepositories}
              data-testid="button-view-all-repositories"
            >
              <Github className="mr-2 h-5 w-5" />
              All_Repositories()
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
