"use strict";
const app = document.querySelector(".app_js");
const selected = document.querySelector(".instrument_js");
const selected2 = document.querySelector(".instrument2_js");
const selected3 = document.querySelector(".instrument3_js");
const reproduce1 = document.querySelector(".reproduce1");
const reproduce2 = document.querySelector(".reproduce2");
const reproduce3 = document.querySelector(".reproduce3");
const pianoAudio = document.querySelector(".piano-audio");
const drumAudio = document.querySelector(".drum-audio");
const saxoAudio = document.querySelector(".saxo-audio");

function setColor() {
  app.classList.remove("mint");
  app.classList.remove("blue");
  app.classList.remove("yellow");
}
setColor();

function handlePiano(event) {
  event.preventDefault();
  selected.innerHTML = "This is a piano!";
  pianoAudio.play();
}

reproduce1.addEventListener("click", handlePiano);

function handleDrum(event) {
  event.preventDefault();
  selected2.innerHTML = "This is a Drum...!";
  drumAudio.play();
}

reproduce2.addEventListener("click", handleDrum);

function handleSaxo(event) {
  event.preventDefault();
  selected3.innerHTML = "Ohh, it sounds like Saxophone";
  saxoAudio.play();
}

reproduce3.addEventListener("click", handleSaxo);
