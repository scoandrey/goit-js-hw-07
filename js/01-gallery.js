import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));

function createMarkUp(galleryItems) {
  const markUp = galleryItems
    .map(({ preview, original }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source= "${original}" alt="Image description"/></a></li>`;
    })
    .join("");
  return markUp;
}

galleryRef.addEventListener("click", (e) => {
  onModal(e);
  e.preventDefault();
  if (e.target.nodeName === "IMG");
  return;
});

function onModal(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.sourse}"/>`,
    {
      onShow: (_instance) => {
        galleryRef.addEventListener("keydown", onEscBtn);
      },
      onClose: (_instance) => {
        galleryRef.removeEventListener("keydown", onEscBtn);
      },
    }
  );
  instance.show();

  function onEscBtn(e) {
    if (e.code === "Escape") {
    }
    instance.close();
  }
}
