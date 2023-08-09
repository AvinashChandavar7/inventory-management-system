import React, { useEffect, useState } from 'react';
import { addProduct } from '../../api/productApi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../../api/categoryApi';

const TotalProducts = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    categories: categories,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(productData);
      navigate('/products');
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const categoriesData = await getAllCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  const handleAddCategory = async () => {
    try {
      const newCategoryData = { name: newCategory };
      await addCategory(newCategoryData);
      setNewCategory('');
      loadCategories();
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleUpdateCategory = async (categoryId, updatedCategoryData) => {
    try {
      await updateCategory(categoryId, updatedCategoryData);
      loadCategories();
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      loadCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <h1>ADD products</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name :
          <Input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description :
          <Input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Quantity :
          <Input
            type="number"
            name="quantity"
            value={productData.quantity}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price :
          <Input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          categories :
          <Input
            type="text"
            name="newCategory"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </label>
        <br />
        <Button type="submit" label="Add Product" />
      </form>

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <Button
              label="Edit"
              onClick={() =>
                handleUpdateCategory(category.id, {
                  name: 'Updated Category Name',
                })
              }
            />
            <Button
              label="Delete"
              onClick={() => handleDeleteCategory(category.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TotalProducts;
