import Header from '../src/components/Header'
import Experiences from '../src/components/Experiences'
import Footer from '../src/components/Footer'
import Skills from '../src/components/Skills'
import About from '../src/components/About'
import Hero from '../src/components/Hero'
import Contact from '../src/components/Contact'
import { useEffect } from 'react'

function HomePage() {
  useEffect(() => {
    const sectionId = sessionStorage.getItem('scrollToSection');
    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        // A small delay to ensure the page is painted before scrolling
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          sessionStorage.removeItem('scrollToSection');
        }, 100);
      } else {
        // If the element isn't found for any reason, remove the key
        sessionStorage.removeItem('scrollToSection');
      }
    }
  }, []);

  return (
    <div className="bg-white text-black dark:text-gray-200 dark:bg-gray-900 flex flex-col min-h-screen">
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

export default HomePage
