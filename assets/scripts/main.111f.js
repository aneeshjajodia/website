/*
    MAIN SCRIPTS - Last updated: 05-12-14
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var TOUCH_ENABLED = $(".touch").length; // Using Modernizr

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
});

$(window).load(function() {
    NProgress.done();
});

//-----------------------------------------------------------------
// Main Scripts
//-----------------------------------------------------------------

$(document).ready(function() {
    'use strict';
    $('.typed').typed({
        strings: ['a web-developer', 'a web-designer', 'Aneesh Jajodia'],
        typeSpeed: 40, // typing speed
        backDelay: 500, // pause before backspacing
        loop: false, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function() {
                $('.head-text').addClass('lift');
                $('.contact').addClass('show');
            } // call function after typing is done
    });

    //==================================================
    // Blurred Background
    //==================================================

    //      $('.blurred-background').blurjs({
    //         source: 'body',
    //  radius: 30,
    //  overlay: 'rgba(0,0,0,0.4)',
    //  offset: {
    //          x: 1,
    //          y: 1
    //      }
    // });
    //            $.vegas( 'slideshow', {
    //            delay:800,
    //            backgrounds: [{ src: 'http://www.aneesh.me/images/backdrop.jpg', fade: 400}]
    //            }); //*('overlay')*/

});

//==================================================
// Parallax
//==================================================

$('.parallax-window').parallax();

(function() {
  var _Drop;

  _Drop = Drop.createContext({
    classPrefix: 'drop'
  });

  return $('.card').each(function() {
    var $card, $target, content, drop, openOn, theme;
    $card = $(this);
    theme = $card.data('theme');
    openOn = $card.data('open-on') || 'click';
    $target = $card.find('.drop-target');
    $target.addClass(theme);
    content = $card.find('.drop-content').html();
    return drop = new _Drop({
      target: $target[0],
      classes: theme,
      position: 'top center',
      constrainToWindow: true,
      constrainToScrollParent: false,
      openOn: openOn,
      content: content
    });
  });

}).call(this);

//==================================================
// Getting Instgram Followers Count
//==================================================

$(function get_instagram() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: true,
    url: "https://api.instagram.com/v1/users/22047437/?access_token=22047437.1677ed0.a020f6d7f7b143ccbb35c6d5276fd5e7",
    success: function(data) {
      var ig_count = data.data.counts.followed_by.toString();

      $(".instagram_count").append(ig_count);
      //return ig_count;
    }
  });
});

