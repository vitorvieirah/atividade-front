
# Validador de Número de Telefone Brasileiro

---

Este é um simples script em JavaScript que valida um número de telefone no padrão brasileiro. Ele utiliza expressões regulares (regex) para verificar se o formato do número de telefone está correto.

Uso

Para utilizar este validador de número de telefone, siga estas etapas:

Copie o código JavaScript fornecido abaixo e cole-o no seu projeto:

javascript

// Selecionando o input do número de telefone pelo ID

`var telefoneInput = document.getElementById('telefoneInput');`

// Expressão regular para validar o formato do número de telefone com DDD (padrão brasileiro)

`var telefoneRegex = /^\(\d{2}\)\s\d{2}\s\d{5}\-\d{4}$/;`

`// Adicionando event listener para verificar o número de telefone`

`telefoneInput.addEventListener('input', function() {`

`var telefone = telefoneInput.value;`

`if (!telefoneRegex.test(telefone)) {`

`// Se não corresponder ao padrão de telefone, exibir uma mensagem de erro`

`alert("Formato de telefone inválido");`

`}`

`});`

`// Selecionando o input do número de telefone pelo ID
var telefoneInput = document.getElementById('telefoneInput');`

`// Expressão regular para validar o formato do número de telefone com DDD (padrão brasileiro)
var telefoneRegex = /^\(\d{2}\)\s\d{2}\s\d{5}\-\d{4}$/;`

`// Adicionando event listener para verificar o número de telefone
telefoneInput.addEventListener('input', function() {
var telefone = telefoneInput.value;
if (!telefoneRegex.test(telefone)) {
// Se não corresponder ao padrão de telefone, exibir uma mensagem de erro
alert("Formato de telefone inválido");
}
});`

No seu HTML, adicione um input para o número de telefone com um ID específico, por exemplo:

`<input type="text" id="telefoneInput">`

Agora, sempre que o usuário inserir um número de telefone no campo de entrada, o script verificará se o formato está correto de acordo com o padrão brasileiro. Se o formato não corresponder, será exibida uma mensagem de erro.

---

# Expressões regulares

A expressão regular utilizada para validar o número de telefone no padrão brasileiro é a seguinte:

var telefoneRegex = /^\(\d{2}\)\s\d{2}\s\d{5}\-\d{4}$/;

- ^: Marca o início da string.
- \(: Corresponde ao caractere de parêntese de abertura (.
- \d{2}: Corresponde a exatamente dois dígitos para o DDD.
- \): Corresponde ao caractere de parêntese de fechamento ).
- \s: Corresponde a um espaço em branco.
- \d{2}: Corresponde a exatamente dois dígitos para o prefixo do número.
- \s: Corresponde a um espaço em branco.
- \d{5}: Corresponde a exatamente cinco dígitos para a parte central do número.
- “-” : Corresponde ao caractere de hífen -.
- \d{4}: Corresponde a exatamente quatro dígitos para a parte final do número.
- $: Marca o final da string.

Esta expressão regular garantirá que o número de telefone esteja no formato correto (XX)XX XXXXX-XXXX, onde X representa um dígito.