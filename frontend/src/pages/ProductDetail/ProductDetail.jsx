import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductById, deleteProduct } from '../../api/productApi';
import Button from '../../components/Button/Button';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  const params = useParams();
  const productId = params.id;

  console.log(productId);

  const navigate = useNavigate();

  useEffect(() => {
    getProductById(productId).then((data) => setProduct(data));
  }, [productId]);

  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
      navigate('/products');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price}</p>
      <Link to={`/products/${productId}/edit`}>
        <Button label="Edit" />
      </Link>
      <Button label="Delete" onClick={handleDelete} />
    </div>
  );
};

export default ProductDetail;
