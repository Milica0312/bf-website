$('.navicon').click( function() {
  $(this).toggleClass('navicon--toggle');
})

$('.navicon').click( function() {
  $('#menu').toggleClass('navshow');
  //$( "#menu" ).slideToggle( "slow", function() {
    // Animation complete.
 // });
});

$('.closeart').click( function() {
  $('.' + $(this).data('rel')).removeClass('showartistdetail', 3000, "easeOutSine");
});

$('.oneartist').click( function() {
   $('.placeforimg').toggleClass('zoomoutheader');
  $('#' + $(this).data('rel')).toggleClass('showartistdetail', 2000, "easeOutSine");
//$('.artistdetail').toggleClass('showartistdetail', 2000, "easeOutSine");
});
$('.oneartist').click( function() {
  $('.overlaydiv').addClass('overlaydivshow');
  //$( "#menu" ).slideToggle( "slow", function() {
    // Animation complete.
 // });
});
$('.closeart').click( function() {
  $('.overlaydiv').removeClass('overlaydivshow');
  //$( "#menu" ).slideToggle( "slow", function() {
    // Animation complete.
 // });
});
