$(".button-collapse").sideNav();


$(".effect-scroll").on("click",function(event)
{
	event.preventDefault();
  var id = $(this).attr("href");
  $("html,body").animate(
  {
    scrollTop: $(id).offset().top 
  }, 1000);
})


$(window).scroll(function()
{
  var position_scroll = $(window).scrollTop();
  if(position_scroll >= 100 )
  {
    $("#btn-up-page-box").fadeIn();
  }
  else{
    $("#btn-up-page-box").fadeOut();
  }
});

$(document).ready(function()
{
  $("#etapa2").hide();
  var url = window.location.href;
  if(url == "http://processoseletivo.compjunior.com.br/inscription.html")
  {
    $(".optionAbout").hide();
    $(".optionInscription").hide();
    $("nav").css("background-color","#4C8FA3");
  }
  else{
    $(".optionHome").hide();
  }
})
