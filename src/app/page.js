import About from "../../components/sections/About";
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
    </div>
  );
}
