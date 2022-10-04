//add to cart logic

// create an array to store all products
let productsInCart = [];

// select the parent element that house the items in the cart
let parentElement = document.querySelector('#buyItems');

// select all elements that make up a product by selecting its container
// let allProducts = document.querySelectorAll('.products')

// totalPrice
let sumPrice = document.querySelector('#sumPrice')


// function to check if product(object) is already in the array productsInCart then update the count and price.
// else add the new product(object) to the array.

function updateProductsInCart(product) {
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id === product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}

function updateParentElement() {

    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {
            return `
            <li class="buyItem">
                <img src="${product.image}">
                <div>
                    <h5>${product.name}</h5>
                    <span class="dollar">$<p>${product.price}</p></span>
                    <div>
                        <button data-id = '${product.id}' class="minusBtn">-</button>
                        <span class="countOfProduct">${product.count}</span>
                        <button data-id = '${product.id}' class = "plusBtn">+</button>
                    </div>
                </div>
            </li>
            <hr>
            `
        });

        parentElement.innerHTML = result.join('');
        sumPrice.innerHTML = updateSumPrice();
        document.querySelector('.checkoutbtn').classList.remove('hide')
        document.querySelector('.clearCartBtn').classList.remove('hide')

    }
    else {
        document.querySelector('.checkoutbtn').classList.add('hide')
        document.querySelector('.clearCartBtn').classList.add('hide')
        parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
        sumPrice.innerHTML = '0'

    }
}

// sumprice
function updateSumPrice() {
    sum = 0
    for (let i = 0; i < productsInCart.length; i++) {
        sum += productsInCart[i].price
    }
    return `${sum}`;
}


// addEventListener to each products container since this querry
allProducts.forEach(product => {
    product.addEventListener('click', e => {
        console.log(e)
        if (e.target.classList.contains('addToCart')) {

            // take all the needed details to create the product
            let productName = product.querySelector('.productName').innerHTML
            let productImage = product.querySelector('img').src;
            let productPrice = product.querySelector('.productPrice').innerHTML
            let productId = e.target.dataset.productId;

            // create the product as an object
            let productToCart = {
                name: productName,
                image: productImage,
                basePrice: +productPrice,
                price: +productPrice,
                id: productId,
                count: 1
            }

            // calling the function to add the product obj to cart if not existing or to update price and count if existing
            updateProductsInCart(productToCart);
            updateParentElement()
            console.log(updateSumPrice());
        }
        else {
            console.log('no')
        }
    })
})


// minus and plus btn to increase or decrease count, hence increasing or decreasing price and also remove item 
parentElement.addEventListener('click', (e) => {
    let isMinus = e.target.classList.contains('minusBtn')
    let isPlus = e.target.classList.contains('plusBtn')

        for (let i = 0; i < productsInCart.length; i++){

            if (productsInCart[i].id === e.target.dataset.id) {

                if (isPlus) {
                    console.log('pclicked')
                    productsInCart[i].count += 1;
                }
                else if (isMinus) {
                    productsInCart[i].count -= 1;

                }
                productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count
            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }

        }
        updateParentElement();  
})
   

// clear cart btn
document.querySelector('.clearCartBtn').addEventListener('click', (e) => {
    console.log(e)
    productsInCart.splice(0);
    updateParentElement();
    document.querySelector('.cartcont').classList.add('hide')
})