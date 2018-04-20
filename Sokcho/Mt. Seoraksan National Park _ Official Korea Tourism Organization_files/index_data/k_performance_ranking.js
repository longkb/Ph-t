var view_idx = 3;
var count = 0;
var timer = null;
$(document).ready(function(){
	//kpop 고정 포스터
	var li_kpop = '<li><dl class="n1"><dt><a href="http://www.kperformance.org/Goods/GoodsList.asp?Kind=KP&Sort=D&Page=1&lang=en" target="_blank">K-POP Performance</a></dt><dd class="photo2"> <a href="http://www.kperformance.org/Goods/GoodsList.asp?Kind=KP&Sort=D&Page=1" target="_blank"><img width="176" height="107" alt="K-POP Performance" src="http://tong.visitkorea.or.kr/ena/images/main/2009/imgKpop.jpg"><span class="bg2"></span></a></dd></dl></li>';
	$("#entRank > div > ul").append(li_kpop);
	$.ajax({
		   type: "get"
		  ,dataType: "xml"
		  ,url: "/common/interpark/k_performance_ranking.jsp?md=eng"
		  ,success: function(xml){
			  var index=0;
		      if($(xml).find("Table").length > 0){ // null check
		         $(xml).find("Table").each(function(){ // item 수만큼 loop
		            if((index++) < view_idx-1){
		            	//var order = $(this).find("NowOrder").text();
		            	var order = index+1;
		            	var name = $(this).find("GoodsName_Global").text();
		            	var posterImage = $(this).find("PosterImage_Height").text();
		            	var url = $(this).find("GoodsURL").text();
		            	var startDate = data_fat($(this).find("StartDate").text());
		            	var endDate = 	data_fat($(this).find("EndDate").text());
		            	var html = create_ele(order, name, posterImage, url, startDate, endDate);
		            	$("#entRank > div > ul").append(html).on("mouseover","li",function(event){
		            		event.preventDefault();
		            		timer.pause();
		            		$(this).closest("ul").find("li").removeClass("on");
		            		$(this).addClass("on");
		            		count = $(this).index();
		            	}
		            	).on("mouseout","li",function(event){
		            		event.preventDefault();
		            		timer.play();
		            	});
		            }       	 
		         });
		      }
		      ranking_rolling();
		   }
		   ,error: function(){ alert("xml error!!"); }
	}); 
});
function ranking_rolling(){
	$("#entRank > div > ul > li").first().addClass("on");
	timer = $.timer(function(){
		if(view_idx<=count)count=0;
		$("#entRank > div > ul > li").removeClass("on");
		$("#entRank > div > ul > li:eq("+count+")").addClass("on");
		count++;
	});
	timer.set({time:2000,autostart:true});
}
function create_ele(order, name, posterImage, url, startDate, endDate){
	var dd1 = "<dd class=\"info\">"+startDate+" ~ "+endDate+"</dd>";
	var dd2 = "<dd class=\"photo\"> <a href=\""+url+"\" target=\"_blank\"><img width=\"83\" height=\"107\" alt=\""+name+"\" src=\""+posterImage+"\"><span class=\"bg\"></span></a></dd>";
	var li = "<li><dl class=\"n"+order+"\"><dt><a href=\""+url+"\" target=\"_blank\">"+name+"</a></dt>"+dd1+dd2+"</dl></li>";
	return li;
}	
function data_fat(dataObj){
	var YYYY = dataObj.substring(0, 4);
	var MM = dataObj.substring(4, 6);
	var DD = dataObj.substring(6);
	return YYYY+"-"+MM+"-"+DD;
}