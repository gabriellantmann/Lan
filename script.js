// armazenar os dados 
let dados = [];

//gerar ID aleatorio com 5 digitos 
function gerarld(){
    return Math.floor(1000 + Math.random() * 9000);
    }

    // Adicionar dados a tabela
    document.getElementByld('form').addEventlistener('submit',function(event) { 
        event.preventDefault();

        const descricao = document.getElementByld('descricao').value;
   const valor = parseFloat(document.getElementByld('valor').value.replace(;; '.')); // aceita centavos
const tipo = document.getElementbyld('tipo'). value;

