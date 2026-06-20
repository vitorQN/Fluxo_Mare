import { forwardRef } from "react";
import products from '../../Data/Products';
import { useNavigate } from "react-router-dom";

const Products = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <div className="products-grid" ref={ref}>
      {products.map((product, index) => (
        
        <div
          key={`${product.name}-${index}`}
          onClick={() => navigate(`/product/${product.id}`)}
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