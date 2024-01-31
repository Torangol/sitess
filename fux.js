$('.open_popup').click(function() {
    $('.popup_bg').fadeIn(600);
});
$('.close_popup').click(function() {
    $('.popup_bg').fadeOut(600);
});
$('.open_popup1').click(function() {
    $('.popup_bg1').fadeIn(600);
});
$('.close_popup1').click(function() {
    $('.popup_bg1').fadeOut(600);
});

$('.open_popup2').click(function() {
    $('.popup_bg2').fadeIn(600);
});
$('.close_popup2').click(function() {
    $('.popup_bg2').fadeOut(600);
});

$(document).ready(function(){
    $(".menu_link1").on("click", function() {
        $('html').animate({scrollTop: $("#sagg").offset().top}, 500);
    });
});

$(document).ready(function(){
    $(".menu_link").on("click", function() {
        $('html').animate({scrollTop: $("#lineww").offset().top}, 500);
    });
});

