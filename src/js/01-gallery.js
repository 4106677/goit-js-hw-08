// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// let galleryClick = new SimpleLightbox(".gallery a", {
//   captions: true,
//   captionsData: "alt",
//   captionDelay: 250,
// });

const galleryItem = galleryItems
  .map(
    item => `<a class="gallery__item" href="${item.original}" target="_parent" rel="noreferrer noopener">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
  )
  .join('');

// console.log(galleryClick);

gallery.insertAdjacentHTML('beforeend', galleryItem);

gallery.addEventListener('click', onImageClick);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function onImageClick(evt) {
  evt.preventDefault();
}

console.log('SimpleLightbox');
