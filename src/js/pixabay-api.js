import axios from 'axios';
import renderImages from './render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export default searchImages;
let page = 1;
let query = '';
let isLoadMoreClicked = false;
const loading = document.querySelector('.loader');
loading.classList.add('hidden');
async function searchImages(newQuery) {
  if (newQuery !== query) {
    query = newQuery;
    page = 1;
    isLoadMoreClicked = false;
  }
  let countForPage = 15;
  const searchParams = new URLSearchParams({
    key: '45503418-8e4034a5d9b1169325787ad22',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: countForPage,
    page: page,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;
  try {
    loading.classList.remove('hidden');
    document.querySelector('span').style.display = 'block';
    const response = await axios.get(url);
    const data = response.data;
    document.querySelector('span').style.display = 'none';
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: '#FF0000',
        position: 'topRight',
      });
      return;
    } else {
      renderImages(data.hits);
      if (isLoadMoreClicked) {
        smoothScroll();
      }
    }
    if (countForPage * page >= data.totalHits) {
      document.querySelector('#load-more-button').style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      document.querySelector('#load-more-button').style.display = 'block';
      loading.classList.add('hidden');
    }
    page++;
  } catch (error) {
    loading.classList.add('hidden');
    console.error('Error:', error);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#load-more-button').addEventListener('click', () => {
    isLoadMoreClicked = true;
    searchImages(query);
  });
});
function smoothScroll() {
  const firstCard = document.querySelector('#parent-li');
  if (firstCard) {
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2, //control
      behavior: 'smooth',
    });
  }
}