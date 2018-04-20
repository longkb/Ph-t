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

function $gnb() {
	var $gnb = $('.gnb-area > ul');
	var $depth1 = $('.gnb-area > ul > li > a');
	var $depth2 = $('.gnb-area > ul > li > ul > li > a');
	var $mobileOpen = $('.icon-menu > .button.menu');
	var $mobileClose = $('.gnb-area > .mobile-closed');
	var $mobileAside = $('.mobile-wedget > .button.mypage')
	var $serachShow =$('.icon-menu > .button.search');
	var $mobilePlan = $('.mobile-aside > .quick-link > .planning');
	var $moblieSNS = $('.mobile-wedget > .button.share');
	var $tabletSNS = $('.top-quick > ul > li.find > a');

	$('.gnb-area').mouseleave(function(){
		if($(window).width()>1023){
			$depth1.removeClass('active');
			$depth1.next('ul').hide();
		}
	});

	$depth1.bind('mouseover focusin', function(){
		if($(window).width()>1024){
			$(this).addClass('active');
			$(this).parent().siblings().children('a').removeClass('active');
			$(this).parent().children('ul').show();
			$(this).parent().siblings().children('ul').hide();
		}
	});

	var clickHandler = function(e){
		e.preventDefault();
	}
	function $checkClick(){
		if($(window).width() > 1024){
			$depth1.unbind('click' , clickHandler);
		} else if($(window).width() == 1024){
			if($('header').hasClass('tablet')){
				$depth1.bind('click' , clickHandler);
			} else {
				$depth1.unbind('click' , clickHandler);
			}
		} else {
			$depth1.bind('click' , clickHandler);
		}
	}

	function $checkSide(){
		if($(window).width() > 767){
			if($('#layout-wrap').hasClass('m-open')){
				$mobileClose.trigger('click');
			} else if($('#layout-wrap').hasClass('a-open')){
				$('.mobile-aside > .button-closed').trigger('click');
			}
			$('.gnb-area > ul > li > ul > li').removeClass('on');
			$('.gnb-area > ul > li > ul > li > ul').hide();
		}
	}
	$checkClick();
	$(window).resize(function(){
		$checkClick();
		$checkSide();
		if( $(window).width() > 1024 ){
			$('.top-widget').css('display','');
			$('.mobile-search-box').hide();
		}
	});

	$depth1.click(function(){
		if(!($(this).hasClass('active'))){
			$depth1.removeClass('active');
			$(this).addClass('active');
			$gnb.children().children('ul').slideUp('fast');
			$(this).next('ul').slideDown();
		} else {
			if($('.gnb-area').css('position') == 'fixed'){
				$(this).removeClass('active');
				$(this).next('ul').slideUp();
			}
		}
	});


	$depth2.click(function(e){
		if(!($('header').hasClass('web')) || $(window).width() <1023) {
			if(!($(this).hasClass('nobg'))){
				e.preventDefault();
				if($(this).parent().hasClass('on')){
					$(this).removeClass('active');
					$(this).parent().removeClass('on');
					$(this).next('ul').slideUp('hide');
				} else {
					$(this).addClass('active');
					$(this).parent().addClass('on').siblings().removeClass('on');
					$(this).parent().siblings().children('a').removeClass('active');
					$(this).parent().siblings().find('ul').slideUp();
					$(this).next('ul').slideDown('slow');
				}
			} else {
				$(this).parent().toggleClass('on').siblings().removeClass('on');
				$(this).parent().siblings().find('ul').hide();
			}
		} else {
			//web moving
		}
	});

	$mobileOpen.click(function(){
		function $gnbScroll(){
			var max = $(window).height() -50;
			if($(window).width() > 767){
				$gnb.css('max-height','');
				$gnb.css('overflow-y','');
			} else {
				$gnb.css('max-height',max);
				$gnb.css('overflow-y','auto');
			}
		}
		$('#layout-wrap').animate({marginLeft: "270px"}, 500).addClass('m-open');
		$('.mobile-mask').show();
		$('.gnb-area').show().animate({left: "0"}, 500);
		$gnbScroll();
		$(window).resize(function() {
			$gnbScroll();
		});
		$depth2.each(function(){
			var size = $(this).parent().find('li').size();
			if( size == 0) {
				$(this).addClass('nobg');
			}
		});
		$depth2.next('ul').hide();
	});
	$mobileClose.click(function(){
		$('#layout-wrap').show().animate({marginLeft: "0"}, 500).removeClass('m-open');
		$('.mobile-mask').hide();
		$('.gnb-area').show().animate({left: "-270px"}, 500);
	});
	$mobileAside.click(function(){
		$('#layout-wrap').animate({marginLeft: "-270px"}, 500).addClass('a-open');
		$('.mobile-mask').show();
		$('.mobile-aside').show().animate({right: "0"}, 500);
	});

	$moblieSNS.click(function(){
		$('.top-widget').toggle();
	});

	$tabletSNS.click(function(){
		$('.top-widget').toggle();
	});

	$('.mobile-aside > .button-closed').click(function(){
		$('#layout-wrap').animate({marginLeft: "0"}, 500).removeClass('a-open');
		$('.mobile-mask').hide();
		$('.mobile-aside').hide().animate({right: "-270px"}, 500);
	});

	$mobilePlan.click(function(){
		$('.mobile-aside > .button-closed').trigger('click');
		$('header > .top-aside').find('.planning').trigger('click');
	});

	$('.top-quick > ul > li.planning > a').click(function(){
		$('header > .top-aside').find('.planning').trigger('click');
	});

	$serachShow.click(function(){
		$depth1.removeClass('active');
		$('.gnb-area ul>li>ul').hide();
		$('.mobile-search-box').show();
	});
	$('.mobile-search-box > .button-closed').click(function(){
		$(this).parent().hide();
	});
}

