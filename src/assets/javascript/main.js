function animateHeaderScroll() {
  $(window).scroll(function () {
    const $header = $('.header');
    if ($(window).scrollTop() > 0) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });
}

$(document).ready(function () {
  animateHeaderScroll();
});
