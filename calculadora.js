alert("chau")

function escribirNumerazos(numerazo){
	var pantalla = document.getElementById('pantalla');
	pantalla.innerText = pantalla.innerText += numerazo;
	console.log(pantalla.innerText);
}