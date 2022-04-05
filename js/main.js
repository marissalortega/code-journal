/* global data */
/* exported data */
var photoURLInput = document.querySelector('.photo-url');
var image = document.querySelector('img');

photoURLInput.addEventListener('input', function (event) {
  image.setAttribute('src', event.target.value);
});
