const buttonFeature = document.querySelectorAll("button");
console.log(buttonFeature);
window.onload = () => {
  console.log("im here");
  buttonFeature[3].focus();
};
