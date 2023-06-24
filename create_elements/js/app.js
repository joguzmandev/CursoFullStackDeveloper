const ul = document.querySelector("#lista");

const li = document.createElement("li");
li.id = 'li_lista';
li.textContent = 'Segundo elemento li';
li.style.color = 'green';

ul.appendChild(li);


console.log(ul);


const arrayPaises = ['RD', 'PR', 'USA', 'COL', 'ESP', 'RU'];

// arrayPaises.forEach( pais => {
//     let li = document.createElement("li");
//     li.id = pais.toLowerCase();
//     li.textContent = pais;
//     ul.appendChild(li);
// })

//No usar esto porque causa reflow en en navegador
// arrayPaises.forEach( pais => { 
//     ul.innerHTML += `<li id="${pais.toLowerCase()}">${pais}</li>`;
// });


//Document Fragment

// const fragment = document.createDocumentFragment();
// arrayPaises.forEach( pais => {
//     let li = document.createElement("li");
//     li.className = 'list';
//     let b = document.createElement('b');
//     b.textContent = "Pais:";
//     let span = document.createElement('span');
//     span.className = 'text-primary';
//     span.textContent = pais;

//     li.appendChild(b);
//     li.appendChild(span);
    
    
//     fragment.appendChild(li);
// });

// ul.appendChild(fragment);

// HTML Template

const liTemplate = document.getElementById('liTemplate');


const fragmentTemplate = document.createDocumentFragment()
arrayPaises.forEach( pais => {
    const cloneTemplate = liTemplate.content.cloneNode(true);
    cloneTemplate.querySelector('.text-primary').textContent = pais;
    cloneTemplate.querySelector('.text-primary').addEventListener('click', e => console.log(e.target.textContent));
    cloneTemplate.querySelector('.text-primary').addEventListener('mouseover', e => e.target.style.cursor = 'pointer');

    fragmentTemplate.appendChild(cloneTemplate);
})

ul.appendChild(fragmentTemplate);
