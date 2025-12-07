// import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-kaarshe.png";
import { ArrowRight, Hand, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Users, Briefcase, TrendingUp } from "lucide-react";
import aos from "aos";
import "aos/dist/aos.css";

// // Counter Metric Component
// const CounterMetric = ({ end, suffix = "", icon: Icon }) => {
//   const [count, setCount] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => entry.isIntersecting && setIsVisible(true),
//       { threshold: 0.1 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isVisible) return;
//     const duration = 2000;
//     const steps = 60;
//     const increment = end / steps;
//     let current = 0;

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(current));
//       }
//     }, duration / steps);

//     return () => clearInterval(timer);
//   }, [isVisible, end]);

//   return (
//     <div ref={ref} className="text-center space-y-2">
//       <Icon className="w-8 h-8 mx-auto text-primary" />
//       <div className="text-3xl font-bold text-foreground">{count}{suffix}</div>
//     </div>
//   );
// };

// Animated Name Typing


// // Hero Section - New 3D style
// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      
//       {/* Background Gradient & overlays */}
//       <div className="absolute inset-30 bg-gradient-to-br from-background via-card to-background"></div>

//       {/* Floating 3D shapes */}
//       <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-3xl blur-3xl animate-float rotate-6"></div>
//       <div className="absolute top-1/3 right-16 w-64 h-64 bg-accent/5 rounded-3xl blur-3xl animate-float rotate-12"></div>
//       <div className="absolute bottom-16 left-20 w-48 h-48 bg-secondary/5 rounded-3xl blur-3xl animate-float rotate-3"></div>
//       <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-3xl blur-3xl animate-float rotate-12"></div>

//       {/* Main Content */}
//       <div className="grid md:grid-cols-2 gap-12 z-10 relative items-center">

//         {/* Left - Text & CTA */}
        // <div className="space-y-6 animate-slide-in-left">
        //   <p className="text-muted-foreground text-lg">Hey, I am</p>
        //   <h1 className="text-5xl md:text-7xl font-bold">
        //     <AnimatedName />
        //   </h1>
        //   <p className="text-xl md:text-2xl text-primary font-semibold">
        //     Full-Stack Developer | MERN Stack
        //   </p>
        //   <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
        //    I’m a Full-Stack Developer specializing in the MERN stack, focused on building responsive, high-quality web applications. I create modern user interfaces with React and TailwindCSS and develop scalable back-end solutions that ensure speed, reliability, and smooth functionality. I’m passionate about clean code, strong UI/UX, and delivering polished digital experiences.


        //   </p>
        //   <div className="flex flex-wrap gap-4 pt-4">
        //     <Button variant="hero" size="lg" className="group">
        //       View Projects
        //       <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        //     </Button>
        //     <Button variant="glow" size="lg">Contact Me</Button>
        //   </div>
        //   <div className="flex gap-4">
        //     {[{icon: Github, link:"https://github.com/mrkaarshe"}, {icon: Linkedin, link:"https://www.linkedin.com/in/eng-kaarshe-51611b387/"}, {icon: Mail, link:"#"}].map((social, idx) => (
        //       <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer"
        //         className="flex-1 h-20 max-w-20 bg-background/80 rounded-full border border-border flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group">
        //         <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
        //       </a>
        //     ))}
        //   </div>
        // </div>

