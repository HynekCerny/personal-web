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
    <>
      <Header/>
      <main className="">
        <Hero/>
        <About/>
        <Skills/>
        <Experiences/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
