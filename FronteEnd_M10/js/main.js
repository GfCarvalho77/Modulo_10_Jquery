$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });
$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})
$('#telefone').mask('(00) 00000-0000');
/*placa de carro -> mask('sss-0000',{
    placeholder: 'ABC-1234})
Data de nascimento-> mask('00/00/000',{
    placeholder: '__/__/___'})
})*/
        
$('form').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        veículo_interesse:{
            required: true
        },
        mensagem:{
            required: true,
        },
       
    },
         messages:{
            nome: 'Por favor informe seu nome'                        
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
                console.log("Elemento que acionou o evento:", evento.target);
            }
        }
})

        $('.lista-veiculos button').click(function(){
            const destino = $('#contato');

            const nomeVeiculo = $(this).parent().find('h3').text
            ();
            const cliente = "Guilherme Carvalho"

            $('#veículo_interesse').val(nomeVeiculo);
            $('#nome').val(cliente);

            $('html').animate({
            scrollTop: destino.offset().top
            },1000)
        })
}) 
