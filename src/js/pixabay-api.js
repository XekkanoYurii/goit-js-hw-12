import axios from 'axios';
import renderImages from './render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default searchImages;

let page = 1;
let query = '';

async function searchImages(newQuery) {
    if (newQuery !== query) {
        query = newQuery;
        page = 1;
    }

    let countForPage = 15;

    const searchParams = new URLSearchParams({
        key: "45503418-8e4034a5d9b1169325787ad22",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: countForPage,
        page: page
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    try {
        document.querySelector('span.loader').style.display = 'block';

        const response = await axios.get(url);
        const data = response.data;

        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                color: '#ff0000',
                position: 'topRight',
            });
        } else {
            renderImages(data.hits);
            if (countForPage * page >= data.totalHits) {
                document.querySelector('#load-more-button').style.display = 'none';
                iziToast.info({
                    message: "We're sorry, but you've reached the end of search results.",
                    position: 'topRight',
                });
            } else {
                document.querySelector('#load-more-button').style.display = 'block';
            }
        }
        
        page++;

    } catch (error) {
        console.error('Error:', error);
    } finally {
        document.querySelector('span.loader').style.display = 'none';
    }
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var inputValue = event.target.elements.input.value; 
    document.getElementById('main-ul').innerHTML = '';
    document.getElementById('load-more-button').style.display = 'none';

    if (inputValue.trim() === '') {
        iziToast.warning({
            message: 'Please enter a search query.',
            position: 'topRight',
        });
    } else {
        searchImages(inputValue);
    }
    event.target.reset();
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#load-more-button').addEventListener('click', () => {
        searchImages(query);
    });
});