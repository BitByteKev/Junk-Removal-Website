import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <About />
    <Services />
    <Contact />
    <Footer />
  </StrictMode>
);
