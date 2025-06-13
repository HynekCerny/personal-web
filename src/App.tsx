import './App.css'
import Header from './components/Header'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Skills from './components/Skills'
import About from './components/About'
import Hero from './components/Hero'
import Contact from './components/Contact'

function App() {
  return (
    <div className="dark:text-gray-200 dark:bg-gray-900">
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
