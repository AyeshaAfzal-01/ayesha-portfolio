import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero"

function App() {

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white ">
     <Navbar/>
     <div className="mx-14 my-8">
     <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/work" element={<Hero/>} />
      <Route path="/about" element={<Hero/>} />
      <Route path="/contact" element={<Hero/>} />
     </Routes>
     </div>
     </div>
  )
}

export default App