function modal() {
  const modalBtn = document.querySelector("#modalBtn");
  const mobileNav = document.querySelector("#mobileNav");

  modalBtn.addEventListener("click", () => {
    if (!mobileNav.classList.contains("modal-open")) {
      mobileNav.classList.add("modal-open");
      mobileNav.style.display = "block";
    } else {
      mobileNav.classList.remove("modal-open");
      mobileNav.style.display = "none";
    }
  });
}

export default modal;