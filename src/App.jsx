import Navbar from "./layout/Navbar"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"

function App() {
 

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero/>
      </main>
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      {/* <Contact/> */}

    </div>
  )
}

export default App
