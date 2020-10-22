$(document).ready(function (event) {
    $('.header__burger').click(function () {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__menu').click(function () {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });
});