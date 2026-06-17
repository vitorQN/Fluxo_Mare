import { useEffect, useRef, useState } from "react";
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero";
import './App.css'
import About from "./components/About/About";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import Catalogo from "./components/Catalogo/Catalogo";
import Collection from "./components/Collection/Collection";
import HeroPlace from "./components/HeroPlace/HeroPlace";
import BrandHistory from "./components/BrandHistory/BrandHistory";
import FeatureBrand from "./components/FeatureBrand/FeatureBrand";
import Footer from "./components/Footer/Footer";
import FloatingBag from "./Features/Components/FloatingBag/FloatingBag";

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      { Header }
      <Header />
    
      { Hero }
      <Hero />

      { About }
      <About />

      { Collection }
      <Collection />
      
      { HeroVideo }
      <HeroVideo />

      { Catalogo }
      <Catalogo />

      { HeroPlace }
      <HeroPlace />

      { BrandHistory }
      < BrandHistory />

      { FeatureBrand }
      <FeatureBrand />

      { Footer }
      <Footer />

      { FloatingBag }
      <FloatingBag />

    </div>
  )
}

export default App
