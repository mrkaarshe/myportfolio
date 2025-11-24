import { 
  Globe, 
  Search, 
  Server, 
  Code, 
  Smartphone, 
  Figma, 
  Briefcase,
  Layers,
  Terminal,
  Zap,
  Layout
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Full-Stack Web Development",
    description: "End-to-end development of modern, scalable web applications using the MERN stack and clean architectural patterns.",
  },
  {
    icon: Code,
    title: "React Frontend Engineering",
    description: "Building fast, interactive, and component-driven frontends with React.js, TailwindCSS, and modern UI design systems.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Developing secure and scalable REST APIs using Node.js and Express, with optimized database structures.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Adaptive Design",
    description: "Creating seamless user experiences that look perfect on all devices, from mobile to large desktops.",
  },
  {
    icon: Figma,
    title: "UI Implementation from Figma",
    description: "Converting Figma UI/UX designs into pixel-perfect, accessible, fully functional web interfaces.",
  },
  {
    icon: Layers,
    title: "System Architecture Design",
    description: "Planning and structuring scalable architectures with best practices for performance, reliability, and maintainability.",
  },
  {
    icon: Globe,
    title: "Modern Website Development",
    description: "Developing SEO-friendly, high-performance websites using the latest web technologies and optimization strategies.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving search visibility through semantic structure, fast loading times, and on-page SEO best practices.",
  },
  {
    icon: Briefcase,
    title: "Portfolio & Business Websites",
    description: "Creating professional portfolio and business websites that build credibility and enhance your digital presence.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized front-end development services tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
