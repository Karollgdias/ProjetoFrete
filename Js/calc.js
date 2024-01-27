function mostrarFaturamento(regime) {
    var faturamentoDiv = document.querySelector('.faturamento');
    var inputFaturamento = document.getElementById('input-faturamento');

    if (regime === 'simples-nacional') {
        faturamentoDiv.style.display = 'block';
        inputFaturamento.required = true;
    } else {
        faturamentoDiv.style.display = 'none';
        inputFaturamento.required = false;
    }
}


function calculate() {
    let resultadoElemento = document.querySelector(".resulte")

    resultadoElemento.innerText = "Frete: R$0,00"

}

