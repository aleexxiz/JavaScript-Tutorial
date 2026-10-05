function saludar() {
	console.log("Hola, estoy en la funcion");
	
	//aca solamente declaramos la funcion 
}


saludar(); //aca hacemos llamado a la funcion de arriba

function sumar (num1,num2) {
	
	let resultado;
	resultado = num1 + num2;
	
	return resultado; //esto devuelve la variable resultado
}

function sumar2 (num1,num2) {

	
	return num1 + num2; //esto devuelve la variable resultado sin tanto codigo como el de arriba
}

let suma = sumar(5,2);
console.log("El resultado es " + suma);

suma = sumar(10,2);
console.log("El resultado es " + suma);

//aca invocamos dos veces la funciones sin tener que escribir mas codigo
