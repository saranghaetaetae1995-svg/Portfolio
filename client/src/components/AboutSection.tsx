import { MapPin, GraduationCap, Coffee } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glow-text font-mono" data-testid="about-title">
            &lt;about_me /&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="font-mono text-sm text-muted-foreground">
                class Developer {'{'}
              </div>
              
              <div className="pl-4">
                <p className="text-lg leading-relaxed mb-6" data-testid="about-description-1">
                  I'm a passionate full-stack developer with a deep love for creating innovative digital experiences. 
                  My journey in tech began with curiosity and has evolved into expertise across multiple domains.
                </p>
                
                <p className="text-lg leading-relaxed mb-6" data-testid="about-description-2">
                  When I'm not coding, you'll find me exploring the latest in AI/ML, contributing to open source projects, 
                  or diving deep into cybersecurity research. I believe in writing clean, efficient code that makes a difference.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3" data-testid="about-location">
                    <MapPin className="text-primary h-5 w-5" />
                    <span>San Francisco, CA</span>
                  </div>
                  
                  <div className="flex items-center space-x-3" data-testid="about-education">
                    <GraduationCap className="text-secondary h-5 w-5" />
                    <span>Computer Science, Stanford University</span>
                  </div>
                  
                  <div className="flex items-center space-x-3" data-testid="about-coffee">
                    <Coffee className="text-accent h-5 w-5" />
                    <span className="font-mono">Coffee.getInstance().drink()</span>
                  </div>
                </div>
              </div>
              
              <div className="font-mono text-sm text-muted-foreground">
                {'}'}
              </div>
            </div>
            
            <div className="relative">
              <div className="glow-border rounded-lg p-8 bg-card/50" data-testid="about-stats">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary" data-testid="stat-experience">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-secondary" data-testid="stat-projects">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent" data-testid="stat-clients">50+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary" data-testid="stat-code">∞</div>
                    <div className="text-sm text-muted-foreground">Lines of Code</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
