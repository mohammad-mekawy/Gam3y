$(document).ready(function() {


    var myUpButton = $("div.up");
    $(window).scrollTop() > 120 ? myUpButton.fadeIn() : myUpButton.fadeOut();
    $(window).on("scroll", function() {
        $(window).scrollTop() > 120 ? myUpButton.fadeIn() : myUpButton.fadeOut();
    });

    myUpButton.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});