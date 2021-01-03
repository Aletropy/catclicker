if (localStorage.name) {
	vcorf = localStorage.corf;
	vcort = localStorage.cort;
	vname = localStorage.name
	document.body.style.backgroundColor = vcorf;
	document.getElementById("pugsDir").style.backgroundColor = vcort;
	document.getElementById("displayPug").style.color = "white";
	document.getElementById("username").innerHTML = vname;
}

if (!localStorage.name) {
	alert("Por favor coloque um username.");
	document.getElementById("usuarioInput").style.display="block";
	document.getElementById("usuarioInputB").style.display="block";
	document.getElementById("usuarioInputN").style.display="block";
}

function EnviarNick() {
	var name = document.getElementById("usuarioInput").value;
	vname = name
	localStorage.name = vname
	document.getElementById("username").innerHTML = vname;
	document.getElementById("usuarioInput").style.display="none";
	document.getElementById("usuarioInputB").style.display="none";
	document.getElementById("usuarioInputN").style.display="none";
}

function pugClick() {
	pugF += 1 * multClick;
}

function MConfig() {
	var form = document.getElementById("configs");
	form.style.display = "block";
}

function SaveConfig() {
	localStorage.corf = vcorf;
	localStorage.cort = vcort;
	var form = document.getElementById("configs");
	form.style.display = "none";
}

function TrocarTema(corF, corT) {
		document.body.style.backgroundColor = corF;
		document.getElementById("pugsDir").style.backgroundColor = corT;
		document.getElementById("displayPug").style.color = "white";
		vcorf = corF;
		vcort = corT;
}


/////////////////////////////////////////////////
////////////////// Intervalos ///////////////////
/////////////////////////////////////////////////



setInterval(function() {

	document.getElementById("displayPug").innerHTML = "Pug Filhote: " + pugF;
}, 1)
