import './App.css'
import Header from './components/Header'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Skills from './components/Skills'
import About from './components/About'
import Hero from './components/Hero'
import Contact from './components/Contact'
import { useEffect, useLayoutEffect } from 'react'

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

  // const location = useLocation();

  useLayoutEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      // Temporarily disable smooth scrolling to make the jump instant
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem('scrollPosition');
      // Restore the original scroll behavior from the stylesheet
      document.documentElement.style.scrollBehavior = '';
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
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
