const burgerButton = document.querySelector('.header__burger-button')
const burgerMenu = document.querySelector('.header-nav__list')
const burgerNav = document.querySelectorAll('.header-nav__link')


function openCloseMenu() {
  burgerButton.addEventListener('click', () => {
    if (burgerButton.classList.contains('is-active') && burgerMenu.classList.contains('is-active')) {
      burgerButton.classList.remove('is-active')
      burgerMenu.classList.remove('is-active')
      document.documentElement.classList.remove('is-lock')
    }
    else {
      burgerButton.classList.add('is-active')
      burgerMenu.classList.add('is-active')
      document.documentElement.classList.add('is-lock')
    }
  })
}

function hideMenu() {
  burgerNav.forEach((index) => {
    index.addEventListener('click', () => {
      burgerButton.classList.remove('is-active')
      burgerMenu.classList.remove('is-active')
      document.documentElement.classList.remove('is-lock')
    })
  })
}
openCloseMenu()
hideMenu()

