import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import projects from './data/projects';
import services from './data/services';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services services={services} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
