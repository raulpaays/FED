// JavaScript Document
console.log("hi");

var hamburgerButton = document.querySelector("nav>a");
var nav = document.querySelector ("nav ul");
var kruisButton = document.querySelector ("nav li:first-of-type a");

var herewego = new Audio();
var mushroom = new Audio();

herewego.src ="./audio/marioherewego.mp3";
mushroom.src ="./audio/mariomushroom.mp3";


hamburgerButton.addEventListener("click", function() { 
    nav.classList.toggle("open"); /* Voegt class toe om te openen */

}, false) /* zodat je er niet doorheen kan klikken */

kruisButton.addEventListener("click", function() { 
    nav.classList.toggle("open"); /* Voegt class toe om te openen */

}, false) /* zodat je er niet doorheen kan klikken */



