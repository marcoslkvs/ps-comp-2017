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