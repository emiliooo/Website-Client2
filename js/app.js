$( document ).ready(function() {

	$( ".hamburger" ).click(function() {

	if(  $(".menu").hasClass("expand") ) {
		$(".menu").hide(500);
		$('.menu').removeClass('expand')
	}else{
		$(".menu").show(500);
		$('.menu').addClass('expand')
	}
	});
});


var myVar;

 function myFunction(){
 		  myVar = setTimeout(alertFunc, 1000);
 		  document.getElementById("section4").style.height = "1864px";
}

function alertFunc (){
		var img = document.createElement("img");
		img.src="http://lorempixel.com/550/400/food/";
		var src2 = document.getElementById("one");
		img.className+="img-responsive";
		src2.appendChild(img);
		
		var img = document.createElement("img");
		img.src = "http://lorempixel.com/550/400/nature/";
		var src = document.getElementById("two");
		img.className += "img-responsive";
		src.appendChild(img);
}

