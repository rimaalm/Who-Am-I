
//change button language on first page
function changeText(text)
  {
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
    document.getElementById("text-display").style.transitionDuration = "1s";
  }

function changeBack(text)
  {
    var display = document.getElementById('text-display');
    display.innerHTML = "";
    display.innerHTML = text;
    document.getElementById("text-display").style.transitionDuration = "1s";
  }

  $(document).ready(function(){
    $('.arabic').mouseover(function(){
    	 $('.english').fadeIn(1000);
    }).mouseout(function(){
       $('.english').fadeOut(1000);
    });
  });

  $(document).ready(function(){
    $('.arabicTwo').mouseover(function(){
       $('.englishTwo').fadeIn(1000);
    }).mouseout(function(){
       $('.englishTwo').fadeOut(1000);
    });
  });

  $(document).ready(function(){
    $('.arbTitle').mouseover(function(){
    	 $('.engTitle').fadeIn(1000);
    }).mouseout(function(){
       $('.engTitle').fadeOut(1000);
    });
  });

  //parallex scroll - wind
  $(window).on('load resize scroll', function() {
    $('.windContain').each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop;
        $(this)
          .find('.wind')
          .css({ left: leftPosition });
    });
  });

  //parallex scroll - cloud
  $(window).on('load resize scroll', function() {
    $('.cloudContain').each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var leftPosition = windowTop - elementTop;
        $(this)
          .find('.cloudOne')
          .css({ left: leftPosition });
    });
  });

  $(window).on('load resize scroll', function() {
    $('.cloudContain').each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var rightPosition = windowTop - elementTop;
        $(this)
          .find('.cloudTwo')
          .css({ right: rightPosition });
    });
  });
