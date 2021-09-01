import './sass/main.scss';
import { refs } from './js/refs';
import { submitH } from './js/apiService';

let currentPage = 1;

const hendlerSubmit = e => {
  e.preventDefault();
  // innerHTML
  const value = refs.inputEl.value;
  fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${currentPage}&per_page=12&key=23189092-912e167e41c5e7d499821c37e`,
  )
    .then(response => response.json())
    .then(result => renderCollection(result.hits))
    .catch(err => console.log(err));
};

// function createItem({ webformatURL, tags }) {
//   const article = `<article>
//     <img src='${webformatURL}' alt='${tags}'/>
//   </article>
// `;
//   refs.galleryContainer.insertAdjacentHTML('beforeend', article);
// }
function createGalleryItem({ webformatURL, tags, likes, views, comments, downloads }) {
  const article = `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" />

  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</div>`;
  refs.galleryContainer.insertAdjacentHTML('beforeend', article);
}
function renderCollection(arr) {
  arr.forEach(el => createGalleryItem(el));
}
refs.formEl.addEventListener('submit', hendlerSubmit);
