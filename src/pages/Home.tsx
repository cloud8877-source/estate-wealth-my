
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
}
