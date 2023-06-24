// Objecto literales

const gato = {
    nombre: 'Misu',
    duerme: true,
    edad: 10,
    enemigos: ["Agua", "Perro"],
    otros: {
        amigos:['cobarde', 'timido'],
        favoritos:{
            comida:{
                frio: 'Salmon',
                caliente: 'Pollo'
            }
        }
    },
    comer: function(){
        console.log('Gato is eating')
    },
    caminar(){
        console.log('Gato is walking! ')
    },
    banar : ()=>{
        console.log('Gato is taking shower! ' )
    }
}

// ====================
// CRUD literal Ojbect
// ====================

// Read properties
console.log(gato);
console.log(gato.nombre);
console.log(gato['duerme'])

// Create properties
gato.color = "Azul";
console.log(gato);

// UPdate properties
gato.nombre += ' Mauzz';
console.log(gato.nombre)

// Delete properties
delete gato.duerme;
console.log(gato);

// validate whether object has own property
if(gato.hasOwnProperty('nombre')){
    console.log(`La propiedad nombre tiene como valor (${gato.nombre})`);
}

if(gato.hasOwnProperty('otros')){
    console.log(`Tienes favoritos ${gato.otros.favoritos.comida.frio}`);
}

gato.comer()
gato.caminar()
gato.banar()