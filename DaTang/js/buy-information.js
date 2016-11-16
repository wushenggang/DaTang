$(document).ready(function(){
	$("#small-img-1").mouseover(function(){
		$("#big-img").attr("src","images/buy-information-images/index_1.jpg");
		$(".jqzoom").attr("href","images/buy-information-images/index_13.jpg");
		$(this).css({
			"border":"3px solid red",
			"width":"128px",
			"height":"127px"
		});
		$("#small-img-2").css("border","1px solid rgb(215,215,215)");
		$("#small-img-3").css("border","1px solid rgb(215,215,215)");
	});
	$("#small-img-2").mouseover(function(){
		$("#big-img").attr("src","images/buy-information-images/index_11.jpg");
		$(".jqzoom").attr("href","images/buy-information-images/index_14.jpg");
		$(this).css({
			"border":"3px solid red",
			"width":"128px",
			"height":"127px"
		});
		$("#small-img-1").css("border","1px solid rgb(215,215,215)");
		$("#small-img-3").css("border","1px solid rgb(215,215,215)");
	});
	$("#small-img-3").mouseover(function(){
		$("#big-img").attr("src","images/buy-information-images/index_12.jpg");
		$(".jqzoom").attr("href","images/buy-information-images/index_15.jpg");
		$(this).css({
			"border":"3px solid red",
			"width":"128px",
			"height":"127px"
		});
		$("#small-img-1").css("border","1px solid rgb(215,215,215)");
		$("#small-img-2").css("border","1px solid rgb(215,215,215)");
   });
	 $(".jqzoom").jqzoom({zoomType:"reverse",
	                zoomWidth:446,
					zoomHeight:445,
	                xOffset:20,
					yOffset:0,
					lens:true,
					title:false,
					imageOpacity:0.5
	           });
});