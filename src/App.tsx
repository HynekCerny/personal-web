import './App.css'
import Header from './components/Header'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Skills from './components/Skills'
import About from './components/About'
import Hero from './components/Hero'
import Contact from './components/Contact'
import { useEffect } from 'react'

function loadGTM(gtmId: string) {
  if (window.dataLayer) return; // Prevent multiple GTM injections
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}

function App() {
  useEffect(() => {
    // Call this after consent or immediately as needed
    loadGTM('GTM-5Z8HWR2W');
  }, []);

  return (
    <div className="bg-white text-black dark:text-gray-200 dark:bg-gray-900">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Experiences/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
