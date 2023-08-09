const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, },
  quantity: { type: Number, default: 0, },
  price: { type: Number, required: true, },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  }
}, {
  timestamps: true
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
