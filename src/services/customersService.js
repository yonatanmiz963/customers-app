import axios from 'axios';
import { getUserAuthToken } from './authService';

const baseUrl = 'https://localhost:7052/api/Users/';

// Get all customers
async function getCustomers() {
    try {
        const userToken = getUserAuthToken();
        if (!userToken) return;

        const response = await axios({
            method: 'get',
            url: baseUrl,
            headers: {
                Authorization: `Bearer ${userToken.token}`
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error; // Rethrow or handle as needed
    }
}

// Get a single customer by ID
async function getCustomerById(id) {
    try {
        const userToken = getUserAuthToken();
        if (!userToken) return;

        const response = await axios.get(`${baseUrl}/${id}`, {
            headers: {
                Authorization: `Bearer ${userToken.token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching customer with ID ${id}:`, error);
        throw error; // Rethrow or handle as needed
    }
}

// Edit an existing customer
async function editCustomer(customerData) {
    try {
        const userToken = getUserAuthToken();
        if (!userToken) return;

        const response = await axios.put(baseUrl, customerData, {
            headers: {
                Authorization: `Bearer ${userToken.token}`
            }
        });
        console.log('response:', response)
        return response.data;
    } catch (error) {
        console.error(`Error updating customer with ID ${customerData.id}:`, error);
        throw error; // Rethrow or handle as needed
    }
}

// Delete a customer
async function deleteCustomer(id) {
    try {
        const userToken = getUserAuthToken();
        if (!userToken) return;

        const response = await axios.delete(`${baseUrl}/${id}`, {
            headers: {
                Authorization: `Bearer ${userToken.token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error deleting customer with ID ${id}:`, error);
        throw error; // Rethrow or handle as needed
    }
}

export { getCustomers, getCustomerById, editCustomer, deleteCustomer };