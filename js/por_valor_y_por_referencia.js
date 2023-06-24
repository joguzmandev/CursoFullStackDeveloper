let a = 5;
let b = a;
a = 1;
console.log(`A: ${a} B: ${b}`)

const obj1 = {name: 'primer nombre'}

const obj2 = obj1;

obj1.name = 'Segundo nombre modificado'

console.log(obj1);
console.log(obj2)