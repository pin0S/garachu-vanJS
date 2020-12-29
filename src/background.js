const backgrounds = {}
const body = document.querySelector("body");

function paintImage() {
  const image = new Image();
  image.src = `https://source.unsplash.com/featured/?nature,water`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function init() {
  paintImage();
}

init();