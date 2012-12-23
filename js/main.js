$(function() {

  var guy = $('.humans-our-guy');
  var lady = $('.humans-our-lady');

  $(window).scroll(function() {
    if(this.scrollY > 670 && this.scrollY < 4721) {
      guy.removeClass('guy-fixed').addClass('guy-absolute');
      lady.removeClass('lady-absolute-1 lady-absolute-2').addClass('lady-fixed');
    } else if(this.scrollY > 4720) {
      guy.removeClass('guy-fixed').addClass('guy-absolute');
      lady.removeClass('lady-fixed lady-absolute-1').addClass('lady-absolute-2');
    } else {
      guy.removeClass('guy-absolute').addClass('guy-fixed');
      lady.removeClass('lady-fixed lady-absolute-2').addClass('lady-absolute-1');
    }
  });

});