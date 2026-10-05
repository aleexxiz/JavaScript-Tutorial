/*
	Bucle/Ciclo do while
	
		Permite llevar a cabo una determinada accion de forma repetitiva
		de igual manera que el while
		
		Su principal diferencia es que la condicion se evalua SIEMPRE al final
		del ciclo/bucle, por lo que la porcion de codigo se ejecuta SIEMPRE por lo menos 1 VEZ
		
		
		var contador = 0;
		do{
			console.log("Vuelta N " + contador);
			contador ++;
		}
		
		while (contador <= 10)
			
		
		Al estar el DO(HAcer) antes que el while este codigo se ejecuta al menos una vez, para luego
		leer el while y ver si se cumple o no con la condicion.
*/


	var contador = 0;

		do{ 
			console.log("Vuelta N " + contador);
			contador ++;
		}
		while(contador < 10)
