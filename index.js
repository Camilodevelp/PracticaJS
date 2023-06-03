let operacion = parseInt(prompt("elige la operacion que deseas, \n 1- suma \n 2 resta \n 3 multiplicacion \n 4 division \n 5 salir"));
let A;
let B;

if (operacion != 5) {
	A = parseInt(prompt("Otorga el primer numero de la operación"));
	B = parseInt(prompt("Otorga el segundo numero de la operación"));
}

let resultado = 0;

function realizarCuenta(operacion) {
	switch (operacion) {
		case 1:
			resultado = A + B;
			alert(resultado);
			break;
		case 2:
			resultado = A - B;
			alert(resultado);
			break;
		case 3:
			resultado = A * B;
			alert(resultado);
			break;
		case 4:
			resultado = A / B;
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
}