let carts =document.querySelectorAll('.menu_plus');
let product = [
//    { 
//     id: card.dataset.id,
//     title: card.querySelector('.item__title').innerText,
//     price: card.querySelector('.price__currency').innerText,
//     counter: card.querySelector('[data-counter]').innerText,
//    }        
{
    name: "sdf",
    price: 20,
    tag: "sad",
    inCart: 0
},  
{
    name: "ssafddf",
    tag: "sadsqdqsd",
    price: 10,
    inCart: 0
},  
];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(product[i]);
        totalCost(product[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers =localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.footer-nav span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers =localStorage.getItem('cartNumber');

    productNumbers = parseInt('productNumber');

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('footer-nav').textContent = productNumbers+1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.footer-nav span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('prodactsInCart')
    cartItems = JSON.parse(cartItems)

    if(cartItems !== null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
    } 
    }
    localStorage.setItem("prodactsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("prodactsInCart");
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector(".orders-page__container")
    
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="drinks__orders">
         <div class="drinks__title_2 order__title">Drinks</div>
         <div class="drinks__card">
         <div class="card card-body-top" data-id="${item.tag}">
         <h4 class="item__title">${item.name}</h4>
         <div class="details-wrapper">
             <ul class="items1 counter_wrapper">
                 <div class="items__control" data-action="minus">-</div>
                 <div class="items__control" data-counter>{prodactInfo.counter}</div>
                 <div class="items__control" data-action="plus">+</div>
             </ul>
             <div class="price__currency">${item.price}</div>
         </div>`
        });
    }
}

onLoadCartNumbers();
displayCart();
