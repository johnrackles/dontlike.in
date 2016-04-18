$(document).ready(() => {
  ($(window).scroll(() => {
    const $header = $('.header');
    if ($(window).scrollTop() > (72 - 49)) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  })());
});
