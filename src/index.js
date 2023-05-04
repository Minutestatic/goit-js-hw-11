import Notiflix from 'notiflix';
import { getImg } from './js/http-requests';
import { imgSearchResult } from './js/img-search-result';
import './css/styles.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

form.addEventListener('submit', onSubmitForm);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

let currentPage = 1;

function onSubmitForm(evt) {
  evt.preventDefault();

  const searchQuery = form.elements.searchQuery.value;
  currentPage = 1;

  getImg(searchQuery, currentPage)
    .then(images => {
      gallery.innerHTML = imgSearchResult(images.hits);

      loadMoreBtn.classList.add('is-hidden');
    })
    .catch(error => {
      console.error(error);
    });
}

function onLoadMoreBtnClick(evt) {
  evt.preventDefault();

  const searchQuery = form.elements.searchQuery.value;

  currentPage += 1;

  getImg(searchQuery, currentPage)
    .then(images => {
      gallery.insertAdjacentHTML('beforeend', imgSearchResult(images.hits));

      const totalHits = images.totalHits;
      Notiflix.Notify.info(`Hooray! We found ${images.totalHits} images.`);

      if (totalHits <= currentPage * images.hits.length) {
        Notiflix.Notify.info(
          `We're sorry, but you've reached the end of search results.`
        );
        loadMoreBtn.classList.remove('is-hidden');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
