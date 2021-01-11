const backgrounds = [
{ day: '0', name: 'Dark Trees', author: 'Martin Olsson', location: '../../images/backgrounds/martin-olsson-Qbe9Ja1jUg0-unsplash.jpg' },
{ day: '1', name: 'Feild', author: 'Andreas Strandman', location: '../../images/backgrounds/andreas-strandman-1t0M1Q92BbY-unsplash.jpg'},
{ day: '2', name: 'Dessert', author: 'Diago Gutierrez', location: '../../images/backgrounds/diego-gutierrez-NRn5rrBnH8w-unsplash.jpg' },
{ day: '3', name: 'Waves', author: 'Polina Kuzovkova', location: '../../images/backgrounds/polina-kuzovkova-31tY82lhkcc-unsplash.jpg' },
{ day: '4', name: 'Stars', author: 'Caterina Berger', location: '../../images/backgrounds/caterina-berger-Jvg6U2VW1dQ-unsplash.jpg' },
{ day: '5', name: 'Water', author: 'Luke Vodell', location: '../../images/backgrounds/luke-vodell-FBOP5an6h74-unsplash.jpg' },
{ day: '6', name: 'Flowers', author: 'Sharissa Johnson', location: '../../images/backgrounds/sharissa-johnson-Yis49IPlFws-unsplash.jpg' }
];

const body = document.querySelector("body");

function paintImage() {
  let background_day = new Date().getDay()

  background = `url(${backgrounds[background_day].location})`;
  body.style.backgroundImage = background;   
}



paintImage();


