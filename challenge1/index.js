const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressBar = document.querySelector(".progress-bar");
const stepsLeft = document.querySelector(".steps-left");

let checkedCount = 4;

window.onload = () => {
  let arr = [0, 1, 2, 5];
  arr.forEach((i) => {
    checkboxes[i].checked = true;
  });

  let i = 0;
  while (i < checkedCount) {
    progressBar.children[i].style.background = bgColors[i];
    i++;
  }
};

bgColors = [
  "#4C63FF",
  "#4A87FB",
  "#4BA2F4",
  "#48BFF5",
  "#47DBF1",
  "#4CDAD3",
  "#A2ECE8",
];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    console.log(progressBar.children);
    if (event.target.checked) {
      checkedCount++;
      progressBar.children[checkedCount - 1].style.background =
        bgColors[checkedCount - 1];
    } else {
      progressBar.children[checkedCount - 1].style.background = "#11162C";
      checkedCount--;
    }
    stepsLeft.innerHTML = `${7 - checkedCount} remaining to complete`;
  });
});
