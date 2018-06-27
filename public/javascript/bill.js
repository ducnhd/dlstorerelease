$(document).ready(function () {
    var x = '.products';
    $('#nav a').click(function () {
        var temp = $(this).data('quote');
        console.log(temp);
        $(x).hide();
        if (temp != 'all') $('.' + temp).show();
        else $(x).show();
    })
})

function edit(e) {
    var p = $('.products')[e - 1];
    $('#' + xl(p.className)).attr('checked', 'checked');
    p = p.children;
    $('.image img').attr('src', $(p[0]).attr('src'));
    p = p[1].children;
    $('#code')[0].value = p[0].innerText;
    $('#sl')[0].value = numberic(p[1].innerText);
    $('#price')[0].value = numberic(p[2].innerText);
    $('#name')[0].value = xlstring(p[3].innerText);
    $('#addr')[0].value = xlstring(p[4].innerText);
    $('.edit-customer').show();
}

function xlstring(s) {
    var i = 1;
    while (s[i] != ':' && i < s.length) ++i;
    return s.slice(i + 2, s.length);
}

function xl(s) {
    var i = 1;
    while (s[i] != ' ' && i < s.length) ++i;
    return s.slice(i + 1, s.length);
}

function exit() {
    $('.edit-customer').hide();
}

function numberic(s) {
    res = '';
    for (var i = 0; i < s.length; ++i)
        if (s[i] <= '9' && s[i] >= '0') res += s[i];
    return parseInt(res);
}