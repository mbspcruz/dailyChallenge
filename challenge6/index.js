const buttonBox = document.querySelector(".active-bar");
const messageBox = document.querySelector(".status-box");
const newNotification = document.querySelector(".new-notification");
const hiddenItems = document.querySelector(".hidden-items");

const buttonMore = document.querySelectorAll(".button-more");

window.onload = () => {
  setTimeout(() => newNotification.classList.toggle("hidden"), 3000);
};

buttonBox.addEventListener("click", () => {
  messageBox.classList.toggle("hidden");
  newNotification.classList.replace("bg-gray-100", "bg-white");
});

console.log(buttonMore);
buttonMore[0].addEventListener("click", () => {
  buttonMore[0].classList.toggle("hidden");
  hiddenItems.classList.toggle("hidden");
  buttonMore[1].classList.toggle("hidden");
});

buttonMore[1].addEventListener("click", () => {
  buttonMore[1].classList.toggle("hidden");
  hiddenItems.classList.toggle("hidden");
  buttonMore[0].classList.toggle("hidden");
});
