function generateImg({ value, currentPage }) {
  console.log(currentPage);
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${currentPage}&per_page=12&key=23189092-912e167e41c5e7d499821c37e`,
  )
    .then(response => response.json())
    .catch(err => console.log(err));
}
export default generateImg;
