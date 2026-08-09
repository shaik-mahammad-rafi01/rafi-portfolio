import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <>
      <Navbar />

      <main>
       <Hero />
       <About />
       <Skills />
       <Experience />
       <Projects />
      </main>
    </>
  );
}

export default App;