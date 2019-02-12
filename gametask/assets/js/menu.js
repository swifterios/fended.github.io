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
leftblock.style.height = window.innerHeight + 'px';