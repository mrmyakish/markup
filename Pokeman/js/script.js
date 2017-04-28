jssor_1_slider_init = function() {
    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };
    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1200);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
};
$(document).ready(function(){
  $(".menu_text").hover(function(){
   $(".menu_li").css("visibility","visible")
      });
  $("li").hover(function(){
   $(this).css({
     "background-color":"white",
     "color":"black"})
          });
  $(".menu_li").hover(function(){
   $(".menu_li2").css("visibility","hidden")
   $(".menu_li3").css("visibility","hidden")
              });
  $("li").mouseleave(function(){
   $(this).css({"background-color":"black","color":"white"})
          });
  $(".content").hover(function(){
   $(".menu_li").css("visibility","hidden")
   $(".menu_li2").css("visibility","hidden")
   $(".menu_li3").css("visibility","hidden")
                  });
  $(".header_logo").click(function(){
   $(".header_logo2").css("visibility","visible")
   $(".header_logo").css("visibility","hidden")
   if($(".header_logo2").css("visibility","visible")){
     $(".secret_ball").css("visibility","visible")
   }
  });
  $(".secret_ball").click(function(){
   $(".secret_chu").css("visibility","visible")
   $(".secret_ball").css("visibility","hidden")
   if($(".secret_chu").css("visibility","visible")){
     $(".secret").css("visibility","visible")
     $( ".secret" ).animate({
      left: "-=2000",
      opacity: 1   })
   }
});
$(".secret").click(function(){
 $(".secret_chu").css("visibility","hidden")
 $(".header_logo2").css("visibility","hidden")
 $(".header_logo").css("visibility","visible")
 $( ".secret" ).animate({
  left: "+=2000",
  opacity: 0   })
    })
  $(".more").hover(function(){
   $(".menu_li2").css("visibility","visible")
      });
  $(".settings").hover(function(){
   $(".menu_li3").css("visibility","visible")
      });


})
