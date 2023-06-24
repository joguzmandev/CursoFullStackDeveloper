
const btn_visualizar = document.getElementById('btn_visualizar');
const inputcolor = document.getElementById('inputcolor');
const outputcolor = document.getElementById('outputcolor');
const checkcolor = document.getElementById('checkcolor');

btn_visualizar.addEventListener('click', () => {

    let output = inputcolor.value;
    outputcolor.style.backgroundColor = output;

});

inputcolor.addEventListener('change', (e) => {
    if(checkcolor.checked)
        outputcolor.style.backgroundColor = e.target.value;
});