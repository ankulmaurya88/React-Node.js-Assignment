import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = 'https://your-backend-api.com/api';

// Function to create a new form
export const createForm = async (form) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forms`, form);
    return response.data;
  } catch (error) {
    console.error('Error creating form:', error);
    throw error;
  }
};

// Function to fetch all forms
export const fetchForms = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/forms`);
    return response.data;
  } catch (error) {
    console.error('Error fetching forms:', error);
    throw error;
  }
};

// Function to fetch a specific form by ID
export const fetchFormById = async (formId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/forms/${formId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching form by ID:', error);
    throw error;
  }
};

// Function to submit form responses
export const submitResponses = async (formId, responses) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forms/${formId}/responses`, { responses });
    return response.data;
  } catch (error) {
    console.error('Error submitting responses:', error);
    throw error;
  }
};

// Function to fetch responses for a specific form
export const fetchResponses = async (formId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/forms/${formId}/responses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching responses:', error);
    throw error;
  }
};
