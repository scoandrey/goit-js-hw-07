import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
// const markUp = createMarkUp(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));

function createMarkUp(galleryItems) {
  const markUp = galleryItems
    .map(({ preview, original, description }) => {
      return '<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source= "${original}" alt="${description}"/></a></li>';
    })
    .join("");
  return markUp;
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
