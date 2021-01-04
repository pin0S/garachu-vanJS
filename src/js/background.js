const backgrounds = [
{ name: 'Dark Trees', author: 'Martin Olsson', location: '../../images/backgrounds/martin-olsson-Qbe9Ja1jUg0-unsplash.jpg' },
{ name: 'Feild', author: 'Andreas Strandman', location: '../../images/backgrounds/andreas-strandman-1t0M1Q92BbY-unsplash.jpg'},
{ name: 'Dessert', author: 'Diago Gutierrez', location: '../../images/backgrounds/diego-gutierrez-NRn5rrBnH8w-unsplash.jpg' },
{ name: 'Waves', author: 'Polina Kuzovkova', location: '../../images/backgrounds/polina-kuzovkova-31tY82lhkcc-unsplash.jpg' },
{ name: 'Stars', author: 'Caterina Berger', location: '../../images/backgrounds/caterina-berger-Jvg6U2VW1dQ-unsplash.jpg' }
];

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(number) {
  const image = new Image();
  image.src = backgrounds[number].location;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  paintImage(genRandom);
}

init();