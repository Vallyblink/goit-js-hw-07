import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery")

 

const pictureElement = galleryItems.map(({preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join("");

galleryList.insertAdjacentHTML("afterbegin", pictureElement)

const gallery = new SimpleLightbox(".gallery a", {
	captions: true,
	captionSelector: "img",
	captionType: "attr",
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});

