// Get all the accordion panels
const accordionPanels = document.querySelectorAll(".accordion-panel");

// Loop through each panel and add a click event listener
accordionPanels.forEach((panel) => {
  const header = panel.querySelector(".accordion-header");
  const info = panel.querySelector(".accordion-info");
  const plus = panel.querySelector(".plus");
  const minus = panel.querySelector(".minus");

  // Add the click event listener
  header.addEventListener("click", (e) => {
    if (header.classList.contains("text-black")) {
      header.classList.remove("text-black");
      header.classList.add("text-gray-500");
    } else {
      header.classList.add("text-black");
      header.classList.remove("text-gray-500");
    }

    if (header.classList.contains("border-b-2")) {
      header.classList.remove("border-b-2");
      header.classList.add("border-b-0");
    } else {
      header.classList.add("border-b-2");
      header.classList.remove("border-b-0");
    }
    info.classList.toggle("hidden");
    plus.classList.toggle("hidden");
    minus.classList.toggle("hidden");
  });
});
