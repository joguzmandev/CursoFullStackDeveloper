//let frutas = ["Platano", "Sandia", "Pera", 10, true];

// for (var x=0; x < frutas.length; x++){
//     let item = frutas[x];
//     if (item == 10){
//         break;
//     }
//     console.log(frutas[x]);
// }

// for(let item in frutas){
//     console.warn(item);
// }

// for (let item of frutas){
//     console.error(item);
// }

let list_person = [
    {'name': 'Jean Carlos', 'age':9, is_valid: true},
    {'name': 'Diego', 'age':7, is_valid: true},
    {'name': 'Laisha', 'age':5, is_valid: false},
    {'name': 'Jorge Luis', 'age':36, is_valid: true},
]

// for(let person of list_person){

//     console.log(person)
//     console.info(person.name + ' ' + person.age)
// }

// console.log("================================================")

// for(let person of list_person){
//     console.info(`Bienvenido:
//     ${person.name.toUpperCase()} (${person.age}) ${person.is_valid ? '(Online)' : ''}`)
// }


console.log("========================VAR - LET - CONST ========================")
let estado = true;

if(estado){
    console.log('Entro al if ');
    let estado = false;
    console.log(estado)
}

console.log(estado)


// Declarando arreglo con el keyword const = constante y son mutable (se puede modificar)
const frutas = []
frutas.push('Pera') // agrega elemento al final del array
frutas.unshift('Banana') // agrega el elemento al inicio del array
console.log(frutas)
//frutas.pop() // Eliminar el ultimo elemento del array
//console.log(frutas)