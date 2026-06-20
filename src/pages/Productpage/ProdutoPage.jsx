import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import "./ProdutoPage.css";
import '../../../src/App.css'
import {
  ImageGallery,
  SizeSelector,
  AddToCartButton,
  ProductTabs,
  SustentabilityBadge,
  RelatedProducts,
} from "./components/index";
import { Footer, Header } from "../../components";
import FloatingBag, { } from "../../Features/Components/FloatingBag/FloatingBag"
import products from "../../Data/Products";
import Products from "../../Features/Components/Products";

// ── Sample data (replace with props or a fetch) ──────────────


const formatPreco = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ProdutoPage() {
  
  const [tamanho, setTamanho] = useState(null);
  const [salvo,   setSalvo]   = useState(false);
  const { id } = useParams();
  const product = products.find(item => String(item.id) === String(id));
  const navigate = useNavigate();

  const handleSelect = (product) => {
    navigate(`/produto/${product.id}`);
  };

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  return (
    <div className="produto-page">
      
      <Header />

      {/* Breadcrumb */}
      <nav className="produto-breadcrumb">
        <span className="bread-link">Início</span>
        <span className="bread-sep">›</span>
        <span className="bread-link">Coleção</span>
        <span className="bread-sep">›</span>
        <span className="bread-link bread-link--active">{product.name}</span>
      </nav>

      {/* Main grid */}
      <div className="produto-grid">
        {/* LEFT — Image gallery */}
        <ImageGallery
          imagens={product.images}
          nome={product.name}
          salvo={salvo}
          onToggleSalvo={() => setSalvo(!salvo)}
        />

        {/* RIGHT — Product info */}
        <div className="produto-info-col">
          <span className="produto-colecao-tag">{product.name}</span>
          <h1 className="produto-titulo">{product.name}</h1>

          <div className="produto-preco-wrap">
            <span className="produto-preco">{formatPreco(product.price)}</span>
            <span className="produto-parcelas">
              {product.times}x de {formatPreco(product.price / product.times)} sem juros
            </span>
          </div>

          <div className="produto-divider" />

          <SizeSelector
            tamanhos={product.sizes}
            semEstoque={product.sizeWithout}
            selecionado={tamanho}
            onChange={setTamanho}
          />

          <div className="produto-divider" />

          <AddToCartButton
            tamanhoSelecionado={tamanho}
            onAdicionar={() => console.log("Adicionado:", tamanho)}
          />

          <button className="produto-btn-secundario">Encontrar similares</button>

          <div className="produto-divider" />

          <ProductTabs
            descricao={product.description}
            composicao={product.fabric}
            cuidados={product.care}
          />

          <SustentabilityBadge />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts
        product={product}
        onSelect={handleSelect}
      />

      <FloatingBag />
      <Footer />
    </div>
  );
}
