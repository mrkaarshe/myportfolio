import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { Github, Linkedin, Mail, Code2, Palette, Zap, Smartphone, Layout, Database, Grid, GitBranch } from "lucide-react";

const skills = [
  { name: "React.js", icon: Code2 },
  { name: "Tailwind CSS", icon: Palette },
  { name: "JavaScript", icon: Zap },
  { name: "Responsive Design", icon: Smartphone },
  { name: "UI/UX Implementation", icon: Layout },
  { name: "Git/GitHub", icon: GitBranch },
  { name: "Database Management", icon: Database },
  { name: "System Design", icon: Grid },
];

const PosterCV = () => {
  const posterRef = useRef(null);

  const handleDownload = async () => {
    const element = posterRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 3 });
    const data = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = data;
    link.download = "Ismail_Kaarshe_Poster.png";
    link.click();
  };

  return (
    <div className="p-12 bg-gradient-to-r from-blue-50 to-white" ref={posterRef} style={{ width: "1200px" }}>
      {/* Header */}
      <div className="flex flex-col items-center space-y-4 mb-12">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80"
          alt="Ismail Kaarshe"
          className="w-40 h-40 rounded-full object-cover border-4 border-primary"
        />
        <h1 className="text-5xl font-bold text-primary">Ismail Kaarshe</h1>
        <p className="text-xl text-gray-700">Full-Stack Developer (MERN)</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1 space-y-6">
          {/* Contact */}
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-2">
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-primary" /> odaykaarshe@gmail.com</p>
            <p className="flex items-center gap-2"><Github className="w-5 h-5 text-primary" /> <a href="https://github.com/mrkaarshe?tab=repositories" className="underline text-blue-600">mrkaarshe</a></p>
            <p className="flex items-center gap-2"><Linkedin className="w-5 h-5 text-primary" /> <a href="https://www.linkedin.com/in/eng-kaarshe-51611b387/" className="underline text-blue-600">eng-kaarshe</a></p>
          </div>

          {/* Skills */}
          <div className="bg-white p-6 rounded-xl shadow-lg space-y-3">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-base">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 space-y-8">
          {/* Profile */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Profile</h2>
            <p className="text-lg leading-relaxed">
              I'm a Full-Stack Developer specializing in MERN stack. Passionate about building modern, responsive, and high-performance web applications. Experienced in creating scalable backend systems and intuitive user interfaces.  
            </p>
          </div>

          {/* Projects */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>FastBiteRes Restaurant Website – React.js, Tailwind CSS, Redux</li>
              <li>Reelzy Movie Trailer Platform – React.js, API Integration</li>
              <li>Artisan Coffee Hub – React.js, shadcn UI, SEO Optimized</li>
              <li>Social Connect Platform – React.js, Node.js, Socket.IO</li>
              <li>TaskMaster Pro – React.js, Express.js, MongoDB</li>
              <li>Learnify LMS Platform – React.js, Node.js, Stripe Integration</li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Services</h2>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Full-Stack Web Development (MERN)</li>
              <li>React Frontend Engineering</li>
              <li>Backend & API Development</li>
              <li>Responsive & Adaptive Design</li>
              <li>UI Implementation from Figma</li>
              <li>System Architecture Design</li>
              <li>SEO Optimized Web Development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
          Download Poster as PNG
        </button>
      </div>
    </div>
  );
};

export default PosterCV;
