/*
	Bucle/Ciclo for
	
	El ciclo for realiza un bucle una determianda cantidad de veces. Es un bucle controlado por un contador, que de hecho, lo tiene
	implicito en su sintaxis
	
	El for esta compuesto por 3 partes:
			
			Inicializacion de la variable que utilizaremos en la condicion (se ejecuta solo una vez al principio del ciclo)
			
			Condicion de fin del ciclo (se evalua esta expresion al comienzo de cada iteracion)
			
			Modificacion de la variable (se ejecuta al final de cada iteracion)

				for (var i=1;i<10; i++) {
					console.log("Vuelta N " + i);
				}
				
			i   (significa indice, que quiere decir donde estamos ahora) Inicializacion de la variable 
			i=1 (mientras mi indice sea menor a 10) Condicion de Parada 
			i++ (incrementame o decremento, aca incremento 1 al valor que tengo en este momento)


*/

for (var i=0;i<10;i++) {
	console.log("Vuelta N " + i);
}