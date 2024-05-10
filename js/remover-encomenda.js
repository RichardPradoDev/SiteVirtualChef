var tabela = document.querySelector("#tabela-clientes");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function () {
        //Captura a TR da TD que sofreu o duplo clique e remove
        event.target.parentNode.remove();
    }, 500);
});


