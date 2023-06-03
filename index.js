
// let operacion = parseInt(prompt("elige la operacion que deseas, \n 1- suma \n 2 resta \n 3 multiplicacion \n 4 division \n 5 salir"));
// let A;
// let B;

// if(operacion != 5){
//     A = parseInt(prompt ("Otorga el primer numero de la operación"));
//     B = parseInt(prompt ("Otorga el segundo numero de la operación"));
// }

// let resultado = 0;

// while (operacion != 5){
//         switch (operacion) {
//             case 1:
//                  (resultado = A + B)
//                  alert(resultado)
//                 break;
//             case 2:
//                  (resultado = A - B)
//                  alert(resultado)
//                 break;
//             case 3:
//                  (resultado = A * B)
//                  alert(resultado)
//                 break;
//             case 4:
//                 (resultado = A / B)
//                  alert(resultado)
//                  break;
//          }
//          operacion = parseInt(prompt("elige la operacion que deseas, \n 1- suma \n 2 resta \n 3 multiplicacion \n 4 division \n 5 salir"));

//          if(operacion != 5){
//             A = parseInt(prompt ("Otorga el primer numero de la operación"));
//             B = parseInt(prompt ("Otorga el segundo numero de la operación"));
//         }
            
// }     


let operacion =0;
let A =0;
let B =0;
let resultado=0;
do {

operacion = parseInt(prompt("elige la operacion que deseas, \n 1- suma \n 2 resta \n 3 multiplicacion \n 4 division \n 5 salir"));
A =0;
B =0;
  switch (operacion) {
            case 1:
			 A = parseInt(prompt ("Otorga el primer numero de la operación"));
             B = parseInt(prompt ("Otorga el segundo numero de la operación"));
                 (resultado = A + B)
                 alert(resultado)
                break;
            case 2:
			   A = parseInt(prompt ("Otorga el primer numero de la operación"));
               B = parseInt(prompt ("Otorga el segundo numero de la operación"));
                 (resultado = A - B)
                 alert(resultado)
                break;
            case 3:
			   A = parseInt(prompt ("Otorga el primer numero de la operación"));
               B = parseInt(prompt ("Otorga el segundo numero de la operación"));
                 (resultado = A * B)
                 alert(resultado)
                break;
            case 4:
			   A = parseInt(prompt ("Otorga el primer numero de la operación"));
               B = parseInt(prompt ("Otorga el segundo numero de la operación"));
                (resultado = A / B)
                 alert(resultado)
                 break;
			default:
			    break;
         }

} while (operacion != 5);
console.log("termino");