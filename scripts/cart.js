let productsList = JSON.parse(localStorage.getItem("productsList"));

let cartTableBody = document.querySelector("#cart-table-body");

// console.log(productsList);

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


// console.log(typeof localStorage.getItem("productsList"));