$(document).ready(function(){
  $(".menu_p").hover(function(){
    $(this).css("color","#50cbbe")
});
window.onscroll = function() {
if ($(window).scrollTop() > 1) {
$('.why_we').animate({opacity: 1, left:0}, 1000);
}
if ($(window).scrollTop() > 500) {
$('.main_slider').animate({opacity: 1, top:0}, 1000);
}
if ($(window).scrollTop() > 1000) {
$('.portfolio_content_1').animate({left:0}, 1000);
}
if ($(window).scrollTop() > 1000) {
$('.portfolio_content_2').animate({right:0}, 1000);
}
if ($(window).scrollTop() > 2200) {
$('.value_box').animate({opacity: 1, width:270}, 1000);}
if ($(window).scrollTop() > 2200) {
$('.value_box_2').animate({opacity: 1,top:0}, 1000);
}
if ($(window).scrollTop() > 3000) {
$('.zayava').animate({opacity: 1,left:0}, 1000);
}
}

$(".menu_p").click(function(){
  $(this).css("border-bottom","1.5px solid #6dd1b5")
});
$(".s1").click(function() {
 $(".s1").css("border-bottom","1.5px solid #6dd1b5")
 $(".s2").css("border-bottom","none")
 $(".s3").css("border-bottom","none")
 $(".s4").css("border-bottom","none")
  });
$(".s2").click(function() {
 $(".s1").css("border-bottom","none")
 $(".s2").css("border-bottom","1.5px solid #6dd1b5")
 $(".s3").css("border-bottom","none")
 $(".s4").css("border-bottom","none")
});
$(".s3").click(function() {
 $(".s1").css("border-bottom","none")
 $(".s2").css("border-bottom","none")
 $(".s3").css("border-bottom","1.5px solid #6dd1b5")
 $(".s4").css("border-bottom","none")
});
$(".s4").click(function() {
 $(".s1").css("border-bottom","none")
 $(".s2").css("border-bottom","none")
 $(".s3").css("border-bottom","none")
 $(".s4").css("border-bottom","1.5px solid #6dd1b5")
        });

  $(".menu_p").mouseleave(function(){
    $(this).css("color","black")
          });
$(".button, .mi_button").hover(function(){
  $(this).css("background","linear-gradient(to top, #6dd1b5, #6dd1b5)")
  $(this).animate({'border-radius':30,},{duration: 200});
});
  $(".button, .mi_button").mouseleave(function(){
    $(this).css("background","linear-gradient(to top, #6dd1b5, #50cce3)")
    $(this).animate({'border-radius':0,},{duration: 200});
  });
$(".ib1").hover(function(){
  $(".i1").animate({'opacity':0,},{duration: 200});
  $(".ih1").animate({'opacity':1,},{duration: 200});
});
$(".ib2").hover(function(){
  $(".i2").animate({'opacity':0,},{duration: 200});
  $(".ih2").animate({'opacity':1,},{duration: 200});
});
$(".ib3").hover(function(){
  $(".i3").animate({'opacity':0,},{duration: 200});
  $(".ih3").animate({'opacity':1,},{duration: 200});
});
$(".ib4").hover(function(){
  $(".i4").animate({'opacity':0,},{duration: 200});
  $(".ih4").animate({'opacity':1,},{duration: 200});
});
$(".ib1").mouseleave(function(){
  $(".i1").animate({'opacity':1,},{duration: 200});
  $(".ih1").animate({'opacity':0,},{duration: 200});
});
$(".ib2").mouseleave(function(){
  $(".i2").animate({'opacity':1,},{duration: 200});
  $(".ih2").animate({'opacity':0,},{duration: 200});
});
$(".ib3").mouseleave(function(){
  $(".i3").animate({'opacity':1,},{duration: 200});
  $(".ih3").animate({'opacity':0,},{duration: 200});
});
$(".ib4").mouseleave(function(){
  $(".i4").animate({'opacity':1,},{duration: 200});
  $(".ih4").animate({'opacity':0,},{duration: 200});
});
$(".pib1").hover(function(){
  $(".pib1").animate({'opacity':0,},{duration: 200});
  $(".pih1").animate({'opacity':1,},{duration: 200});
});
$(".pib2").hover(function(){
  $(".pib2").animate({'opacity':0,},{duration: 200});
  $(".pih2").animate({'opacity':1,},{duration: 200});
});
$(".pib3").hover(function(){
  $(".pib3").animate({'opacity':0,},{duration: 200});
  $(".pih3").animate({'opacity':1,},{duration: 200});
});
$(".pib4").hover(function(){
  $(".pib4").animate({'opacity':0,},{duration: 200});
  $(".pih4").animate({'opacity':1,},{duration: 200});
});
$(".pib5").hover(function(){
  $(".pib5").animate({'opacity':0,},{duration: 200});
  $(".pih5").animate({'opacity':1,},{duration: 200});
});
$(".pib6").hover(function(){
  $(".pib6").animate({'opacity':0,},{duration: 200});
  $(".pih6").animate({'opacity':1,},{duration: 200});
});
$(".pib7").hover(function(){
  $(".pib7").animate({'opacity':0,},{duration: 200});
  $(".pih7").animate({'opacity':1,},{duration: 200});
});
$(".pib8").hover(function(){
  $(".pib8").animate({'opacity':0,},{duration: 200});
  $(".pih8").animate({'opacity':1,},{duration: 200});
});
$(".pib1").mouseleave(function(){
  $(".pib1").animate({'opacity':1,},{duration: 200});
  $(".pih1").animate({'opacity':0,},{duration: 200});
});
$(".pib2").mouseleave(function(){
  $(".pib2").animate({'opacity':1,},{duration: 200});
  $(".pih2").animate({'opacity':0,},{duration: 200});
});
$(".pib3").mouseleave(function(){
  $(".pib3").animate({'opacity':1,},{duration: 200});
  $(".pih3").animate({'opacity':0,},{duration: 200});
});
$(".pib4").mouseleave(function(){
  $(".pib4").animate({'opacity':1,},{duration: 200});
  $(".pih4").animate({'opacity':0,},{duration: 200});
});
$(".pib5").mouseleave(function(){
  $(".pib5").animate({'opacity':1,},{duration: 200});
  $(".pih5").animate({'opacity':0,},{duration: 200});
});
$(".pib6").mouseleave(function(){
  $(".pib6").animate({'opacity':1,},{duration: 200});
  $(".pih6").animate({'opacity':0,},{duration: 200});
});
$(".pib7").mouseleave(function(){
  $(".pib7").animate({'opacity':1,},{duration: 200});
  $(".pih7").animate({'opacity':0,},{duration: 200});
});
$(".pib8").mouseleave(function(){
  $(".pib8").animate({'opacity':1,},{duration: 200});
  $(".pih8").animate({'opacity':0,},{duration: 200});
});
$(".value_box_2_3").hover(function(){
  $(this).css("background","linear-gradient(to top, #6dd1b5, #6dd1b5)") });
$(".value_box_2_3").mouseleave(function(){
  $(this).css("background","linear-gradient(to top, #6dd1b5, #50cce3)")
});
$(".vb1").hover(function(){
  $(".vbh1, .vbb1").css("background","linear-gradient(to top, #50cce3, #6dd1b5)") });
$(".vb1").mouseleave(function(){
  $(".vbh1, .vbb1").css("background","#f1f1f3")
});
$(".vb3").hover(function(){
  $(".vbh3, .vbb3").css("background","linear-gradient(to top, #50cce3, #6dd1b5)") });
$(".vb3").mouseleave(function(){
  $(".vbh3, .vbb3").css("background","#f1f1f3")
});
})



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
            refSize = Math.min(refSize, 1900);
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
