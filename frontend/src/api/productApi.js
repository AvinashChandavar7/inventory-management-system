import axios from "axios";

const API_BASE_URL = 'http://localhost:5000/api'


export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}



export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};