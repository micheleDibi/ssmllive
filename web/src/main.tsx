import { createRoot } from 'react-dom/client'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './styles/global.css'
import App from './App'

// Scale the app to fit any screen resolution
// Design is based on 1920x1080 (landscape) or 1080x1920 (portrait)
function applyScale() {
  const root = document.getElementById('root')!
  const w = window.innerWidth
  const h = window.innerHeight
  const isPortrait = h > w
  const designW = isPortrait ? 1080 : 1920
  const designH = isPortrait ? 1920 : 1080
  const scale = Math.min(w / designW, h / designH)

  root.style.width = `${designW}px`
  root.style.height = `${designH}px`
  root.style.transform = `scale(${scale})`
  root.style.transformOrigin = 'top left'
}

applyScale()
window.addEventListener('resize', applyScale)

createRoot(document.getElementById('root')!).render(<App />)
