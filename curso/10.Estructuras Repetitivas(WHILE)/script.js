/*
	Bucle/Ciclo while
	
	
	Permite ejecutar un bloque de codigo en forma repetitiva mientras
	(while en ingles) se cumpla una determinada condicion
	
	La condicion se evalua siempre al inicio del ciclo/Bucle
	
	Si la condicion es valida, ingresa al bucle y ejecuta el codigo
	
	Cuando deja de cumplirse la condicion, el programa sale del Bucley continua 
	con el resto del programa.
	
*/

var contador = 0;

while (contador < 10){ /*El 0 cuenta osea que seria 0-9 lo cual nos daria 10 vueltas*/
	
	console.log("Estoy en la vuelta N " + contador);
	contador ++; //Aca frenamos un bucle infinito
}