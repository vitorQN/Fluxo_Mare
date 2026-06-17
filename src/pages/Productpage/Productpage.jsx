import { useState } from "react";
import {
  ImageGallery,
  SizeSelector,
  AddToCartButton,
  ProductTabs,
  SustentabilityBadge,
  RelatedProducts,
} from "./components";

// ── Sample data (replace with props or a fetch) ──────────────
const produto = {
  nome: "Camiseta Brasil Off White",
  colecao: "Seleção Especial",
  preco: 69.99,
  parcelas: 2,
  descricao:
    "Uma peça que carrega o espírito do Brasil em cada detalhe. Confeccionada em algodão puro, a camiseta une conforto e identidade com bordado texturizado e corte juvenil levemente oversized.",
  composicao: "100% Algodão",
  cuidados: "Lavar à mão ou na máquina em ciclo delicado. Não usar alvejante.",
  tamanhos: ["10", "12", "14", "16"],
  semEstoque: ["10"],
  imagens: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  ],
  relacionados: [
    { nome: "Maré",     preco: 149.0, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80" },
    { nome: "Brisa",    preco: 129.0, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
    { nome: "Corrente", preco: 139.0, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80" },
  ],
};

const formatPreco = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ProdutoPage() {
  const [tamanho, setTamanho] = useState(null);
  const [salvo,   setSalvo]   = useState(false);

  return (
    <div style={s.page}>
      {/* Breadcrumb */}
      <nav style={s.breadcrumb}>
        <span style={s.breadLink}>Início</span>
        <span style={s.breadSep}>›</span>
        <span style={s.breadLink}>Coleção</span>
        <span style={s.breadSep}>›</span>
        <span style={s.breadLink}>Infantil</span>
        <span style={s.breadSep}>›</span>
        <span style={{ ...s.breadLink, color: "#6b7e8f" }}>{produto.nome}</span>
      </nav>

      {/* Main grid */}
      <div style={s.grid}>
        {/* LEFT — Image gallery */}
        <ImageGallery
          imagens={produto.imagens}
          nome={produto.nome}
          salvo={salvo}
          onToggleSalvo={() => setSalvo(!salvo)}
        />

        {/* RIGHT — Product info */}
        <div style={s.infoCol}>
          <span style={s.colecaoTag}>{produto.colecao}</span>
          <h1 style={s.titulo}>{produto.nome}</h1>

          <div style={s.precoWrap}>
            <span style={s.preco}>{formatPreco(produto.preco)}</span>
            <span style={s.parcelas}>
              {produto.parcelas}x de {formatPreco(produto.preco / produto.parcelas)} sem juros
            </span>
          </div>

          <div style={s.divider} />

          <SizeSelector
            tamanhos={produto.tamanhos}
            semEstoque={produto.semEstoque}
            selecionado={tamanho}
            onChange={setTamanho}
          />

          <div style={s.divider} />

          <AddToCartButton
            tamanhoSelecionado={tamanho}
            onAdicionar={() => console.log("Adicionado:", tamanho)}
          />

          <button style={s.btnSecundario}>Encontrar similares</button>

          <div style={s.divider} />

          <ProductTabs
            descricao={produto.descricao}
            composicao={produto.composicao}
            cuidados={produto.cuidados}
          />

          <SustentabilityBadge />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts
        produtos={produto.relacionados}
        onSelect={(p) => console.log("Ver produto:", p.nome)}
      />
    </div>
  );
}

// ── Page-level styles only ───────────────────────────────────
const s = {
  page: {
    background: "#eae5dd",
    minHeight: "100vh",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: "#3a3530",
    padding: "0 0 80px",
  },
  breadcrumb: {
    padding: "20px 60px",
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  breadLink: {
    cursor: "pointer",
    fontFamily: "'Arial', sans-serif",
    textTransform: "uppercase",
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "#8a7e72",
  },
  breadSep: { color: "#b5a99a", fontSize: 14 },
  grid: {
    display: "flex",
    gap: 48,
    padding: "20px 60px 60px",
    maxWidth: 1200,
    margin: "0 auto",
    flexWrap: "wrap",
  },
  infoCol: {
    flex: "1 1 340px",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    paddingTop: 4,
  },
  colecaoTag: {
    fontFamily: "'Arial', sans-serif",
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#6b7e8f",
    marginBottom: 10,
    display: "block",
  },
  titulo: {
    fontSize: 30,
    fontWeight: 400,
    letterSpacing: "0.01em",
    lineHeight: 1.2,
    margin: "0 0 20px",
    color: "#2e2820",
  },
  precoWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginBottom: 24,
  },
  preco: {
    fontSize: 26,
    fontWeight: 500,
    color: "#2e2820",
    letterSpacing: "0.02em",
  },
  parcelas: {
    fontSize: 13,
    color: "#8a7e72",
    fontFamily: "'Arial', sans-serif",
    letterSpacing: "0.03em",
  },
  divider: {
    height: 1,
    background: "#d0c8be",
    margin: "22px 0",
  },
  btnSecundario: {
    width: "100%",
    padding: "15px 24px",
    borderRadius: 40,
    border: "1.5px solid #b0a090",
    background: "transparent",
    color: "#3a3530",
    fontSize: 13,
    letterSpacing: "0.14em",
    fontFamily: "'Arial', sans-serif",
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: 12,
  },
};