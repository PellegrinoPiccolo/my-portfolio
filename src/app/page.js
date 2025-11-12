import About from "../../components/sections/About";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import Header from "../../components/sections/Header";
import Hero from "../../components/sections/Hero";
import Projects from "../../components/sections/Projects";
import Skills from "../../components/sections/Skills";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
