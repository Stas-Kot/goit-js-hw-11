import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

export const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.search_text.value.trim();
  if (query === '') {
    return;
  }
  showLoader();
  clearGallery();
  getImagesByQuery(query)
    .then(({ data: { hits } }) => {
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          messageColor: 'white',
          backgroundColor: 'red',
          transitionIn: 'fadeInUp',
        });
      }
      createGallery(hits);
    })
    .catch(error => console.log(error))
    .finally(() => hideLoader());
  e.target.reset();
}
