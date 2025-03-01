"use client"

import { useState, useEffect } from "react"
import type * as React from "react"
import { motion, AnimatePresence, useAnimationControls } from "framer-motion"
import { Home, Settings, Bell, User } from "lucide-react"
import { useTheme } from "next-themes"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: "Notifications",
    href: "#",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Settings",
    href: "#",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Profile",
    href: "#",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
]

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2.5,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.7, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const navVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
}

const menuItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

// Componente para las partículas de brillo
const Particles = ({ active, color }: { active: boolean; color: string }) => {
  const controls = useAnimationControls()

  useEffect(() => {
    if (active) {
      controls.start("animate")
    } else {
      controls.start("initial")
    }
  }, [active, controls])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${color} bg-current`}
          initial="initial"
          animate={controls}
          variants={{
            initial: { opacity: 0, scale: 0 },
            animate: {
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 60],
              y: [0, (Math.random() - 0.5) * 60],
              transition: {
                duration: 1.5,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 2,
              },
            },
          }}
          style={{
            left: `${50 + (Math.random() - 0.5) * 20}%`,
            top: `${50 + (Math.random() - 0.5) * 20}%`,
          }}
        />
      ))}
    </div>
  )
}

export function MenuBar() {
  const { theme } = useTheme()
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkTheme = theme === "dark"

  return (
    <motion.nav
      className="p-2 rounded-2xl bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-2 bg-gradient-radial from-transparent ${
          isDarkTheme
            ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
            : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
        } to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />

      {/* Efecto de brillo flotante */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 60% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 70%)",
            "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <ul className="flex items-center gap-2 relative z-10">
        <AnimatePresence>
          {menuItems.map((item, index) => (
            <motion.li
              key={item.label}
              className="relative"
              variants={menuItemVariants}
              onHoverStart={() => setActiveItem(index)}
              onHoverEnd={() => setActiveItem(null)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none"
                  variants={glowVariants}
                  style={{
                    background: item.gradient,
                    opacity: 0,
                    borderRadius: "16px",
                  }}
                />

                {/* Partículas de brillo */}
                <Particles active={activeItem === index} color={item.iconColor.replace("text-", "text-")} />

                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                >
                  <span className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>
                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-muted-foreground group-hover:text-foreground transition-colors rounded-xl"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                >
                  <span className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </motion.a>

                {/* Indicador de selección */}
                <motion.div
                  className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-current rounded-full ${item.iconColor}`}
                  initial={{ width: 0, opacity: 0 }}
                  animate={activeItem === index ? { width: "60%", opacity: 1 } : { width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.nav>
  )
}

