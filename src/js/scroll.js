import { refs } from './refs.js';
export default function scrollIntoView() {
  refs.galleryContainer.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
