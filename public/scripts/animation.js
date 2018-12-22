$(document).ready(function () {
  function addActive() {
    $(this).addClass("active");
  }

  function removeActive() {
    $(this).removeClass("active");
  }

  $(".landing-blog-item,.service-list-item").hover(addActive, removeActive);
  $(".scroll-arrow").on("click", returnToTopOfScreen);

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

  $(window)
    .bind("resize", function () {
      if ($(this).width() < 991) {
        $(".timeline > li.inverted").removeClass("timeline-inverted");
      } else {
        $(".timeline > li.inverted").addClass("timeline-inverted");
      }
    })
    .trigger("resize");

  function HeaderScroll() {
    $("html, body").animate({
        scrollTop: 460
      },
      500
    );
  }

  if ($('div').hasClass('about-page')) {
    HeaderScroll();
  }
  if ($('div').hasClass('portfolio-page')) {
    HeaderScroll();
  }
  if ($('div').hasClass('testimonial-page')) {
    HeaderScroll();
  }
  if ($('div').hasClass('contact-page')) {
    HeaderScroll();
  }
});