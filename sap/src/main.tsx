import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Header from './components/NavegationBar'
import Footer from './components/Footer'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <App />
  </StrictMode>,
)

createRoot(document.getElementById('navBar')!).render(
    <StrictMode>
        <Header />
    </StrictMode>,
)
createRoot(document.getElementById('Footer')!).render(
    <StrictMode>
        <Footer />
    </StrictMode>,
)