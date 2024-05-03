var botaoAdicionar = document.querySelector("#botaoAdicionar");

botaoAdicionar.addEventListener("click", function (event) {

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var encomenda = obtemEncomenda(form);

    if (validaEncomenda(encomenda).length > 0) {
        console.log(validaEncomenda(encomenda));
    } else {
        addEncomenda(encomenda);

        form.reset();
    }
});

function obtemEncomenda(dadosForm) {
    var encomenda = {

        nome: dadosForm.nome.value,
        qtde: dadosForm.qtde.value,
        produto: dadosForm.produto.value,
        unitario: dadosForm.valor.value,
    }

    return encomenda;
}

function addEncomenda(novaEncomenda) {

    var tabela = document.querySelector("#tabela-clientes");

    tabela.appendChild(montaTR(novaEncomenda));
}

function montaTD(dado) {

    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}

function montaTR(novaEncomenda) {
    var tr = document.createElement("tr");

    tr.appendChild(montaTD(novaEncomenda.nome));
    tr.appendChild(montaTD(novaEncomenda.produto));
    tr.appendChild(montaTD(novaEncomenda.qtde));
    tr.appendChild(montaTD(formataValor(parseFloat(novaEncomenda.unitario))));
    tr.appendChild(montaTD(calculaTotal(novaEncomenda.qtde, novaEncomenda.unitario)));

    return tr;
}

function validaEncomenda(encomenda) {

    var erros = [];

    if (encomenda.nome == "") {
        erros.push("O nome não pode ser vazio!");
    }

    if (encomenda.qtde <= 0 || isNaN(encomenda.qtde)) {
        erros.push("A quantidade deve ser numérica e maior que 0");
    }

    if (encomenda.unitario <= 0 || isNaN(encomenda.unitario)) {
        erros.push("O valor unitário deve ser numérico e maior que 0");
    }

    return erros;
}
