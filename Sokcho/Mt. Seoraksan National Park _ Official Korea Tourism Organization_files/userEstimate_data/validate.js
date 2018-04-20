/*********************************************
* 파일명: lib.validate.js
* 기능: 유연한 자동 폼 검사기
* 만든이: 거친마루 <comfuture@maniacamp.com>
* 날짜: 2002-10-01
**********************************************/

/// 에러메시지 포멧 정의 ///
var NO_BLANK = "{name+을를} 입력하세요.";
var NOT_VALID = "{name+이가} 올바르지 않습니다";
var NOT_DOC = "{name+은는} 워드파일만 업로드 할 수 있습니다."; 
var NOT_IMG = "{name+은는} 이미지파일만 업로드 할 수 있습니다."; 
var NOT_IMG_DOC = "{name+은는} 이미지(.jpg, .gif)와 문서(.doc, .pdf) 파일만 업로드 할 수 있습니다.";
var TOO_LONG = "{name}의 길이가 초과되었습니다 (최대 {maxbyte}바이트)";

/// 스트링 객체에 메소드 추가 ///
String.prototype.trim = function(str) { 
	str = this != window ? this : str; 
	return str.replace(/^\s+/g,'').replace(/\s+$/g,''); 
}

String.prototype.hasFinalConsonant = function(str) {
	str = this != window ? this : str; 
	var strTemp = str.substr(str.length-1);
	return ((strTemp.charCodeAt(0)-16)%28!=0);
}

String.prototype.bytes = function(str) {
	str = this != window ? this : str;
	for(j=0; j<str.length; j=j+1) {
		var chr = str.charAt(j);
		len += (chr.charCodeAt() > 128) ? 2 : 1
	}
	return len;
}

function validate(form) {
	for (i = 0; i < form.elements.length; i=i+1 ) {
		if (form.elements[i].getAttribute('name') == "") continue;
		var el = form.elements[i];
		// // 2012-01-31 SKC&C PJH 주석처리
		//el.value = el.value.trim();
		var minbyte = el.getAttribute("MINBYTE");
		var maxbyte = el.getAttribute("MAXBYTE");
		var option = el.getAttribute("OPTION");
		var minlength = el.getAttribute("MINLENGTH");
		var maxlength = el.getAttribute("MAXLENGTH");
		var match = el.getAttribute("MATCH");
		var glue = el.getAttribute("GLUE");
		var denyBlank = el.getAttribute("denyBlank");
		if (el.getAttribute("REQUIRED") != null) {
//			alert("name : " + form.elements[i].getAttribute('name') + " | type : " + el.type.toLowerCase() + " | value : " + el.value);
            if (el.type.toLowerCase() == "radio" || el.type.toLowerCase() == "checkbox") {
            	var isValid = false;
                if (form.elements[el.name].length > 0) {
					for (j = 0; j < form.elements[el.name].length; j++) {
						if (form.elements[el.name][j].checked) {
							isValid = true;
							break;
						}
					}
				} else {
					if (el.checked) {
						isValid = true;
					}
				}
				if(!isValid){
					return doError(el,NO_BLANK);
				}
            }
			if (el.type.toLowerCase() == "select") {
                if(!isValidSelect(this,el)) return doError(el,NO_BLANK);
            }
			if (el.value == null || el.value == "") {
				return doError(el,NO_BLANK);
			}
		}

		if (minbyte != null) {
			if (el.value.bytes() < parseInt(minbyte)) {
				return doError(el,"{name+은는} 최소 "+minbyte+"바이트 이상 입력해야 합니다.");
			}
		}

		if (maxbyte != null && el.value != "") {
			var len = 0;
			if (el.value.bytes() > parseInt(maxbyte)) {
				return doError(el,"{name}의 길이가 초과되었습니다 (최대 "+maxbyte+"바이트)");
			}
		}

		if (minlength != null) {
			if (el.value.length < parseInt(minlength)) {
				return doError(el,"{name+은는} 최소 "+minlength+"글자 이상 입력해야 합니다.");
			}
		}

		if (maxlength != null && el.value != "") {
			var len = 0;
			if (el.value.length > parseInt(maxlength)) {
				return doError(el,"{name}의 글자수가 초과되었습니다 (최대 "+maxlength+"자)");
			}
		}

		if (match && (el.value != form.elements[match].value)) return doError(el,"{name+이가} 일치하지 않습니다");

		if (option != null && el.value != "") {
			if (el.getAttribute('SPAN') != null) {
				var _value = new Array();
				for (span=0; span<el.getAttribute('SPAN');span=span+1 ) {
					_value[span] = form.elements[i+span].value;
				}
				var value = _value.join(glue == null ? '' : glue);
				if (!funcs[option](el,value)) return false;
			} else {
				if (!funcs[option](el)) return false;
			}
		}
	}
	return true;
}

