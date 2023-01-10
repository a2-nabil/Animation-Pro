

//  PRELOADER JQUERY

$(window).on('load', function(){
    $('.preloader').delay(3000).fadeOut('slow');
    $('#preloader').delay(1000).fadeOut('slow');
    $('body').delay(450).css({"overflow" : "visible"})
});

// COUNTDOWN JS 

var CountDownDate = new Date('Jan 14, 2023 10:00:00').getTime();


var countDownFunction = setInterval(function(){

    var currentDate = new Date().getTime();
    var dateGap = CountDownDate - currentDate;
    

    var days =Math.floor(dateGap / (1000*60*60*24));
    var hour =Math.floor((dateGap % (1000*60*60*24)) /(1000*60*60));
    var minutes =Math.floor((dateGap % (1000*60*60)) /(1000*60));
    var seconds =Math.floor((dateGap % (1000*60)) / 1000);


    document.getElementById('days').innerHTML = days + 'd ';
    document.getElementById('hour').innerHTML = hour + 'h ';
    document.getElementById('minutes').innerHTML = minutes + 'm ';
    document.getElementById('seconds').innerHTML = seconds + 's ';

},1000);

// BACK TO TOP JQUERY 

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});