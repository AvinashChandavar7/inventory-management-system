import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/categories`, categoryData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateCategory = async (id, categoryData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/categories/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
