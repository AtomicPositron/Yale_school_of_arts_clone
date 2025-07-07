import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/header.jsx'
import Body from './components/body/body.jsx'
import Footer from './components/footer/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
    <Footer />
  </StrictMode>,
)
