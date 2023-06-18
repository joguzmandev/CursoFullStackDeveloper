let continuar_comprando = true;
const lista_frutas = []
while (continuar_comprando) {
    let fruta = prompt("Cual fruta le gustaria compra?");
    lista_frutas.push(fruta);
    continuar_comprando = confirm("Quiere continuar comprando?");
}

console.log("Usted ha comprado las siguientes frutas")

for(let fruta of lista_frutas){
    if(fruta != undefined && fruta != null){
        console.log(fruta)
    }
    
}