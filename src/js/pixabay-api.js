import axios from 'axios';

const api_KEY = '21750958-271f4873848cc9d3a2fe2c382';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

export default async function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: api_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
