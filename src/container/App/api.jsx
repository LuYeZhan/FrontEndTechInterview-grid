import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const API_ENDPOINT = 'YOUR_API_ENDPOINT';

const api = {
  saveState: async (state) => {
    try {
      const response = await axios.post(API_ENDPOINT, { state });
      console.log('State saved successfully:', response.data);
      return response.data; 
    } catch (error) {
      console.error('Error saving state:', error);
      throw error; 
    }
  },
  getTemplates: async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/templates`);
      return response.data;
    } catch (error) {
      console.error('Error fetching templates:', error);
      throw error;
    }
  },
  getProducts: async (productIds) => {
    try {
      const params = new URLSearchParams({ ids: JSON.stringify(productIds) });
      const response = await axios.get(`${API_ENDPOINT}/products?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
};

const mock = new MockAdapter(axios);

// Mock the getProducts call
mock.onGet(/\/products/).reply((config) => {
  // Extract productIds from the URL
  const params = new URLSearchParams(config.url.split('?')[1]);
  const productIds = JSON.parse(params.get('ids'));
  // Mock response data based on productIds
  const products = productIds.map((productId) => ({
    id: productId,
    name: `Product ${productId}`,
    price: Math.floor(Math.random() * 100),
    imageUrl: `https://img.lojasrenner.com.br/item/783048755/large/13.jpg`,
  }));

  return [200, products];
});

export default api;