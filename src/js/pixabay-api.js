import axios from 'axios';
import renderImages from './render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


function searchImages(query) {
    let loader = document.querySelector('#loader');
    loader.style.display = 'block';

    const searchParams = new URLSearchParams({
        key: "45503418-8e4034a5d9b1169325787ad22",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    color: '#ff0000',
                    position: 'topRight',
                });
            } else {
                renderImages(data.hits);
            }
            loader.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            loader.style.display = 'none';
        });
}

export default searchImages;