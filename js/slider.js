const slide = document.querySelectorAll(".slide");
const point = document.querySelectorAll(".point-area__item");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

const slideActive = "slide--active";
const pointActive = "point-area__item--active";

let currentSlide = 0;

slide[0].classList.add(slideActive);
point[0].classList.add(pointActive);

point.forEach((pointItem, i) => {
  pointItem.addEventListener("click", () => {
    point.forEach((pag) => {
      pag.classList.remove(pointActive);
    });
    slide.forEach((slideItem) => {
      slideItem.classList.remove(slideActive);
    });

    if (slide && point) {
      point[i].classList.add(pointActive);
      slide[i].classList.add(slideActive);
    }
  });
});

function showSlide(index) {
  point.forEach((pag) => {
    pag.classList.remove(pointActive);
  });
  slide.forEach((slideItem) => {
    slideItem.classList.remove(slideActive);
  });

  slide[index].classList.add(slideActive);
  point[index].classList.add(pointActive);
}

function prev() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slide.length - 1;
  }
  showSlide(currentSlide);
}
function next() {
  currentSlide++;
  if (currentSlide >= slide.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);
