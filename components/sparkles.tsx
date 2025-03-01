"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SparkleProps {
  color?: string
  size?: number
  style?: React.CSSProperties
}

const generateSparkle = (color?: string) => {
  const colors = color ? [color] : ["#FFD700", "#FFA500", "#FF4500", "#8A2BE2", "#4169E1"]
  return {
    id: Math.random(),
    createdAt: Date.now(),
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 10 + 5,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      zIndex: 2,
    },
  }
}

const Sparkle = ({ color, size, style }: SparkleProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className="absolute pointer-events-none"
      initial={{ scale: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <path
        d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
        fill={color}
      />
    </motion.svg>
  )
}

export function Sparkles({
  children,
  active = true,
  color,
  className = "",
}: {
  children: React.ReactNode
  active?: boolean
  color?: string
  className?: string
}) {
  const [sparkles, setSparkles] = useState<Array<any>>([])

  useEffect(() => {
    if (!active) return

    const generateSparkles = () => {
      const now = Date.now()
      const newSparkles = [...sparkles]
        .filter((sparkle) => now - sparkle.createdAt < 800)
        .concat(generateSparkle(color))
        .slice(0, 5)

      setSparkles(newSparkles)
    }

    const interval = setInterval(generateSparkles, 200)
    return () => clearInterval(interval)
  }, [active, sparkles, color])

  return (
    <div className={`relative inline-block ${className}`}>
      {children}
      <AnimatePresence>
        {active &&
          sparkles.map((sparkle) => (
            <Sparkle key={sparkle.id} color={sparkle.color} size={sparkle.size} style={sparkle.style} />
          ))}
      </AnimatePresence>
    </div>
  )
}