//         {/* Right - Profile Image */}
//         <div className="flex justify-center animate-fade-in relative">
//           <div className="relative">
//             <div className="absolute inset-10 rounded-full blur-3xl bg-gradient-to-tr from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] animate-pulse"></div>
//             <div className="relative h-80 w-80 rounded-full flex items-center justify-center shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-transform duration-500">
//               <svg className="absolute h-full w-full animate-spin-slow" viewBox="0 0 200 200">
//                 <circle
//                   cx="100"
//                   cy="100"
//                   r="95"
//                   stroke="url(#gradient)"
//                   strokeWidth="5"
//                   fill="transparent"
//                   strokeDasharray="1 3"
//                 />
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="90%" y2="100%">
//                     <stop offset="0%" stopColor="hsl(var(--primary))" />
//                     <stop offset="50%" stopColor="hsl(var(--accent))" />
//                     <stop offset="100%" stopColor="hsl(var(--secondary))" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <img src={profileImage} alt="Kaarshe" className="rounded-full h-72 w-72 object-cover shadow-2xl" />
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Client Metrics */}
//       <div className="w-[100%]   sm:w-[60%] mt-10 px-4 relative z-10">
//         <div className="grid grid-cols-2 bg-white/5 backdrop-blur-md  md:grid-cols-4 gap-8 rounded-2xl p-8">
//           <CounterMetric end={45} suffix="+" icon={Briefcase} />
//           <CounterMetric end={95} suffix="%" icon={Award} />
//           <CounterMetric end={20} suffix="+" icon={Users} />
//           <CounterMetric end={2} suffix="+" icon={TrendingUp} />
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;

"use client"

