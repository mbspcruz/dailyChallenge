const interests = document.getElementById("interests");

console.log(interests.children);
window.onload = () => {
  let arr = [4, 6, 8];
  arr.forEach((i) => {
    interests.children[i].classList.toggle("selected");
  });
};

interests.addEventListener("click", function (event) {
  const button = event.target;
  if (button.tagName === "BUTTON") {
    button.classList.toggle("selected");
  }
});
