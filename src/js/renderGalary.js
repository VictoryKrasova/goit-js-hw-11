import { refs } from '../js/refs.js';
import { scroll } from './scroll.js';
import { newSimpleLightBox } from './newSimpleLightbox.js';

export function renderGallery(images) {
  const gallery = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `
  <div class="photo-card">
    <div class="photo">
      <a href="${largeImageURL}" alt="${tags}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
    </div>
    <div class="info">
      <div>
        <p class="info-item"><b>Likes</b></p>
        <p>${likes}</p>
      </div>
      <div>
        <p class="info-item"><b>Views</b></p>
        <p>${views}</p>
      </div>
      <div>
        <p class="info-item"><b>Comments</b></p>
        <p>${comments}</p>
      </div>
      <div>
        <p class="info-item"><b>Downloads</b></p>
        <p>${downloads}</p>
      </div>
    </div>
  </div>
  `
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', gallery);

  newSimpleLightBox.refresh();

  //   onIntersectionObserver();

  //   if (instanceApiService.numberPage > 2) {
  //     scroll();
  //   }
}
