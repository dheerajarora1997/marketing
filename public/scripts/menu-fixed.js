$(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
        $('header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
    }
});