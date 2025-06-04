const galleryImgs = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = galleryImgs[currentIndex].src;
  lightboxImg.alt = galleryImgs[currentIndex].alt;
  lightbox.classList.add("visible");
}

function closeLightbox() {
  lightbox.classList.remove("visible");
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  lightboxImg.src = galleryImgs[currentIndex].src;
  lightboxImg.alt = galleryImgs[currentIndex].alt;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
  lightboxImg.src = galleryImgs[currentIndex].src;
  lightboxImg.alt = galleryImgs[currentIndex].alt;
}

galleryImgs.forEach((imgEl, index) => {
  imgEl.addEventListener("click", () => {
    openLightbox(index);
  });
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("visible")) return;
  if (e.key === "ArrowRight") {
    showNext();
  } else if (e.key === "ArrowLeft") {
    showPrev();
  } else if (e.key === "Escape") {
    closeLightbox();
  }
});
