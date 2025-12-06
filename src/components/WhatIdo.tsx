"use client"

import type React from "react"
import { useState } from "react"
import { Code2, Zap, Layers, Database } from "lucide-react"

interface TimelineItem {
  id: number
  title: string
  dateRange: string
  responsibilities: string[]
  icon: React.ReactNode
  side: "left" | "right"
}

const timelineItems: TimelineItem[] = [

  {
    id: 1,
    title: "Frontend Engineer",
    dateRange: "2024 - 2025",
    responsibilities: [
      "Led component library development and design system",
      "Implemented accessibility standards (WCAG 2.1)",
      "Reduced bundle size by 35% through optimization",
    ],
    icon: <Layers className="w-6 h-6" />,
    side: "right",
  },

  {
    id: 2,
    title: "Backend Systems Engineer",
    dateRange: "2024 - 2025",
    responsibilities: [
      "Architected microservices infrastructure on AWS",
      "Managed PostgreSQL and Redis implementations",
      "Achieved 99.9% uptime SLA",
    ],
    icon: <Database className="w-6 h-6" />,
    side: "left",
  },
  {
    id: 4,
    title: "API Integration Specialist",
    dateRange: "2024 - 2025",
    responsibilities: [
      "Integrated 15+ third-party APIs and payment gateways",
      "Implemented comprehensive error handling and logging",
      "Documented 100+ API endpoints",
    ],
    icon: <Zap className="w-6 h-6" />,
    side: "right",
  },
      {
    id: 2,
    title: "Full Stack Developer",
    dateRange: "2025 - Present",
    responsibilities: [
      "Built responsive web applications using React and Next.js",
      "Designed and implemented RESTful APIs with Node.js",
      "Optimized database queries for 40% performance improvement",
    ],
    icon: <Code2 className="w-6 h-6" />,
    side: "left",
  },
]

export function WhatIdo() {
  const [activeId, setActiveId] = useState<number>(1)

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-card/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-primary ">
          What I Do
        </h2>
        <p className="text-center text-gray-400 mb-20 text-lg">A journey through my professional experience</p>

        {/* Timeline container */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary opacity-60">
            <div className="absolute inset-0 bg-  blur-md opacity-40 animate-pulse" />
          </div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.map((item) => (
              <div
                key={item.id}
                className={`flex  ${item.side === "right" ? "flex-row-reverse" : "flex-row"} items-center gap-8 md:gap-12`}
              >
                {/* Content card */}
                <div className={`w-full md:w-1/2 ${item.side === "right" ? "md:text-right" : ""}`}>
                  <div
                    onClick={() => setActiveId(item.id)}
                    className="group relative  rounded-2xl p-4 shadow-lg border border-white/20 backdrop-blur-md  md:p-8  hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden"
                  >
 
                    <div className="relative">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-primary mb-4 font-semibold">{item.dateRange}</p>
                      <ul className="space-y-2">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-300 text-sm md:text-base flex items-start gap-3">
                            <span className=" mt-1.5 flex-shrink-0">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`relative ${activeId === item.id ? "scale-125" : "scale-100"} transition-transform duration-300`}
                  >
                    <div
                      className={`w-16 h-16 rounded-full hidden bg-primary md:flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${
                        activeId === item.id
                          ? "shadow-primary hidden md:flex  scale-110"
                          : "shadow-primary md:block group-hover:shadow-primary"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`absolute inset-0 w-16 h-16 hidden md:flex rounded-full bg-primary opacity-0 ${
                        activeId === item.id ? "animate-pulse opacity-50" : ""
                      } blur-xl`}
                    />
                  </div>
                </div>

                {/* Spacer for flex alignment */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
