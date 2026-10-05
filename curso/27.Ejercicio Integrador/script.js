function buscarNombre (listaNombres, nombreBuscar) {
	return listaNombres.includes(nombreBuscar);
}



//Lista de nombres fijas
let listaNombres = ["Alexis", "Matias", "Braian"];

//El usuario pueda ingresar un nombre por teclado
let nombreBuscar = window.prompt("Ingresa el nombre a buscar: ");


//busquemos si esta o No
let estaONO = buscarNombre (listaNombres, nombreBuscar);

//informar por pantalla
if (estaONO == true) {
	console.log("El nombre esta en la lista");
} else {
	console.log("El nombre no esta en la lista");
}

