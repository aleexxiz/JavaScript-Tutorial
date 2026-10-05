//Arrays para los nombres de los pokemons
let nombresPkm = ["Charmander", "Pikachu", "Bulbasaur", "Squirtle"];



//Matriz para sus habilidades
let habilidades = [
        [80,75,90],//Charmander
		[65,55,95],//Pikachu
		[80,70,65],//Bulbasaur
		[85,90,70] //Squirtle
				   ];
				  
function calcularPromHab(habilidades) {
	let promedios = [];
	
	for (let i=0;i<habilidades.length;i++) {
		let fila = habilidades[i]; //aca nos dice en que posicion esta en cada momento
		let suma = fila.reduce((total,habilidad)=>total+habilidad,0); //el 0, quiere decir que arranque en la columna 0
		promedios[i] = suma/fila.length; //aca tomamos la suma y lo dividimos para calcular el promedio de cada pokemons
	}	
	
	return promedios;	
		
		/* FORMULA PARA CALCULAR el reduce 
		array.reduce((acumulador, elementoActual) =>{
			//logica para combinar el acumulador con el elemento actual
			}, valorInicial)
		*/
		

	
}



function evaluarAptitud(nombresPkm,promedios) {
	
	for (let i=0;i<promedios.length;i++) {
		if (promedios[i]>=70) {
			console.log("El Pokemon " + nombresPkm[i] + " supera el promedio con: " + promedios[i]);
		} else {
			console.log("El Pokemon " + nombresPkm[i] + " no supera el promedio con: " + promedios[i]);
		}
  }
}


let promedios = calcularPromHab(habilidades);
evaluarAptitud(nombresPkm,promedios);