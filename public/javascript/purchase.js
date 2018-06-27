$(document).ready(function () {
    $('.item-gallery__image-wrapper').on('mouseenter', function () {
        var link = $(this).children().data('title');

        $('.item-gallery__image-wrapper').children().removeClass('active');
        $('.item-gallery__image-wrapper').children().addClass('unactive');

        $(this).children().addClass('active');

        $('#product').attr('src', link)
    });
});

function inputChange() {
    var quantity = $('#quantity').val();
    $('#quantity').attr('value', quantity)
}

function moveToCart() {
    window.location.assign('cart.html')
}