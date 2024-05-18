$('document').ready(function () {
    $('#telefone').mask('00 0 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $("#form-cadastro").validate({
        rules: {
            nome: "required",
            email: "required",
            telefone: "required",
            cpf: "required",
            endereco: "required",
            cep: "required"
        },
        messages: {
            nome: "Digite o seu nome, por favor!",
            email: {
                required: "Digite o seu email, por favor!",
                email: "O formato do seu email deve ser emai@dominio.com"
            },
            telefone: "Digite o seu telefone, por favor!",
            cpf: "Digite o seu cpf, por favor!",
            endereco: "Digite o seu endereco, por favor!",
            cep: "Digite o seu cep, por favor!",
        },
        invalidHandler: function (event, validator) {
            const numeroCamposInvalidos = validator.numberOfInvalids();
            if (numeroCamposInvalidos) {
                alert(`Há ${numeroCamposInvalidos} ${numeroCamposInvalidos > 1 ? "campos invalidos" : "campo inválido" }!`);
            }
        }
    })
})