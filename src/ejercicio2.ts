/*
Lo primero que he hecho aquí es declarar la función
y a esta le he dicho que los valores que le voy a pasar son números
además dentro de esta vemos que he creados más variables y que esta función
acaba devolviendo la cuenta final  con todas las variables numericas usadas 
*/

let cuentas = (a:number, b:number) => { 
    let num = -4
    let valortotal= a * b + num
    return valortotal
 }

 //Aquí es donde le doy valor a las dos variables "a" y "b"
 console.log(cuentas(6,9))