// Função para aumentar a quantidade de um produto
function increaseQuantity(index) {
    var quantityElement = document.getElementById("quantity-" + index);
    var currentQuantity = parseInt(quantityElement.innerText);

    quantityElement.innerText = currentQuantity + 1;
    
    updateTotalPrice();
}

// Função para diminuir a quantidade de um produto
function decreaseQuantity(index) {
    var quantityElement = document.getElementById("quantity-" + index);
    var currentQuantity = parseInt(quantityElement.innerText);

    if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
        updateTotalPrice();
    }
}

// Função para diminuir a quantidade de um produto
function decreaseQuantity(index) {
    var quantityElement = document.getElementById("quantity-" + index);
    var currentQuantity = parseInt(quantityElement.innerText);

    if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
    } else {
        quantityElement.innerText = 0;
    }

    updateTotalPrice();
}

// Função para atualizar o total da compra
function updateTotalPrice() {
    var totalPriceElement = document.getElementById("total-price");
    var products = document.getElementsByClassName("products");
    var newTotalPrice = 0;

    for (var i = 0; i < products.length; i++) {
        var quantityElement = products[i].querySelector(".quantidade span");
        var currentQuantity = parseInt(quantityElement.innerText);

        var precoElement = products[i].querySelector(".preco");
        var price = parseFloat(precoElement.innerText.replace("R$ ", "").replace(".", "").replace(",", "."));

        newTotalPrice += price * currentQuantity;
    }

    totalPriceElement.innerText = "R$ " + formatPrice(newTotalPrice);
}

// Função para formatar o preço com o formato "R$ X.XXX,XX"
function formatPrice(price) {
    var priceString = price.toFixed(2).replace(".", ",");
    var priceParts = priceString.split(",");
    var integerPart = priceParts[0];
    var decimalPart = priceParts[1];
    var formattedPrice = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + decimalPart;
    return formattedPrice;
}

// Função para exibir a mensagem de compra finalizada
function showConfirmationMessage() {
    // Exibe a mensagem de confirmação
    alert("Compra finalizada com sucesso!");

    // Zera a quantidade de produtos
    var quantidadeElementos = document.getElementsByClassName("quantidade");
    for (var i = 0; i < quantidadeElementos.length; i++) {
        quantidadeElementos[i].getElementsByTagName("span")[0].innerText = "0";
    }

    // Zera o valor total da compra
    var totalElemento = document.querySelector("#app footer .total strong");
    totalElemento.innerText = "R$ 0,00";
}

// Obter o elemento do botão "Finalizar Compra"
var finalizarButton = document.querySelector("#app footer button");

// Adicionar evento de clique ao botão
finalizarButton.addEventListener("click", showConfirmationMessage);

// // Função para atualizar o total da compra
// function updateTotalPrice() {
//     var totalPriceElement = document.getElementById("total-price");
//     var products = document.getElementsByClassName("products");
//     var newTotalPrice = 0;

//     for (var i = 0; i < products.length; i++) {
//         var quantityElement = products[i].querySelector(".quantidade span");
//         var currentQuantity = parseInt(quantityElement.innerText);

//         var precoElement = products[i].querySelector(".preco");
//         var price = parseFloat(precoElement.innerText.replace("R$ ", "").replace(",", "."));

//         newTotalPrice += price * currentQuantity;
//     }

//     totalPriceElement.innerText = "R$ " + newTotalPrice.toFixed(2);
// }


