"use client"

import { MenuBar } from "@/components/menu-bar"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { Sparkles } from "@/components/sparkles"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Fondo animado */}
      <AnimatedBackground />

      {/* Círculos decorativos */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-200/20 dark:bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-[120px] z-10"
      >
        <ThemeToggle />
      </motion.div>

      <Sparkles active={true} className="z-10">
        <MenuBar />
      </Sparkles>
    </div>
  )
}

