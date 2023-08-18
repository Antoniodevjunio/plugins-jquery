$(document).ready(function() {
   
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#formulario').submit(function(event) {
        event.preventDefault(); // 

        
        var nome = $('#nome').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var cpf = $('#cpf').val();
        var endereco = $('#endereco').val();
       
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Telefone:', telefone);
        console.log('CPF:', cpf);
        console.log('Endereço:', endereco);
        console.log('CEP:', cep);
    });
});
