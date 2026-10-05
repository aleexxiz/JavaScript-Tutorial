/*Declarar la variable VAR nos permite acceder a esta desde cualquier parte del codigo.
  
  La variable Let solo podemos utilizar solamente dentro de un bloque de codigo.

  
*/



	if (true){
		var nombre = "Suscribite";
	}
	
	console.log(nombre);
	
	/*
	
	AQUI LA VARIABLE LET FUNCIONARIA SI EL CONSOLE.LOG ESTUVIESE DENTRO DE LOS {}, si queremos que funcione el llamado a la variable tendriamos que poner
	el console.log dentro del bloque({}) o cambiar Let por Var.
	if (true) {
		let nombre2 = "Variable Let";
	}
	
	console.log(nombre2);
	
	*/
	
	
	/*
		LA VARIABLE CONST ESTA CREADA PARA CUANDO SE LE ASIGNE UN VALOR NO PUEDA CAMBIAR.
		
		UN EJEMPLO ES UN EMAIL 
		
		const email = "alexisbarboza@gmail.com";

	Al hacer esto te saldra error: Uncaught SyntaxError: Identifier 'email' has already been declared
	
	
	const email = "alexisbarboza@gmail.com";
	
	const email = "alexisbarboza1@gmail.com";
	
	
	*/
	