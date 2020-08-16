let addToCartBtn = document.querySelector('#add-to-cart-button'); 
addToCartBtn.addEventListener('click', addToCartHandler);


function addToCartHandler(e) {
    e.preventDefault();

    let productTitle = document.querySelector("#product-title").innerHTML;

    let productsList = JSON.parse(localStorage.getItem("productsList"));
    if (!productsList) {
        localStorage.setItem("productsList", JSON.stringify({}));
        productsList = JSON.parse(localStorage.getItem("productsList"));
    }

    let prod = productsList[productTitle];
    if (prod) {
        productsList[productTitle].productQuantity += 1;
        localStorage.setItem("productsList", JSON.stringify(productsList));
    }
    else {
        productsList[productTitle] = {
            productPrice: document.querySelector("#product-price").innerHTML,
            productImage: document.querySelector("#product-image-div img").src,
            productQuantity: 1
        };
        localStorage.setItem("productsList", JSON.stringify(productsList));
    }

    window.alert("Added to cart.")
}