function $gnbGuide(){
	var $depth1 = $('.gnb-area > ul > li > a');
	if($(window).width() > 1023 ) {
		$depth1.each(function(){
			$depth1.css('min-width','');
			var w1 = $(this).parent().width();
			var w2 = $(this).next('ul').width();
			if( w1 > w2){
				$(this).next('ul').css('min-width',w1);
			} else{
				$(this).next('ul').css('min-width',w2);
			}
		});
	}
}

function $lnbLine() {
	$('.lnb-area').css('height','');
	var lnbHeight = $('.lnb-area').height();
	var conHeight = $('#contents').height() + 110;
	if( $(window).width() > 1023){
		if(conHeight > lnbHeight ){
			$('.lnb-area').css('height', conHeight);
		} else {
			$('.lnb-area').css('height', lnbHeight);
		}
	}
}

function $lnb() {
	var $lnb = $('.lnb-area > ul');
	var $dapth1 = $('.lnb-area > ul > li > a.menu');
	var $dapth1Toggle = $('.lnb-area > ul > li > a.toggle');
	var $dapth2 = $('.lnb-area > ul > li > ul > li > a');
	var $dapth3 = $('.lnb-area > ul > li > ul > li > ul');
	var $pageNavi = $('.page-location > span');
	$dapth1.each(function(){
		var size = $(this).parent().find('li').size();
		if (size == 0){
			$(this).next('.toggle').hide();
		}
		$PageOn();
		if(!($(this).parent().children('ul').hasClass('selected'))){
			$(this).parent().children('ul').hide();
		} else{
			$(this).parent().addClass('on');
		}

	});
	$dapth2.each(function(){
		var size = $(this).parent().find('li').size();
		if (size == 0){
			$(this).addClass('nobg');
		}
		$(this).next('ul').hide();
	});
	$dapth1.click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		$(this).parent().children('ul').slideDown('slow');
		$(this).parent().siblings().find('ul').slideUp('slow');
		$(this).next('.toggle').text('closed sub-menu');
	});
	$dapth1Toggle.click(function(){
		if($(this).parent('li').hasClass('on')){
			$(this).text('open sub-menu');
			$(this).parent().removeClass('on');
			$(this).next('ul').slideUp('slow');
		}else {
			$(this).text('closed sub-menu');
			$(this).parent().addClass('on').siblings().removeClass('on');
			$(this).next('ul').slideDown('slow');
			$(this).parent().siblings().find('ul').slideUp('slow');
		}
	});
	$dapth2.click(function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
	});
	$dapth2.bind('mouseover focusin', function() { 
		$dapth2.removeClass('active');
		$(this).addClass('active');
		$(this).next('ul').show();
		$(this).parent().siblings().find('ul').hide();
	}); 

	$dapth3.bind('mouseleave', function() { 
		$(this).parent().find('a').removeClass('active');
		$(this).hide();
	}); 


	function $PageOn(){
		var depN = $('.page-location').find('a').size();
		var num;
		$('.lnb-area span').each(function(){
			if($(this).text() == $pageNavi.text()){
				if (depN == 3){
					var $dep2text = $(this).closest('ul').prev().prev().text();
					var $dep2Navi = $('.page-location > a').eq(2).text();
					if($dep2text == $dep2Navi){
						$(this).parent().addClass('active');
						$(this).closest('ul').addClass('selected');
					}
				} else if(depN == 4){
					var $step = $(this).closest('ul');
					$step.prev('a').addClass('active');
					$step.parent().parent().addClass('selected');
				} else if(depN == 2){
					$(this).parent().parent().addClass('on');
					if($(this).parent().parent().find('ul').size() > 0){
						$(this).parent().parent().find('ul').addClass('on').show();
					}
				}
			}
		});
	}
}

function $ratingStar() {
	var $star = $('.rate-vote .vote > button');
	$star.hover(function(){
		$(this).parent().find('button').removeClass('active on').text('☆');
		$(this).addClass('active').text('★').prevAll('button').addClass('active').text('★');
	}, function(){
		$(this).parent().find('button').removeClass('active');
		$(this).parent().find('button.current').addClass('on').text('★').prevAll().addClass('on').text('★');
	});
	$star.click(function(){
		$(this).parent().find('button').removeClass('active on').text('☆');
		$(this).parent().find('button').removeClass('current');
		$(this).addClass('current on').text('★').prevAll('button').addClass('on').text('★');
	});
}

function $blogListClick(){
	$blogList = $('.blog-list > ul > li');
	$blogList.click(function(){
		if(!$(this).hasClass('nodata')){
			location.href = $(this).attr('url');
		}
	});
	$blogList.keydown(function(){
		if(!$(this).hasClass('nodata')){
			if (event.keyCode == 13) {
				location.href = $(this).attr('url');
			}
		}
	});
}

function $bbsNodata(){
	var $bbs = $('.board-list > table');
	var col = $('.board-list > table > thead> tr > th:visible').length;
	
	$bbs.find('.nodata').children('td').attr('colspan',col);
}

