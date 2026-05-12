import AiFinancialSystem from './pages/ai-financial-system'
import About from './pages/about'
import FmaIce from './pages/fma-ice'
import Home from './pages/home'
import KodiCode from './pages/kodi-code'
import Works from './pages/works'

function getPathname() {
  if (typeof window === 'undefined') {
    return '/'
  }

  return window.location.pathname
}

function App() {
  const pathname = getPathname()

  if (pathname === '/work') {
    return <Works />
  }

  if (pathname === '/work/kodi-code') {
    return <KodiCode />
  }

  if (pathname === '/work/ai-financial-system') {
    return <AiFinancialSystem />
  }

  if (pathname === '/work/fma-ice') {
    return <FmaIce />
  }

  if (pathname === '/about') {
    return <About />
  }

  return <Home />
}

export default App
