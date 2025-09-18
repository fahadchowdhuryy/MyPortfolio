$(document).ready(function() {
    $(window).scroll(function() {
        const navbar = $('.navbar'); // Get the navbar element using jQuery

        if ($(window).scrollTop() > 0) {
            navbar.addClass('sticky');
        } else {
            navbar.removeClass('sticky');
        }
    });
    $('.menubutton').on('click', function() {
        $('.navbar .menu').toggleClass('active');
        $('.menubutton i').toggleClass('active'); 
    });
     
});
