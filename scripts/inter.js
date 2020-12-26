setInterval(function() {
if (Unlock_pugN === false && Unlock_pugA === false) {
	document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF;
} else if (Unlock_pugN === true && Unlock_pugA === false) {
	document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF + "<br>Pug Novato: " + pugN;
} else if (Unlock_pugN === true && Unlock_pugA === true) {

document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF + "<br>Pug Novato: " + pugN + "<br>Pug Adulto: " + pugA;	
}	
}, 1)