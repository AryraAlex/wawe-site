window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const bgNav = document.querySelector(".header-nav__bg");

  if (scrollPos > 650) {
    bgNav.classList.add("bg-visible");
  } else {
    bgNav.classList.remove("bg-visible");
  }
});

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const title = document.querySelector(".header-title");

  if (scrollPos > 200) {
    title.classList.add("title");
  } else {
    title.classList.remove("title");
  }
});

window.addEventListener("scroll", () => {
  document.body.style.cssText = `--scrollTo: ${this.scrollY}px`;
});
