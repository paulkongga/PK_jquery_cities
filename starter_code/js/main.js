$(document).ready(readyFunction);
function readyFunction() {
   
 $("#submit-btn").click(userInput);

 function userInput() {
   
 	var city = $("#city-type").val();
 	$("#city-type").val("");
 	event.preventDefault();

 	if (city === "nyc" || city === "new york" || city === "new york city") {
   	$("body").addClass("nyc");
   	$("body").removeClass("sf");
   	$("body").removeClass("austin");
   	$("body").removeClass("la");
   	$("body").removeClass("sydney");
 	}

 	else if (city === "sf" || city === "san francisco" || city === "bay area") {
    $("body").addClass("sf");
    $("body").removeClass("nyc");
   	$("body").removeClass("austin");
   	$("body").removeClass("la");
   	$("body").removeClass("sydney");
  }

  else if (city === "austin" || city === "atx") {
    $("body").addClass("austin");
    $("body").removeClass("nyc");
   	$("body").removeClass("sf");
   	$("body").removeClass("la");
   	$("body").removeClass("sydney");
  } 

  else if (city === "los angeles" || city === "la" || city === "lax") {
  	$("body").addClass("la");
  	$("body").removeClass("nyc");
   	$("body").removeClass("sf");
   	$("body").removeClass("austin");
   	$("body").removeClass("sydney");
  }

  else if (city === "sydney" || city === "syd") {
  	$("body").addClass("sydney");
  	$("body").removeClass("nyc");
   	$("body").removeClass("sf");
   	$("body").removeClass("la");
   	$("body").removeClass("austin");
  }
 }
}
