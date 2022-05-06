// const drinksCardWrapper = document.querySelector('.drinks__orders');
let totalPrice = 0

window.addEventListener('click', function (event) {


    
    if (event.target.dataset.action === 'pluus' || event.target.dataset.action === 'plus') {
        const card = event.target.closest('.card');
        
        console.log(card);
        
        const prodactInfo = {
            id: card.dataset.id,
            title: card.querySelector('.item__title').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            
        };
        if (totalPrice == 0) {
            totalPrice += +prodactInfo.price
            
        }
        localStorage.setItem('total', JSON.stringify(+prodactInfo.price))
        
        const arr = []
        console.log(totalPrice)
        const local = JSON.parse(localStorage.getItem('item'))
        if (!local) {
            arr.push(prodactInfo)
            localStorage.setItem('item', JSON.stringify(arr))
        }
        else if (local) {
            const el = local.find((el)=>el.id == prodactInfo.id)
            console.log(el);

                if (el?.id == prodactInfo.id) {
                    
                    if(el.counter<9){
                        el.counter++
                        console.log('asdfasdfadfas',el.counter)
                        localStorage.setItem('item', JSON.stringify(local))
                        
                        totalPrice += (+prodactInfo.price)
                        localStorage.setItem('total', JSON.stringify(+totalPrice))
                    }
                }
                else if (!el){ 

                    local.push(prodactInfo)
                    localStorage.setItem('item', JSON.stringify(local))
                    totalPrice += (+prodactInfo.price)
                    localStorage.setItem('total', JSON.stringify(+totalPrice))
                }
                // totalPrice += (+prodactInfo.price)
                // localStorage.setItem('total', JSON.stringify(totalPrice))
                // console.log(totalPrice)


        } 
    }
    
    if(event.target.dataset.action === 'minus') {
        const local = JSON.parse(localStorage.getItem('item'))
        const card = event.target.closest('.card');
        // const card_drinks = event.target.closest('.drinks__card')
        
        console.log(card);
        // console.log(card_drinks);
        
        const prodactInfo = {
            id: card.dataset.id,
            title: card.querySelector('.item__title').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
            
        };
        const el = local.find((el)=>el.id == prodactInfo.id)
        if(totalPrice >0){
            el.counter--
            totalPrice -= el.price
            localStorage.setItem('total',totalPrice)
            localStorage.setItem('item', JSON.stringify(local))
        }
        
   }

    // if (event.target.dataset.action === 'plus') {
        //     const card = event.target.closest('.card');
    //     console.log(card);

    //     const prodactInfo = {
    //         id: card.dataset.id,
    //         counter: card.querySelector('[data-counter]').innerText,
    //     };
    //     const ItemInCart = drinksCardWrapper.querySelector(`[data-id="${prodactInfo.id}"]`)
    //     const counterEl = ItemInCart.querySelector('[data-counter]')

    //     if (parseInt(counter.innerText) < 9) {
    //         counter.innerText++;
    //         counterEl.innerText = parseInt(counterEl.innerText) + 1
    //     }
    // }
    // if (event.target.dataset.action === 'minus') {
    //     const card = event.target.closest('.card');
    //     console.log(card);

    //     const prodactInfo = {
    //         id: card.dataset.id,
    //         counter: card.querySelector('[data-counter]').innerText,
    //     };
    //     const ItemInCart = drinksCardWrapper.querySelector(`[data-id="${prodactInfo.id}"]`)
    //     const counterEl = ItemInCart.querySelector('[data-counter]')

    //     if (parseInt(counter.innerText) > 1) {
    //         counter.innerText--;
    //         counterEl.innerText = parseInt(counterEl.innerText) - 1
    //     }
    // }


});

    


