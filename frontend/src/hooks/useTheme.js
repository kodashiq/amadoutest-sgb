import { useEffect, useState } from 'react'

function themeInitial() {
  const enregistre = localStorage.getItem('theme')
  if (enregistre) return enregistre

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'sombre'
    : 'clair'
}

export default function useTheme() {
  const [theme, setTheme] = useState(themeInitial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const basculer = () => {
    setTheme((themeActuel) => themeActuel === 'sombre' ? 'clair' : 'sombre')
  }

  return [theme, basculer]
}
