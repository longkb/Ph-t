/* ===============================================
Date : 2015.00.00 ~ 2015.00.00
Description : share javascript
=============================================== */
function $windowCheck(){
	var phoneArray = new Array('samsung-', 'sch-', 'shw-', 'sph-', 'sgh-', 'lg-', 'canu', 'im-', 'ev-', 'iphone', 'nokia', 'blackberry', 'lgtelecom', 'natebrowser', 'sinyericsson', 'mobile', 'android', 'ipad');
	var mobileGubn = "W";
	for(var i = 0; i < phoneArray.length; i++){
		if(navigator.userAgent.toLowerCase().indexOf(phoneArray[i]) > -1){
			mobileGubn = "M";
			break;
		}
	}
	
	if(navigator.userAgent.toLowerCase().indexOf('ipad') > -1 || (navigator.userAgent.toLowerCase().indexOf('android') > -1 && navigator.userAgent.toLowerCase().indexOf('mobile') == -1)){
		mobileGubn = "T";
	}
	
	var galaxyTab = new Array('shw-');
	for(var j =0; j < galaxyTab.length; j++){
		if(navigator.userAgent.toLowerCase().indexOf(galaxyTab[j]) > -1){
			mobileGubn = "T";
			break;
		}
	}
	
	if(mobileGubn == "W"){
		$("#gubnHeader").addClass("web");
		$("#container").addClass("web");
	}else if(mobileGubn == "M"){
		$("#gubnHeader").addClass("mobile");
		$("#container").addClass("mobile");
	}else if(mobileGubn == "T"){
		$("#gubnHeader").addClass("tablet");
		$("#container").addClass("tablet");
	}
}


function $tabMenu(){
	var $tab = $('.tab-menu > li > a');
	$tab.click(function(){
		var idx = $(this).parent().index();
		$(this).parent().addClass('on').siblings().removeClass('on');
		$('.tab-content').hide().eq(idx).show();
	});
}

function $searchList(){
	var $searchBtn = $('.search-box > button');
	$searchBtn.click(function(){
		$(this).parent().next('.search-list').show();
		$boxH1();
	});

	$(window).resize(function() {
		$boxH1();
		$boxH2();
	});

	function $boxH1(){
		if($(window).width() > 1023 ){
			$searchBtn.parent().next('.search-list').css('height',$(window).height() - 228);
		} else{
			$searchBtn.parent().next('.search-list').css('height', $(window).height() - 208);
		}
	}

	function $boxH2(){
		if($(window).width() > 1023 ){
			$findBtn.closest('.tab-content').children('.search-list, .content-way').css('height',$(window).height() - 385);
		} else{
			$findBtn.closest('.tab-content').children('.search-list, .content-way').css('height', $(window).height() - 365);
		}
	}


	var $findBtn = $('.search-point > button.search');
	$findBtn.click(function(){
		$boxH2();
		$('.content-way').hide();
		$(this).closest('.tab-content').find('.search-list.result').show();
	});

	var $transWay = $('.tab-way > li > a');
	$transWay.click(function(){
		$boxH2();
		$('.search-list.result').hide();
		var idx = $(this).parent().index();
		$(this).parent().addClass('on').siblings().removeClass('on');
		$('.content-way').hide().eq(idx).show();
	});

	var $transDetail = $('.content-way > ul > li > p > button.detail');
	$transDetail.click(function(){
		if($(this).hasClass('up')){
			$(this).removeClass('up');
			$(this).text('See Detail');
			$(this).parent().next('.detail-box').slideUp();
		} else{
			$(this).addClass('up');
			$(this).text('Closed');
			$(this).parent().next('.detail-box').slideDown();
		}
	});

}

function $aside(){
	var $lnb = $('.lnb-area');
	var $btnWide = $('.lnb-area > .lnb-button');
	var $mClosed = $('.lnb-area > .mobile-closed > button');
	var $mOpen = $('header > .mobile-menu-icon');
	$mClosed.click(function(){
		$lnb.stop().animate({left: -286},800);
	});
	$mOpen.click(function(){
		$lnb.stop().animate({left: 0},800);
	});
	$btnWide.click(function(){
		$lnb.toggleClass('hide')
		$(this).toggleClass('wide');
		$('.map-wrap').toggleClass('no-aside');

		$mapWidth();
		tmap.map.updateSize();
	});
}

function $asideHeight(){
	var winHeight = $(window).height() ;
	if( $(window).width() > 1023 ) {
		$('aside, .map-wrap').css('height',winHeight - 53);
	} else{
		$('aside, .map-wrap').css('height','');
	}
}

function $iconSelect(){
	var $selectBox = $('.top-area');
	var $select = $('.mobile-icon-select');
	$select.click(function(){
		if($(this).hasClass('closed')){
			$(this).removeClass('closed');
			$selectBox.stop().animate({top: -174},800);
		}else {
			$(this).addClass('closed');
			$selectBox.stop().animate({top: 0},800);
		}
	});
}

function $mapWidth(){
	$mapWrap = $('.map-wrap #mapDiv');

	if( !($('.map-wrap').hasClass('no-aside')) && $(window).width() > 1023) {
		var newW = $(window).width() - ($('.lnb-area').width()+1);
		$mapWrap.css('width',newW);
	} else {
		$mapWrap.css('width',$(window).width());
	}
	//tmap.map.updateSize();

}


function $mapPrint(){
	var $printBtn = $('.button-print > button');
	$printBtn.click(function(){
		window.print();
	});
}


$(document).ready(function() {
$tabMenu();
$searchList();
$asideHeight();
$iconSelect();
$aside();
$mapPrint();
$mapWidth();
$windowCheck();
});

$(window).load(function() {

});

$(window).resize(function() {
$asideHeight();
$mapWidth();

});