function josa(str,tail) {
	return (str.hasFinalConsonant()) ? tail.substring(0,1) : tail.substring(1,2);
}

function doError(el,type,action) {
	var pattern = /{([a-zA-Z0-9_]+)\+?([가-힝]{2})?}/;
	var name = (hname = el.getAttribute("hname")) ? hname : el.getAttribute("name");
	pattern.exec(type);
	var tail = (RegExp.$2) ? josa(eval(RegExp.$1),RegExp.$2) : "";
	alert(type.replace(pattern,eval(RegExp.$1) + tail));

	if (action == "sel") {
		el.select();
	} else if (action == "del")	{
		el.value = "";
	}
	el.focus();
	return false;
}	

/// 특수 패턴 검사 함수 매핑 ///
var funcs = new Array();
funcs['email'] = isValidEmail;
funcs['phone'] = isValidPhone;
funcs['userid'] = isValidUserid;
funcs['hangul'] = hasHangul;
funcs['number'] = isNumeric;
funcs['engonly'] = alphaOnly;
funcs['jumin'] = isValidJumin;
funcs['bizno'] = isValidBizNo;
funcs['fileExtDoc'] = isDocFile;
funcs['fileExtImg'] = isImgFile;

/// 패턴 검사 함수들 ///
function isValidEmail(el) {
	var pattern = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;
	return (pattern.test(el.value)) ? true : doError(el,NOT_VALID);
}

function isValidUserid(el) {
	var pattern = /^[a-zA-Z]{1}[a-zA-Z0-9]{3,10}$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 4자이상 10자 이하이어야 하고,\n 최소 영문1자이상, 숫자로만 사용할 수 있습니다");
}

function hasHangul(el) {
	var pattern = /[가-힝]/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 한글을 포함해야 합니다");
}

function alphaOnly(el) {
	var pattern = /^[a-zA-Z]+$/;
	return (pattern.test(el.value)) ? true : doError(el,NOT_VALID);
}

function isNumeric(el) {
	var pattern = /^[0-9]+$/;
	return (pattern.test(el.value)) ? true : doError(el,"{name+은는} 반드시 숫자로만 입력해야 합니다");
}

function isValidJumin(el,value) {
    var pattern = /^([0-9]{6})-?([0-9]{7})$/; 
	var num = value ? value : el.value;
    if (!pattern.test(num)) return doError(el,NOT_VALID); 
    num = RegExp.$1 + RegExp.$2;

	var sum = 0;
	var last = num.charCodeAt(12) - 0x30;
	var bases = "234567892345";
	for (var i=0; i<12; i=i+1) {
		if (isNaN(num.substring(i,i+1))) return doError(el,NOT_VALID);
		sum += (num.charCodeAt(i) - 0x30) * (bases.charCodeAt(i) - 0x30);
	}
	var mod = sum % 11;
	return ((11 - mod) % 10 == last) ? true : doError(el,NOT_VALID);
}

function isValidBizNo(el) { 
    var pattern = /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/; 
	var num = el.value;
    if (!pattern.test(num)) return doError(el,NOT_VALID); 
    num = RegExp.$1 + RegExp.$2 + RegExp.$3;
    var cVal = 0; 
    for (var i=0; i<8; i=i+1) { 
        var cKeyNum = parseInt(((_tmp = i % 3) == 0) ? 1 : ( _tmp  == 1 ) ? 3 : 7); 
        cVal += (parseFloat(num.substring(i,i+1)) * cKeyNum) % 10; 
    } 
    var li_temp = parseFloat(num.substring(i,i+1)) * 5 + '0'; 
    cVal += parseFloat(li_temp.substring(0,1)) + parseFloat(li_temp.substring(1,2)); 
    return (parseInt(num.substring(9,10)) == 10-(cVal % 10)%10) ? true : doError(el,NOT_VALID); 
}

function isValidPhone(el) {
	var pattern = /^([0]{1}[0-9]{1,2})-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/;
	if (pattern.exec(el.value)) {
		if(RegExp.$1 == "010" || RegExp.$1 == "011" || RegExp.$1 == "016" || RegExp.$1 == "017" || RegExp.$1 == "018" || RegExp.$1 == "019") {
			el.value = RegExp.$1 + "-" + RegExp.$2 + "-" + RegExp.$3;
		}
		return true;
	} else {
		return doError(el,NOT_VALID);
	}
}

