const Product = require('../models/product.model');


// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a specific product by ID
const getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findById(productId).populate('category');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};



// Create a new product
const createProduct = async (req, res) => {
  const { name, description, quantity, price, category } = req.body;

  // Basic validation checks
  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Name, price, and category are required' });
  }

  if (isNaN(parseFloat(price)) || price <= 0) {
    return res.status(400).json({ message: 'Invalid price value' });
  }


  try {
    const newProduct = await Product.create({
      name, description, quantity, price, category,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ message: 'Error creating product' });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, description, quantity, price, category } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, quantity, price, category, },
      { new: true }
    ).populate('category');

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
