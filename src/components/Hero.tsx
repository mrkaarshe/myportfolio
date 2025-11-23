import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-kaarshe.jpg";
import { ArrowRight, Hand, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Users, Briefcase, Award, TrendingUp } from "lucide-react";

// Counter Metric Component
const CounterMetric = ({ end, suffix = "", icon: Icon }: { end: number; suffix?: string; icon: any }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
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
      <div className="text-3xl font-bold text-foreground">
        {count}
        {suffix}
      </div>
    </div>
  );
};

// Animated Name Typing
const AnimatedName = () => {
  const name = "KAARSHE";
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed(name.slice(0, indexRef.current + 1));
      indexRef.current = (indexRef.current + 1) % (name.length + 1);
    }, 300); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-primary inline-block animate- flex items-center gap-2">
      {displayed} <Hand size={45}  />
    </span>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6 animate-slide-in-left">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hey, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <AnimatedName />
            </h1>
          </div>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-primary font-semibold">Full-Stack Developer</p>
            <p className="text-lg text-muted-foreground">MERN STACK • Modern UI Creator</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Passionate Full-Stack Developer: I’m deeply passionate about building beautiful, responsive web applications using React, TailwindCSS, and modern development tools. I bring creative ideas to life through clean, elegant Full-stack solutions, with a strong focus on user experience and high performance.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="hero" size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="lg">
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/mrkaarshe?tab=repositories" target="_blank" rel="noopener noreferrer"
              className="flex-1 h-20 max-w-20 bg-background/80 rounded-full border border-border hover:border-primary/50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/eng-kaarshe-51611b387/" target="_blank" rel="noopener noreferrer"
              className="flex-1 h-20 max-w-20 bg-background/80 rounded-full border border-border hover:border-primary/50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="flex-1 h-20 max-w-20 bg-background/80 rounded-full border border-border hover:border-primary/50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right content - Profile image with rotating border */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative p-6">
            <div className="absolute inset-10 rounded-full blur-3xl bg-gradient-to-tr from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] animate-pulse"></div>
            <div className="relative h-80 w-80 rounded-full flex items-center justify-center">
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
              <img
                src={profileImage}
                alt="Kaarshe - full-stack Developer"
                className="rounded-full h-72 w-72 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Client Metrics */}
      <div className="w-[100%] sm:w-[60%] mt-20 px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
          <div className="space-y-2">
            <CounterMetric end={100} suffix="+" icon={Briefcase} />
            <p className="text-sm text-muted-foreground text-center">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <CounterMetric end={95} suffix="%" icon={Award} />
            <p className="text-sm text-muted-foreground text-center">Client Satisfaction</p>
          </div>
          <div className="space-y-2">
            <CounterMetric end={50} suffix="+" icon={Users} />
            <p className="text-sm text-muted-foreground text-center">Happy Clients</p>
          </div>
          <div className="space-y-2">
            <CounterMetric end={2} suffix="+" icon={TrendingUp} />
            <p className="text-sm text-muted-foreground text-center">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
