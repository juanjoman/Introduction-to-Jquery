$("nav#botonesGrupo ul li").click(function() {
  $("#grupos").animate({height: 0}, 500, "easeInBack");
  $("#grupos").animate({width: 0}, 500, "easeInBack");
  $("#grupos").animate({height: 400}, 400, "easeOutBounce");
  $("#grupos").animate({width: 770}, 700, "easeOutBounce");

  var enlace = $(this).attr("enlace");
  $("#grupos img").hide(300);
  $(enlace).delay(1000).show(100);
});