function isDocFile(el) 
{
	var extArray = ".doc";
	var file = el.value;

	allowSubmit = false;
	if(!file) {
		allowSubmit = false;
	}
	ext = file.slice(file.lastIndexOf (".")).toLowerCase();

	if (extArray == ext) { allowSubmit = true;}
	else {allowSubmit = false;}

	if(allowSubmit) {
		return true;
	} else {
		return doError(el,NOT_DOC);
	}

}

function isImgFile(el) 
{
	var file = el.value;

	allowSubmit = false;
	if(!file) {
		allowSubmit = false;
	}
	ext = file.slice(file.lastIndexOf (".")).toLowerCase();

	if (ext==".jpg" || ext==".jpeg" || ext==".gif") { allowSubmit = true;}
	else {allowSubmit = false;}

	if(allowSubmit) {
		return true;
	} else {
		return doError(el,NOT_IMG);
	}

}


function isImgDocFile(el) 
{
	var file = el.value;

	allowSubmit = false;
	if(!file) {
		allowSubmit = false;
	}
	ext = file.slice(file.lastIndexOf (".")).toLowerCase();

	if (ext==".jpg" || ext==".jpeg" || ext==".gif" || ext=="doc" || ext=="pdf") { allowSubmit = true;}
	else {allowSubmit = false;}

	if(allowSubmit) {
		return true;
	} else {
		return doError(el,NOT_IMG_DOC);
	}

}


function specialChar(obj){
	//data = "!$)#%@%gggew#@$@+_|+{p[[`";
	data = obj.value;
	
	if(data.length){
	 for (var i=0; i < data.length; i++) { 
	  ch_char = data.charAt(i);
	
	  ch=ch_char.charCodeAt();
	  if((ch >= 33 && ch <= 47) || (ch >= 58 && ch <= 64) || (ch >= 91 && ch <= 96) || (ch >= 123 && ch <= 126) ) {
	   	alert(obj.hname + "의 내용은 문자 '" +ch_char+ "'를 사용할 수 없습니다");
	   	obj.focus();
	   	return false;
	  }else{
	  	return true;
	  }
	 }
	}else{
		return true;
	}
 }
 
 //특수문자 입력안되게 // 2008-02-29 사용법 : onKeyUp="javascript:onlyKor(this);"
function onlyKor(objtext1) {
/*
	var inText = objtext1.value;
	var ret;

	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		//허용하는 단어목록은 아래 추가한다.
		if(ret == 44){
			return true;
		}
		
		if ((ret > 33 && ret < 40) || (ret > 57 && ret < 63) || (ret > 90 && ret < 97)) {
			alert("특수문자는 입력할 수 없습니다.");
			objtext1.value = inText.substr(0,inText.length-1);
			objtext1.focus();
			return false;
		}
	}
	return true;
*/

	var inText = objtext1.value;
	var ret;

	for (var i = 0; i < inText.length; i++) {
		ret = inText.charCodeAt(i);
		
		//작은 따옴표 사용 불가
		if(ret == '39'){
			alert("특수문자는 입력할 수 없습니다.");
			objtext1.value = inText.substr(0,inText.length-1);
			objtext1.focus();
			return false;	
		}
	}
	
	return true;
}


//천단위 마다 ','(콤마) 찍기
function dataintComma(obj, obj_h) {
  
    
    num1 = obj.value.length;        

        FirstNum = obj.value.substr(0,1);
        FirstNum2 = obj.value.substr(1,num1);
   
        if(FirstNum == "0"){
                alert("입력숫자는 0 으로 시작할 수 없습니다.");
        //return FirstNum2;
            obj.value = FirstNum2;
			return;
        }

        loop = /^\$|,/g; 
		obj.value = obj.value.replace(loop, ""); 

        obj_h.value =obj.value;
        
        var fieldnum = '' + obj.value;    

          if (isNaN(fieldnum)) {
        alert("숫자만 입력하실 수 있습니다.");        
		obj.value == "";
        obj.focus();
        //return "";
		obj.value = "";
        }
        else {
        var comma = new RegExp('([0-9])([0-9][0-9][0-9][,.])');
        var data = fieldnum.split('.');
        data[0] += '.';
           do {
             data[0] = data[0].replace(comma, '$1,$2');
            } while (comma.test(data[0]));

           if (data.length > 1) {
           //return data.join('');
		   obj.value = data.join('');
           }
           else {
           //return data[0].split('.')[0];
		   obj.value =  data[0].split('.')[0];
                }
        }
}