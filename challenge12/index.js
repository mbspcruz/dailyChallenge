const theMenu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menu-button");

console.log(theMenu);
console.log(menuBtn);

menuBtn.addEventListener("click", () => {
  theMenu.classList.toggle("hidden");
});
