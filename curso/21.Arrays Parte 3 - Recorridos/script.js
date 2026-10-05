/*let paisesLatam = ["Uruguay","Argentina","Brasil","Chile"];

for (let i=0;i<paisesLatam.length; i++){
	
	console.log(paisesLatam[i]);


//Esto sirve para buscar un valor en concreto

if(paisesLatam[i]=="Uruguay") {
	
	console.log("Estoy en el pais de PEñAROL");
}
}
*/


let paisesLatinos = [
					["Argentina", "Brasil", "Bolivia", "Chile"],
					["Peru", "Paraguay", "Colombia", "Venezuela"],
					["Uruguay", "Ecuador", "Mexico", "El Salvador"]
					];
					
for (let f=0; f<paisesLatinos.length; f++) { //este f=0 dice que comienze a leer desde la fila 0
	for(let c=0; c<paisesLatinos[f].length; c++){
		
		console.log(paisesLatinos[f][c]);
	}
}