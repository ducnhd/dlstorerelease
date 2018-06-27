function search() {
    var list = $('.customer');
    var name = document.getElementById('input').value.toLowerCase();
    for (var i = 0; i < list.length; ++i) {
        var temp = list[i].children[1].children[1].innerText.toLowerCase();
        if (temp.search(name) < 0) list[i].style.display = 'none';
        else list[i].style.display = '';
    }
    console.log('a');
}

function edit(e) {
    var p = $('.customer')[e - 1].children;
    $('.image img').attr('src', $(p[0]).attr('src'));
    p = p[1].children;
    $('#code')[0].value = xlstring(p[0].innerText);
    $('#name')[0].value = xlstring(p[1].innerText);
    $('#addr')[0].value = xlstring(p[2].innerText);
    $('#email')[0].value = xlstring(p[3].innerText);
    $('#phone')[0].value = xlstring(p[4].innerText);
    $('.edit-customer').show();
}

function xlstring(s) {
    var i = 1;
    while (s[i] != ':') ++i;
    return s.slice(i + 2, s.length);
}

function exit() {
    $('.edit-customer').hide();
}