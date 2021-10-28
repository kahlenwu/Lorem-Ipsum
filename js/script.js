$(function(){
  $('.menu-icon').on('click', function(event){
    $(this).toggleClass('active');
    $('.menu').fadeToggle();
    event.preventDefault();
  });
})