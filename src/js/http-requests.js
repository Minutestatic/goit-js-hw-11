import axios from 'axios';
import notiflix from 'notiflix';

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
    const data = response.data;
    if (data.hits.length === 0) {
      notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export { getImg };
