//Comentario de una sola linea

/*Comentario de
varias lineas
*/

/* 
Comentarios
Alertas
Variables
Operadores relacionales
Operadores aritmeticos
Operadores logicos
Estructuras selectivas
Estructuras Repetitivas 
*/

var suma = 5 + 5;
var resta = 8 - 8;
var multiplicacion = 9 * 5;
var division = 50 / 5;


/*
Las variables son espacios de memoria en la computadora donde se pueden almacenar datos de diferentes tipos

En Javascript tenemos 3 tipos de variables:
	. var
	. let
	. const
*/

/*
Tipos de Datos en Javascript

Numericos: Para valores numericos.
			. Number 
			. BigInt: para valores mayores que 9007199254740991 o menores que -9007199254740991
string: Para caracteres de tipo texto
Booleanos: Permite dos valores posibles, true o false(verdadero o falso)
Null: Contiene el valor Null
undefined: Se utiliza para variables que aun no tienen valores definidos
*/


/*
Delcaracion de Variables

	var es una palabra reservada que se utiliza para indicarle a javascript que vamos a declarar una variable.
	
	var nombreVariable;
	
	
	let tambien es una palabra reservada que se utiliza para indicarle a Javascriptque vamos a declarar una variable pero que solo
	se puede utilizar dentro de determinados bloques de codigo (generalmente limitados por llaves{})
	
	let nombreVariable;
	
	
	const es una palabra reservada que se utiliza para indicarle a Javascript que vamos a declarar una variable CONSTANTE, es decir,
	que una vez que ademas de existir solo dentro de ciertos bloques de codigo (como let), cuandoi le asigenmos un valor, no podra cambiar el mismo
	
	let nombreVariable;
*/



var nombre = "Alexis";
var edad = 22; 
var presenteONo;
var apellido = "Barboza";


alert("Hola " + nombre + " " + apellido);
