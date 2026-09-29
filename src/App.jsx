import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <section id="home" className="hero">
          <h2>Hello, I'm Sayan</h2>
          <p>Welcome to my personal portfolio website.</p>
        </section>

        <About />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;