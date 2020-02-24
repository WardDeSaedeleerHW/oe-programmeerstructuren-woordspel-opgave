"use strict";

var txtWoord, divResultaat; 

window.addEventListener('load',Initieer);

function Initieer(){
  KoppelDomElementen();
  StandaardInput();
}

function KoppelDomElementen() {
  txtWoord = document.getElementById("txtWoord");
  divResultaat = document.getElementById("divResultaat");  
  let btnVertikaal = document.querySelector("#btnVertikaal");
  btnVertikaal.addEventListener("click",ToonVertikaal);  
  let btnKeerOm = document.querySelector("#btnKeerOm");
  btnKeerOm.addEventListener("click",KeerOm); 
  let btnEersteA = document.querySelector("#btnEersteA");
  btnEersteA.addEventListener("click",GeefPlaatsEersteA); 
  let btnPalindroom = document.querySelector("#btnPalindroom");
  btnPalindroom.addEventListener("click",CheckPalindroom); 
}

function CheckPalindroom() {
 
}

function GeefPlaatsEersteA() {

}

function KeerOm() {

}

function StandaardInput() {
  txtWoord.value = "radarke";
}

function ToonVertikaal(){

}

