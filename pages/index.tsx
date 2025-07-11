import Header from '../src/components/Header'
import Experiences from '../src/components/Experiences'
import Footer from '../src/components/Footer'
import Skills from '../src/components/Skills'
import About from '../src/components/About'
import Hero from '../src/components/Hero'
import Contact from '../src/components/Contact'

function HomePage() {
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

export default HomePage