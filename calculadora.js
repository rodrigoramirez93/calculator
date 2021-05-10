alert("chau")

function escribirNumerazos(numerazo){
	var pantalla = document.getElementById('pantalla');
	pantalla.innerText = pantalla.innertext + numerazo;
	console.log(pantalla.innerText);
}