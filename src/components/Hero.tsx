import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-kaarshe.png";
import { ArrowRight, Hand, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, Award, TrendingUp } from "lucide-react";

// Counter Metric Component
const CounterMetric = ({ end, suffix = "", icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center space-y-2">
      <Icon className="w-8 h-8 mx-auto text-primary" />
      <div className="text-3xl font-bold text-foreground">{count}{suffix}</div>
    </div>
  );
};

// Animated Name Typing
const AnimatedName = () => {
  const name = "Kaarshe";
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed(name.slice(0, indexRef.current + 1));
      indexRef.current = (indexRef.current + 1) % (name.length + 1);
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-primary inline-flex items-center gap-2">
      {displayed} <Hand size={45} />
    </span>
  );
};

// Hero Section - New 3D style
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      
      {/* Background Gradient & overlays */}
      <div className="absolute inset-30 bg-gradient-to-br from-background via-card to-background"></div>

      {/* Floating 3D shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-3xl blur-3xl animate-float rotate-6"></div>
      <div className="absolute top-1/3 right-16 w-64 h-64 bg-accent/5 rounded-3xl blur-3xl animate-float rotate-12"></div>
      <div className="absolute bottom-16 left-20 w-48 h-48 bg-secondary/5 rounded-3xl blur-3xl animate-float rotate-3"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-3xl blur-3xl animate-float rotate-12"></div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 z-10 relative items-center">

        {/* Left - Text & CTA */}
        <div className="space-y-6 animate-slide-in-left">
          <p className="text-muted-foreground text-lg">Hey, I am</p>
          <h1 className="text-5xl md:text-7xl font-bold">
            <AnimatedName />
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Full-Stack Developer | MERN Stack
          </p>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
           I’m a Full-Stack Developer specializing in the MERN stack, focused on building responsive, high-quality web applications. I create modern user interfaces with React and TailwindCSS and develop scalable back-end solutions that ensure speed, reliability, and smooth functionality. I’m passionate about clean code, strong UI/UX, and delivering polished digital experiences.


          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="hero" size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="lg">Contact Me</Button>
          </div>
          <div className="flex gap-4">
            {[{icon: Github, link:"https://github.com/mrkaarshe"}, {icon: Linkedin, link:"https://www.linkedin.com/in/eng-kaarshe-51611b387/"}, {icon: Mail, link:"#"}].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer"
                className="flex-1 h-20 max-w-20 bg-background/80 rounded-full border border-border flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center animate-fade-in relative">
          <div className="relative">
            <div className="absolute inset-10 rounded-full blur-3xl bg-gradient-to-tr from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] animate-pulse"></div>
            <div className="relative h-80 w-80 rounded-full flex items-center justify-center shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-transform duration-500">
              <svg className="absolute h-full w-full animate-spin-slow" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="95"
                  stroke="url(#gradient)"
                  strokeWidth="5"
                  fill="transparent"
                  strokeDasharray="1 3"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="90%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--accent))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
              <img src={profileImage} alt="Kaarshe" className="rounded-full h-72 w-72 object-cover shadow-2xl" />
            </div>
          </div>
        </div>

      </div>

      {/* Client Metrics */}
      <div className="w-[100%] sm:w-[60%] mt-10 px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 backdrop-blur-sm rounded-2xl p-8">
          <CounterMetric end={45} suffix="+" icon={Briefcase} />
          <CounterMetric end={95} suffix="%" icon={Award} />
          <CounterMetric end={20} suffix="+" icon={Users} />
          <CounterMetric end={2} suffix="+" icon={TrendingUp} />
        </div>
      </div>

    </section>
  );
};

export default Hero;
