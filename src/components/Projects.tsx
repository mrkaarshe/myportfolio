import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioImg from "@/assets/project-portfolio.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import coffeHub from "@/assets/coffehub.png";

const projects = [
  {
    title: "FastBiteRes Restaurant Website",
    description: "FastBiteRes is a modern restaurant website built with React.js, featuring a full ordering system, interactive carts, and a fully responsive design.",
    image: portfolioImg,
    tags: ["React", "Tailwind CSS", "Responsive","Redux"],
    demoUrl: "https://fast-biet-res.vercel.app/",
    githubUrl: "https://github.com/mrkaarshe/FastBietRes.git",
  },
  {
    title: "Reelzy Movie Trailer Platform",
    description: "Reelzy is a modern movie trailer platform built with React.js. You can log in, add your favorite movies, and enjoy a fully responsive design with a smooth and stylish interface.",
    image: ecommerceImg,
    tags: ["React", "UI Components", "API Integration"],
    demoUrl: "https://es-7-movie-trailer.vercel.app/",
    githubUrl: "https://github.com/mrkaarshe/ES7MovieTrailer.git",
  },
  {
    title: "Artisan Coffee Hub ",
    description: "Artisan Coffee Hub is a premium coffee e-commerce platform built with react.js and shadcn UI. It offers a seamless shopping experience with advanced SEO and performance optimizations.",
    image: coffeHub,
    tags: ["React", "SEO", "Performance","shadcn UI"],
    demoUrl: "https://artisancoffe.vercel.app/",
    githubUrl: "https://github.com/mrkaarshe/artisamCoffe.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button variant="hero" size="sm">
                  
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                  </a>
                  </Button>
                  <Button variant="glow" size="sm">
                    <a href={project.githubUrl} target="_blank"  rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                    </a>
                    
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
