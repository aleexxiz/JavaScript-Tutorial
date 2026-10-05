//SLICE


let frase = "Alexis jugas como MohammedLight";
let longitud = frase.length;

console.log("La longitud es " + longitud);

let fragmento = frase.slice(0,6); //corta en el ultimo caracter si pongo 5 aqui, diria Alexi

console.log(fragmento);



//SPLIT 



let frutas = "naranja, manzana, frutilla";

let lista = frutas.split(","); //Entre parentesis ponemos cual es el simbolo que queremos como separador

console.log(frutas);
console.log(lista);



//


let frase2 = "Hola crack, soy el momo";


let subcadena = frase2.substr(0,10); //este se utiliza para recortar pero solo para caracteres, sino usamos slice 
 
console.log("La subcadena es: " + subcadena);

