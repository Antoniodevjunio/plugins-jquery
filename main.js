$(document).ready(function() {
    // Aplicar máscaras usando jQuery Mask Plugin
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Submissão do formulário
    $('#formulario').submit(function(event) {
        event.preventDefault(); // Impedir o envio padrão

        // Obter valores dos campos
        var nome = $('#nome').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var cpf = $('#cpf').val();
        var endereco = $('#endereco').val();
        var cep = $('#cep').val();

        // Você pode fazer algo com os valores aqui, como enviar para um servidor
        // Neste exemplo, apenas exibindo no console
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Telefone:', telefone);
        console.log('CPF:', cpf);
        console.log('Endereço:', endereco);
        console.log('CEP:', cep);
    });
});
