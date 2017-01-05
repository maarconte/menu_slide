$( ".btn-burger" ).click(function() {
  $( this ).toggleClass( "active" );
  $(".navigation").toggleClass("opened");
});