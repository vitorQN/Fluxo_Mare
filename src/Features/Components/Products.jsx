import { forwardRef } from "react";
import products from '../../Data/Products';

const Products = forwardRef((props, ref) => {
  return (
    <div className="products-grid" ref={ref}>
      {products.map((product, index) => (
        <div
          key={`${product.name}-${index}`}
          className="product-card"
        >
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Products;