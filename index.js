console.log("prueba")
let operacion = prompt("elige la operacion que deseas, \n 1- suma \n 2 resta \n 3 multiplicacion \n 4 division \n 5 salir")
let A = prompt ("Otorga el primer numero de la operación")
let B = prompt ("Otorga el segundo numero de la operación")

while (operacion != 5){
    function resultado (){        
        switch (operacion) {
            case 1:
                return  (resultado = A + B)
                break;
            case 2:
                return (resultado = A - B)
                break;
            case 3:
                return (resultado = A * B)
                break;
            case 4:
               return (resultado = A / B)
                break;
                            
                            
         }
    }
}     
alert(resultado)