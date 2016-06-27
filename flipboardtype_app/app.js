/*********************************************************************************************************

Author: Nyasha Pride Masamba
Based on the lessons from Codecademy at https://www.codecademy.com/en/skills/make-an-interactive-website

This web app is loosely based on Flipboard's news site, although there is no affiliation whatsoever. The
exercise of recreating the app was undertaken on the Codecademy site and was strictly for educational
purposes only. The app features an interactive design with a dropdown menu and a carousel that can be used
to scroll between sections on the app.

**********************************************************************************************************/

var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle();
        });    
        
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if (nextSlide.length == 0) {
               nextSlide = $('.slide').first();
        }
        
        if (nextDot.length == 0) {
                nextDot = $('.dot').first();   
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        });
        
    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();   
        }
        
        if (prevDot.length == 0) {
            prevDot = $('.dot').last();
        }
        
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
        });
};

$(document).ready(main);