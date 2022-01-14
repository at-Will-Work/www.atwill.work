$(document).ready(function($) {
  $('.sp-slides').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    autoplay: true,
    variableWidth: false,
    adaptiveHeight: false
  });
  $('#sticky').sliderPro({
    width: '100%',
    height: 45,
    autoHeight: true,
    buttons: false,
    orientation: 'vertical',
    slideDistance: 10
  });
});