import { useEffect, useRef } from "react"
import { Star, Quote, Code2, Rocket,Files, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingCard from "@/components/Floatin-card"

// import profileImage from "@/assets/profile-kaarshe.png";
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const floatingCards = containerRef.current.querySelectorAll("[data-floating]")
      floatingCards.forEach((card) => {
        const offset = (card as HTMLElement).getAttribute("data-offset") || "0"
        const offsetVal = Number.parseInt(offset)
        const moveX = (x - 0.5) * offsetVal
        const moveY = (y - 0.5) * offsetVal
        ;(card as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  
  const testimonials = [
    {
      name: "Apdihalim ibrahim",
      role: "Teacher",
      review: "very useful design",
      rating: 5,
    },
    {
      name: "Mohamed Jayte",
      role: "Product Manager",
      review: "Outstanding work quality.",
      rating: 5,
    },
    {
      name: "Eng Mascuud",
      role: "Founder",
      review: "Fast & reliable service.",
      rating: 5,
    },
  ]

  const iconCards = [
    { icon: Code2, color: "from-blue-500 to-cyan-500", label: "React Dev", position: "bottom-32 -left-16" },
    { icon: Rocket, color: "from-green-500 to-emerald-500", label: "Fast Deploy", position: "bottom-40 -right-8" },
    

  ]

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen max-w-7xl mx-auto overflow-hidden "
    >
      {/* Background grid effect */}
      <div className="absolute rounded-full inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />

      {/* Gradient orbs - background elements */}
      {/* <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 opacity-5 rounded-full blur-3xl animate-pulse" /> */}

      {/* Navigation */}
    

      {/* Main content */}
      <div className="relative mt-10 z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-6 py-12 md:py-20 gap-12">
        {/* Left content */}
        <div className="flex-2 max-w-2xl">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/30">
              ✨ Build the future with code
            </span>
          </div>
  <div className="space-y-6 animate-slide-in-left">
          <p className="text-muted-foreground text-lg">Hey, I am</p>
          <h1 className="text-5xl md:text-7xl font-bold">
            <AnimatedName />
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Full-Stack Developer | <span className="text-white"> MERN Stack</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
           I’m a Full-Stack Developer specializing in the MERN stack, focused on building responsive, high-quality web applications. I create modern user interfaces with React and TailwindCSS and develop scalable back-end solutions that ensure speed, reliability, and smooth functionality. I’m passionate about clean code, strong UI/UX, and delivering polished digital experiences.


          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="hero" size="lg" className="group ">
              <a href="#projects">View Projects</a>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="lg">
              <Files/>
            </Button>
          </div>
          <div className="flex gap-4">
            {[{icon: Github, link:"https://github.com/mrkaarshe"}, {icon: Linkedin, link:"https://www.linkedin.com/in/eng-kaarshe-51611b387/"}, {icon: Mail, link:"#"}].map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer"
                className="flex-1 h-20 max-w-20 bg-background/80 rounded-full border border-border hover:border-primary flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

          {/* Feature bullets */}
          <div className="grid grid-cols-2 mt-10 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div data-aos="fade-up">
                <h3 className="font-semibold text-foreground">React & Next.js</h3>
                <p className="text-sm text-muted-foreground">Modern frameworks for scalable apps</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <div data-aos="fade-up">
                <h3 className="font-semibold text-foreground">Full Stack</h3>
                <p className="text-sm text-muted-foreground">End-to-end development expertise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Profile section */}
        <div data-aos="fade-up" className="flex-1 relative h-full flex items-center justify-center">
          {/* Floating background circles */}
          <div
            className="absolute w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 opacity-60 rounded-full blur-2xl -z-10"
            data-floating
            data-offset="15"
          />

          {/* Profile card container */}
          <div className="relative w-full max-w-md">
            {/* Main profile image with background */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div
                className="relative w-96 h-96 rounded-3xl overflow-hidden border-b-2 border-primary/30 bg-cover bg-center"
 
              >
                <img src="/profile-kaarshe.png" className="w-1/1 h-full bg-cover object-cover"  alt="" />
                 <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xs opacity-5 transition-opacity duration-300" />
              </div>
            </div>

            {/* Testimonial Card 1 - Top Right */}
            <FloatingCard offset={1} delay={6} className="absolute -top-6 -right-6">
              <div data-aos="fade-left" className="bg-white/5 rounded-2xl p-4 shadow-lg border border-white/20 backdrop-blur-md w-48">
                <div className="flex items-center gap-2 mb-2">
                  <Quote size={16} className="text-white flex-shrink-0" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                </div>
                <p className="text-white/80 text-xs font-medium line-clamp-2">{testimonials[0].review}</p>
                <p className="text-primary text-xs font-bold mt-2">{testimonials[0].name}</p>
              </div>
            </FloatingCard>

            {/* Testimonial Card 2 - Bottom Left */}
            <FloatingCard offset={20} delay={1} className="absolute -bottom-12  -left-6">
              <div data-aos="fade-right" className="bg-white/5 rounded-2xl p-4 shadow-lg border border-white/20 backdrop-blur-md w-48">
                <div className="flex items-center gap-2 mb-2">
                  <Quote size={16} className="text-white flex-shrink-0" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                </div>
                <p className="text-white/80 text-xs font-medium line-clamp-2">{testimonials[1].review}</p>
                <p className="text-primary text-[10px] font-bold mt-2">{testimonials[1].name}</p>
              </div>
            </FloatingCard>

            {/* Testimonial Card 3 - Bottom Right */}
            <FloatingCard offset={30} delay={2} className="absolute -bottom-8 -right-8">
              <div data-aos="fade-up" className="bg-white/10 rounded-2xl p-4 shadow-lg border border-white/20 backdrop-blur-md w-48 animate-pulse-glow">
                <div className="flex items-center gap-2 mb-2">
                  <Quote size={16} className="text-white flex-shrink-0" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                </div>
                <p className="text-white/70 text-xs font-medium line-clamp-2">{testimonials[2].review}</p>
                <p className="text-primary text-[10px] font-bold mt-2">{testimonials[2].name}</p>
              </div>
            </FloatingCard>

            {iconCards.map((item, index) => {
              const Icon = item.icon
              return (
                <FloatingCard key={index} offset={10 + index * 1} delay={index} className={`absolute ${item.position}`}>
                  <div
                    className={`bg-white/5 rounded-2xl p-4 shadow-lg border border-white/20 backdrop-blur-md flex flex-col items-center gap-2 w-24`}
                  >
                    <Icon size={24} className="text-primary" />
                    <p className="text-white/80 text-[10px] font-semibold text-center">{item.label}</p>
                  </div>
                </FloatingCard>
              )
            })}
          </div>
        </div>
      </div>


    </div>
  )
}

export default HeroSection
