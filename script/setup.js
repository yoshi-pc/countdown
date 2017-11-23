$(document).on('ready', function(){
  $('.crosscover').crosscover({
    inClass: 'fade-in',
    outClass: 'fade-out',
    interval: 7000,
    startIndex: 0,
    autoPlay: true,
    dotsNav: true,
    controller: false
  });
});

$(function() {
  setInterval(function() {
    var now = new Date();
    var goal = new Date(2017,11,9,18,0,0);
    var diff = goal.getTime() - now.getTime();
    var left_days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var left_hours = Math.floor((diff - (left_days * 24 * 60 * 60 * 1000 )) / (1000 * 60 * 60));
    var left_minutes = Math.floor((diff - (left_days * 24 * 60 * 60 * 1000) - (left_hours * 60 * 60 * 1000)) / (1000 * 60));
    var left_seconds = Math.floor((diff - (left_days * 24 * 60 * 60 * 1000) - (left_hours * 60 * 60 * 1000) - (left_minutes * 60 * 1000)) / 1000);
    $(".num_days").text(left_days);
    $(".num_hours").text(left_hours);
    $(".num_minutes").text(left_minutes);
    $(".num_seconds").text(left_seconds);
  },1000);
});
