// let continuar_comprando = true;

// const update_html = fruta => document.querySelector('#container').innerHTML += fruta;

// const lista_frutas = []
// while (continuar_comprando) {
//     let fruta = prompt("Cual fruta le gustaria compra?");
//     lista_frutas.push(fruta);
//     update_html(fruta);
//     continuar_comprando = confirm("Quiere continuar comprando?");
// }

// console.log("Usted ha comprado las siguientes frutas")

// lista_frutas.forEach((fruta, index) =>{
//     if(fruta != undefined && fruta != null){
//         console.log(fruta)
//     }
// })

const get_max = (min=1, max=100) => min > max ? min : max

console.log(get_max(60))




