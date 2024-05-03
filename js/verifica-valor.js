var titulo = document.querySelector("#titulo");
titulo.textContent = "Lista de Encomendas";

var clientes = document.querySelectorAll(".clientes");

for (var i = 0; i < clientes.length; i++) {
    var qtde = parseFloat(clientes[i].querySelector(".info-qtde").textContent);
    var unitario = parseFloat(clientes[i].querySelector(".info-valor").textContent);

    if (!validaQtde(qtde)) {
        clientes[i].querySelector(".info-valorTotal").textContent = "Quantidade inválida";
        clientes[i].style.color = "red";
    } else {
        if (!validaUnitario(unitario)) {
            clientes[i].querySelector(".info-valorTotal").textContent = "Valor inválido";
            clientes[i].style.backgroundColor = "red";
        } else {
            clientes[i].querySelector(".info-valor").textContent = formataValor(unitario);
            clientes[i].querySelector(".info-valorTotal").textContent = calculaTotal(qtde, unitario);
        }
    }
}

function formataValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calculaTotal(qtde, unitario) {
    var total = qtde * unitario;
    return formataValor(total);
}

function validaQtde(qtde) {
    return !isNaN(qtde) && qtde > 0;
}

function validaUnitario(unitario) {
    return !isNaN(unitario) && unitario > 0;
}