function $bbsSearchInput(){
	var $check = $('.board-search');
	var $input = $('.board-search').find('input[type=text]');
	if( $check.parent().hasClass('map') || $check.parent().hasClass('filter-area') || $(window).width() < 736){
		$input.each(function(){
			var inputW = $(this).closest('section').find('.board-search').width() - 36;
			$(this).css('width', inputW);
		});
	} else {
		$input.css('width', 150);
	}
}

function $listPrev(){
	var $linkWidth = $('.board-side-list > li > a');
	var Lwidth = $('.board-side-list > li ').width() - 100;
	if($(window).width() < 736){
		$linkWidth.css('max-width', Lwidth);
	} else {
		$linkWidth.css('max-width', '462px');
	}
}

function $tabMenu(){
	var $tab = $('.tab-menu > li > a');
	$tab.click(function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().addClass('on').siblings().removeClass('on');
			var idx = $(this).parent().index();
			if($(window).width() > 736){
				$('#contents').find('.tab-content').hide().eq(idx).show();
				$lnbLine();
			} else {
				$('#contents').find('.tab-content').hide().eq(idx).slideDown();
				$('html,body').animate({scrollTop: $('.tab-content').eq(idx).offset().top - 38}, 800);
			}
		}
	});
}

function $tabWidth(){
	var $tabInner = $('.tab-menu.inner');
	var $tabLink = $('.tab-menu.inner > li > a');
	if($(window).width() > 736){
		total = $tabInner.children('li').size();
		widthP = parseInt($tabInner.width() / total) - 2;
		$tabLink.css('width', widthP);
		$tabLink.each(function(){
			var idx=$(this).parent('li').index();
			var leftP = idx * (widthP + 2)  ;
			$(this).css('left', leftP);
		});
	} else {
		$tabLink.css('width', 'auto');
	}

	var $tabSort = $('.tab-menu.sort');
	if(!$tabSort.parent().hasClass('category-area')){
		if($(window).width() > 736){
			$tabSort.children('li').css('width', '');
		} else {
			if($(window).width() > $tabSort.width()){
				var total = $tabSort.find('li').size();
				var width = ($tabSort.width() - (total + 1) ) / 3;
				$tabSort.children('li').css('width', width);
			}
		}
	}
}

function $dataPickerM(){
	var $input = $('.date-choice-area .search-box').find('input[type=text]');
	if (!$('.date-choice-area').hasClass('event')){
		var baseW =160;
	} else {
		var baseW =172;
	}
	if($(window).width() > 768){
		$input.css('width', baseW);
	} else {
		$input.css('width', '');
		
	}
}

function $maskSize(){
	$mask = $('.mask');
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	$mask.css({'width':maskWidth,'height':maskHeight});
}

function $modalSize(){
	$modal = $('.modal.active');
	if($modal.width() > $(window).width()){
		$modal.css('width', $(window).width()-4 );
		$modal.css('left', 0);
	}else{
		var left = Math.max(0, (($(window).width() - $modal.outerWidth()) / 2) + $(window).scrollLeft());
		$modal.css('left', left);
		$modal.css('width', '');
	}
	if ($modal.height() > $(window).height() ){
		$modal.find('.content-area').addClass('scroll');
		$modal.find('.content-area').css('height',$(window).height() - 104);
		$modal.css('top', 20);
	} else {
		var top = Math.max(0, (($(window).height() - $modal.outerHeight()) / 2)) ;
		$modal.find('.content-area').removeClass('scroll');
		$modal.find('.content-area').css('height','');
		$modal.css('top',top);
	}
}

function $modalOpen(){
	var $modal = $('.modal-button');
	$modal.click(function(){
		$('.modal').removeClass('active');
		$('.content-area').removeClass('scroll');
		$('.content-area').css('height','');
		var id = $(this).attr('href');
		$(id).addClass('active');
		$maskSize();
		$mask.show();
		$modalSize();
		$(id).fadeIn("fast"); 
		$(id).find('.title-area > h1').css('max-width',$(id).children('.content-area').width() -60 );
	});
}

function $modalClose(){
	$('.mask').click(function(){
		$(this).hide();
		$('.modal').hide();
	});
	$('.modal > .closed-button').click(function(){
		$(this).parent().hide();
		$('.mask').hide();

	});
}

function $galleryClass(){
	$('.gallery-list > ul').find('li').removeClass('row-first');
	if( $(window).width()>1023 ){
		$('.gallery-list > ul > li:nth-child(4n+1)').addClass('row-first');


	} else if( $(window).width() < 1023 && $(window).width() > 767){
		$('.gallery-list > ul > li:nth-child(3n+1)').addClass('row-first');
	} else if($(window).width() < 768 ){}
	$galleryWidth();
	
}

