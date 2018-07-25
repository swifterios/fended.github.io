$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn-active');
    $('.menubg').toggleClass('menubg-active');
  });