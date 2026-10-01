import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;