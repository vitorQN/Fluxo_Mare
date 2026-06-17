import { useEffect, useRef, useState } from "react";
import Header from './components/Header/Header'
import Hero from "./components/Hero/Hero";
import './App.css'
import About from "./components/About/About";
import HeroVideo from "./components/HeroVideo/HeroVideo";

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

      { HeroVideo }
      <HeroVideo />

    </div>
  )
}

export default App
