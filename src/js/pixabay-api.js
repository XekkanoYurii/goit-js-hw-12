import axios from 'axios';
import renderImages from './render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

async function searchImages(query) {
    const loader = document.querySelector('#loader');
    loader.style.display = 'block';

    const searchParams = new URLSearchParams({
        key: "45503418-8e4034a5d9b1169325787ad22",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    const url = `https://pixabay.com/api/?${searchParams}`;

    try {
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
        }
    } catch (error) {
        console.error('Error:', error);
        iziToast.error({
            message: 'Something went wrong. Please try again later.',
            color: '#ff0000',
            position: 'topRight',
        });
    } finally {
        loader.style.display = 'none';
    }
}

export default searchImages;