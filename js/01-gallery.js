import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
  return items
    .map(() => {
      return '<li class="gallery__item"><a class="gallery__link" href="large-image.jpg"><imgclass="gallery__image"src=small-image.jpg"data-source="large-image.jpg"alt="Image description"/></a></li>';
    })
    .join("");
}

// galleryRef.addEventListener("click", (e) => {
//   if (e.target.nodeName !== "IMG") return;
// });

// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }


// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

console.log(galleryItems);
