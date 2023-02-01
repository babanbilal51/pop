jQuery(document).ready(function($){
  $(window).on('beforeunload', function(){
    $(".bts-popup").addClass('is-visible');
    return "Are you sure you want to leave?";
  });

  //close popup
  $('.bts-popup').on('click', function(event){
    if( $(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup') ) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
    if(event.which=='27'){
      $('.bts-popup').removeClass('is-visible');
    }
  });
});
