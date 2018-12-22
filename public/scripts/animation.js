$(document).ready(function () {

  function addActive() {
    $(this).addClass("active");
  }

  function removeActive() {
    $(this).removeClass("active");
  }

  $(".landing-blog-item,.service-list-item").hover(addActive, removeActive);

  $(".scroll-top").on("click", returnToTopOfScreen);

  function returnToTopOfScreen() {
    $("html, body").animate({
        scrollTop: 0
      },
      500
    );
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".scroll-arrow").fadeIn();
    } else {
      $(".scroll-arrow").fadeOut();
    }
  });
});