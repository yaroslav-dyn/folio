
/*
include parts like: //= part.js
*/




$('.dropdown').hover(function(){
  $('.dropdown-toggle', this).trigger('click');
});