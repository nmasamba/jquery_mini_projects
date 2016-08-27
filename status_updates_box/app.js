
/*********************************************************************************************************

Author: Nyasha Pride Masamba
Based on the lessons from Codecademy at https://www.codecademy.com/en/skills/make-an-interactive-website

This application utilises jQuery code together with some HTML and CSS to build a status update box 
similar to the likes seen on social media sites such as Facebook and Twitter. Functionality includes:
* A box into which a user can type messages and post status updates
* A counter that keeps track of the number of characters left
* A 'Post' button that is only enabled when there is a message that has 140 characters or less

**********************************************************************************************************/

var main = function() {
$('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text(140);
    $('.btn').addClass('disabled');
    });

$('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
    
    if (charactersLeft < 0) {
        $('.btn').addClass('disabled');
    }
    else if (charactersLeft === 140) {
        $('.btn').addClass('disabled');
    }
    else {$('.btn').removeClass('disabled');}
    
    });    
    
$('.btn').addClass('disabled');
};

$(document).ready(main);