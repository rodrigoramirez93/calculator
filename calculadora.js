function escribirNumerazos(numerazo){
	var pantalla = document.getElementById('pantalla');
    var valorEnPantallaEsCero = pantalla.innerText=='0'
	if(valorEnPantallaEsCero){	
		pantalla.innerText='';
	} 
	pantalla.innerText += numerazo;
	console.log(pantalla.innerText);
}

function borrarNumerazos(){
	var str = innerText
	var arr = str.split("")
	arr.pop();
	var pantalla = document.getElementById("pantalla");
	pantalla.innerText
	console.log(pantalla.innerText);
	
}