var edit = false;

$(document).ready(function () {
    $(".new-partern").click(function () {
        if (edit) {
            $('#code')[0].value = '';
            $('#name')[0].value = '';
            $('#price')[0].value = 0;
            $('.image img').attr('src', '../public/images/admin/none.jpg');
            edit = false;
            $('#add').show();
            $('#change').hide();
        }
        $('.add-partern').show();
    });

    $(".close").click(function () {
        $(".add-partern").hide();
    });

    $('.edit').click(function (e) {
        if (!edit) {
            $('#add').hide();
            $('#change').show();
            edit = true;
        }
        var p = $(this).parent();
        var code = p.data('code')
        $('#code')[0].value = code;
        code = parseInt(code.slice(1, code.length)) - 1;
        p = $('.fashion')[code];
        $('#name')[0].value = p.children[1].innerText;
        $('#price')[0].value = numberic(p.children[2].innerText);
        $('.image img').attr('src', $(p.children[0]).attr('src'));
        $('.add-partern').show();
    });

    $('.del').click(function () {
        $(this).parent().hide();
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