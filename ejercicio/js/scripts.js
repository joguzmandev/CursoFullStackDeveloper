const perro = {
    nombre: 'Doggi',
    edad: 2,
    enemigos: ['Pelucho', 'Chasoke', 'Rufus'],
    habilidades: {
        ataque: 'Rapido',
        hir: true,
        sombra: 'Azulado'
    },
    calcular_edad(){
        return this.edad;
    },
    listarEnemigos(){
        this.enemigos.forEach(enemigo => console.log(enemigo))
    },
    set nombreNuevo(nombre){
        this.nombre = nombre;
    },
    get nombreNuevo(){return this.nombre;}
    
}
// Iterando con Objeto en JS
console.log(perro)
console.log(perro.calcular_edad())
perro.listarEnemigos()
console.log("================================================")

for(let property in perro){
    let _typeof = typeof(perro[property]);
    if(_typeof === 'function')
        continue;
    console.log(`${property} = ${perro[property]} (${_typeof})`)
}

console.log(Object.keys(perro));
console.log(Object.values(perro));
console.log(Object.entries(perro));
console.log("================================================");
Object.values(perro).forEach(item => console.log(item));

console.clear();

//Destrucurar objeto en JS

const {nombre:soyUnAlia, edad =  100, enemigos:misEnemigos=[], habilidades:{hir, sombra, ataque} } = perro;

console.log(soyUnAlia, edad, misEnemigos);
console.log(ataque, hir, sombra);

const [uno,dos, tres, cuatro='No existe'] = misEnemigos;
console.log(uno,dos, tres, cuatro);

console.clear();

// Get and Set
const nombre = perro.nombreNuevo;
perro.nombreNuevo = "Pepisode"
console.log(nombre);
console.log(perro); 