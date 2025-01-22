const btnUp = {el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up--hide');
  },
  hide() {
    this.el.classList.add('btn-up--hide');
  },

  btnScroolUp() {

    window.addEventListener('scroll', () => {
      const scrollUp = window.scrollY || document.documentElement.scrollTop;
      scrollUp > 1000 ? this.show() : this.hide();
    });

    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.btnScroolUp();