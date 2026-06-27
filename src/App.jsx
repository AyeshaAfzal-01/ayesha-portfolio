import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from './components/Footer'

function App() {

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white ">
     <Navbar/>
     <div className="md:mx-14 mx-4 mt-8 ">
    <Hero/>
    <About/>
    <Work/>
    <Contact/>
     </div>
     <Footer/>
     </div>
  )
}

export default App