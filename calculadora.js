function escribirNumerazos(numerazo){
	var pantalla = document.getElementById('pantalla');
    var valorEnPantallaEsCero = pantalla.innerText=='0'
	if(valorEnPantallaEsCero){	
		pantalla.innerText='';
	} 
	pantalla.innerText += numerazo;
	console.log(pantalla.innerText);
}
