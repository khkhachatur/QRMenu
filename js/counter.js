
// const drinksCardWrapper = document.querySelector('.drinks__orders'); 


// window.addEventListener('click', function(event){

//     let counter;

//     if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
//         const counterWrapper = event.target.closest('.counter_wrapper');
//         counter = counterWrapper.querySelector('[data-counter]');
//     }

//     if(event.target.dataset.action === 'pluus'){
//         const card = event.target.closest('.card');
//         console.log(card);

//         const prodactInfo = {
//             id: card.dataset.id,
//             title: card.querySelector('.item__title').innerText,
//             price: card.querySelector('.price__currency').innerText,
//             counter: card.querySelector('[data-counter]').innerText,
            
//         };

//         const ItemInCart = drinksCardWrapper.querySelector(`[data-id="${prodactInfo.id}"]`) 

//         if(ItemInCart){
//            const counterEl =  ItemInCart.querySelector('[data-counter]')
//            counterEl.innerText = parseInt(counterEl.innerText)+1
//         }else{
//         const cartItemHTML = `<div class="drinks__orders">
//         <div class="drinks__title_2 order__title">Drinks</div>
//         <div class="drinks__card">
//         <div class="card card-body-top" data-id="${prodactInfo.id}">
//         <h4 class="item__title">${prodactInfo.title}</h4>
//         <div class="details-wrapper">
//             <ul class="items1 counter_wrapper">
//                 <div class="items__control" data-action="minus">-</div>
//                 <div class="items__control" data-counter>${prodactInfo.counter}</div>
//                 <div class="items__control" data-action="plus">+</div>
//             </ul>
//             <div class="price__currency">${prodactInfo.price}</div>
//         </div>
//     </div>
//         </div>`;

//         drinksCardWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
//         }
//     }


//     if(event.target.dataset.action === 'plus'){
//         const card = event.target.closest('.card');
//         console.log(card);

//         const prodactInfo = {
//             id: card.dataset.id,
//             counter: card.querySelector('[data-counter]').innerText,
//         };
//         const ItemInCart = drinksCardWrapper.querySelector(`[data-id="${prodactInfo.id}"]`)
//         const counterEl =  ItemInCart.querySelector('[data-counter]')

//         if(parseInt(counter.innerText)<9){
//             counter.innerText++;
//             counterEl.innerText = parseInt(counterEl.innerText)+1
//             }
//     }
//     if(event.target.dataset.action === 'minus'){
//         const card = event.target.closest('.card');
//         console.log(card);

//         const prodactInfo = {
//             id: card.dataset.id,
//             counter: card.querySelector('[data-counter]').innerText,
//         };
//         const ItemInCart = drinksCardWrapper.querySelector(`[data-id="${prodactInfo.id}"]`)
//         const counterEl =  ItemInCart.querySelector('[data-counter]')

//         if(parseInt(counter.innerText)>1){
//         counter.innerText--;
//         counterEl.innerText = parseInt(counterEl.innerText)-1
//         }
//     }

// });



// window.addEventListener('click', function(event){

// })
