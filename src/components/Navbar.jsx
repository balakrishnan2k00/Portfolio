import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../data'
import { applyTheme, getInitialTheme } from '../theme'
import { BrandLogo } from './BrandLogo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    applyTheme(next)
    setTheme(next)
  }

  return (
    <header className={`nav-shell ${scrolled ? 'nav-shell--scrolled' : ''}`}>
      <nav className="nav glass-panel" aria-label="Primary">
        <button
          type="button"
          className="nav-brand"
          onClick={() => go('home')}
        >
          <BrandLogo className="nav-logo" />
          <span>&lt; Balakrishnan /&gt;</span>
        </button>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => go(link.id)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-mobile glass-panel">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button type="button" onClick={toggleTheme} className="nav-mobile-theme">
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      )}
    </header>
  )
}