function $galleryWidth(){
	var $imgW = $('.gallery-list > ul > li');

	if($('.gallery-list > ul').hasClass('drama')) {
		if( $(window).width()>1023 ){
			$imgW.css('width', 165);
			$imgW.find('.thumnails').children('img').css('height', '76px')
		} else if( $(window).width() < 1023 && $(window).width() > 767){
			var widthAll =$(window).width() - 100;
			var imgSize = parseInt( (($(window).width() - 100) / 3) ) - 3;
			$imgW.css('width', imgSize);
			$imgW.find('.thumnails').children('img').css('height', (imgSize*0.46));
		} else if( $(window).width() < 768 ){
			$imgW.css('width', '100'+'%');
			$imgW.find('.thumnails').children('img').css('height', '');
		}
	} else if($('.gallery-list > ul').hasClass('coupon')){
		if( $(window).width()>1023 ){
			$imgW.css('width', 165);
			$imgW.find('.thumnails').children('img').css('height', ($imgW.width()*0.89))
		} else if( $(window).width() < 1023 && $(window).width() > 767){
			var widthAll =$(window).width() - 100;
			var imgSize = parseInt( (($(window).width() - 100) / 3) ) - 3;
			$imgW.css('width', imgSize);
			$imgW.find('.thumnails').children('img').css('height', (imgSize*0.89));
		} else if( $(window).width() < 768 ){
			$imgW.css('width', '100'+'%');
			$imgW.find('.thumnails').children('img').css('height', '');
		}
	} else {
		if( $(window).width()>1023 ){
			$imgW.css('width', 165);
			$imgW.find('.thumnails').children('img').css('height', ($imgW.width()*0.8))
		} else if( $(window).width() < 1023 && $(window).width() > 767){
			var widthAll =$(window).width() - 100;
			var imgSize = parseInt( (($(window).width() - 100) / 3) ) - 3;
			$imgW.css('width', imgSize);
			$imgW.find('.thumnails').children('img').css('height', (imgSize*0.8));
		} else if( $(window).width() < 768 ){
			$imgW.css('width', '100'+'%');
			$imgW.find('.thumnails').children('img').css('height', '');
		}
	}
	$('.gallery-list > ul > li.nodata').css('width','');
}

function $galleryListClick(){
	$GalleryList = $('.gallery-list > ul > li');
	if( !($GalleryList.parent().hasClass('coupon') || $GalleryList.parent().hasClass('vod')) ){
		$GalleryList.find('.title').dotdotdot();
		$GalleryList.click(function(){
			if(!$(this).hasClass('nodata')){
				location.href = $(this).attr('url');
			}
		});
		$GalleryList.keydown(function(){
			if(!$(this).hasClass('nodata')){
				if (event.keyCode == 13) {
					location.href = $(this).attr('url');
				}
			}
		});
	} else {
		$GalleryList.find('.title').dotdotdot();
		$GalleryList.find('a').dotdotdot();
		if($GalleryList.parent().hasClass('vod')){
			$GalleryList.click(function(e){
				e.preventDefault();
				var url = $(this).find('a').attr('href');
				window.open(url);
			});
		 }
	}
}

function $bbsVisual(){
	$(".board-view .vertical-rolling-img > .thumnail").jCarouselLite({
			visible: 4,
			btnNext: ".board-view .vertical-rolling-img > .button-page.next",
			btnPrev: ".board-view .vertical-rolling-img > .button-page.prev",
			vertical: true,
			circular: false
		});
	var moblieSwiper = new Swiper ('.board-view .swiper-container', {
		slidesPerView: 1,
		pagination: '.board-view .swiper-pagination',
		paginationClickable: true,
		loop: true
	});
	$visualRolling();
	$(window).resize(function(){
		$visualRolling();
	});
	function $visualRolling(){
		if($(window).width() > 1023){
			$('.board-view .swiper-container').hide();
			$('.board-view .vertical-rolling-img').show();
		}else {
			$('.board-view .swiper-container').show();
			$('.board-view .vertical-rolling-img').hide();
		}
	}
}

function $webRollingImg(){
	var $slider = $('.vertical-rolling-img .thumnail > ul');
	var $rollimg = $('.vertical-rolling-img .thumnail > ul > li > a')
	$rollimg.click (function(){
		$slider.find('a').removeClass('active');
		$(this).addClass('active');
		var $src = $(this).children('img').attr('src');
		$('.vertical-rolling-img > .photo-img > img').attr('src', $src);
	});
}

function $filterCheck(){
	var $checkAll = $('.filter-area').find('input[name=filter-all]');
	var $check = $('.filter-area').find('input[name=filter-type]');
	var checkSize = $('.filter-area').find('input[name=filter-type]').size();
	var $remove = $('.filter-area').find('.remove-filter');
	$checkAll.on('click', function(){
		if ($(this).is(':checked')){
			$('input[name=filter-type]').prop('checked', true);
		} else {
			$('input[name=filter-type]').prop('checked', false);
		}
	});
	$check.click(function(){
		$checkAll.attr('checked', false);
		var checked = $check = $('.filter-area').find('input[name=filter-type]:checked').size();
		if(checkSize == checked ){
			$checkAll.prop('checked', true);
		}
	});
	$remove.click(function(){
		$checkAll.attr('checked', false);
		$('input[name=filter-type]').prop('checked', false);
	});
}

function $mapChange(){
	var $select = $('.map-select >select.area-si');
	var $img = $('.map-image > ul > li > img');
	var $maparea = $('map[name=mapKorea] > area');
	$select.change(function(){
		var $text = $(this).children('option:selected').text();
		$img.removeAttr('usemap');
		$img.each(function(){
			var $alt = $(this).attr('alt');
			if($text ==  $alt){
				$(this).attr('usemap','#mapKorea');
				$(this).parent().addClass('show').siblings().removeClass('show');
				$pinAction();
			}
		});
		$(this).next('select').show();
	});
	$maparea.click(function(){
		var $altArea = $(this).attr('alt');
		$select.children('option').removeAttr('selected');
		$select.children('option').each(function(){
			var $text =  $(this).text();
			if ($altArea == $text){
				$(this).attr('selected', 'selected')
			}
		});
		$select.next('select').show();
		$img.each(function(){
			var $altImg=$(this).attr('alt');
			if($altArea == $altImg){
				$(this).attr('usemap','#mapKorea');
				$(this).parent().addClass('show').siblings().removeClass('show');
				$pinAction();
			}
		});
	});
}

