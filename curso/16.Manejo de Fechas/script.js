var fecha = new Date(2003, 10, 04);
//alert("La fecha de hoy es " + fecha);

/*Los meses comienzan desde el 0, osea que enero seria 00, y noviembre no seria 11 sino que seria el mes 10*/

/*
var fechaDos = new Date("11/04/2003");
alert("La fecha de hoy es " + fechaDos);*/


//funciones especiales
var dia = fecha.getDate();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

alert("Dia: " + dia + " Mes: " + (mes+1) + " Anio: " + anio);