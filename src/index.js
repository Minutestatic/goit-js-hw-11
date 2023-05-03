import Notiflix from 'notiflix';
import { getImg } from './js/http-requests';
import { imgSearchResult } from './js/img-search-result';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  const searchQuery = form.elements.searchQuery.value;

  getImg(searchQuery)
    .then(images => {
      gallery.innerHTML = imgSearchResult(images.hits); //ПОЛУЧАЮ ГАЛЕРЕЮ

      console.log(images);
      Notiflix.Notify.info(`Hooray! We found ${images.totalHits} images.`);
    })
    .catch(error => {
      console.error(error);
    });
}
