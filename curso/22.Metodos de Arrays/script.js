let frutas = ["Naranja", "Banana", "Kiwi"];

frutas.push("Manzana"); //con .push le agregamos un elemento al vector

console.log(frutas);

frutas.pop();//este metodo elimina el ultimo elemento del vector
console.log(frutas);


frutas.shift()//elimina el primer elemento del vector
console.log(frutas);

frutas.unshift("Sandia");//colocamos un valor al principio de nuestro vector
console.log(frutas);

//frutas.fill("alexis");//cambiamos todos los valores por lo que escribimos aqui
//console.log(frutas);

let frutasConA = frutas.filter(fruta => fruta.includes("a"));
            //de frutas filtrame la fruta que incluya la letra A
	console.log(frutasConA);
	
	
let frutas2 = ["Mango","Anana"];

let todasLasFrutas = frutas.concat(frutas2); //Une elementos de ambos vectores
console.log(todasLasFrutas);

todasLasFrutas.reverse(); //esto invierte el orden
console.log(todasLasFrutas);

todasLasFrutas.sort(); //ordena alfabeticamente
console.log(todasLasFrutas);