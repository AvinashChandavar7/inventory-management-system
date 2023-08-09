// import React, { useState } from 'react';
// import { addProduct } from '../../api/productApi';
// import Input from '../../components/Input';
// import Button from '../../components/Button';
// import { useNavigate } from 'react-router-dom';

// import './AddProduct.css';

// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     name: '',
//     description: '',
//     quantity: 0,
//     price: 0,
//     categories: [],
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addProduct(productData);
//       navigate('/products');
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>ADD products</h1>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Name :
//           <Input
//             type="text"
//             name="name"
//             value={productData.name}
//             onChange={handleInputChange}
//           />
//         </label>

//         <label>
//           Description :
//           <Input
//             type="text"
//             name="description"
//             value={productData.description}
//             onChange={handleInputChange}
//           />
//         </label>

//         <label>
//           Quantity :
//           <Input
//             type="number"
//             name="quantity"
//             value={productData.quantity}
//             onChange={handleInputChange}
//           />
//         </label>

//         <label>
//           Price :
//           <Input
//             type="number"
//             name="price"
//             value={productData.price}
//             onChange={handleInputChange}
//           />
//         </label>

//         <label>
//           categories :
//           <Input
//             type="number"
//             name="categories"
//             value={productData.categories}
//             onChange={handleInputChange}
//           />
//         </label>
//         <br />
//         <Button type="submit" label="Add Product" />
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from 'react';
import { addProduct } from '../../api/productApi';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

import './AddProduct.css';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    quantity: 0,
    price: 0,
    categories: [],
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

  return (
    <div className="add-product__container">
      <h1 className="add-product__header">ADD products</h1>

      <form className="add-product__form" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name :</label>
              </td>
              <td>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={productData.name}
                  onChange={handleInputChange}
                  className="add-product__input"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Description :</label>
              </td>
              <td>
                <Input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={productData.description}
                  onChange={handleInputChange}
                  className="add-product__input"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Quantity :</label>
              </td>
              <td>
                <Input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={productData.quantity}
                  onChange={handleInputChange}
                  className="add-product__input"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Price :</label>
              </td>
              <td>
                <Input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={productData.price}
                  onChange={handleInputChange}
                  className="add-product__input"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Categories :</label>
              </td>
              <td>
                <Input
                  type="text"
                  name="categories"
                  placeholder="Categories"
                  value={productData.categories}
                  onChange={handleInputChange}
                  className="add-product__input"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <Button
            type="submit"
            label="Add Product"
            className="add-product__button"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
