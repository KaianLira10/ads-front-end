// Mensagem ao clicar no botão principal

const botaoHero = document.querySelector("#btnHero");

botaoHero.addEventListener("click", function () {
    alert("Obrigado pelo interesse! Entre em contato pelo formulário abaixo.");
});


// Envio do formulário

const formulario = document.querySelector("#formContato");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});