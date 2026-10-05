/*
	Ejercicio Practico
	
	Ingresar numeros mediante un prompt y almacenar sus valores en dos variables distintas
	
	Realizar una resta entre los dos valores en Javascript
	
	Alamcenar el resultado en una variable
	
	IMportar el archivo JS desde una pagina HTML
	
	Si el resultado de la resata es mayor a 0, mostrar mediante un console.log() o un
	alert() el mensaje "es mayor a 0"
	
	Si es mayor a cero, comparar si el numero es par, en caso de que lo sea, mostrar un mensaje
	"es Par" en caso de que no uno que diga "es impar"
	
	En caso que sea menor a 0, mostrar un mensaje que diga "es menor o igual a 0"
*/


var num1 = prompt("Ingrese un numero 1");
var num2 = prompt("Ingrese un numero 2");

var resta = num1 - num2;

if (resta>0) {
	console.log("es mayor a 0");
	let imparpar = resta % 2;
	
	if (imparpar==0){
		console.log("Es par");
	} else {
		console.log("Es impar");
	}
	
} else {
	console.log("Es menor o igual a 0");
}
