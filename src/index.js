import './sass/main.scss';
import { refs } from './js/refs';
import generateImg from './js/apiService.js';
import { renderCollection, hidden } from './js/marcup.js';
import debounce from 'lodash.debounce';
import scrollIntoView from './js/scroll.js';
import { alert } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
import '../node_modules/@pnotify/core/dist/Material.css';
import { openLargeImg } from './js/large-img.js';
// import * as basicLightbox from 'basiclightbox';
// import '../node_modules/basiclightbox/dist/basiclightbox.min.css';
let currentPage = 1;

const searchImgFromAPI = e => {
  e.preventDefault();
  // hidden();
  destroyContent();
  generate();
};
const generate = () => {
  const value = refs.inputEl.value;
  generateImg({ value, currentPage })
    // .then(result => renderCollection(result.hits))
    // .then(result => console.log(result.hits.length))
    .then(result => {
      if (result.hits.length === 0) {
        alert('This image does not exist');
      }
      if (result.hits.length === 12) {
        renderCollection(result.hits);
        refs.galleryContainer.classList.remove('hidden');
        refs.loadMoreBtn.classList.remove('hidden');
        refs.clearFieldBtn.classList.remove('hidden');
      } else {
        refs.clearFieldBtn.classList.remove('hidden');
        refs.loadMoreBtn.classList.add('hidden');
        renderCollection(result.hits);
      }
    })
    .then(() => currentPage++);
};

const destroyContent = () => {
  refs.galleryContainer.innerHTML = '';
  currentPage = 1;
};

const clearFieldOnClick = e => {
  e.preventDefault();
  refs.inputEl.value = '';
  refs.galleryContainer.innerHTML = '';
  refs.galleryContainer.classList.add('hidden');
  currentPage = 1;
  hiddenBtn();
};
const hiddenBtn = () => {
  refs.loadMoreBtn.classList.add('hidden');
  refs.clearFieldBtn.classList.add('hidden');
};
// const openLargeImg = e => {
//   const largeImg = e.target.dataset.source;
//   const instance = basicLightbox.create(`
// <img src="${largeImg}"/>
// `);
//   instance.show();
// };
refs.galleryContainer.addEventListener('click', openLargeImg);
refs.clearFieldBtn.addEventListener('click', clearFieldOnClick);
refs.formEl.addEventListener('submit', searchImgFromAPI);
refs.loadMoreBtn.addEventListener('click', debounce(generate, 500));
refs.loadMoreBtn.addEventListener('click', debounce(scrollIntoView, 1500));
