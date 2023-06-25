//---------------- ARRAY METHOD ----------------

console.clear();

// MAP
const frutas = ['Manzana', 'Fresa', 'Banana'];

const nuevoArray = frutas.map((fruta) => fruta);
frutas.push('Sandia');
console.log(frutas, nuevoArray);


// FILTER   
const users = [
    {uid:1, name: "Jorge", age:36},
    {uid:2, name: "Carolina", age:32},
    {uid:3, name: "Jean Carlos", age:9},
    {uid:4, name: "Diego", age:7},
    {uid:5, name: "Laisha", age:4}
]


const mayores = users.filter(user => user.age <= 9);
console.log(mayores);

const userEliminado = users.filter(user => user.uid != 5);
console.log(userEliminado);


// FIND

const diego = users.find(user => user.uid ===  4);
console.log(`Usuario diego`, diego );

// SOME (valida si existe un element en un array)

const existe = users.some(user => user.uid === 40);
console.log(existe);


// Spread Operator
var array1 = [1,2,3,4,5,6,7,8,9];
var array2 = ["a", "b", "c", "d", "e", "f"];

const array3 = [...array1, ...array2];
console.log(array3);  

//Reduce method

const listNumero = [5, 1, 2, 4]

console.clear(); 

const rs = listNumero.reduce((valorAnterior, valorActual) => {
    console.log(valorAnterior, valorActual);
    return valorAnterior + valorActual;
})

console.log(rs);

console.clear();

// split operator

const cadenasMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const arrayMeses = cadenasMeses.split(',');

console.log(arrayMeses);

// join operator

const nuevoText = arrayMeses.join('-');
console.log(nuevoText);
