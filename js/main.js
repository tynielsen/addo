$(function() {

  var guy = $('.humans-our-guy');
  var lady = $('.humans-our-lady');

  $(window).scroll(function() {
    if(this.scrollY > 670) {
      guy.removeClass('guy-fixed').addClass('guy-absolute');
      lady.removeClass('lady-absolute-1').addClass('lady-fixed');
    } else {
      guy.removeClass('guy-absolute').addClass('guy-fixed');
      lady.removeClass('lady-fixed').addClass('lady-absolute-1');
    }
  });

});