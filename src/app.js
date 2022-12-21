/* eslint-disable */
import "bootstrap";
import "./style.css";

const simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numeros = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
//let pinta = randomSimbolo();

//document.getElementById("pintaSuperior").innerHTML = pinta;
//document.getElementById("pintaInferior").innerHTML = pinta;
//document.getElementById("Numero").innerHTML = randomNumero();

function randomNumero() {
  let aleatorio = Math.floor(Math.random() * 14);
  return numeros[aleatorio];
}

function randomSimbolo() {
  let aleatorio = Math.floor(Math.random() * 4);
  return simbolos[aleatorio];
}

function generator() {
  let randomSim = randomSimbolo();
  document.getElementById("pintaSuperior").innerHTML = randomSim;
  document.getElementById("pintaInferior").innerHTML = randomSim;
  let randomNum = randomNumero();
  document.getElementById("Numero").innerHTML = randomNum;

  if (randomSim === "&hearts;" || randomSim === "&diams;") {
    document.getElementById("pintaSuperior").style.color = "red";
    document.getElementById("pintaInferior").style.color = "red";
  } else if (randomSim === "&spades;" || randomSim === "&clubs;") {
    document.getElementById("pintaSuperior").style.color = "black";
    document.getElementById("pintaInferior").style.color = "black";
  }
}
window.onload = function() {
  generator();
};
document.querySelector("#genera").addEventListener("click", generator);
