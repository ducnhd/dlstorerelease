$(document).ready(function () {
    $('.select a').on('click', function () {
        $('.select li.current').removeClass('current');

        $('.select a').css("color", "lightskyblue");

        $(this).parent().addClass('current');
        $(this).css("color", "red");

        $('h1#heading').text($(this).text());
        
        var category = $(this).data('type').toLowerCase().replace(' ', '-');


        if (category == 'all') {
            $('.product:hidden').fadeIn('slow').removeClass('hidden');
            $('.product').children('a').attr('data-lightbox', 'all');
        } else {
            $('.product').each(function () {
                if (!$(this).hasClass(category)) {
                    $(this).hide().addClass('hidden');
                    $(this).children('a').attr('data-lightbox', $(this).children('a').attr('class'));
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                    $(this).children('a').attr('data-lightbox', $(this).children('a').attr('class'));
                }
            });
        }
        return false;
    });

    $('.product a').on('mouseenter', function () {
        var title = $(this).data('title');
        if (title == null) {
            title = '';
        }

        $(this).append('<div class="overlay"></div>')
        var overlay = $(this).children('.overlay');
        overlay.html('<h3>' + title + '</h3>');
        overlay.fadeIn(600);
    });

    $('.product a').on('mouseleave', function () {
        var overlay = $(this).children('.overlay');
        overlay.fadeOut(800);
        overlay.remove();
    });

});