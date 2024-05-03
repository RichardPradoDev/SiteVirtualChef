
//Ações diretamente nas linhas da tabela
/*var encomendas = document.querySelectorAll(".clientes");

encomendas.forEach(function (linha) {
    linha.addEventListener("dbclick", function () {
        this.remove();
    });
});*/

//Ações na tabela 
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function () {
        //Captura a TR da TD que sofreu o duplo clique e remove
        event.target.parentNode.remove();
    }, 500);
});