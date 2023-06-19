import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { refs } from './refs.js';
import { renderGallery } from './renderGalary.js';
import { fetchImages } from './fetchImages.js';
import { fetchMoreImages } from './fetchImages.js';

const API_KEY = '37492299-ffc64413828fcccf47c6df47d';
const BASE_URL = 'https://pixabay.com/api/';

refs.form.addEventListener('submit', onLoadImages);

refs.btnLoadMore.addEventListener('click', onLoadMore);

refs.btnLoadMore.classList.add('visually-hidden');

async function onLoadImages(event) {
  event.preventDefault();
  refs.btnLoadMore.classList.add('visually-hidden');

  fetchImages();
}

async function onLoadMore() {
  fetchMoreImages();
}