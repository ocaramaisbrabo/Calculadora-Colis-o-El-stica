function calcular() { //Declara uma função chamada "calcular".
    const v1i = Number(document.querySelector("#velocidadeinicial1").value); //Obtém o valor do elemento de entrada com o ID "velocidadeinicial1" e converte para um número, armazenando-o na variável v1i.
    const v2i = Number(document.querySelector("#velocidadeinicial2").value);//Obtém o valor do elemento de entrada com o ID "velocidadeinicial2" e converte para um número, armazenando-o na variável v2i.
    const m1 = Number(document.querySelector("#massa1").value);//Obtém o valor do elemento de entrada com o ID "massa1" e converte para um número, armazenando-o na variável m1.
    const m2 = Number(document.querySelector("#massa2").value);//Obtém o valor do elemento de entrada com o ID "massa2" e converte para um número, armazenando-o na variável m2.

    const v1 = (v1i * (m1 - m2) + 2 * v2i * m2) / (m1 + m2);//Calcula v1 com base nos valores obtidos anteriormente.
    const v2 = (v2i * (m2 - m1) + 2 * v1i * m1) / (m1 + m2);//Calcula v2 com base nos valores obtidos anteriormente.

    document.querySelector("#resultadovelocidadeinicial1").textContent = "Velocidade Inicial 1: " + v1.toFixed(2) + " m/s";// Atualiza o conteúdo do elemento com o ID "resultadovelocidadeinicial1" com o resultado do cálculo v1.
    document.querySelector("#resultadovelocidadeinicial2").textContent = "Velocidade Inicial 2: " + v2.toFixed(2) + " m/s";//Atualiza o conteúdo do elemento com o ID "resultadovelocidadeinicial2" com o resultado do cálculo v2.
}

document.addEventListener("DOMContentLoaded", () => {//Adiciona um ouvinte de evento para "DOMContentLoaded".
    const calcularButton = document.querySelector("#calcular");//Obtém o elemento de botão com o ID "calcular" e o armazena na variável calcularButton.
    calcularButton.addEventListener("click", calcular);//Adiciona um ouvinte de evento ao botão "calcular" para chamar a função "calcular" quando o botão for clicado.
});
    