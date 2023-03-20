import { galleryItems } from './gallery-items.js';
// Change code below this line  
const galleryList = document.querySelector(".gallery")
 
const pictureElement = galleryItems.map(({preview, original, description }) => 
`<li class="gallery__item">
   <a class ="gallery__link" href="${original}">
   <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a> 
</li>`).join("");
let instance = '';
galleryList.insertAdjacentHTML("afterbegin", pictureElement)


galleryList.addEventListener("click",onModalOpne)

function onModalOpne(event){
 event.preventDefault();

 if ( event.target !== event.currentTarget ){
    window.addEventListener('keydown',onEscapeExit);
   let imageLarge = event.target.getAttribute('data-source');
    instance = basicLightbox.create(`
    <img src=${imageLarge} width="800" height="600">
    `);
     instance.show(); }
}

function onEscapeExit(button){ 
    if (button.code === 'Escape' || button.code === 'Space' ){
        instance.close();
        window.removeEventListener('keydown', onEscapeExit);
    }
};
   