function $miniMap(){
	var $box = $('.board-content .map-box').find('.map');
	$box.css('height', $box.width());
}

function $weeklyWidth(){
	var $weekly = $('.area-weekly-type >  ul > li');
	if($(window).width() > 767){
		var widthsize = ($weekly.parent().width() -3 ) / 3;
		$weekly.css('width', widthsize);
	} else{
		$weekly.css('width', '');
	}
}

function $weeklyArea(){
	var $area = $('.area-weekly-type').find('a');
	$area.click(function(){
		$('.area-weekly-type').find('a').removeClass('active');
		$('.area-weekly-type').find('dl').removeClass('on');
		$(this).parent().parent().addClass('on');
		$(this).addClass('active');
		$('.area-weekly-temperature > h4').text($(this).text());
	});
}

function $weatherBox(){
	var $tabType = $('.area-weather > .tab-type > li > a');
	var $tabCon = $('.area-weather > .tab-article');

	if ($(window).width() < 768){ 
		var $mapName = '#weatherMapMoblie';
	} else {
		var $mapName = '#weatherMapWeb';
	}


	$tabType.on('click', function(){
		var idx = $(this).parent().index();
		$(this).parent().addClass('on').siblings().removeClass('on');
		$tabCon.hide().eq(idx).show();
		$tabCon.children('.area-all').show();
		$tabCon.children('.tab-day').show();
		$tabCon.children('.area-detail').find('dl').hide();
	});

	var $tabDay = $('.tab-article > .tab-day > li > a');
	$tabDay.on('click', function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
	});

	var $areaIcon = $('.area-all').find('a');
	$areaIcon.on('click', function(){
		var $areaText = $(this).parent().children('span').text();

		var $subArea = $(this).closest('.tab-article').children('.area-detail').find('li');
		$('.area-detail').find('img').removeAttr('usemap');
		$subArea.each(function(){
			if( $(this).children('span').text() == $areaText ){
				$(this).addClass('here');
				var $showArea = $(this).closest('dl');
				$showArea.addClass('h').show();
				$showArea.children('.img').find('img').attr('usemap',$mapName);
			}
		});
		$(this).closest('.tab-article').find('.area-all').hide();
		$(this).closest('.tab-article').find('.tab-day').hide();
	});

	var $mapWeather = $('map.weather-map > area');
	$mapWeather.click(function(){
		var $mapText = $(this).attr('alt');
		var $partArea = $('.tab-article:visible').children('.area-detail').find('dt');
		
		$partArea.each(function(){
			if($(this).children('strong').text() == $mapText){
				$('.area-detail').find('dl').hide();
				$('.area-detail').find('img').removeAttr('usemap');
				$(this).parent().find('.img').children('img').attr('usemap',$mapName);
				$(this).parent().show();
			}
		});
	});
}

function $overseaSpecial(){
	var wrapH = $('.overseas-special ').height();
	var boxH = $('.overseas-special > .carousel >  ul > li').height();
	var topM = (wrapH - boxH ) / 2;
	$('.overseas-special > .carousel').css('margin-top', topM);
}

function $overseasOffice(){
	var $officeLink = $('.overseas-link > ul > li ');
	if ($(window).width() > 767){
		$officeLink.each(function(){
			var cellwidth = ($('.overseas-link ul').width() - 8) / 7;
			$(this).css('width', cellwidth);
		});
	} else {
		$officeLink.each(function(){
			var cellwidth = ($('.overseas-link ul').width() - 4) / 3;
			$(this).css('width', cellwidth);
		});
	}
	$('.overseas-special ul > li > a > span').dotdotdot();
}

function $overseaVisual(){
	var $visual = $('.overseas-visual-image >.rolling-image');
	var $visualImg = $visual.find('li')
	var $pageBlit = $('.overseas-visual-image > ul.page-blit > li > a');
	var $btnPause = $('.overseas-visual-image > .btn.pause');
	var $btnPlay = $('.overseas-visual-image > .btn.play');
	var total = $visualImg.size();
	var count = 0;
	var _count;
	var interval;
	var $autoplay = true;
	function $visualImgW() {
		var imgW = $visual.width();
		$visual.css('height', imgW * 0.87);
		$('.overseas-special ').css('height', (imgW * 0.87) -2 );
		$visualImg.children('span').dotdotdot();
		$visualImg.each(function(){
			if($(window).width() > 767){
				$(this).children('img').css({width : imgW , height : imgW * 0.87});
			} else {
				$('.overseas-special ').css('height', '');
				$(this).children('img').css( 'width', '');
				$(this).children('img').css( 'height', '');
			}
		});
	}
	$visualImgW();
	$(window).resize(function() {
		$visualImgW();
	});
	interval = setInterval($rolling, 3000);
	/*$visualImg.hover(function(){
		clearInterval(interval);
	}, function(){
		interval = setInterval($rolling, 3000);
	})*/
	$btnPause.click(function(){
		clearInterval(interval);
		$(this).hide();
		$btnPlay.show();
		
	});
	$btnPlay.click(function(){
		$(this).hide();
		$btnPause.show();
		interval = setInterval($rolling, 3000);
	});
	$pageBlit.click(function(){
		clearInterval(interval);
		var idx = $(this).parent().index();
		$pageBlit.removeClass('active').eq(idx).addClass('active');
		$visualImg.stop().animate({opacity:0}, 800);
		$visualImg.eq(idx).stop().animate({opacity:1}, 800);
		count = idx;
		if($btnPause.is(':visible')){
			interval = setInterval($rolling, 3000);
		}
	});
	function $rolling (){
		_count = count;
		(count == total -1)? count = 0 : count++;
		$motion()
	}
	function $motion(){
		$visualImg.eq(_count).stop().animate({opacity:0}, 800);
		$visualImg.eq(count).stop().animate({opacity:1}, 800);
		$pageBlit.removeClass('active').eq(count).addClass('active');
	}
}

