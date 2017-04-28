$(document).ready(function(){
  $(".menu_text").hover(function(){
    $(this).css("border-bottom","3px solid blue")
});
  $(".menu_text").mouseleave(function(){
    $(this).css("border-bottom","none")
          });
})
