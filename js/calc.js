function calculer() {
	var nombre1 = parseInt(document.getElementById("nombre1").value);
	var nombre2 = parseInt(document.getElementById("nombre2").value);
	var resultat = nombre1 + nombre2;
	document.getElementById("resultat").value = resultat;
}
