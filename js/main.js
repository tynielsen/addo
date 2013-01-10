$(function() {

  var guy = $('.humans-our-guy');
  var lady = $('.humans-our-lady');

  $('.slide-1 p').fadeIn(1500);

  if($(window).height() > '680px') {
    $('.main-content').css('padding-bottom', '300px');
  }

  $(window).scroll(function() {
    var scrolledDown = this.scrollY;

    //tracking the movement of the people
    if(scrolledDown > 670 && scrolledDown < 4711) {

      guy.removeClass('guy-fixed')
         .addClass('guy-absolute');

      lady.removeClass('lady-absolute-1 lady-absolute-2')
          .addClass('lady-fixed');

    } else if(scrolledDown > 4710) {

      guy.removeClass('guy-fixed')
         .addClass('guy-absolute');

      lady.removeClass('lady-fixed lady-absolute-1')
          .addClass('lady-absolute-2');

    } else {

      guy.removeClass('guy-absolute')
         .addClass('guy-fixed');

      lady.removeClass('lady-fixed lady-absolute-2')
          .addClass('lady-absolute-1');
    }

    // fading in the paragraphs when they are on screen
    if(scrolledDown > 595) {
      $('.slide-2 p').fadeIn('fast');
    }
    if(scrolledDown > 1290) {
      $('.slide-3 p').fadeIn('fast');
    }
    if(scrolledDown > 1790) {
      $('.slide-4 p').fadeIn('fast');
    }
    if(scrolledDown > 2670) {
      $('.slide-5 p').fadeIn('fast');
    }
    if(scrolledDown > 3335) {
      $('.slide-6 p').fadeIn('fast');
    }
    if(scrolledDown > 4015) {
      $('.slide-7 p').fadeIn('fast');
    }
    if(scrolledDown > 4630) {
      $('.slide-8 p').fadeIn('fast');
      
      //show view more arrow only if it isn't already showing, don't want this to keep firing
      if($('.arrow-viewMore').is(':hidden')) {
        setTimeout(function() {
          console.log('test');
          $('.arrow-viewMore').fadeIn(1000);
        }, 2000);
      } else {
      setTimeout(function() {
        console.log('test');
        $('.arrow-viewMore').fadeOut(1000);
      }, 500);
    }
    }
  });

});