import axios from 'axios';

export const getDishes = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/dishes');
    return response.data;
  } catch (error) {
    console.error('Error fetching dishes', error);
  }
};
