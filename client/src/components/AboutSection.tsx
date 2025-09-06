import { MapPin, GraduationCap, Linkedin } from "lucide-react";

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
                  I’m a Python and Frontend Developer obsessed with clean code and building interfaces that compile well with user experience.
                  My idea of fun is debugging until 2 AM and experimenting with new frameworks just to squeeze out a few milliseconds of speed.
                </p>
                
                <p className="text-lg leading-relaxed mb-6" data-testid="about-description-2">
                  When I’m not coding, I’m usually geeking out over tech that makes humans lazier in a good way. 
                  From testing quirky Linux distros to messing with editing tools and random utilities, 
                  I love tinkering with anything that automates, optimizes, or just looks cool enough to break 
                  first and master later. For me, exploring new tech isn’t a hobby it’s basically a reflex.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3" data-testid="about-location">
                    <MapPin className="text-primary h-5 w-5" />
                    <span>Hyderabad, India</span>
                  </div>
                  
                  <div className="flex items-center space-x-3" data-testid="about-education">
                    <GraduationCap className="text-secondary h-5 w-5" />
                    <span>Computer Science, Sree Dattha Institute of Engineering and Science</span>
                  </div>
                  
                  <div className="flex items-center space-x-3" data-testid="about-coffee">
                    <Linkedin className="text-accent h-5 w-5" />
                    <span className="font-mono">Vinay Datta</span>
                  </div>
                </div>
              </div>
              
              <div className="font-mono text-sm text-muted-foreground">
                {'}'}
              </div>
            </div>
            
            <div className="relative">
              <div className="glow-border rounded-lg p-8 glass-card" data-testid="about-stats">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary" data-testid="stat-experience">3</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-secondary" data-testid="stat-projects">3</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-accent" data-testid="stat-clients">40+</div>
                    <div className="text-sm text-muted-foreground">Leetcode Problems</div>
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
