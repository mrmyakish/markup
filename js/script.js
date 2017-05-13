$(document).ready(function(){
$(".milli").hover(function(){
  $( ".milli_h" ).animate({opacity: 0.8})
});
$(".milli").mouseleave(function(){
  $( ".milli_h" ).animate({opacity: 0})
});
$(".phone").hover(function(){
  $( ".phone_h" ).animate({opacity: 0.8})
});
$(".phone").mouseleave(function(){
  $( ".phone_h" ).animate({opacity: 0})
});
$(".pokeman").hover(function(){
  $( ".pokeman_h" ).animate({opacity: 0.8})
});
$(".pokeman").mouseleave(function(){
  $( ".pokeman_h" ).animate({opacity: 0})
});
})
