
// get the searchBox
const searchBox = document.querySelector('#searchBar');
// get all product but it is commented out because it is being accessed from the addToCart.js
// const allProducts = document.querySelectorAll('.products');

// add event listener to the searchBox to get the value inputed once a key is pressed
searchBox.addEventListener('keyup', () => {
    // get value then convert it to uppercase
    let searchValue = searchBox.value.toUpperCase().trim();

    // get the product name from each product in the product array and also convert the name to upper case
    // check if the searchvalue is present in the string; productname using the method indexOf(value).
    // if value in String, it returns the index 
    // if value not in the string, it returns -1
    allProducts.forEach(product => {
        const productName = product.querySelector('.productName').innerHTML.toUpperCase();
        const result = productName.indexOf(searchValue);
        
        if (result > -1) {
            product.style.display = ''
        }
        else {
            product.style.display = 'none'
        }

    });

    /*
        OR normal for loop
        for (let i = 0; i < allproducts.length; i++) {
        let productName = allproducts[i].querySelector('.productName').innerHTML.toUpperCase();
        let result = productName.indexOf(searchValue);

        if (result > -1) {
            allproducts[i].style.display = '';
            // console.log(allproducts[i]);
        }
        else {
            allproducts[i].style.display = 'none';
        }
        console.log(result);
    }
    */
});