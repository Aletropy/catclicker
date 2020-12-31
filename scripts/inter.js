//////////////////////////////////////////////////
/////////////////// Variaveis ////////////////////
//////////////////////////////////////////////////
//Money
var pugF = 0;
var pugN = 0;
var pugA = 0;
var multClick = 1;
//Geral
var Unlock_pugN = false;
var Unlock_pugA = false;













//////////////////////////////////////////////////
/////////////////// Intervalos ///////////////////
//////////////////////////////////////////////////

setInterval(function() {
if (Unlock_pugN === false && Unlock_pugA === false) {
	document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF;
} else if (Unlock_pugN === true && Unlock_pugA === false) {
	document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF + "<br>Pug Novato: " + pugN;
} else if (Unlock_pugN === true && Unlock_pugA === true) {

document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF + "<br>Pug Novato: " + pugN + "<br>Pug Adulto: " + pugA;	
}	
}, 1)

//////////////////////////////////////////////////
/////////////////// Salvamento ///////////////////
//////////////////////////////////////////////////


function loadGame() {
var dataSalva = JSON.parse(localStorage.getItem("data"));

	if (typeof dataSalva.pugF !== "undefined") pugF = dataSalva.pugF;
	if (typeof dataSalva.pugN !== "undefined") pugN = dataSalva.pugN;
	if (typeof dataSalva.pugA !== "undefined") pugA = dataSalva.pugA;
	if (typeof dataSalva.multClick !== "undefined") multClick = dataSalva.multClick;
}

function saveGame() {
var data = {
	pugF: pugF,
	pugN: pugN,
	pugA: pugA,
	multClick: multClick
 };
 localStorage.setItem("data", JSON.stringify(data));
}

setInterval (function() {
 saveGame();
}, 1);

window.onload = function() {
	loadGame();
};