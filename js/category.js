// allProducts
// all categories btn
const categories = document.querySelectorAll('.cat');

// loop through all categories
categories.forEach(category => {
    category.addEventListener('click', () => {
        let filter = category.innerHTML.toLowerCase();

        allProducts.forEach(product => {
            if (filter === 'all') {
                product.style.display = '';
            }
            else {
                if (product.classList.contains(filter)) {
                    product.style.display = '';
                }
                else {
                    product.style.display = 'none';
                }
            }
        })
    })
})

// OR

// for (let i = 0; i < categories.length; i++){
//     categories[i].addEventListener('click',() => {
//         let filter = categories[i].innerHTML.toLowerCase();

//         // loop through products
//         allProducts.forEach(product => {
//             if (filter === 'all') {
//                 product.style.display = '';
//             }
//             else {
//                 if (product.classList.contains(filter)) {
//                     product.style.display = ''
//                 }
//                 else {
//                     product.style.display = 'none'
//                 }
//             }
            
//         });
//         console.log(filter);
//     })
// }