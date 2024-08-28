// import searchImages from './js/pixabay-api.js';

// document.getElementById('form').addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     var inputValue = event.target.elements.input.value; 
//     document.getElementById('main-ul').innerHTML = '';
//     document.getElementById('load-more-button').style.display = 'none';

//     if (inputValue.trim() === '') {
//         alert('Please enter a search query.');
//     } else {
//         searchImages(inputValue);
//     }
//     event.target.reset();
// });
// main.js
import searchImages from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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