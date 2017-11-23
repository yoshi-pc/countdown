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
