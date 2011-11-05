$(document).ready(function() {

	/* Thanks Turshija (www.turshija.com) for his help on this project. */
	
	/* gallery */
	$("#gallery li").hide();
	$(".selected").show();
	var animating = 0;

		
	/* brojanje */
	var ukupno = $("ul#gallery").children("li").length;
	var trenutni = 1;
	$("#stat").text(trenutni+"/"+ukupno);
	
	
	/* next button */
	$("#gallery .next").click(function(){

		var $li = $(this).parent().find("li");
	
		if (animating) return false;
		animating = 1;
		trenutni++;
		if(trenutni > ukupno) trenutni = 1;
		$("#stat").text(trenutni+"/"+ukupno);
		
		/* if is the last image */
		
		if($li.last().hasClass("selected")){
			$(".selected").fadeOut("slow",function() {
				$li.first().fadeIn("slow");
				animating = 0;
			});	
			$li.first().addClass("selected");
			$li.last().removeClass("selected");
		}
		
		else{
			$(".selected").fadeOut("slow",function() {
				$(this).next("li").fadeIn("slow");
				animating = 0;
			});	
			$(".selected").next("li").addClass("selected");
			$(".selected").prev("li").removeClass("selected");
		}
		
	});
	
	/* prev button */
	$("#gallery .prev").click(function(){

		var $li = $(this).parent().find("li");
		
		if (animating) return false;
		animating = 1;
		trenutni--;
		if(trenutni < 1) trenutni = ukupno;
		$("#stat").text(trenutni+"/"+ukupno);
		
		if($li.first().hasClass("selected")){
			$(".selected").fadeOut("slow",function() {
				$("li").last().fadeIn("slow");
				animating = 0;
			});	
			$li.last().addClass("selected");
			$li.first().removeClass("selected");
		}
		
		else{
			$(".selected").fadeOut("slow",function() {
				$(this).prev("li").fadeIn("slow");
				animating = 0;
			});	
			$(".selected").prev("li").addClass("selected");
			$(".selected").next("li").removeClass("selected");
		}
		
	});	
	
});