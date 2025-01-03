"use client";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Toolbox from "./components/toolbox/Toolbox";
import EmblaCarousel from "./components/ProjectCarousel/Carousel";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Home() {

  const OPTIONS = { dragFree: true, loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // scroll on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="backToTopBtn" onClick={scrollToTop}>
        <FaArrowUpLong />
      </div>
      <Header />
      <Hero />
      <Toolbox />
      <About />
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      <Footer />
    </div>
  );
}
