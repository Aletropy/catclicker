if (localStorage.corfl) {
	vcorfL = localStorage.corfl;
	vname = localStorage.name
	document.body.style.backgroundColor=vcorfL;
	document.getElementById("username").innerHTML = vname;
}

function SaveConfigLoja() {
	localStorage.corfl = vcorfL
	var form = document.getElementById("configsL");
	form.style.display = "none";
}

function TrocarTemaLoja(corFl) {
	document.body.style.backgroundColor=corFl;
	vcorfL = corFl;
}

setInterval(function() {

	document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF;
}, 1)
