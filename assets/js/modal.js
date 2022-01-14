$(function() {
  var scrollpos, state;
  state = false;
  scrollpos = 0;
  $('#workshop-trigger').click(function() {
    scrollpos = $(window).scrollTop();
    $('body').addClass('locked').css({
      'top': -scrollpos
    });
    return $('#overray').fadeIn();
  });
  $('#close-trigger').click(function() {
    $('body').removeClass('locked').css({
      'top': 0
    });
    window.scrollTo(0, scrollpos);
    return $('#overray').fadeOut();
  });
});
