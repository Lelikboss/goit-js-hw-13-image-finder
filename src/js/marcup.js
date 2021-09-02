import { refs } from './refs.js';

export function createGalleryItemMarcup({
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
  largeImageURL,
}) {
  const article = `<li class="photo-card">
  <img src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}"/>
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
</li>`;
  refs.galleryContainer.insertAdjacentHTML('beforeend', article);
}
export function renderCollection(arr) {
  arr.forEach(el => createGalleryItemMarcup(el));
}
// export const hidden = () => {
//   refs.loadMoreBtn.classList.remove('hidden');
//   refs.clearFieldBtn.classList.remove('hidden');
// };
