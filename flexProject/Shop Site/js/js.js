$('.header_basket_icon').on('click', function () {
    $('.header_basket .header_dropdown').toggleClass('header_drowpdown_isActive');
    $('.header_account .header_dropdown').removeClass('header_drowpdown_isActive');
})
$('.header_account_icon').on('click', function () {
    $('.header_account .header_dropdown').toggleClass('header_drowpdown_isActive');
    $('.header_basket .header_dropdown').removeClass('header_drowpdown_isActive');
})
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header_basket, .header_account').length) {
        $('.header_dropdown').removeClass('header_drowpdown_isActive');
    }
})