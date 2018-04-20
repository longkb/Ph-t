// 팝업 오픈
var temp = null;
function openWindow(obj, popName, w, h) {
	temp = $(obj);
	var myUrl = $(obj).attr('href') ? $(obj).attr('href') : '';
	var left = (screen.width - w)/2;
	var top = (screen.height - h)/2;
	window.open(myUrl, popName, 'width='+w+', height='+h+', left='+left+', top='+top+', scrollbars=yes');
}

// 팝업 닫기
function closeWindow() {
	if (window.opener != null) {
		window.opener.openerFocus();
	}
	window.close();
}

// 팝업 닫은 뒤 포커싱 처리 : 크롬은 서버에 올려야 작동
function openerFocus() {
	if (temp != null) {
		$(temp).focus();
		temp = null;
	}
}


/**
 * 인풋박스 오버레이 재설정
 */
function i_overlayReBind($obj) {
	var nodeName = $($obj).prop('nodeName');
	if(nodeName === 'LABEL') {
		$($obj).unbind('click').bind('click', function() {
			$($obj).hide();
		});
	}
	if(nodeName === 'INPUT') {
		if($($obj).val()) {
			$('label[for="' + $($obj).attr('id') + '"]').each(function() {
				if($(this).hasClass('i_overlay')) {
					$(this).hide();
				}
			});
		}
		$($obj).unbind('focus click').bind('focus click', function() {
			$('label[for="' + $($obj).attr('id') + '"]').each(function() {
				if($(this).hasClass('i_overlay')) {
					$(this).hide();
				}
			});
		});
		$($obj).unbind('blur').bind('blur', function() {
			if($($obj).val() == '') {
				$('label[for="' + $($obj).attr('id') + '"]').each(function() {
					if($(this).hasClass('i_overlay')) {
						$(this).show();
					}
				});
			}
		});
	}
}
jQuery.extend({
	ktoPost : function(url, data, successFn, opener) {
		// progressbar 시작
		progressbar.show(opener);

		$.ajax({
			beforeSend: function(req) {
				req.setRequestHeader("AJAX", "true");
			},
			type: "POST",
			url: url,
			data: data,
			cache: false, // don't cache the result
			success: function(data) {
				// 에러일경우 에러메세지 표현
				if(data && data.errorMessage) {
					alert(data.errorMessage);
					return;
				}
				if(successFn) {
					successFn(data);
				}
				// progress 종료
				progressbar.hide();
			},
			error: function(xhr, status, error) {
				/*if(options && options.errorFn) {
					options.errorFn(XMLHttpRequest, textStatus, errorThrown);
				}*/
				// progress 종료
				progressbar.hide();
			}
		});
	},

	ktoAsyncPost : function(url, data, successFn, opener) {
		// progressbar 시작
		progressbar.show(opener);

		$.ajax({
			beforeSend: function(req) {
				req.setRequestHeader("AJAX", "true");
			},
			type: "POST",
			url: url,
			data: data,
			async: false,
			cache: false, // don't cache the result
			success: function(data) {
				// 에러일경우 에러메세지 표현
				if(data && data.errorMessage) {
					alert(data.errorMessage);
					return;
				}
				if(successFn) {
					successFn(data);
				}
				// progress 종료
				progressbar.hide();
			},
			error: function(xhr, status, error) {
				/*if(options && options.errorFn) {
					options.errorFn(XMLHttpRequest, textStatus, errorThrown);
				}*/
				// progress 종료
				progressbar.hide();
			}
		});
	}
});
jQuery.fn.extend({
	ktoValidate : function(options) {
		if(!options) {
			options = new Object();
			options['rules'] = {};
			options['names'] = {};
		}
		var param = {
				  rules : options.rules
				, names : options.names
				, onkeyup:false
				, onclick:false
				, onfocusout:false
				, ignoreTitle: false
				, showErrors:function(errorMap, errorList) {
					if(!$.isEmptyObject(errorList)) {
						alert(errorList[0].message);
						errorList[0].element.focus();
						return false;
					}
				}
		};
		this.validate(param);
	}
});
var layerOpener = null;
var progressbar = {
		show : function(opener) {
			if(opener) {
				layerOpener = $(opener);
				$('body').append('<div id="loading" class="modal"><p>잠시만 기다려주세요. 데이터 로딩중입니다.</p></div>');
				$('#loading p').attr('tabindex', '-1').focus();
			}
		},
		hide : function() {
			$('#loading').remove();
			if (layerOpener != null) {
				$(layerOpener).focus();
				layerOpener = null;
			}
		}
};

function dateCheckMM(dat,msg) {
	if (dat === undefined || dat.replace(/[^0-9]/g, '').length !== 6) {
		return false;
	}
	dat = dat.replace(/[^0-9]/g, '');
	var year = Number(dat.substring(0, 4));
	var month = Number(dat.substring(4, 6)) - 1;
	var date = 1;
	var dateObj = new Date(year, month, date);
	return (year > 1800 && year === dateObj.getFullYear()) && (month === dateObj.getMonth()) && (date === dateObj.getDate());
}
function dateCheckDD(dat,msg) {
	if (dat === undefined || dat.replace(/[^0-9]/g, '').length !== 8) {
		return false;
	}
	dat = dat.replace(/[^0-9]/g, '');
	var year = Number(dat.substring(0, 4));
	var month = Number(dat.substring(4, 6)) - 1;
	var date = Number(dat.substring(6));
	var dateObj = new Date(year, month, date);
	return (year > 1800 && year === dateObj.getFullYear()) && (month === dateObj.getMonth()) && (date === dateObj.getDate());
}


