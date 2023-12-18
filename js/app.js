let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let imgchange = document.getElementById("imgchange");

redBtn.onclick = function(event) {
    event.preventDefault();
    imgchange.src = "../img/globos/globoRojo.png";
}

blueBtn.onclick = function(event) {
    event.preventDefault();
    imgchange.src = "../img/globos/globoAzul.png";
}

blackBtn.onclick = function(event) {
    event.preventDefault();
    imgchange.src = "../img/globos/globoNegro.png";
}

/*logica para pagina de globos*/
let products = null;
// get datas from file json
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
})

function addDataToHTML(){
// remove datas default from HTML
let listProductHTML = document.querySelector('.listProduct');

// add new datas
if(products != null) // if has data
{
    products.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = '/detail.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = 
        `<img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>`;
        listProductHTML.appendChild(newProduct);

    });
}
}
/*logica de globos */
