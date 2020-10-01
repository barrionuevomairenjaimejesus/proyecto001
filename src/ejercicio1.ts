/*
Lo que vamos a hacer primero es crear 
dos variables con los nombres y edad
*/
let nombre:string = "Carlos";
let edad:number   = 19;
/*Ahora voy a usar el const que según 
he entendido conseguimos poder usarlo para tener 
objetos más estructurados creando así una interfaz 
a la vez que le damos una declaración 
*/
const Identificarse: { nombre:string, edad:number } = {
    nombre: nombre,
    edad: edad
}

//Finalmente lo  imprimimos por pantalla
console.log(Identificarse);