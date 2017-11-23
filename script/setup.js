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
    var goal = new Date(2017, 10, 23, 22, 28, 0);
    var diff = goal.getTime() - now.getTime();
    if (diff < 0) {
      diff = Math.abs(diff);
      $("#days, #hours, #minutes, #seconds").css({"border":"solid rgba(0,160,234,.7)"});
    }
    var left_days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var left_hours = Math.floor((diff - (left_days * 24 * 60 * 60 * 1000 )) / (1000 * 60 * 60));
    var left_minutes = Math.floor((diff - (left_days * 24 * 60 * 60 * 1000) - (left_hours * 60 * 60 * 1000)) / (1000 * 60));
    var left_seconds = Math.floor((diff - (left_days * 24 * 60 * 60 * 1000) - (left_hours * 60 * 60 * 1000) - (left_minutes * 60 * 1000)) / 1000);
    if (left_days === 0) {
      $("#days").fadeOut("slow");
      if (left_hours === 0) {
        $("#hours").fadeOut("slow");
        if(left_minutes === 0) {
          $("#minutes").fadeOut("slow");
        } else {
          $("#minutes").fadeIn("slow");
        }
      } else {
        $("#hours").fadeIn("slow");
      }
    } else {
      $("#days").fadeIn("slow");
    }

    $(".num_days").text(left_days);
    $(".num_hours").text(left_hours);
    $(".num_minutes").text(left_minutes);
    $(".num_seconds").text(left_seconds);
  },1000);
});
