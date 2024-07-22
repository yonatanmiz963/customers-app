
import axios from 'axios';
import { redirect } from 'react-router-dom';

const API_URL = 'http://localhost:5140/api/Users/';
const TOKEN_KEY_NAME = 'userToken';

// Function to save JWT token to sessionStorage
async function saveToken(token) {
  sessionStorage.setItem(TOKEN_KEY_NAME, JSON.stringify(token));
};

// Function to remove JWT token from sessionStorage
async function removeToken() {
  sessionStorage.removeItem(TOKEN_KEY_NAME);
};

// Function to login user
async function loginUser(AuthData) {
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

function getAuthToken() {
  const userToken = JSON.parse(sessionStorage.getItem(TOKEN_KEY_NAME));

  if (!userToken) {
    return null;
  }

  return userToken.token;
}


function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect('/');
  }

  return token;
}


export { loginUser, logoutUser, checkAuthLoader };