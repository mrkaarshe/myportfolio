"use client"

import type { ReactNode } from "react"

interface FloatingCardProps {
  children: ReactNode
  offset: number
  delay: number
  className?: string
}

const FloatingCard = ({ children, offset, delay, className = "" }: FloatingCardProps) => {
  return (
    <div
      data-floating
      data-offset={offset}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        animation: `float 4s ease-in-out infinite ${delay * 0.3}s`,
      }}
    >
      {children}
    </div>
  )
}

export default FloatingCard
