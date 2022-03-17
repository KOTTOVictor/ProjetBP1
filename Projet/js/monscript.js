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

let secpop = document.getElementById("secpop");
let populaires = document.getElementById("populaires");
let rtrun = document.getElementById("rtrun");
let plusopt = document.getElementById("plusopt");

let avenir = document.getElementById("avenir");
let row = document.getElementById("row");
let rtrdeux = document.getElementById("rtrdeux");

let seceven = document.getElementById("seceven");

populaires.addEventListener("click", () => {
  secpop.style.left = 0;
  secpop.style.position = "relative";

  plusopt.style.display = "none";
});

rtrun.addEventListener("click", () => {
  secpop.style.left = "-150%";

  setTimeout(() => {
    secpop.style.position = "absolute";
    plusopt.style.display = "flex";
  }, 100);
});

avenir.addEventListener("click", () => {
  seceven.style.left = 0;
  seceven.style.position = "relative";
  plusopt.style.display = "none";
  // TimeUnit.MILLISECONDSs.sleep(90);

  seceven.style.display = "flex";
});

rtrdeux.addEventListener("click", () => {
  seceven.style.left = "-220%";

  setTimeout(() => {
    seceven.style.position = "absolute";
  }, 0.000000001);

  // TimeUnit.seconds.sleep(0.1);
  // seceven.style.display = "none";

  plusopt.style.display = "flex";

  // TimeUnit.MILLISECONDSs.sleep(90);
  // row.style.display = "none";

  // seceven.style.display = "none";
  // row.style.position = "absolute";
  // seceven.style.height = "0";

  // contenantseceven.style.display = "none";
});
