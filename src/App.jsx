import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white ">
     <Navbar/>
     <div className="mx-14 my-8">
    <Hero/>
    <Work/>
    <About/>
    <Contact/>
     </div>
     </div>
  )
}

export default App