function modal() {
  const modalBtn = document.querySelector("#modalBtn");
  const mobileNav = document.querySelector("#mobileNav");

  modalBtn.addEventListener("click", () => {
    mobileNav.style.display =
      mobileNav.style.display === "none" ? "block" : "none";
  });
}

export default modal;