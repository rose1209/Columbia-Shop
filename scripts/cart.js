let productsList = JSON.parse(localStorage.getItem("productsList"));

let cartTableBody = document.querySelector("#cart-table-body");

for (let productTitle in productsList) {
    let productQuantity = productsList[productTitle]["productQuantity"];
    let productImage = productsList[productTitle]["productImage"];

    cartTableBody.innerHTML += `
    <tr>
        <td>${productTitle}</td>
        <td>${productQuantity}</td>
        <td><img src="${productImage}" alt="${productTitle}" class="cart-product-image"/></td>
    </tr>`
}

let clearCartBtn = document.querySelector("#clear-cart-button");
clearCartBtn.addEventListener('click', clearCart);
function clearCart(e) {
    e.preventDefault();

    localStorage.clear();
    location.reload();
}

let checkoutCartBtn = document.querySelector("#checkout-button");
checkoutCartBtn.addEventListener('click', checkoutCart);
function checkoutCart (e) {
    e.preventDefault();
}