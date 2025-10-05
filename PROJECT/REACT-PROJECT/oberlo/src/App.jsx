import './App.css'
import About from './Compnents/About/About'
import Blog from './Compnents/Blog/Blog'
import Choose from './Compnents/Choose/Choose'
import Hero from './Compnents/Hero/Hero'
import Models from './Compnents/Models/Models'
import Navbar from './Compnents/Navbar/Navbar'

function App() {
 

  return (
    <>
    {/* https://themewagon.github.io/Oberlo/ */}
      <Navbar/>
      <Hero/>
      <About/>
      <Models/>
      <Choose/>
      <Blog/>
    </>
  )
}

export default App
