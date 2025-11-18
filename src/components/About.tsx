import { Code2, Palette, Zap, Layout, GitBranch, Smartphone } from "lucide-react";

const skills = [
  { name: "React.js", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "JavaScript", icon: Zap },
  { name: "Responsive Design", icon: Smartphone },
  { name: "UI/UX Implementation", icon: Layout },
  { name: "Git/GitHub", icon: GitBranch },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional web experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg leading-relaxed">
              I'm a Front-End Developer with a strong focus on building modern, 
              responsive web applications using React and TailwindCSS. With a 
              Diploma in Front-End Development (Bootcamp 2024–2025), I've honed 
              my skills in creating seamless user experiences.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My approach combines clean code practices with creative problem-solving 
              to deliver high-performance applications that users love. I'm constantly 
              learning and staying up-to-date with the latest web technologies.
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                  style={{ animationDelay: `${index * 100}ms` }}
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
