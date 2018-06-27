$(document).ready(function () {
    $(".new-post").click(function () {
        if (edit != -1) {
            edit = -1;
            $('#post-title')[0].value = '';
            $('#post-content')[0].value = '';
        }
        $('.edit').hide();
        $('#submit').show();
        $('.post').fadeToggle('fast');
    });

    $(".close").click(function () {
        $(".post").fadeToggle("fast");
    });


});

function search() {
    var list = $('.products');
    var name = document.getElementById('input').value.toLowerCase();
    for (var i = 0; i < list.length; ++i) {
        var temp = list[i].children[1].children[0].innerText.toLowerCase();
        console.log(temp);
        if (temp.search(name) < 0) list[i].style.display = 'none';
        else list[i].style.display = '';
    }
}

var edit = -1;

function filter(stt) {
    console.log(this);
    edit = stt - 1;
    var x = $('.describe')[edit].children;
    $('#post-title')[0].value = x[0].innerText;
    $('#post-content')[0].value = x[1].innerText;
    $('.edit').show();
    $('#submit').hide();
    $('.post').fadeToggle('fast');
};

function change() {
    var x = $('.describe')[edit].children;
    x[0].innerText = $('#post-title')[0].value;
    x[1].innerText = $('#post-content')[0].value;
    $('#post-title')[0].value = '';
    $('#post-content')[0].value = '';
    edit = -1;
    $(".post").fadeToggle("fast");
};

function del() {

}