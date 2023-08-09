// frontend/src/components/pages/ManageCategories.js
import React, { useState, useEffect } from 'react';
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../../api/categoryApi';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import './ManageCategories.css';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

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
    <div className="manage-categories">
      <h1 className="manage-categories-header">Manage Categories</h1>
      <div className="manage-categories-container">
        <div className="add-category-container">
          <Input
            type="text"
            name="newCategory"
            placeholder="Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="add-category__input"
          />
          <Button
            label="Add Category"
            onClick={handleAddCategory}
            className="add-category__button"
          />
        </div>
        <ul className="categories-list">
          {categories.map((category) => (
            <li className="category-item" key={category.id}>
              <span className="category-name">{category.name}</span>
              <div className="category-actions">
                <Button
                  label="Edit"
                  className="add-category__edit"
                  onClick={() =>
                    handleUpdateCategory(category.id, {
                      name: 'Updated Category Name',
                    })
                  }
                />
                <Button
                  label="Delete"
                  className="add-category__delete"
                  onClick={() => handleDeleteCategory(category.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCategories;
