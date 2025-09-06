import { useEffect } from "react";
import ParticleCanvas from "@/components/ParticleCanvas";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Home() {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    document.title = "Neural Dev - Full Stack Developer & AI Enthusiast";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Full Stack Developer specializing in AI, React, Node.js, and cutting-edge web technologies. Building innovative digital experiences with modern tech stack.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress})` }}
        data-testid="scroll-progress"
      />

      {/* Particle Canvas Background */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
