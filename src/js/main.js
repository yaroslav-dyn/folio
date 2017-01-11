
/*
include parts like: //= part.js
*/


$(document).ready(function(){

  $('.dropdown').hover(function(){
    $('.dropdown-toggle', this).trigger('click');

  });

  $(".blog").customScrollbar();

});