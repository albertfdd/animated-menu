"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 360 : 0 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "text-[#A1A1AA]" : "text-yellow-500"}`} />
      </motion.div>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="transition-all duration-300 ease-in-out hover:scale-110"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "light" ? -360 : 0 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? "text-[#A1A1AA]" : "text-blue-300"}`} />
      </motion.div>
    </motion.div>
  )
}

