
/*********************************************************************************************************

Author: Nyasha Pride Masamba
Based on the lessons from Codecademy at https://www.codecademy.com/en/skills/make-an-interactive-website

This application will display news articles to a reader (also easily adaptable for other purposes). The 
jQuery code allows the user to interact with the app through keyboard input rather than having 
to use their mouse. Once the user clicks on any article to activate the app in the browser, they can:
* View the description of the news article 
* Press the letter 'O' (not zero) to toggle the article's contents
* Press the letter 'N' to move on to the next article

**********************************************************************************************************/

var main = function() {
    $('.article').click(function() {
        $('.article').removeClass('current');
        $('.description').hide();
        $(this).addClass('current');
        $(this).children('.description').show();
        });
        
    $(document).keypress(function(event) {
        if (event.which === 111) {
            $('.current').children('.description').toggle();   
        }
        else if (event.which === 110) {
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            
            currentArticle.removeClass('current');
            
            nextArticle.addClass('current');
        }
        });
        
};

$(document).ready(main);