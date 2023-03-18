const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");
const hamburgerBtn = document.querySelector(".hamburguer");
const navBar = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  navBar.classList.toggle("hidden");
});
const billing = document.querySelectorAll(".billing");
console.log(billing);

window.onload = () => {
  billing.forEach((element) => {
    element.focus();
  });
};
