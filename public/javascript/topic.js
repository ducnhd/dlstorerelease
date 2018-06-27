$(document).ready(function () {
    $('.start span').click(function () {
        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked');
        } else {
            $(this).addClass('checked');
        }
    })
});