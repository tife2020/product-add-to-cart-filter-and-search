// get the filter btn
const filterBtns = document.querySelectorAll('.filter');

// allProducts
let allProducts = document.querySelectorAll('.products')

let productsParentElement = document.querySelector('.productsCont')

//1 get all unique prices of the products then sort it from lowest to highest
let allPrice = new Set();
allProducts.forEach(product => {
    let productPrice = product.querySelector(".productPrice").innerHTML
    allPrice.add(productPrice);
});

// 2.converts a Set to an Array then sort the array using --- Array.from(set).sort();
allPrice = Array.from(allPrice).sort();
console.log(allPrice);


// 4. create function to update the html in the parentElement
updateProductsParentElement = (p) => {
    let result = p.map(pro => {
        // this convert the object HTMLDivElement to a string that can be used as an innerHTML
        let tmp = document.createElement('div');
        tmp.appendChild(pro);
        console.log(tmp.innerHTML);
        return tmp.innerHTML;
    });

    productsParentElement.innerHTML = result.join('')
}

// 3. add Event Listener to the filterBtns
filterBtns.forEach(filterBtn => {


    filterBtn.addEventListener('click', () => {

        productsToFilter = [];

        // if low is clicked, loop through the sorted price and loop through the products
        // then collect the products in an array then update the parent element
        if (filterBtn.classList.contains('all')) {
            console.log('low clicked');
            for (let i = 0; i < allProducts.length; i++){
                productsToFilter.push(allProducts[i]);
            }
        }

        else if (filterBtn.classList.contains('low')) {
            console.log('low clicked');

            for (let i = 0; i < allPrice.length; i++) {
                for (let j = 0; j < allProducts.length; j++) {

                    let productPrice = allProducts[j].querySelector('.productPrice').innerHTML;

                    if (allPrice[i] === productPrice) {
                            productsToFilter.push(allProducts[j]);
                    }
                }
            }
        }
        else if (filterBtn.classList.contains('high')) {
            console.log('high clicked');

            for (let i = allPrice.length - 1; i >= 0; i--) {
                for (let j = 0; j < allProducts.length; j++) {

                    let productPrice = allProducts[j].querySelector('.productPrice').innerHTML;

                    if (allPrice[i] === productPrice) {
                        productsToFilter.push(allProducts[j]);
                    }
                }
            }
        }

        updateProductsParentElement(productsToFilter);

    });

});