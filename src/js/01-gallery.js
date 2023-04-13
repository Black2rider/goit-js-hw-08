// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({preview, original, description}) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

let simpleGallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: "alt"
});



console.log(galleryItems);
