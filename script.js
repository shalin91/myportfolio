$(document).ready(function(){

  $('#menu').click(function (){
      $(this).toggleClass('bi-x');
      $('header').toggleClass('toggle');
      
      });


    
   $(window).on('scroll load',function(){
       $('#menu').removeClass('bi-x');
       $('header').removeClass('toggle');
   });

//    smooth scrolling
