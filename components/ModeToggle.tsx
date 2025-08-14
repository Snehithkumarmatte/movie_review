'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = theme === 'dark'
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-2xl px-3 py-1 bg-zinc-100 dark:bg-zinc-800"
      title="Toggle dark mode"
    >
      {isDark ? <Sun size={16}/> : <Moon size={16}/>}
      <span className="text-sm">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
