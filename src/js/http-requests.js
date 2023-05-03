import axios from 'axios';

async function getImg(photos) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '36013837-3d9990b0614e4049bfc16c19d';
  const params = new URLSearchParams({
    key: API_KEY,
    q: photos,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
  });

  try {
    const response = await axios.get(`${BASE_URL}?${params}`);
    console.log(response.data.hits);
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
}

export { getImg };
