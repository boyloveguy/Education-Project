import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Ensure to set this in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getExampleData = async () => {
  try {
    const response = await apiClient.get('/example-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching example data:', error);
    throw error;
  }
};

// Add more API functions as needed
