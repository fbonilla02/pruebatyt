import { Alianzas } from "./components/Alianzas";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Blogs } from "./sections/Blogs";
import { DesignViaje } from "./sections/DesignViaje";
import { Experiencias } from "./sections/Experiencias";
import { Hero } from "./sections/Hero";
import { Nosotros } from "./sections/Nosotros";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Experiencias />
      <Blogs />
      <DesignViaje />
      <Alianzas />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
