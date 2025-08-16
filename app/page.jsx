import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Page(){
  return (
    <>
      <Nav />
      <main>
        <section className="section container">
          <Hero />
        </section>
        <section id="about" className="section container">
          <About />
        </section>
        <section id="services" className="section container">
          <Services />
        </section>
        <section id="contact" className="section container">
          <Contact />
        </section>
      </main>
      <footer className="footer container">© {new Date().getFullYear()} Shahriyar Trading LLC</footer>
    </>
  );
}
