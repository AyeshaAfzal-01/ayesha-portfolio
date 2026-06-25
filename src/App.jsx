import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white ">
     <Navbar/>
     <div className="mx-14 my-8">
     <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
     </div>
     </div>
  )
}

export default App