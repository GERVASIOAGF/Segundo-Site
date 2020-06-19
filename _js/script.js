$(function () {

    $(".galeria-fotos").slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       centerMode: true,
       prevArrow: $("#seta-esquerda"),
       nextArrow: $("#seta-direita")
    });


})
