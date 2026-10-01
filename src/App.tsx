import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Education from './sections/Education';
import BuildingInPublic from './sections/BuildingInPublic';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-accent font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BuildingInPublic />
        <Journey />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
