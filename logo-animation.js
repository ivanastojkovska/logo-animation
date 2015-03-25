$( document ).ready(function() {
	$( "div .brand img" ).on("click", function(){
		$("div .brand img").animate({outlineWidth: "10px"});
		$("div .brand img").animate({outlineWidth: "1px"});
	});
	$( "div .brand img" ).on("mouseenter", function(){
		$("div .brand img").addclass("animated wobble");
	});
	
	$( "div .brand img" ).on("mouseleave", function(){
		$("div .brand img").removeclass("animated wobble");
	});
	
});
