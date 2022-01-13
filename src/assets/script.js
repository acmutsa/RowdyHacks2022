$(function() {
    $('.show').click( function() {
        $(this).children(".arrows").toggleClass('arrow-down');
        $(this).next().slideToggle();
    });
});