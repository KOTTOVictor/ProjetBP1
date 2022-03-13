let slideun = new Array(
  "./images/populaire/natation.jpg",
  "./images/populaire/running.jpg",
  "./images/populaire/yoga.jpg"
);
let slidedeux = new Array(
  "./images/evenement/canoe.jpg",
  "./images/evenement/football.jpg",
  "./images/evenement/motocross.jpg",
  "./images/evenement/plancheAvoile.jpg",
  "./images/evenement/plongee.jpg",
  "./images/evenement/triathlon.jpg"
);
let numero = 0;
let numerodeux = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slideun.length - 1;
  if (numero > slideun.length - 1) numero = 0;
  document.getElementById("slideun").src = slideun[numero];

  numerodeux = numerodeux + sens;
  if (numerodeux < 0) numerodeux = slidedeux.length - 1;
  if (numerodeux > slidedeux.length - 1) numerodeux = 0;
  document.getElementById("slidedeux").src = slidedeux[numerodeux];
}

setInterval("ChangeSlide(1)", 2000);

let contenantsecpop = document.getElementById("contenantsecpop");
let populaires = document.getElementById("populaires");
let rtrun = document.getElementById("rtrun");
let plusopt = document.getElementById("plusopt");

populaires.addEventListener("click", () => {
  contenantsecpop.style.left = 0;
  plusopt.style.display = "none";
});

rtrun.addEventListener("click", () => {
  contenantsecpop.style.left = "-100%";
  plusopt.style.display = "flex";
});
