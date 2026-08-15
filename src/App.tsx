import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ExperienceEducation from './sections/Experience';
import CertificationsAchievements from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <CertificationsAchievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
