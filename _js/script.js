$(function () {

    function atualizar_informacoes() {
        $("#descricao-jogador").text( $(".slick-center").data("name"));
        $("#posicao-jogador").text( $(".slick-center").data("price"));
    }

    $(".galeria-fotos").on('init', function() {
        atualizar_informacoes();
    
    });

    $(".galeria-fotos").slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       centerMode: true,
       prevArrow: $("#seta-esquerda"),
       nextArrow: $("#seta-direita"),
       responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".galeria-fotos").on('afterChange', function() {
        atualizar_informacoes();
    
    });


});


