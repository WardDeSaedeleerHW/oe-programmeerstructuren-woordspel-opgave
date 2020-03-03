"use strict";

var txtWoord, divResultaat; 

window.addEventListener('load',Initieer);

function Initieer(){
  KoppelDomElementen();
  KoppelEvents();
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
  let woord = txtWoord.value;

  let splitString = woord.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  if (woord == joinArray) {
    divResultaat.innerHTML = woord + " is een palindroom.";
   } else {
    divResultaat.innerHTML = woord + " is geen palindroom";
   }   
}

function GeefPlaatsEersteA() {
  let woord = txtWoord.value;
  let woordLength = woord.length;
  let plaats = 0, gevonden = false;

  while(plaats < woordLength && !gevonden){
    if (woord.substr(plaats, 1) == "a"){
      gevonden = true;
    }
    plaats++;
  }

  divResultaat.innerHTML = gevonden ? "De eerste 'a' in het woord " + woord + " staat op positie " + plaats : "Er zit geen letter a in het woord " + woord;
}

function KeerOm() {
  let woord = txtWoord.value;

  let splitString = woord.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");

  divResultaat.innerHTML = joinArray;
}

function ToonVertikaal(){
  let woordVertikaal = "";
  let woord = txtWoord.value;
  let aantalLetters = woord.length;

  for (let i = 0; i < aantalLetters; i++){
    let teken = woord.charAt(i);
    woordVertikaal += teken + '<br>';
  };

  divResultaat.innerHTML = woordVertikaal;
}

