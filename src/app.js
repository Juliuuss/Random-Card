/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

const simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numeros = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//let pinta = randomSimbolo();

//document.getElementById("pintaSuperior").innerHTML = pinta;
//document.getElementById("pintaInferior").innerHTML = pinta;
//document.getElementById("Numero").innerHTML = randomNumero();

function randomNumero() {
  let aleatorio = Math.floor(Math.random() * 13);
  return numeros[aleatorio];
}

function randomSimbolo() {
  let aleatorio = Math.floor(Math.random() * 3);
  return simbolos[aleatorio];
}

function intercambio() {
  let random = randomSimbolo();
  document.getElementById("pintaSuperior").innerHTML = random;
  document.getElementById("pintaInferior").innerHTML = random;
  let randomNum = randomNumero();
  document.getElementById("Numero").innerHTML = randomNum;
}
setInterval(intercambio(), 1000);
//console.log(randomNumero());
//console.log(randomSimbolo());

//if (pinta == "&hearts;" || "&diams;") {
//  document.getElementById("pintaSuperior").style.color = "red";
//  document.getElementById("pintaInferior").style.color = "red";
//} else {
//  document.getElementById("pintaSuperior").style.color = "black";
//  document.getElementById("pintaInferior").style.color = "black";
//}
