var edit = false;

$(document).ready(function () {
    var x = '.fashion';
    $('#nav a').click(function () {
        var temp = $(this).data('quote');
        console.log(temp);
        $(x).hide();
        if (temp != 'all') $('.' + temp).show();
        else $(x).show();
    })

    $(".new-cloth").click(function () {
        $('.add-cloth').show();
    });

    $(".close").click(function () {
        $(".add-cloth").hide();
    });
})

function search() {
    var list = $('.fashion');
    var name = document.getElementById('input').value.toLowerCase();
    for (var i = 0; i < list.length; ++i) {
        var temp = list[i].children[1].innerText.toLowerCase();
        if (temp.search(name) < 0) list[i].style.display = 'none';
        else list[i].style.display = '';
    }
}

function del(e) {
    $('.fashion')[e - 1].style.display = 'none';
}

function filter(a) {
    if (!edit) {
        $('#add').hide();
        $('#change').show();
        edit = true;
    }
    var p = $('.fashion')[a - 1];
    console.log(p.className);
    8
    $('#code')[0].value = $(p).data('code');
    $('#name')[0].value = p.children[1].innerText;
    $('#price')[0].value = numberic(p.children[2].innerText);
    $('.image img').attr('src', $(p.children[0]).attr('src'));
    $('.add-cloth').show();
}

function numberic(s) {
    res = '';
    for (var i = 0; i < s.length; ++i)
        if (s[i] <= '9' && s[i] >= '0') res += s[i];
    return parseInt(res);
}

var ch = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function money(s) {
    var res = '';
    var count = 0;
    do {
        if (count > 0 && count % 3 == 0) res = '.' + res;
        count += 1;
        var r = s % 10;
        s = (s - r) / 10;
        console.log(r);
        res = ch[r] + res;
    } while (s > 0)
    while (res.length < 3) res = '0' + res;
    return 'Giá: ' + res + ' vnđ';
}