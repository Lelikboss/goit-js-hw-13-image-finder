import refs from './refs.js';
export function submitH(e) {
  const value = refs.input.value;
  fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=номер_страницы&per_page=12&key=23189092-912e167e41c5e7d499821c37e`,
  )
    .then(res => res.json())
    .then(data => console.log(data));
}
