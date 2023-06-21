let operacion = parseInt(prompt("elige la operacion que deseas, \n 1- suma \n 2 resta \n 3 multiplicacion \n 4 division \n 5 resultados "));
let A;
let B;
const historicoResultado =[]

let indice = 0;

if (operacion != 5) {
	A = parseInt(prompt("Otorga el primer numero de la operación"));
	B = parseInt(prompt("Otorga el segundo numero de la operación"));
}

let resultado = 0;

function realizarCuenta(operacion) {
	switch (operacion) {
		case 1:
			resultado = A + B;
			let resultado1 = {
				"id": indice,
				"nombre": "Suma",
				"resultado": "Resultado con " + resultado
			}
			historicoResultado.push(resultado1);
			indice = indice + 1;
			alert(resultado);
			break;
		case 2:
			resultado = A - B;
			let resultado2 = {
				"id": indice,
				"nombre": "Resta",
				"resultado": "Resultado con " + resultado
			}
			historicoResultado.push(resultado2);
			indice = indice + 1;
			alert(resultado);
			break;
		case 3:
			resultado = A * B;
			let resultado3 = {
				"id": indice,
				"nombre": "Multiplicación",
				"resultado": "Resultado con " + resultado
			}
			historicoResultado.push(resultado3);
			indice = indice + 1;
			alert(resultado);
			break;
		case 4:
			resultado = A / B;
			let resultado4 = {
				"id": indice,
				"nombre": "División",
				"resultado": "Resultado con " + resultado
			}
			historicoResultado.push(resultado4);
			indice = indice + 1;
			alert(resultado);
			break;

	}
}





while (operacion != 5) {
	realizarCuenta(operacion);
	operacion = parseInt(prompt("elige la operacion que deseas, \n 1- suma \n 2 resta \n 3 multiplicacion \n 4 division \n 5 salir"));

	if (operacion != 5) {
		A = parseInt(prompt("Otorga el primer numero de la operación"));
		B = parseInt(prompt("Otorga el segundo numero de la operación"));
	}

	if (operacion === 5) {
		let sumas = historicoResultado.filter(result => result.nombre === "Suma");
console.log(sumas);
        let resta = historicoResultado.filter(result => result.nombre === "Resta");
console.log(resta);
        let multi = historicoResultado.filter(result => result.nombre === "Multiplicación");
console.log(multi);
        let divi = historicoResultado.filter(result => result.nombre === "División");
console.log(divi);
	} 
	
}

console.log("Fin del programa")