import { useState } from "react";
import "./ProductTabs.css";

const ABAS = [
  { id: "descricao",  label: "DESCRIÇÃO"  },
  { id: "composicao", label: "COMPOSIÇÃO" },
  { id: "cuidados",   label: "CUIDADOS"   },
];

/**
 * ProductTabs
 * Props:
 *   descricao:  string
 *   composicao: string
 *   cuidados:   string
 */
export default function ProductTabs({ descricao = "", composicao = "", cuidados = "" }) {
  const [abaAtiva, setAbaAtiva] = useState("descricao");

  const conteudo = { descricao, composicao, cuidados };

  return (
    <div>
      <div className="tabs-row">
        {ABAS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setAbaAtiva(id)}
            className={`tab-btn${abaAtiva === id ? " active" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="tab-conteudo">{conteudo[abaAtiva]}</p>
    </div>
  );
}
