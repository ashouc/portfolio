// Smooth Page Scrolling
/*$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});*/

// Section Underlying
$(document).ready(function () {
    $navLinks = $('#navbar div div a');
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1250, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $('h1').css({
        color: "rgba(255,255,255,0.8)",
        paddingTop: "250px" 
    });
});
var $navLinks;
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $navLinks.each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (scrollPos >= refElement.position().top - 75 && scrollPos < refElement.position().top + refElement.height() + 30 - 75) {
            $navLinks.removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

    var $introTitle = $('h1');
    if (scrollPos >= $introTitle.height() / 6) {
        $introTitle.css({
            color: "rgba(255,255,255,0)",
            paddingTop: '250px'
        });
    } else {
        $introTitle.css({
            color: "rgba(255,255,255,0.8)",
            paddingTop: '250px'
        });
    }
}


