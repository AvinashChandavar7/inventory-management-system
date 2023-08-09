import React, { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { getAllProducts } from '../../api/productApi';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const totalProducts = products || [];

  return (
    <div className="product-list">
      <h1>Product List</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {!loading && !error && (
        <>
          {totalProducts.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <ul>
              {totalProducts.map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          )}
          <Link to="/products/add">
            <Button label="Add Product" className="product-list__button" />
          </Link>
        </>
      )}
    </div>
  );
};

export default ProductList;
