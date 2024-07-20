
import axios from 'axios';

const API_URL = 'http://localhost:5140/api/Users/';

// Function to save JWT token to sessionStorage
const saveToken = (token) => {
  sessionStorage.setItem('userToken', token);
};

// Function to get JWT token from sessionStorage
const getToken = () => {
  return sessionStorage.getItem('userToken');
};

// Function to remove JWT token from sessionStorage
const removeToken = () => {
  sessionStorage.removeItem('userToken');
};

// Function to login user
const loginUser = async (AuthData) => {
  try {
    const response = await axios.post(`${API_URL}login`, AuthData);
    if (response.data.token) {
      saveToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};


// Function to logout user
const logoutUser = () => {
  removeToken();
};

export { loginUser, logoutUser, getToken };