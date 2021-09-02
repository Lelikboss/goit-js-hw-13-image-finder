import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basiclightbox.min.css';
export const openLargeImg = e => {
  const largeImg = e.target.dataset.source;

  if (largeImg === undefined) {
    return;
  }
  console.log(largeImg);
  const instance = basicLightbox.create(`
<img src="${largeImg}"/>
`);
  instance.show();
};
