import { Github, Linkedin, Twitter, Rss } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Rss, href: "#", label: "RSS Feed" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="font-mono text-muted-foreground text-sm" data-testid="footer-copyright">
            © {currentYear} Neural Dev. Crafted with ❤️ and lots of ☕
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
                data-testid={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
