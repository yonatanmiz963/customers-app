
import axios from 'axios';
import { redirect } from 'react-router-dom';

const API_URL = 'https://localhost:7052/api/Users/';
const TOKEN_KEY_NAME = 'userToken';

/**
 * Function to save JWT token to sessionStorage
 * @param {string} token - The JWT token to be saved
 * @returns {void}
 */
async function saveToken(token) {
  sessionStorage.setItem(TOKEN_KEY_NAME, JSON.stringify(token));
};

/**
 * Function to remove JWT token from sessionStorage
 * @returns {void}
 */
async function removeToken() {
  sessionStorage.removeItem(TOKEN_KEY_NAME);
};

/**
 * Function to login user
 * @param {object} AuthData - The authentication data containing username and password
 * @returns {Promise<any>} - A promise that resolves to the response data from the login API
 * @throws {Error} - If the login fails
 */
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

/**
 * Function to logout user
 * @returns {void}
 */
const logoutUser = () => {
  removeToken();
};


/**
 * Retrieves the authentication token from the session storage.
 * If the token is not found or has expired, it redirects the user to the login page.
 * @returns {Object} The authentication token.
 */
function getUserAuthToken() {
  const userToken = JSON.parse(sessionStorage.getItem(TOKEN_KEY_NAME));

  if (!userToken) {
    redirect('/');
    return;
  }

  if (hasDatePassed(userToken.expirationDate)) {
    console.warn('Token has expired');
    removeToken();
    redirect('/');
    return;
  }

  return userToken;
}

/**
 * Function to check if a date has passed
 * @param {string} expirationDateString - The expiration date string
 * @returns {boolean} - True if the current date is greater than the expiration date, false otherwise
 */
function hasDatePassed(expirationDateString) {
  const currentDate = new Date();
  console.log('currentDate:', currentDate)
  const expirationDate = new Date(expirationDateString);
  console.log('expirationDate:', expirationDate)

  return currentDate > expirationDate;
}



export { loginUser, logoutUser, getUserAuthToken };