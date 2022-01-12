$(function() {
    $('.arrows').click( function() {
        $(this).toggleClass('arrow-down');
        $(this).parent().next().slideToggle();
    });
});