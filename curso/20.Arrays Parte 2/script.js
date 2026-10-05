let vector = new Array(3);
//Array siempre va con mayuscula aqui porque es una clase.
vector[0] = "Alexis"
vector[1] = "Barboza"
vector[2] = "Alvez"


let matriz = new Array(3);


for (let i=0;i<3;i++) {
	
	matriz[i] = new Array(3);
}

console.log(matriz);


let persona0 = ["Alexis","Barboza","Alvez"];
let persona1 = ["Matias","Barboza","Alvez"];
let persona2 = ["Brian","Carballo","Alvez"];

let matriz2 = [persona0, persona1, persona2];

console.log(matriz2)