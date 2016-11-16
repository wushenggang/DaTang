$(document).ready(function(){
	$("#second-li").click(function(){
	if("$('#second-ul-1').css('display')=='none'")
		{$("#second-li").css("background",
			"url(images/home-part-images/list_02.jpg) no-repeat 95%");
		}
	else
		{$("#second-li").css("background",
			"url(images/home-part-images/list_01.jpg) no-repeat 95%");
		}
	$("#second-ul-1").toggle();

	});
	
	$("#third-li").click(function(){
		$("#second-ul-2").toggle();
	});
	$("#fourth-li").click(function(){
		$("#second-ul-3").toggle();
	});
	$("#fifth-li").click(function(){
		$("#second-ul-4").toggle();
	});
	$("#second-ul-1 li").click(function(){
		$(this).addClass("nav-left-hover");
		$("#second-ul-1 li").not(this).removeClass("nav-left-hover");
		$("#second-ul-2 li").removeClass("nav-left-hover");
		$("#second-ul-3 li").removeClass("nav-left-hover");
		$("#second-ul-4 li").removeClass("nav-left-hover");
	});
	$("#second-ul-2 li").click(function(){
		$(this).addClass("nav-left-hover");
		$("#second-ul-2 li").not(this).removeClass("nav-left-hover");
		$("#second-ul-1 li").removeClass("nav-left-hover");
		$("#second-ul-3 li").removeClass("nav-left-hover");
		$("#second-ul-4 li").removeClass("nav-left-hover");
	});
	$("#second-ul-3 li").click(function(){
		$(this).addClass("nav-left-hover");
		$("#second-ul-3 li").not(this).removeClass("nav-left-hover");
		$("#second-ul-2 li").removeClass("nav-left-hover");
		$("#second-ul-1 li").removeClass("nav-left-hover");
		$("#second-ul-4 li").removeClass("nav-left-hover");
	});
	$("#second-ul-4 li").click(function(){
		$(this).addClass("nav-left-hover");
		$("#second-ul-4 li").not(this).removeClass("nav-left-hover");
		$("#second-ul-2 li").removeClass("nav-left-hover");
		$("#second-ul-3 li").removeClass("nav-left-hover");
		$("#second-ul-1 li").removeClass("nav-left-hover");
	});
	
});
