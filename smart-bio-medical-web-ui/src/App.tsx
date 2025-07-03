import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './App.css'
import Home from './components/Home'

function App() {
  useEffect(() => {
    // Initialize any JavaScript that was in your original template
    const initializeScripts = async () => {
      // Add any initialization code here
    }
    initializeScripts()
  }, [])

  return (
    <Router>
      <div className="App">
        <div className="index-page">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
