const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

const btnsBotones = document.querySelectorAll(".card .btn");

const carritoObjecto = {};

const agregarAlCarrito = e => {
    console.log(e.target.dataset.fruta);

    const producto = {
        id: e.target.dataset.fruta,
        titulo: e.target.dataset.fruta,
        cantidad: 1
    }

    if(carritoObjecto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjecto[producto.titulo].cantidad + 1;
    }

    carritoObjecto[producto.titulo] = producto;  

    pintarCarrito();

};

const actualizarCarrito = e => {
    const producto = e.target.dataset?.fruta;
    const action = e.target.dataset?.action;

    if(carritoObjecto.hasOwnProperty(producto)){
        const productoCarrito = carritoObjecto[producto];
        let cantidad = productoCarrito.cantidad;
        productoCarrito.cantidad = action == "add" ? cantidad += 1 : cantidad -= 1

        carritoObjecto[productoCarrito.titulo] = productoCarrito;
    }
    pintarCarrito();
}

const pintarCarrito = () => {

    carrito.textContent = '';
    Object.values(carritoObjecto).forEach( producto => {


        if(producto.cantidad >= 1) {
            const clone = template.content.cloneNode(true);
            clone.querySelector('.lead').textContent = producto.titulo;
            clone.querySelector('.badge').textContent = producto.cantidad;

            clone.querySelector('.less-item').setAttribute('data-fruta', producto.titulo);
            clone.querySelector('.more-item').setAttribute('data-fruta', producto.titulo);

            clone.querySelector('.less-item').setAttribute('data-action', 'delete');
            clone.querySelector('.more-item').setAttribute('data-action', 'add');

            clone.querySelector('.less-item').addEventListener('click', actualizarCarrito);
            clone.querySelector('.more-item').addEventListener('click', actualizarCarrito);
            fragment.appendChild(clone);

        }

    });

    carrito.appendChild(fragment);
}

btnsBotones.forEach(btn => btn.addEventListener('click', agregarAlCarrito));

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
