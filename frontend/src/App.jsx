import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;