$(document).ready(function () {
    var navbar = document.getElementById("navbar");
    $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
        }

    );
});