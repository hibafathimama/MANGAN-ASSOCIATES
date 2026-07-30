$(document).ready(function () {
    $('.hero-slider').slick({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      cssEase: 'linear'
    });
  });