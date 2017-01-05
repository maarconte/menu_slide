$( ".btn-burger" ).click(function() {
  $( ".menu-slide").animate({
                width: "toggle"
            });
});

// Tab

$(document).ready(function() {

  (function($) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tab ul.tabs li a').click(function(g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('li').index();

      tab.find('ul.tabs li').removeClass('current');
      $(this).closest('li').addClass('current');
      tab.find('.tab_content').find('.tabs_item').not('.tabs_item:eq(' + index + ')').slideUp().removeClass("active_tab_content");
      tab.find('.tab_content').find('.tabs_item:eq(' + index + ')').slideDown().addClass("active_tab_content");

      g.preventDefault();
    });
  })(jQuery);

});