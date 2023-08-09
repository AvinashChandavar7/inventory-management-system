const Category = require('../models/category.model');

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific category by ID
const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new category
const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = await Category.create({ name, description });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// Update an existing category
const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { name, description } = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId, { name, description, }, { new: true });

    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const deletedCategory = await Category.findByIdAndRemove(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};