var nomeInput = document.getElementById('nomeInput');
var emailInput = document.getElementById('emailInput');
var telefoneInput = document.getElementById('telefoneInput');

var emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

var telefoneRegex = /^\(\d{2}\)\d{2}\d{5}\-\d{4}$/

function validaRegex(){
    var nome = nomeInput.value.trim();
    if (nome === '') {
        alert("O campo Nome não pode estar vazio");
    }

    var email = emailInput.value;
    if (!emailRegex.test(email)) {
        alert("Formato de email inválido");
    }

    var telefone = telefoneInput.value;
    if (!telefoneRegex.test(telefone)) {
        alert("Formato de telefone inválido");
    }
}