/*var kor_check = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
var eng_check = /^[A-za-z]/g;
var num_check=/^[0-9]*$/;*/


/*===============================LOG===================================*/
var logView = true;
function console_log(obj){
	if (logView){
		console.log(obj);
	}
}

/*===============================DEBUG===================================*/
function printObject(obj, keyLength){
	var temp="                                                                                                                  ";
	console_log("***************************=printObject Start=******************");
	for(key in obj) {
		console_log("key=["+[key]+"]"+temp.substring(0, keyLength-(("["+[key]+"]").length))+"value=["+obj[key]+"]");
	}
	console_log("***************************=printObject END=******************");
}



/**
 * div 개체에 페이지 호출 메서드
 * @author
 * @param obj : div 개체
 * @param url : 요청 url(서버와 매핑됨)
 * @param data: 데이터
 * @param sett: 사용자 정의 세팅
 * @returns
 */
function divPageCall(obj, url, reqData, sett){
	console_log("divPageCall=="+url);
	if(url==null) return -1;
	var settings = {							// default 세팅
		type:"GET",
		async : false,
		url: url,
		success: function (resData){
			// 플래쉬 컴포넌트 삭제 및 초기화
	    	if (obj.find("object").length != 0){
				clearFlashComponent(obj);
	    	}
			obj.empty();						// div 초기화
			obj.html(resData);					// 페이지 치환
			if(sett && sett.callback && $.isFunction(sett.callback)) {
				sett.callback();
			}
		}
	};
	if(sett!=null && typeof sett=="object") {	// 세팅값 존재 시
		$.extend(settings, sett);				// 세팅 확장
	}
	if(reqData!=null && typeof reqData=="object") {   // 데이터 존재시
		settings.data = reqData;					// 데이터 추가
	}
	$.ajax(settings);
};


/**
 * 플래쉬 컴포넌트 삭제
 * @author
 * @param obj -
 개체
 */
function clearFlashComponent(obj){
	/* 플래쉬 컴포넌트 삭제 */
	obj.find("object").each(function(){
		var parent = this.parentNode;
		parent.removeChild(this);
	});

}


/**
 * byte 계산
 * @param text
 * @return byte
 */
function getBytes(string)
{
	var str = string;
    var length = 0;
	for(var i = 0; i < str.length; i++)
	{
		if(escape(str.charAt(i)).length >= 4)
			length += 2;
		else if(escape(str.charAt(i)) == "%A7")
			length += 2;
		else
			if(escape(str.charAt(i)) != "%0D")
				length++;
	}
    return length;
}




/**
 * 앞공백 제거
 * @author
 * @param str
 * @returns
 */
function ltrim(str) {
	var i, j = 0;
	//var objstr;
	for (i = 0; i < str.length; i++) {
		if (str.charAt(i) == ' ')
			j = j + 1;
		else
			break;
	}
	return str.substring(j, str.length - j + 1);
}

/**
 * 뒤공백 제거
 * @author
 * @param str
 * @returns
 */
function rtrim(str) {
	var i, j = 0;
	for (i = str.length - 1; i >= 0; i--) {
		if (str.charAt(i) == ' ')
			j = j + 1;
		else
			break;
	}
	return str.substring(0, str.length - j);
}

/**
 * 앞뒤공백 제거
 * @author
 * @param str
 * @returns
 */
function trim(str) {
	var i, j = 0;
	//var objstr;
	for (i = 0; i < str.length; i++) {
		if (str.charAt(i) == ' ')
			j = j + 1;
		else
			break;
	}
	str = str.substring(j, str.length - j + 1);

	i, j = 0;
	for (i = str.length - 1; i >= 0; i--) {
		if (str.charAt(i) == ' ')
			j = j + 1;
		else
			break;
	}
	return str.substring(0, str.length - j);
}


function getResourceImage(imageUrl){
	if (imageUrl !="" && imageUrl!=undefined && imageUrl.indexOf("|") !=-1){

		var filename = imageUrl.substring(imageUrl.indexOf("|") + 1, imageUrl.length).trim();
		var temp = filename.indexOf("_");
		filename = filename.substring(0, temp) + filename.substring(filename.indexOf("_", temp+1), filename.length);
		var directory = filename.substring(temp - 2, temp);
		imageUrl = "/cms/resource/" + directory + "/" + filename;
	} else {
		imageUrl = "/enu/images/sample_pic_no.jpg";
	}
	return imageUrl;
}





/**
 * 현재시간 조회
 * 작성자 -
 */
function leadingZeros(n, digits) {
	var zero = '';
  	n = n.toString();

  	if (n.length < digits) {
   		for (var i = 0; i < digits - n.length; i++)
      	zero += '0';
  	}
  	return zero + n;
}
function getDateAddDay(addDay,format){

	var toDate = new Date();
	toDate.setDate(toDate.getDate()+addDay);

	if (format=='en'){
		var returnStr =
	    leadingZeros(toDate.getMonth() + 1, 2) + '/' +
	    leadingZeros(toDate.getDate(), 2) + '/' +
		leadingZeros(toDate.getFullYear(), 4);
		return returnStr;

	} else {
		var returnStr = leadingZeros(toDate.getFullYear(), 4) + '/' +
	    leadingZeros(toDate.getMonth() + 1, 2) + '/' +
	    leadingZeros(toDate.getDate(), 2);
		return returnStr;

	}
}

function getDateAddMonth(addMonth){
	var toDate = new Date();
	toDate.addMonths(addMonth);
	var returnStr = leadingZeros(toDate.getFullYear(), 4) + '/' +
	    leadingZeros(toDate.getMonth() + 1, 2) + '/' +
	    leadingZeros(toDate.getDate(), 2);
	return returnStr;
}


