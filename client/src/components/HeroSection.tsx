import { Download, Rocket } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function HeroSection() {
  const typewriterText = useTypewriter('console.log("Portfolio");', 150, 1000);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/uc?export=download&id=1hC1ZuhwzILOVwW9_Njb2DqCPHUhQqUJu', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div 
            className="font-mono text-primary text-lg mb-4 typing" 
            data-testid="typewriter-text"
          >
            {typewriterText}
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 glitch" 
            data-text="Neural Dev"
            data-testid="hero-title"
          >
            Vinay Datta
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 floating" data-testid="hero-subtitle">
            Python & Frontend Developer
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="neon-button font-mono"
              onClick={downloadResume}
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              download_resume()
            </button>
            
            <button 
              className="neon-button secondary font-mono"
              onClick={scrollToProjects}
              data-testid="button-view-projects"
            >
              <Rocket className="mr-2 h-4 w-4" />
              view_projects()
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-muted-foreground">
          <span className="font-mono text-sm mb-2">scroll.down()</span>
          <div className="w-px h-8 bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
