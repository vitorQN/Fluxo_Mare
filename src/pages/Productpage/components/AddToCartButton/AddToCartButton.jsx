        import { useState } from "react";
import "./AddToCartButton.css";

/**
 * AddToCartButton
 * Props:
 *   tamanhoSelecionado: string | null  — must be truthy to enable the button
 *   onAdicionar: fn                   — called when successfully added
 */
export default function AddToCartButton({ tamanhoSelecionado, onAdicionar }) {
  const [adicionado, setAdicionado] = useState(false);

  const handleClick = () => {
    if (!tamanhoSelecionado) return;
    setAdicionado(true);
    onAdicionar?.();
    setTimeout(() => setAdicionado(false), 2500);
  };

  const habilitado = !!tamanhoSelecionado;

  return (
    <button
      onClick={handleClick}
      className={`add-to-cart-btn${!habilitado ? " disabled" : ""}${adicionado ? " success" : ""}`}
    >
      {adicionado ? "✓ Adicionado à sacola" : "Adicionar à sacola"}
    </button>
  );
}
