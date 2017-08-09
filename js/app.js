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

	$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
		$('.add_menu').addClass('added');
    } else {
        $('.add_menu').removeClass('added');
    }
	});

		$("#onet").click(function() {
			$('html, body').animate({
		scrollTop: $("#section1").offset().top
			}, 2000);
	    $("#menuID").css("display","none")
	});

		$("#twot").click(function() {
		$('html, body').animate({
			scrollTop: $("#section2").offset().top
		}, 2000);
		$("#menuID").css("display","none")
	});

		$("#three").click(function() {
		$('html, body').animate({
			scrollTop: $("#section3").offset().top - 20 
		}, 2000);
		$("#menuID").css("display","none")
	});

		$("#five").click(function() {
		$('html, body').animate({
			scrollTop: $("#section4").offset().top - 100
		}, 2000);
		$("#menuID").css("display","none")
	});
		$("#six").click(function() {
		$('html, body').animate({
			scrollTop: $("#section6").offset().top - 40
		}, 2000);
		$("#menuID").css("display","none")
	});
		$("#seven").click(function() {
		$('html, body').animate({
			scrollTop: $("#section7").offset().top -140
		}, 2000);
		$("#menuID").css("display","none")
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

