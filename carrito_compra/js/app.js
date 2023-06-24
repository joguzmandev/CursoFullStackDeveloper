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