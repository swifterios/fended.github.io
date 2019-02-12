let logo_in = document.getElementById('mob_logo');
let logo_before = document.getElementById('mob_logo_2');
let menu = document.getElementById('menublock');

logo_in.addEventListener('click', function() {
    menu.style.display = 'none';
});

logo_before.addEventListener('click', function() {
    menu.style.display = 'block';
});

let leftblock = document.getElementById('laside');

    leftblock.style.height = document.body.clientHeight - 70 + 'px';



let plus = document.getElementById('plus'),
minus = document.getElementById('minus'),
cart_num = document.getElementById('cart_num');
plus.addEventListener('click',function() {
    cart_num.value++;
});


minus.addEventListener('click',function() {
    if(cart_num.value == 0) {
        cart_num.value = 0;
    }else {

        cart_num.value--;
    }
});