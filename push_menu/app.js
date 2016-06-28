/*********************************************************************************************************

Author: Nyasha Pride Masamba
Based on the lessons from Codecademy at https://www.codecademy.com/en/skills/make-an-interactive-website

This small app is an introductory taste of jQuery's capability to build interactive web applications 
relatively quickly, leveraging the power of JavaScript. In particular, the purpose the code is to access
the Document Object Model (DOM) in order to target the menu and allow it to dynamically respond to user 
actions such as mouse clicks. The end result is that when the Menu icon is clicked, the menu pushes over
from the left, showing the navigation options. When the X icon is clicked, the menu pushes back to the 
right. This was achieved with a few lines of jQuery code (besides the usual HTML and CSS, of course).

**********************************************************************************************************/



var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);