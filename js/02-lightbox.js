import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", createMarkUp(galleryItems));

function createMarkUp(galleryItems) {
  const markUp = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");
  return markUp;
}

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  onModal(e);
});

function onModal(e) {
  console.log(e.target);
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  const instance = SimpleLightbox.create(
    `<img src="${e.target.dataset.source}"/>`,
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
      instance.close();
    }
  }
}
