import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Productpage/ProdutoPage";
import './App.css'
import  ScrollToTop  from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
