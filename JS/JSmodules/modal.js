function modal() {
  // находим кнопку и элемент навигации
  const modalBtn  = document.querySelector("#modalBtn");
  const mobileNav = document.querySelector("#mobileNav");

  // находим линии бургера
  const firstLine   = document.querySelector('.burger__item-1');
  const secondLine  = document.querySelector('.burger__item-2');
  const threeLine   = document.querySelector('.burger__item-3')

  modalBtn.addEventListener("click", () => {
    mobileNav.style.display =
      mobileNav.style.display === "block" ? "none" : "block";

    firstLine.classList.toggle('firstLine');
    secondLine.classList.toggle('secondLine');
    threeLine.classList.toggle('threeLine');
  });
}

export default modal;