$(function() {

  var guy = $('.humans-our-guy');
  var lady = $('.humans-our-lady');

  $('.slide-1 p').fadeIn(1500);

  $(window).scroll(function() {
    //tracking the movement of the people
    if(this.scrollY > 670 && this.scrollY < 4711) {

      guy.removeClass('guy-fixed')
         .addClass('guy-absolute');

      lady.removeClass('lady-absolute-1 lady-absolute-2')
          .addClass('lady-fixed');

    } else if(this.scrollY > 4710) {

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
    if(this.scrollY > 536) {
      $('.slide-2 p').fadeIn('slow');
    }
    if(this.scrollY > 1265) {
      $('.slide-3 p').fadeIn('slow');
    }
    if(this.scrollY > 1985) {
      $('.slide-4 p').fadeIn('slow');
    }
    if(this.scrollY > 2670) {
      $('.slide-5 p').fadeIn('slow');
    }
    if(this.scrollY > 3325) {
      $('.slide-6 p').fadeIn('slow');
    }
    if(this.scrollY > 4010) {
      $('.slide-7 p').fadeIn('slow');
    }
    if(this.scrollY > 4630) {
      $('.slide-8 p').fadeIn('slow');
    }
  });

});