function sumar(a,b){
	return a + b;
}
function restar (a,b){
	return a - b;
}
function multiplicar (a,b){
	return a * b;
}
function dividir(a,b){
	return a / b;
}

function logear(a){
	console.log(a);
}


function reiniciarNumerazos() {
	var pantalla = document.getElementById('pantalla');
		pantalla.innerText = '0'  ;
		console.log(pantalla.innerText);

}