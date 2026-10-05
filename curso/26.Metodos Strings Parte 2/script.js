//Mayus y Minusculas 


let frase = "Hola soy alexis" 
let mayus = frase.toUpperCase(); //Aca pasamos todo a mayusculas
let minus = frase.toLowerCase(); //Aca pasamos todo a minusculas

console.log(mayus);
console.log(minus);



//Concatenar frases 

let frase2 = "Hola,";
let frase3 = " Como estas?";

let mensajeFinal = frase2.concat(frase3);

console.log(mensajeFinal);


//Indice de, podemos buscar una palabra. Si devuelve un -1 es porque no encontro la frase 
/*Aca ojo porque para encontrar la palabra hay que escribir Mayusculas y MInusculas bien.*/ 

let frase4 = "Soy Alexis, la puta cabra";
let posicion = frase4.indexOf("Alexis");

if (posicion >= 0) {
	console.log("Encontre en la posicion: " + posicion);
} else {
	console.log("No se encontro tu palabra");
}


//Includes, significa incluye: la palabra incluye esta palabra, a diferencia de indexOf te dice solamente si encuentra la palabra o No.
 
 
let frase5 = "Soy Alexis, la puta cabra";
let bandera = frase5.includes("Alexis");

if (bandera == true) {
	console.log("Encontre la palabra");
} else {
	console.log("No se encontro tu palabra");
}

