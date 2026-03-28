"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Lock the placeholder to exactly 36x36 pixels
  if (!mounted) {
    return <div className="w-9 h-9" /> 
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      // Lock the button to exactly 36x36 pixels and center the icon
      className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <Sun className="h-5 w-5 text-gray-200 flex-shrink-0" />
      ) : (
        <Moon className="h-5 w-5 text-gray-800 flex-shrink-0" />
      )}
    </button>
  )
}