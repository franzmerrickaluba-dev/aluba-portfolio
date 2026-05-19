import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AiFinancialSystem from './pages/ai-financial-system'
import About from './pages/about'
import FmaIce from './pages/fma-ice'
import Home from './pages/home'
import KodiCode from './pages/kodi-code'
import Works from './pages/works'
import ThemeToggle from './ThemeToggle'
import portfolioSprite from './assets/Portfolioanimation.png'

function App() {
  const [pathname, setPathname] = useState(() => 
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      
      if (
        target && 
        target.href && 
        target.href.startsWith(window.location.origin) && 
        target.target !== '_blank'
      ) {
        e.preventDefault()
        
        const url = new URL(target.href)
        
        if (url.pathname === window.location.pathname) {
          if (url.hash) {
            document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          return
        }

        window.history.pushState({}, '', url.pathname + url.search + url.hash)
        setPathname(url.pathname)
        
        if (url.hash) {
          setTimeout(() => {
            document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
          }, 300)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  let content = <Home />

  if (pathname === '/work') {
    content = <Works />
  } else if (pathname === '/work/kodi-code') {
    content = <KodiCode />
  } else if (pathname === '/work/ai-financial-system') {
    content = <AiFinancialSystem />
  } else if (pathname === '/work/fma-ice') {
    content = <FmaIce />
  } else if (pathname === '/about') {
    content = <About />
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', height: '100%' }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
      <ThemeToggle />
      <div className="portfolio-sprite"></div>
    </>
  )
}

export default App
