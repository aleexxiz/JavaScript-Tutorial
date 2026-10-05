/*
	Condicional Switch 
	
	La estructura Switch permite multiples caminos a partir de la evaluacion de una sola expresion/condicion 
*/


var color = prompt("Escribe un color: ")
switch (color) {
	
	case "rojo":
	console.log("Es color rojo");
	break;
	
	case "azul":
	console.log("Es color azul");
	break;
	
	case "amarillo":
	console.log("Es color amarillo");
	break;
	
	default:
	console.log("El color ingresado no es valido");
	break;
}