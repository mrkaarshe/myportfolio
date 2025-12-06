"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Code2, Zap, Layers, Database } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

interface TimelineItem {
  id: number
  title: string
  dateRange: string
  responsibilities: string[]
  icon: React.ReactNode
  side: "left" | "right"
  fade: "fade-up" | "fade-up"
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    dateRange: "2024 – 2025",
    responsibilities: [
      "Developed high-quality, reusable UI components for enterprise-level applications",
      "Implemented WCAG 2.1 accessibility standards to enhance user experience",
      "Optimized front-end performance, reducing bundle size by more than 35%",
    ],
    icon: <Layers className="w-6 h-6" />,
    side: "right",
    fade: "fade-up",
  },

  {
    id: 2,
    title: "Backend Systems Engineer",
    dateRange: "2024 – 2025",
    responsibilities: [
      "Designed and deployed scalable microservices across AWS-based infrastructure",
      "Managed PostgreSQL and Redis clusters for high-availability applications",
      "Maintained 99.9% uptime through monitoring, automation, and system health checks",
    ],
    icon: <Database className="w-6 h-6" />,
    side: "left",
    fade: "fade-up",
  },

  {
    id: 3,
    title: "API Integration Specialist",
    dateRange: "2024 – 2025",
    responsibilities: [
      "Integrated 15+ external APIs including payments, authentication, and data providers",
      "Implemented robust error-handling pipelines with retry and fallback logic",
      "Authored documentation for 100+ API endpoints used across multiple platforms",
    ],
    icon: <Zap className="w-6 h-6" />,
    side: "right",
    fade: "fade-up",
  },

  {
    id: 4,
    title: "Full Stack Developer",
    dateRange: "2025 – Present",
    responsibilities: [
      "Build and maintain responsive, high-performance applications using React and Next.js",
      "Develop and scale RESTful APIs with Node.js, Express, and modern backend tools",
      "Improve database performance by optimizing queries and indexing strategies",
    ],
    icon: <Code2 className="w-6 h-6" />,
    side: "left",
    fade: "fade-up",
  },
];


export function WhatIdo() {
  const [activeId, setActiveId] = useState<number>(1)

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-card/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-primary">What I Do</h2>
        <p className="text-center text-gray-400 mb-20 text-lg">
          A journey through my professional experience
        </p>

        <div className="relative">

          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-primary/70 blur-[1px]" />

          <div className="space-y-20">
            {timelineItems.map((item) => (
              <div
                key={item.id}
                className={`flex ${
                  item.side === "right" ? "flex-row-reverse" : "flex-row"
                } items-center gap-8 md:gap-12`}
              >
                {/* CONTENT BOX */}
                <div
                  data-aos={item.fade}
                  className={`w-full md:w-1/2 ${
                    item.side === "right" ? "md:text-right" : ""
                  }`}
                >
                  <div
                    onClick={() => setActiveId(item.id)}
                    className="group relative rounded-2xl p-6 md:p-8 border border-white/20 
                    backdrop-blur-md bg-black/10 hover:border-primary transition-all duration-300"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-4">
                      {item.dateRange}
                    </p>

                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 flex gap-3 text-sm md:text-base">
                          <span className="mt-1.5">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CENTER NODE */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`relative ${
                      activeId === item.id ? "scale-125" : "scale-100"
                    } transition-all duration-300`}
                  >
                    <div
                      className="w-16 h-16 rounded-full bg-primary hidden md:flex 
                      items-center justify-center text-white shadow-xl"
                    >
                      {item.icon}
                    </div>

                    {activeId === item.id && (
                      <div className="absolute inset-0 hidden md:flex w-16 h-16 rounded-full bg-primary/60 blur-xl animate-pulse" />
                    )}
                  </div>
                </div>

                {/* BALANCER */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
