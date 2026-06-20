import "./SizeSelector.css";

/**
 * SizeSelector
 * Props:
 *   tamanhos:    string[]  — all sizes, e.g. ["10","12","14","16"]
 *   semEstoque:  string[]  — out-of-stock sizes
 *   selecionado: string    — currently selected size
 *   onChange:    fn        — called with the chosen size string
 */
export default function SizeSelector({ tamanhos = [], semEstoque = [], selecionado, onChange }) {
  return (
    <div>
      <div className="size-label-row">
        <span className="size-label">TAMANHO</span>
        <button className="size-guide-btn">Guia de Medidas</button>
      </div>

      <div className="tamanhos-row">
        {tamanhos.map((tam) => {
          const esgotado = semEstoque.includes(tam);
          const ativo = selecionado === tam;
          return (
            <button
              key={tam}
              onClick={() => !esgotado && onChange(tam)}
              disabled={esgotado}
              className={`tam-btn${ativo ? " active" : ""}${esgotado ? " esgotado" : ""}`}
            >
              {tam}
              {esgotado && <span className="esgotado-x">✕</span>}
            </button>
          );
        })}
      </div>

      {!selecionado && (
        <p className="size-hint">Selecione um tamanho para continuar</p>
      )}
    </div>
  );
}
