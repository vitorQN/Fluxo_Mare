import "./RelatedProducts.css";

const formatPreco = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/**
 * RelatedProducts
 * Props:
 *   produtos: Array<{ nome: string, preco: number, img: string }>
 *   onSelect: fn(produto)  — called when a card is clicked
 */
export default function RelatedProducts({ products = [], onSelect }) {
  return (
    <section className="related-section">
      <h2 className="related-titulo">Você também vai gostar</h2>
      <div className="related-cards-row">
        {products.map((p) => (
          <div
            className="related-card"
            onClick={() => onSelect?.(p)}
          >
            <div className="related-card__img-wrap">
              <img src={p.image} alt={p.name} />
            </div>
            <div className="related-card__info">
              <span className="related-card__nome">{p.name}</span>
              <span className="related-card__preco">{formatPreco(p.price)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
