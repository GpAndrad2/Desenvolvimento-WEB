//Captura todas as encomendas
var clientes = document.querySelectorAll(".cliente");

for (var count = 0; count < clientes.length; count++) {
    //Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtd").textContent;

    //Captura o valor unitário da encomenda
    var unitario = clientes[count].querySelector(".info-valor").textContent;

    //Verifica se a quantidade é válida

    if (qtde < 1 || isNaN(qtde)) {

        //Quantidade NOK, avisa usuário
        clientes[count].querySelector(".info-qtd").textContent = "QTDE INVÁLIDA!";
        //clientes[count].style.color="red";
        //clientes[count].style.backgroundColor = "red";
        clientes[count].querySelector(".info-qtd").style.color = "red";

    }else if (unitario < 1 || isNaN(unitario)){
        clientes[count].querySelector(".info-valor").textContent = "VALOR INVALIDA!";
        clientes[count].style.backgroundColor = "red";
        
    }else {
        //Quantidade OK, prossegue
        //Calcula o valor total da encomenda
        clientes[count].querySelector(".info-total").textContent = calculaTotal(qtde, unitario);
    }

}


//Função para o cálculo do valor total
function calculaTotal(qtdeEncomenda, unitarioProduto) {
    var total = 0;

    total = qtdeEncomenda * unitarioProduto;

    return total;
}

