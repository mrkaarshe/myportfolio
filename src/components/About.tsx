import { 
  Code2, 
  Palette,
  Zap,
  Server,
  TerminalSquare,
  Database,
  Globe,
  GitBranch,
  Grid,
  Smartphone,
  Layout,
  Layers,
  Boxes,
  Briefcase
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
  { name: "MySQL", icon: DiMysql },
];

const personalInfo = [
  { label: "Name", value: "ismail hassan", icon: Code2 },
  { label: "Email", value: "odaykaarshe@gmail.com", icon: Zap },
  { label: "Location", value: "Mogadishu, Somalia", icon: Globe },
  { label: "Experience", value: "2+ Years", icon: Briefcase },
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

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Column - Bio */}
          <div className="space-y-6 animate-slide-in-left ">
            <p className="text-lg leading-relaxed">
              I'm a Full-Stack Developer specializing in the MERN stack, focused on building 
              modern, high-quality, and responsive web applications.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I combine clean code practices, scalable system architecture, and thoughtful 
              problem-solving to deliver reliable, efficient, and visually refined solutions.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m committed to continuous learning and staying current with modern web 
              technologies—ranging from JavaScript and React to Node.js, databases, and 
              UI/UX principles.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">Here are some technologies I’ve mastered and continue to explore:</p>
          </div>

          {/* Right Column - Personal Info + Skills */}
          <div className="space-y-8 ">

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {personalInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Skills Grid */}
            

          </div>


        </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 mt-10 gap-4 w-full">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <Icon className="w-10 h-10 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-center text-foreground text-sm">{skill.name}</h3>
                  </div>
                );
              })}
            </div>
      </div>
    </section>
  );
};

export default About;
