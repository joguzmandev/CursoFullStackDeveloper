console.log(document);
console.log(document.head);
console.log(document.title);
console.log("Before DOMContentLoaded")
document.addEventListener('DOMContentLoaded', () =>{
    let h1 = document.getElementById('titleh1');
    console.log(h1, h1.textContent, h1.innerHTML);


    //QuerySelector
    const h1class = document.querySelector('.h1-class')
    console.log(h1class)

    console.clear(); // Limpia la consola

    const sp_clasd = document.querySelectorAll('.sp-clasd');
    console.log(sp_clasd);

    console.clear(); // Limpia la consola

    const h1main = document.querySelector('#titleh1');
    console.log(h1main);
    console.log(h1main.id);
    console.log(h1main.className);
    console.log(h1main.style);
    console.log(h1main.tagName);
    console.log(h1main.textContent);

    //Set text to element
    h1main.textContent = "Other text updated";
    h1main.style.color = "green";

    h1main.addEventListener('click', (e) =>{
        e.target.style.color = e.target.style.color == 'red' ? 'green' : 'red';
    })
    

})
console.log("After DOMContentLoaded")





