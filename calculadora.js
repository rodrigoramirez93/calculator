function escribirNumerazos(numerazo){
	var pantalla = document.getElementById('pantalla');
    var valorEnPantallaEsCero = pantalla.innerText=='0'
	if(valorEnPantallaEsCero){	
		pantalla.innerText='';
	} 
	pantalla.innerText += numerazo;
	console.log(pantalla.innerText);
}

function borrarNumerazos()
{
 var pantalla = document.getElementById("pantalla");
 var strRecortado = pantalla.innerText.substr(0, pantalla.innerText.length -1);
 pantalla.innerText = strRecortado
 var ValorEnPantallaEsStringVacio = pantalla.innerText == ""
	if(ValorEnPantallaEsStringVacio){
		pantalla.innerText="0";
	}
  console.log(strRecortado); 
}