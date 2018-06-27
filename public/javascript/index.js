$(document).ready(function () {
    var speed = 1000;
    var autoswitch = true;
    var autoswitch_speed = 8000;

    $('.intro').hide();
    $('.active').show();

    if (autoswitch) {
        setInterval(function () {
            $('.active').removeClass('active').addClass('oldActive');
            if ($('.oldActive').is(':last-child')) {
                $('.intro').first().addClass('active');
            } else {
                $('.oldActive').next().addClass('active');
            }
            $('.oldActive').removeClass('oldActive');
            $('.intro').hide();
            $('.active').fadeIn(speed);
        }, autoswitch_speed);
    }

});

$(document).ready(function () {
    $(".overlayLinkSignIn").click(function (event) {
        event.preventDefault();
        $(".login").fadeToggle("fast");
    });

    $(".overlayLinkSignUp").click(function (event) {
        event.preventDefault();
        $(".signup").fadeToggle("fast");
    });

    $(".close").click(function () {
        if ($(".login").css("display") != "none") {
            $(".login").fadeToggle("fast");
        }
        if ($(".signup").css("display") != "none") {
            $(".signup").fadeToggle("fast");
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27 && $(".login").css("display") != "none") {
            event.preventDefault();
            $(".login").fadeToggle("fast");
        }

        if (e.keyCode == 27 && $(".signup").css("display") != "none") {
            event.preventDefault();
            $(".signup").fadeToggle("fast");
        }
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#bttop').fadeIn();
        } else {
            $('#bttop').fadeOut();
        }
    });

    $('#bttop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1600);
    });
});

function changeToClient() {
    window.location.assign('client.html')
}