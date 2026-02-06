import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        ⏳ Loading products...
      </h2>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map(product => (
        <div
          key={product.id}
          style={{
            width: "200px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "10px"
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "contain"
            }}
          />
          <h4>{product.title.slice(0, 30)}...</h4>
          <p>₹ {product.price}</p>

          <Link to={`/product/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
