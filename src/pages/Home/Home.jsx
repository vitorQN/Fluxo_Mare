import { useEffect, useRef, useState } from "react";
import '../../../src/App.css'
import {
    About,
    Hero,
    HeroPlace,
    HeroVideo,
    FeatureBrand,
    BrandHistory,
} from './components/index';

import {
    Header,
    Collection,
    Catalogo,
    Footer,
} from '../../components';

import FloatingBag from '../../Features/Components/FloatingBag/FloatingBag'

function Home() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="Home">
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

export default Home
