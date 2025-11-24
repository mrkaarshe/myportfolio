import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">
              <span className="text-foreground">Kaarshe</span>
              <span className="text-primary">.</span>
            </p>
            <p className="text-muted-foreground">
              FUll-Stack Developer • mern-stack Specialist
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/mrkaarshe?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card rounded-lg border border-border hover:border-primary/50 flex items-center justify-center hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eng-kaarshe-51611b387/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card rounded-lg border border-border hover:border-primary/50 flex items-center justify-center hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:odaykaarshe@gmail.com"
              className="w-10 h-10 bg-card rounded-lg border border-border hover:border-primary/50 flex items-center justify-center hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2024 Kaarshe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
