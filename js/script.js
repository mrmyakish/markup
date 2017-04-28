$(document).ready(function(){
  $(".Phone").hover(function(){
    $(".Phone_img").css("visibility","visible")
    $( ".Phone_img" ).animate({
      opacity: 1   })
});
$(".Phone").mouseleave(function(){
  $(".Phone_img").css("visibility","hidden")
  $( ".Phone_img" ).animate({
    opacity: 0   })
});
$(".Pokeman").hover(function(){
  $(".Pokeman_img").css("visibility","visible")
  $( ".Pokeman_img" ).animate({
    opacity: 1   })
});
$(".Pokeman").mouseleave(function(){
  $(".Pokeman_img").css("visibility","hidden")
  $( ".Pokeman_img" ).animate({
    opacity: 0   })
  });
})
