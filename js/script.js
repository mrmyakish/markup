$(document).ready(function(){
$(".Phone").hover(function(){
  $( ".Phone_img" ).animate({opacity: 1})
  $( ".Order_img" ).animate({opacity: 0})
  $( ".Pokeman_img" ).animate({opacity: 0})
});
$(".Phone").mouseleave(function(){
  $( ".Phone_img" ).animate({opacity: 0})
  $( ".Pokeman_img" ).animate({opacity: 0})
  $( ".Order_img" ).animate({opacity: 0})

});
$(".Pokeman").hover(function(){
  $( ".Pokeman_img").animate({opacity: 1})
  $( ".Phone_img" ).animate({opacity: 0})
  $( ".Order_img" ).animate({opacity: 0})

});
$(".Pokeman").mouseleave(function(){
  $( ".Pokeman_img" ).animate({opacity: 0})
  $( ".Phone_img" ).animate({opacity: 0})
  $( ".Order_img" ).animate({opacity: 0})
  });
$(".Order").hover(function(){
  $( ".Order_img" ).animate({opacity: 1})
  $( ".Phone_img" ).animate({opacity: 0})
});
$(".Order").mouseleave(function(){
  $( ".Order_img" ).animate({opacity: 0})
  $( ".Phone_img" ).animate({opacity: 0})
    });
})
