const galleryTab = ".gallery__tab-btn";
const galleryImage = ".gallery__image-item";
const galleryTabAll = ".gallery__tab-btn--all";

const currentTab = "gallery__tab-btn--active";
const currentImage = "gallery__image-item--active1";
const currentImage2 = "gallery__image-item--active2";

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

