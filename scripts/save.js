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