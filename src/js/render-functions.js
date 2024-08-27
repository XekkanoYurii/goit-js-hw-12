import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default renderImages;

let lightbox;

function renderImages(images) {
    const ul = document.querySelector('ul');
    let markup = '';

    images.forEach(image => {
        markup += `
        <li id='parent-li'>
            <a href="${image.largeImageURL}"  class="lightbox">
                <img src="${image.webformatURL}" alt="${image.tags}" data-large-image="${image.largeImageURL}" width="360">
                <ul id="inner-ul">
                    <li id="inner-li">
                        <div id="name">Likes</div>
                        <div id="count">${image.likes}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Views</div>
                        <div id="count">${image.views}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Comments</div>
                        <div id="count">${image.comments}</div>
                    </li>
                    <li id="inner-li">
                        <div id="name">Downloads</div>
                        <div id="count">${image.downloads}</div>
                    </li>
                </ul>
            </a>
        </li>
        `;
    });

    ul.insertAdjacentHTML('beforeend', markup);

    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.lightbox', {
            captionsData: 'alt',
            captionDelay: 250
        });
    }
}