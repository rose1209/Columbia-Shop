let productsList = JSON.parse(localStorage.getItem("productsList"));

let cartTableBody = document.querySelector("#cart-table-body");

let totalPrice = 0;

for (let productTitle in productsList) {
    let productQuantity = productsList[productTitle]["productQuantity"];
    let productImage = productsList[productTitle]["productImage"];
    let productPrice = parseFloat(productsList[productTitle]["productPrice"].slice(1));
    let totalProductPrice = productPrice * parseInt(productQuantity);

    totalPrice += totalProductPrice;

    cartTableBody.innerHTML += `
    <tr>
        <td>${productTitle}</td>
        <td>${productQuantity}</td>
        <td>${productPrice}</td>
        <td><img src="${productImage}" alt="${productTitle}" class="cart-product-image"/></td>
    </tr>`;
}

document.querySelector("#total_box_div").innerHTML = "Tota: $" + totalPrice;

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