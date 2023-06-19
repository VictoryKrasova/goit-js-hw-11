import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { refs } from '../js/refs.js';
import { renderGallery } from './renderGalary.js';

const API_KEY = '37492299-ffc64413828fcccf47c6df47d';
const BASE_URL = 'https://pixabay.com/api/';
let currentPage = 1;

export async function fetchImages() {
  const searchWord = refs.input.value.trim();
  currentPage = 1;
  if (!searchWord) {
    return;
  }

  refs.gallery.innerHTML = '';

  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`
    );

    const searchResult = response.data.hits;
    if (!searchResult.length) {
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
    renderGallery(searchResult);
    refs.btnLoadMore.classList.remove('visually-hidden');

    if (response.data.totalHits <= 40) {
      refs.btnLoadMore.classList.add('visually-hidden');
    } else {
      refs.btnLoadMore.classList.remove('visually-hidden');
    }
  } catch (error) {
    console.log(error.message);
    Notify.failure('Bad request');
    refs.gallery.innerHTML = '';
  }
}

export async function fetchMoreImages() {
  const searchWord = refs.input.value.trim();
  currentPage += 1;
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`
    );

    const searchResult = response.data.hits;
    renderGallery(searchResult);
    if (response.data.totalHits <= currentPage * 40) {
      refs.btnLoadMore.classList.add('visually-hidden');
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    console.log(error.message);
    Notify.failure('Error occurred while loading more images.');
  }
}