function $footerSelect(){
	$selected = $('.overseas-offices').find('.selected-text');
	$option =$('.overseas-offices').find('ul');
	$selected.click(function(e){
		//e.preventDefault();
		$(this).toggleClass('on');
		$option.slideToggle();
	});
	$option.children().children('a').click(function(){
		$selected.children('span').text($(this).text()).removeClass('on');
		$option.hide();
	});
}

function $pinAction(){
	var $pin = $('.map-image > ul > li.show > .pin');
	var toph = $pin.position().top;
	$pin.css('top',toph-60);
	$pin.show().animate({ top:  toph}, {duration: 800, easing: 'easeOutBounce'});
}

!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),!l||f.is(d.after)||f.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l),s||(f.detach(),s=!0)),s||l&&l.detach()}}),n.addClass("is-truncated"),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"��",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=h.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),r.children().each(function(){t(this).toggle().toggle()}),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(h=i(s(c),o),l(c,h),T&&d&&t(c).parent().append(d))}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=f(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","��",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
//text-over : multi-line

function $kSerach(){
	$('.category-area > ul > li > p.text').dotdotdot();
	$('.ksearch > .tab-menu > li > .tab-content').hide();
	$('.ksearch > .tab-menu > li:first-child > .tab-content').show();
}

function $travelPlan(){
	var $openBtn = $('header > .top-aside').find('.planning');
	var $closedBtn = $('.travel-planning > .center-wrap > .btn-closed');
	var $planBox = $('header > .travel-planning');
	var $planMask = $('header > .planning-mask');
	var $conBox = $planBox.find('.step-box');

	var $shareBtn = $('.travel-itinerary').find('.btn.share');
	var $favorBtn = $('.travel-itinerary').find('.btn.favorite');

	var planswiper1 = new Swiper('.travel-itinerary.choose .swiper-container', {
		nextButton: '.travel-itinerary.choose .button-move.next',
		prevButton: '.travel-itinerary.choose .button-move.prev',
		slidesPerView: 3,
		spaceBetween: 9,
		loop: false,
		pagination: '.travel-itinerary.choose .swiper-pagination',
		paginationClickable: true
		
	});
	var planswiper2 = new Swiper('.travel-itinerary.my .swiper-container', {
		nextButton: '.travel-itinerary.my .button-move.next',
		prevButton: '.travel-itinerary.my .button-move.prev',
		slidesPerView: 3,
		spaceBetween: 9,
		loop: false,
		pagination: '.travel-itinerary.my .swiper-pagination',
		paginationClickable: true
	});

	var myswiper2 = new Swiper('.choose-area.sub  .swiper-container', {
		nextButton: '.choose-area.sub .button-move.next',
		prevButton: '.choose-area.sub .button-move.prev',
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 20,
		pagination: '.choose-area.sub .swiper-pagination',
		loop: false,
	});

	var myswiper3 = new Swiper('.choose-area.select  .swiper-container', {
		nextButton: '.choose-area.select .button-move.next',
		prevButton: '.choose-area.select .button-move.prev',
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 20,
		paginationClickable: true,
		pagination: '.choose-area.select .swiper-pagination',
		loop: false,
	});

	function $textOver(){
		$('header .travel-planning .travel-itinerary ul > li > div > h3').dotdotdot();
		$('.travel-planning .my-planner .choose-area ul  > li > .name > a').dotdotdot();
	}

	function $swipeSetting(){
		if($(window).width() <1024 ){
			planswiper1.params.slidesPerView = 1;
			planswiper1.update();
			planswiper2.params.slidesPerView = 1;
			planswiper2.update();
			myswiper2.params.slidesPerView = 1;
			myswiper2.params.spaceBetween=10,
			myswiper2.update();
			myswiper3.params.slidesPerView = 1;
			myswiper3.params.spaceBetween=10,
			myswiper3.update();
		} else {
			planswiper1.params.slidesPerView = 3;
			planswiper1.update();
			planswiper2.params.slidesPerView = 3;
			planswiper2.update();
			myswiper2.params.slidesPerView = 3;
			myswiper2.update();
			myswiper3.params.slidesPerView = 3;
			myswiper3.update();
		}
	}

	$swipeSetting();
	$textOver();
	$(window).resize(function(){
		$swipeSetting();
		$textOver();
	});

	if($(window).width() > 1023) {
		$conBox.css('height', '')
	}else {
		$conBox.css('height', $(window).height());

	}
	$openBtn.on('click', function(){
		$planBox.show();
		$planMask.show();
		var $visualStop=$('.main-visual').find('.btn-control');
		if($visualStop.hasClass('pause')){
			$visualStop.trigger('click');
		}
		$(window).trigger('resize');
	});
	$closedBtn.on('click',function(){
		$planBox.hide();
		$planMask.hide();
	});
	$shareBtn.click(function(){
		$(this).toggleClass('on');

	});
	$favorBtn.click(function(){
		$(this).toggleClass('on');
	});
}

function $subMain(){
	function $subVisual(){
		var $rollingBox = $('.submain-visual > .roll-image');
		var $rollImg = $('.submain-visual > .roll-image > li');
		var $pageNavi = $('.submain-visual .page-blit > li > a');
		var $btnPause = $('.submain-visual  .button.pause');
		var $btnPlay = $('.submain-visual  .button.play');
		var total = $rollImg.size();
		var count = 0;
		var _count;
		var interval;
		var $autoplay = true;
		
		interval = setInterval($rollingMove, 3000);

		$rollImgSize();
		$(window).resize(function(){
			$btnPause.trigger('click');
			$rollImgSize();
			$rollImg.css('opacity','0').removeClass('active');
			var $activeIdx = $('.page-blit').find('.active');
			$activeIdx.trigger('click');
			$btnPlay.trigger('click');
		});

		function $rollImgSize(){
			var h = $rollImg.height();
			$rollingBox.css('min-height', h);
			$rollImg.find('dt').dotdotdot();
			$rollImg.find('dd').dotdotdot();
		}

		$rollImg.hover(function(){
			clearInterval(interval);
		}, function(){
			if($btnPause.is(':visible')){
				interval = setInterval($rollingMove, 3000);
			}
		});

		$rollImg.focus(function(){
			$btnPause.trigger('click');
		});

		$rollImg.click(function(){
			location.href = $rollingBox.find('li.active').attr('url');
		});
		$rollImg.keydown(function(){
				if (event.keyCode == 13) {
					location.href = $rollingBox.find('li.active').attr('url');
				}
		});
		$btnPause.click(function(){
			clearInterval(interval);
			$(this).hide();
			$btnPlay.show();
			
		});
		$btnPlay.click(function(){
			$(this).hide();
			$btnPause.show();
			interval = setInterval($rollingMove, 3000);
		});

		$pageNavi.click(function(){
			clearInterval(interval);
			var idx = $(this).parent().index();
			$pageNavi.removeClass('active').eq(idx).addClass('active');
			$rollImg.stop().animate({opacity:0}, 800).removeClass('active');
			$rollImg.eq(idx).stop().animate({opacity:1}, 800).addClass('active');
			count = idx;
			if($btnPause.is(':visible')){
				interval = setInterval($rollingMove, 3000);
			}
		});

		function $rollingMove(){
			_count = count;
			(count == total -1)? count = 0 : count++;
			$motionOverlay();
		}
		function $motionOverlay(){
			$rollImg.eq(_count).stop().animate({opacity:0}, 800).removeClass('active');
			$rollImg.eq(count).stop().animate({opacity:1}, 800).addClass('active');
			$pageNavi.removeClass('active').eq(count).addClass('active');
		}
	}

	$subVisual();
	$iconClass();
	$('.travel-news-box span').dotdotdot();
	$(window).resize(function(){
		$iconClass();
		$('.travel-news-box span').dotdotdot();
	});

	function $iconClass(){
		var $iconList = $('.submain .major-content .icon-list');
		$iconList.find('a').removeClass('first');
		if($(window).width() > 767) {
			$iconList.find('li').removeClass('first');
			$iconList.each(function(){
				if($(this).hasClass('cols-6')){
					$(this).children('li:nth-child(6n+1)').children('a').addClass('first');
				} else if($(this).hasClass('cols-5')){
					$(this).children('li:nth-child(5n+1)').children('a').addClass('first');
				} else if($(this).hasClass('cols-4')){
					$(this).children('li:nth-child(4n+1)').children('a').addClass('first');
				} else{
					$(this).children('li:nth-child(3n+1)').children('a').addClass('first');
				}
			});
		} else {
			$iconList.each(function(){
				$(this).find('a:even').addClass('first');
			});
		}
	}
	var $bbsList = $('.submain .major-content .bbs-list > li > a');
	var $bbsImg = $('.submain .major-content .bbs-img > li');
	$bbsList.hover(function(){
		idx = $(this).parent().index();
		$bbsList.removeClass('active');
		$(this).addClass('active');
		$bbsImg.removeClass('active').eq(idx).addClass('active');
	},function(){
	});
}

function $ebookSpace(){
	var $ebookItem = $('.ebook-list > li');
	var space;
	$ebookItem.css('margin-left','');
	if($(window).width() > 767){
		space = ($('.ebook-list:visible').width() - 632)/3;
		$ebookItem.css('margin-left',space);
		$('.ebook-list > li:nth-child(4n+1)').css('margin-left','');
	}else {
		space = ($('.ebook-list:visible').width() - 260) / 3; 
		$ebookItem.css('margin-left',space)
	}
}

function $ebookYear(){
	var $ebookSelect = $('.ebook-year > select');
	var $ebookBox = $('.ebook-box');
	$ebookSelect.change(function(){
		$value = $(this).val();
		if ($value == 'All'){
			$ebookSpace();
			$ebookBox.show();
			$lnbLine();
		}else {
			$ebookSpace();
			$ebookBox.hide();
			$ebookBox.each(function(){
				var $year = $(this).find('h2').text();
				if ( $value == $year){
					$(this).show();
					$lnbLine();
				}
			});
		}
	});
}

function $korailTour(){
	var $korailTourList = $('.korailTour-list > ul > li');
	var $korailThum = $('.korailTour-list > ul > li > .thumnail > img');
	var $korailType = $('.korailTour-list > ul > li > .type > span');

	$('.korailTour-list > ul > li:nth-child(3n+1)').addClass('no-space');

	function $korailTypeSize(){
		var maxWidth = $korailType.parent().width() - 80;
		$korailType.each(function(){
			$(this).css('max-width',maxWidth);
		});
	}

	function $korailImg(){
		if($(window).width() >767){
			$korailThum.each(function(){
				$(this).css('height', $korailThum.width() * 0.74);
			});
		} else {
			$(this).css('height', '');
		}
	}

	function $korailTourSize(){
		if($(window).width() >767){
			var width = ( $korailTourList.parent().width() - 150 ) / 3;
			$korailTourList.each(function(){
				if($(this).hasClass('nodata')){
					$(this).css('width', '');
				} else {
					$(this).css('width', width);
				}
			});
		} else{
			$korailTourList.css('width', '');
		}
	}
	$korailTourList.click(function(){
		if(!($(this).hasClass('nodata'))){
			if($(this).parent().parent().hasClass('columns')){
				window.open($(this).attr('url'));
			} else {
				location.href = $(this).attr('url');
			}
		}
	});
	$korailTourSize();
	$korailTypeSize();
	$korailImg();
	$(window).resize(function(){
		$korailTourSize(); 
		$korailTypeSize();
		$korailImg();
	});
}

function $goTop(){
	var $goTopbtn = $('button.goTop');
	$goTopbtn.on('click', function(){
		$('html,body').animate({scrollTop: 0}, 800);
	});
}

function $PriceListClass(){
	$PriceList = $('.price-list-box dl .list > ul');
	$PriceList.each(function(){
		$(this).children('li:odd').addClass('space');
	});
}

function fn_ready(){
	$(window).ready(function(){
		$('#layout-wrap').width($(window).width());
		$windowCheck();
		$gnb();
		$lnb();
		$modalOpen();
		$footerSelect();
		$kSerach();
		$travelPlan();
		$('input, textarea').each(function() {
			$(this).data('holder', $(this).attr('placeholder'));
			$(this).focusin(function(){
				$(this).attr('placeholder','');
			});
			$(this).focusout(function(){
				$(this).attr('placeholder', $(this).data('holder'));
			});
		});
		$( ".datepicker" ).datepicker({
			dateFormat: 'mm/dd/yy',
			showOn: "both",
			buttonImage: "http://tong.visitkorea.or.kr/img/vk/enu/icon/icon_calendar.gif",
			buttonImageOnly: true,
			buttonText: "Select date",
			onSelect : function(){
				$(this).attr('vale',$(this).val());
			}
		});
	});
	$(window).load(function() {
		$gnbGuide();
		$lnbLine();
		$tabMenu();
		$tabWidth();
		$modalClose();
		$goTop();
	});
	$(window).resize(function() {
		$('#layout-wrap').css('width',$(window).width());
		$gnbGuide();
		$lnbLine();
		$tabWidth();
		$maskSize();
		$modalSize();
	});
}

function fn_bbs(){
	$(window).ready(function(){
		$ratingStar();
		$galleryClass();
		$webRollingImg();
		$filterCheck();
		$mapChange();
		$miniMap();
		$korailTour();
		$bbsVisual();
		$('.blog-list > ul >li:even').addClass('bg-color');
		$('.blog-list > ul > li > .text').dotdotdot();
		$('.blog-list > ul > li > h3').dotdotdot();
		if(!($('.korailTour-list').hasClass('columns'))){
			$('.korailTour-list > ul > li> h3').dotdotdot();
			$('.korailTour-list > ul > li> .text').dotdotdot();
		}
		$PriceListClass();
		$('.filter-area > ul > li:even').addClass('space');
		$('.overseas-social > ul > li:even').addClass('left');
		$('.overseas-news > ul > li > a').dotdotdot();
		$("#startDate").datepicker('option','minDate',new Date());
		$("#endDate").datepicker('option','minDate',new Date());
		$('.report-error > .button-toggle').on('click' , function(){
			$(this).toggleClass('hide');
			$(this).next().toggle();
			$lnbLine();
		});
	});
	$(window).load(function() {
		$blogListClick();
		$galleryListClick();
		$bbsNodata();
		$bbsSearchInput();
		$dataPickerM();
		$listPrev();
	});
	$(window).resize(function() {
		$bbsNodata();
		$bbsSearchInput();
		$galleryClass();
		$dataPickerM();
		$listPrev();
		$miniMap();
	});
}

function fn_weather(){
	$(window).ready(function(){
		$weeklyWidth();
		$weeklyArea();
		$weatherBox();
	});
	$(window).load(function() {});
	$(window).resize(function() {
		$weeklyWidth();
		$weatherBox();
	});
}

function fn_submain(){
	$(window).ready(function(){
		$subMain();
	});
}

function fn_overseas(){
	$(window).ready(function(){
		$overseaVisual();
		$overseaSpecial();
	});
	$(window).load(function() {
		$overseasOffice();
	});
	$(window).resize(function() {
		$overseasOffice();
		$overseaSpecial();
	});
}

function fn_ebook(){
	$(window).ready(function(){
		$ebookSpace();
		$ebookYear();
	});
	$(window).resize(function() {
		$ebookSpace();
	});
}