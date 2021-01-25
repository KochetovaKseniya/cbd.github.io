//= template/partial.js

$(function() {
    $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop != 0)
    $('#navbarNavAltMarkup').stop().animate({'background-color':'white'},400);
    else
    $('#navbarNavAltMarkup').stop().animate({'background-color':'white'},400);
    });
    
    $('navbarNavAltMarkup').hover(
    function (e) {
    var scrollTop = $(window).scrosllTop();
    if(scrollTop != 0){
    $('#navbarNavAltMarkup').stop().animate({'background-color':'white'},400);
    }
    },
    function (e) {
    var scrollTop = $(window).scrollTop();
    if(scrollTop != 0){
    $('#navbarNavAltMarkup').stop().animate({'background-color':'white'},400);
    }
    }
    );
});