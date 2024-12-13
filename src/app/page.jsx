import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Toolbox from "./components/toolbox/Toolbox";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Toolbox />
      <About />
    </div>
  );
}
