import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intersection from "./components/Intersection";
import WhatWeDo from "./components/WhatWeDo";
import Engagements from "./components/Engagements";
import Sectors from "./components/Sectors";
import Insights from "./components/Insights";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Intersection />
      <WhatWeDo />
      <Engagements />
      <Sectors />
      <Insights />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
