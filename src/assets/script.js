$(function() {
    $('.btn').prepend('<div class="hover"><span></span><span></span><span></span><span></span><span></span><span></span></div>');
    $('.show').click( function() {
        $(this).children(".arrows").toggleClass('arrow-down');
        $(this).next().slideToggle();
    });
});