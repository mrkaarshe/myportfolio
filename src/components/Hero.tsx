"use client"
import profileImage from "@/assets/profile-kaarshe.png";
import { ArrowRight, Hand, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Users, Briefcase, TrendingUp } from "lucide-react";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react"
import { Star, Quote, Code2, Rocket,Files, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingCard from "@/components/Floatin-card"

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
      className="relative min-h-[190vh] md:min-h-[100vh] container mx-auto overflow-hidden "
    >
      {/* Background grid effect */}
      <div className="absolute rounded-full inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />



      {/* Main content */}
      <div className="relative mt-10 z-10 flex flex-col lg:flex-row items-center justify-between px-1 md:px-6 py-12 md:py-20 gap-12">
        {/* Left content */}
        <div className="flex-2 max-w-3xl">
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
            <FloatingCard offset={20} delay={1} className="absolute -bottom-12  -left-20">
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
            <FloatingCard offset={30} delay={2} className="absolute -bottom-[13rem] -right-20">
    <div data-aos="fade-left" className="max-w-xl mx-auto mt-10 rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e]">
      
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 gap-3 py-2 bg-[#2a2a2a]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <p className="text-sm text-gray-400 font-mono">
          main.py _
        </p>

        <div className="w-12"></div>
      </div>

      {/* Code area */}
      <pre className="p-5 text-sm font-mono text-gray-200 leading-relaxed">
        <code>
        <span className="text-purple-400">def</span> <span className="text-blue-400">greet</span>(name):{"\n"}
        {"  "} <span className="text-purple-400">return</span> <span className="text-yellow-300">f</span><span className="text-yellow-300">"Hello, {`{name}`}!"</span>{"\n\n"}

        <span className="text-gray-500"># Performance optimization</span>{"\n"}
        <span className="text-purple-400">if</span> __name__ == <span className="text-yellow-300">"__main__"</span>:{"\n"}
        {"  "}user = <span className="text-blue-400">"Next.js"</span>{"\n"}
        {"  "}print(greet(user))
        </code>
      </pre>
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
