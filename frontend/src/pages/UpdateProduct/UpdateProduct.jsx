// frontend/src/components/pages/UpdateProduct.js
import React, { useState, useEffect } from 'react';
import { getProductById, updateProduct } from '../../api/productApi';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = ({ match }) => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    quantity: 0,
    price: 0,
  });

  const navigate = useNavigate();
  const productId = match.params.id;

  useEffect(() => {
    getProductById(productId).then((data) => setProductData(data));
  }, [productId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProduct(productId, productData);
      navigate(`/products/${productId}`);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <Input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Quantity:
          <Input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <Input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>
        <Button type="submit" label="Update Product" />
      </form>
    </div>
  );
};

export default UpdateProduct;
