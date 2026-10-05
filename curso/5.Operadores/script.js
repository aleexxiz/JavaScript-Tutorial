/*
	Un operador es un simbolo especial que especifica que debe efectuar una determinada operacion
	
	Estas operaciones pueden ser:
									Asignacion (las mediante signo igual)
									Aritmeticas (sumas, resta, multipliacion y demas)
									Condicionales (o Logicos, con la estructura if)
									Relacionales (o de comparacion, cuando usamos >,<,= o diferentes)
									Entre otras
*/

/*
	Operadores Aritmeticos:
	Suma +
	Resta -
	Multipliacion *
	Division /
	Modulo % (Resto de division)
	Incremento ++
	Decremento --
*/


/*
	Operadores de Comparacion o Relacionales
	Igualdad ==
	Desigualdad !=
	Igualdad Estricta ===
	Desigualdad Estricta !==
	Mayor y Menor > <
	Mayor o igual y menor o igual >= <=
*/


/*
	Operadores COndicionales o Logicos
	AND &&: Se utiliza cuando se deben de cumplir ambas condiciones
	
	OR ||: Se utiliza cuando se debe cumplir una condicion u otras
	
	NOT !: Se utiliza para negar el valor de una condicion(si es true pasa a ser false y viceversa)
*/


//Operadores Aritmeticos:

var suma = 35 + 3;
console.log(suma);

var resta = 20 - 4;
console.log(resta);

var multiplicacion = 5*5;
console.log(multiplicacion);

var division = 30/2;
console.log(division);

var resto = 60%3; 
console.log(resto);


//Operadores comparacion/Relacionales

console.log(5>2);

console.log(98<1);

var numero = 4;
console.log(4==numero);


//Operadores Logicos se usan en operaciones en la estructura if 
var edad = 18;
var dni = false;
 
//ejemplo and, aqui se tienen que cumplir las dos para que de true 
console.log(edad >= 18 && dni==true);


//ejemplo OR, aca se cumple una de las dos, en este ejemplo tiene 18 pero no tiene dni
console.log(edad>=18 || dni==true)




















