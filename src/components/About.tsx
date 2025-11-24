import { 
  Code2, 
  Search,
  Palette,
  Database,
  Zap,
  Layout,
  Grid,
  GitBranch,
  Smartphone,
  Server,
  Boxes,
  TerminalSquare,
  Globe,
  Layers
} from "lucide-react";
import { DiMysql } from "react-icons/di";
const skills = [
  { name: "React.js", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "JavaScript (ES6+)", icon: Zap },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: TerminalSquare },
  { name: "MongoDB", icon: Database },
  { name: "RESTful APIs", icon: Globe },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "System Design", icon: Grid },
  { name: "Responsive UI", icon: Smartphone },
  { name: "UI/UX Implementation", icon: Layout },
  { name: "Full-Stack Architecture", icon: Layers },
  { name: "Database Management", icon: Boxes },
  { name: "mysql ", icon:  DiMysql},
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-Stack Developer crafting modern, scalable, and user-focused digital experiences.
          </p>
        </div>

<div className="grid md:grid-cols-2 gap-12 items-center">

  {/* Bio */}
  <div className="space-y-6 animate-slide-in-left w-full">
    
    <p className="text-lg leading-relaxed">
      I'm a Full-Stack Developer specializing in the MERN stack, focused on building 
      modern, high-quality, and responsive web applications. With a background in 
      Full-Stack Development (Bootcamp 2024–2025), I’ve developed strong skills in 
      creating fast, intuitive, and user-centered digital experiences.
    </p>

    <p className="text-lg leading-relaxed text-muted-foreground">
      I combine clean code practices, scalable system architecture, and thoughtful 
      problem-solving to deliver reliable, efficient, and visually refined solutions. 
      I enjoy transforming ideas into well-structured applications with seamless 
      frontend experiences and stable backend logic.
    </p>

    <p className="text-lg leading-relaxed text-muted-foreground">
      I’m committed to continuous learning and staying current with modern web 
      technologies—ranging from JavaScript and React to Node.js, databases, and 
      UI/UX principles. My goal is to build meaningful, high-impact applications 
      that users genuinely enjoy using.
    </p>

  </div>


          {/* Skills Grid */}
          <div className="grid grid-cols-3 gap-4 animate-fade-in w-full">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-2 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground">{skill.name}</h3>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;