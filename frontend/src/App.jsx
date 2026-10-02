import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;