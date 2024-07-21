
import axios from 'axios';

const API_URL = 'https://localhost:7052/api/Users/';

// Function to save JWT token to sessionStorage
const saveToken = (token) => {
  sessionStorage.setItem('userToken', JSON.stringify(token));
};

// Function to get JWT token from sessionStorage
const getToken = () => {
  return JSON.parse(sessionStorage.getItem('userToken'));
};

// Function to remove JWT token from sessionStorage
const removeToken = () => {
  sessionStorage.removeItem('userToken');
};

// Function to login user
const loginUser = async (AuthData) => {
  try {
    const response = await axios.post(`${API_URL}login`, AuthData);
    if (response.data) {
      saveToken(response.data);
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