import { Download, Rocket, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function HeroSection() {
  const typewriterText = useTypewriter('console.log("Portfolio");', 150, 1000);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
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
            className="text-5xl md:text-7xl font-bold mb-6" 
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
        <button 
          onClick={scrollToAbout}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 group cursor-pointer"
        >
          <span className="font-mono text-sm mb-3 group-hover:text-primary transition-colors">scroll.down()</span>
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-primary/50 group-hover:border-primary flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] group-hover:bg-primary/10">
              <ChevronDown 
                className="w-5 h-5 text-primary animate-bounce group-hover:scale-110 transition-transform" 
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-ping opacity-75"></div>
          </div>
        </button>
      </div>
    </section>
  );
}
