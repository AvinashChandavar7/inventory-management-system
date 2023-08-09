import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './pages/AddProduct/AddProduct'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import ProductList from './pages/ProductList/ProductList'
import UpdateProduct from './pages/UpdateProduct/UpdateProduct'
import NotFound from './components/NotFound/NotFound';
import ManageCategories from './pages/ManageCategories/ManageCategories';




const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} exact />
          <Route path="/products" element={<ProductList />} />
          <Route path="/categories" element={<ManageCategories />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/edit" element={<UpdateProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

