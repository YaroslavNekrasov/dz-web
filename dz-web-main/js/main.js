function scrollToMore() {
  window.scrollTo({
    top: 800,
    behavior: "smooth",
  });
}

const items = document.getElementsByClassName("projects-list_item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    for (let q = 0; q < items.length; q++) {
      items[q].classList.remove("_active");
    }
    items[i].classList.add("_active");
  });
}

setInterval(nextSlide, 5000);

function nextSlide() {
  for (let index = 0; index < rad.length; index++) {
    rad[index].classList.remove("_active");
  }
  if (i > 2) {
    i = 0;
    rad[i].classList.add("_active");
    radios[i].checked = true;
  } else {
    i++;
    rad[i].classList.add("_active");
    radios[i].checked = true;
  }
}

// window.onload = function () {
//   setInterval(intervar);
// };

const rad = document.getElementsByClassName("manual-btn");
const radios = document.getElementsByClassName("radios");
let i = 0;

for (let index = 0; index < rad.length; index++) {
  rad[index].addEventListener("click", function () {
    for (let index = 0; index < rad.length; index++) {
      rad[index].classList.remove("_active");
    }
    // clearInterval(intervar);
    rad[index].classList.add("_active");
    i = index;
    // setInterval(intervar);
  });
}
