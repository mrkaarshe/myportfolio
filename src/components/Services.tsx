import { Globe,Search, Server, Code, Smartphone, Figma, Briefcase } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Modern Website Development",
    description: "Building fast, scalable, and SEO-friendly websites using the latest web technologies and best practices.",
  },
  {
    icon: Code,
    title: "React Development",
    description: "Creating dynamic, component-based applications with React.js for seamless user experiences.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring your website looks perfect on all devices, from mobile phones to large desktop screens.",
  },
  {
    icon: Figma,
    title: "UI Development from Figma",
    description: "Transforming Figma designs into pixel-perfect, functional web interfaces with attention to detail.",
  },
  {
    icon: Briefcase,
    title: "Portfolio Website Creation",
    description: "Crafting stunning portfolio websites that showcase your work and leave a lasting impression.",
  },
    {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving website visibility on search engines through SEO-friendly structure and best practices.",
  },
    {
    icon: Server,
    title: "Backend Development",
    description: "Building scalable and secure backends using Node.js, Express, and RESTful APIs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized front-end development services tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
