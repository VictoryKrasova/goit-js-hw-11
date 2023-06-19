import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const newSimpleLightBox = new SimpleLightbox(
  '.gallery .photo-card .photo a',
  {
    captionsData: 'alt',
    captionDelay: 250,
  }
);
