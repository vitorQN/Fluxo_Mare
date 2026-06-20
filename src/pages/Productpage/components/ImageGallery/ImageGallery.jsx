import { useState } from "react";
import "./ImageGallery.css";

/**
 * ImageGallery
 * Props:
 *   imagens: string[]       — array of image URLs
 *   nome:    string         — alt text for main image
 *   salvo:   boolean        — heart toggle state
 *   onToggleSalvo: fn       — called when heart is clicked
 */
export default function ImageGallery({ imagens = [], nome = "", salvo, onToggleSalvo }) {
  const [imgAtiva, setImgAtiva] = useState(0);

  return (
    <div className="gallery-col">
      {/* Thumbnails */}
      <div className="thumb-col">
        {imagens.map((img, i) => (
          <button
            key={i}
            onClick={() => setImgAtiva(i)}
            className={`thumb-btn${imgAtiva === i ? " active" : ""}`}
          >
            <img src={img} alt="" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="main-img-wrap">
        <img src={imagens[imgAtiva]} alt={nome} />
        <button
          onClick={onToggleSalvo}
          className="heart-btn"
          aria-label={salvo ? "Remover dos salvos" : "Salvar"}
        >
          {salvo ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
}
