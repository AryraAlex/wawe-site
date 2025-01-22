const galleryTab = ".gallery-tab__btn";
const galleryImage = ".gallery-image__item";
const galleryTabAll = ".gallery-tab__btn--all";

const currentTab = "gallery-tab__btn--active";
const currentImage = "gallery-image__item--active1";
const currentImage2 = "gallery-image__item--active2";

const galleryTabs = document.querySelectorAll(galleryTab);
const galleryImages = document.querySelectorAll(galleryImage);
const galleryBtnAll = document.querySelector(galleryTabAll);

function tab() {
  galleryTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      let activeTab = tab;
      let tabId = activeTab.getAttribute("data-tab");
      let itemId = document.querySelector(tabId);

      galleryTabs.forEach((tab) => {
        tab.classList.remove(currentTab);
      });
      galleryImages.forEach((item) => {
        item.classList.remove(currentImage);
        item.classList.remove(currentImage2);
      });

      if (index === 0) {
        galleryImages.forEach((item) => {
          item.classList.add(currentImage);
          item.classList.add(currentImage2);
          tab.classList.add(currentTab);
        });
      } else if (index === 1) {
        galleryImages.forEach((item) => {
          itemId.classList.add(currentImage);
          tab.classList.add(currentTab);
        });
      } else {
        activeTab.classList.add(currentTab);
        itemId.classList.add(currentImage2);
      }
    });
  });
}

tab();

