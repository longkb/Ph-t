/** =============================================
Comment: 입력값(fromDate, toDate, fromStr, toStr)에서 fromDate객체의 value가 null이 아니거나 혹은 toDate객체의 value가 null이 아닌 경우 fromDate와 toDate가 각각 형식이 올바른지 판단후 올바르지 않은경우 fromStr, toStr을 경고창에 띄우고 false, 형식이 올바르면 true, fromDate객체의 value와 toDate객체의 value가 모두 null인경우는 true
Return : boolean
Usage  : checkFromToDateSel(fromDate, toDate, "시작일", "종료일")
--------------------------------------------- **/
function checkFromToDateSel(fromDate, toDate, fromStr, toStr) {
	
	//시작 날자와 종료날짜
	date1 = getRemoveChar(fromDate.value,'-');
	date2 = getRemoveChar(toDate.value,'-');
	if(date1 !="" && date2 != "") {
		if (date1) {
			if(!isDate(date1)) {  
				alert(fromStr+"의 날짜 형식이 틀립니다.\n\n    예) 20020602");
				return false; 
			} 
		}

		if (date2) {
			if(!isDate(date2)) {  
				alert(toStr+"의 날짜 형식이 틀립니다.\n\n    예) 20020605");
				return false; 
			} 
		}

		if(date1 > date2) { 
			alert(fromStr+"(이)가 "+toStr+"보다 미래의 날짜입니다.!");
			return false ;
		}
		return true;
	}
	return true;
}


/** =============================================
Comment: 입력값(str)에서 조건 char을 제거
Return : str
Usage  : getRemoveChar('2002-02-03', '-')
--------------------------------------------- **/
function getRemoveChar(str, ch) {

	if (str == "") return str;
	
	while (str.indexOf(ch)!=-1){
		str = str.replace(ch,"");
	}
	
	return str;
}

/** =============================================
Comment: 증가된 날자 구하기 yyyy, mm, dd 로 받은 날짜에서 val만큼 뺀 날짜를 리턴
Return : String (증가된 8자리 날자(YYYYMMDD))
Usage  :
--------------------------------------------- **/
function fn_date_add(iYear, iMonth, iDay, iVal)
{
    var iMaxDay = 0;

    iYear  = iYear  * 1;
    iMonth = iMonth * 1;
    iDay   = iDay   * 1;
    iVal   = iVal   * 1;

    iVal = iVal + iDay;

    while (true) {
        iMaxDay = fn_maxday_YearMonth(iYear, iMonth);
        if (iVal <= iMaxDay) {
            iDay = iVal;
            break;
        } else {
            if (iMonth == 12) {
                iYear  = iYear + 1;
                iMonth = 1;
            } else {
                iMonth = iMonth + 1;
            }
            iVal = iVal - iMaxDay;
        }
    }

    return ( iYear.toString() + fn_setFillzeroByVal(iMonth.toString(), 2) + fn_setFillzeroByVal(iDay.toString(), 2) );
}

/** =============================================
Comment: 감소된 날자 구하기 yyyy, mm, dd 로 받은 날짜에서 val만큼 더한 날짜를 리턴
Return : String (감소된 8자리 날자(YYYYMMDD))
Usage  :
--------------------------------------------- **/
function fn_date_minus(iYear, iMonth, iDay, iVal)
{
    var iMaxDay = 0;

    iYear  = iYear  * 1;
    iMonth = iMonth * 1;
    iDay   = iDay   * 1;
    iVal   = iVal   * 1;

    var isTrue = true;
    if (iDay > iVal) {
        iDay = iDay - iVal;
        isTrue = false;
    } else if (iVal == iDay) {
        iVal = 0;
    } else
        iVal = iVal - iDay;

    while (isTrue) {
        if (iMonth == 1) {
            iYear  = iYear - 1;
            iMonth = 12;
        } else {
            iMonth = iMonth - 1;
        }

        iMaxDay = fn_maxday_YearMonth(iYear, iMonth);

        if (iVal == 0) {
            iVal = iMaxDay;
            iDay = iVal;
            break;
        } else if (iVal < iMaxDay) {
            iDay = iMaxDay - iVal;
            break;
        } else {
            iVal = iVal - iMaxDay;
        }
    }

    return ( iYear.toString() + fn_setFillzeroByVal(iMonth.toString(), 2) + fn_setFillzeroByVal(iDay.toString(), 2) );
}


/**
 *
 * 날짜관련 자바스크립트 공통함수
 *
 * 분단위 이하(= 초)는 고려하지 않았습니다.
 * YYYYMMDDHHMI 형식의 String => 'Time'으로 칭함
 *
 * 주로 YYYYMMDD 까지만 쓰인다면 아래 함수들을
 * YYYYMMDD 형식의 String => 'Date'로 하여 적당히
 * 수정하시거나 아니면 함수를, 예를들어 isValidDate()처럼,
 * 추가하시기 바랍니다.
 */


/**
 * 유효한(존재하는) 월(月)인지 체크
 */
function isValidMonth(mm) {
	var m = parseInt(mm,10);
	return (m >= 1 && m <= 12);
}

/**
 * 유효한(존재하는) 일(日)인지 체크
 */
function isValidDay(yyyy, mm, dd) {
	var m = parseInt(mm,10) - 1;
	var d = parseInt(dd,10);
	
	var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
		end[1] = 29;
	}
	
	return (d >= 1 && d <= end[m]);
}

/**
 * 유효한(존재하는) 시(時)인지 체크
 */
function isValidHour(hh) {
	var h = parseInt(hh,10);
	return (h >= 1 && h <= 24);
}

/**
 * 유효한(존재하는) 분(分)인지 체크
 */
function isValidMin(mi) {
	var m = parseInt(mi,10);
	return (m >= 1 && m <= 60);
}

/**
 * Time 형식인지 체크(느슨한 체크)
 */
function isValidTimeFormat(time) {
 	return (!isNaN(time) && time.length == 12);
}

/**
 * 유효하는(존재하는) Time 인지 체크
 * ex) var time = form.time.value; //'200102310000'
 * if (!isValidTime(time)) {
 * alert("올바른 날짜가 아닙니다.");
 * }
 */
function isValidTime(time) {
	var year = time.substring(0,4);
	var month = time.substring(4,6);
	var day = time.substring(6,8);
	var hour = time.substring(8,10);
	var min = time.substring(10,12);
	
	if (parseInt(year,10) >= 1900 && isValidMonth(month) &&
		isValidDay(year,month,day) && isValidHour(hour) &&
		isValidMin(min)) {
		return true;
	}
	return false;
}

/**
 * Time 스트링을 자바스크립트 Date 객체로 변환
 * parameter time: Time 형식의 String
 */
function toTimeObject(time) { //parseTime(time)
	var year = time.substr(0,4);
	var month = time.substr(4,2) - 1; // 1월=0,12월=11
	var day = time.substr(6,2);
	var hour = time.substr(8,2);
	var min = time.substr(10,2);
	
	return new Date(year,month,day,hour,min);
}

/**
 * 자바스크립트 Date 객체를 Time 스트링으로 변환
 * parameter date: JavaScript Date Object
 */
function toTimeString(date) { //formatTime(date)
	var year = date.getFullYear();
	var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	
	if (("" + month).length == 1) { month = "0" + month; }
	if (("" + day).length == 1) { day = "0" + day; }
	if (("" + hour).length == 1) { hour = "0" + hour; }
	if (("" + min).length == 1) { min = "0" + min; }
	
	return ("" + year + month + day + hour + min)
}

/**
 * Time이 현재시각 이후(미래)인지 체크
 */
function isFutureTime(time) {
 	return (toTimeObject(time) > new Date());
}

/**
 * Time이 현재시각 이전(과거)인지 체크
 */
function isPastTime(time) {
 	return (toTimeObject(time) < new Date());
}

/**
 * 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴
 * ex) var time = form.time.value; //'20000101000'
 * alert(shiftTime(time,0,0,-100,0));
 * => 2000/01/01 00:00 으로부터 100일 전 Time
 */
function shiftTime(time,y,m,d,h) { //moveTime(time,y,m,d,h)
	var date = toTimeObject(time);
	
	date.setFullYear(date.getFullYear() + y); //y년을 더함
	date.setMonth(date.getMonth() + m); //m월을 더함
	date.setDate(date.getDate() + d); //d일을 더함
	date.setHours(date.getHours() + h); //h시를 더함
	
	return toTimeString(date);
}

/**
 * 두 Time이 몇 개월 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getMonthInterval(time1,time2) { //measureMonthInterval(time1,time2)
	var date1 = toTimeObject(time1);
	var date2 = toTimeObject(time2);
	
	var years = date2.getFullYear() - date1.getFullYear();
	var months = date2.getMonth() - date1.getMonth();
	var days = date2.getDate() - date1.getDate();
	
	return (years * 12 + months + (days >= 0 ? 0 : -1) );
}

/**
 * 두 Time이 며칠 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getDayInterval(time1,time2) {
	var date1 = toTimeObject(time1);
	var date2 = toTimeObject(time2);
	var day = 1000 * 3600 * 24; //24시간

 	return parseInt((date2 - date1) / day, 10);
}

/**
 * 두 Time이 몇 시간 차이나는지 구함
 * time1이 time2보다 크면(미래면) minus(-)
 */
function getHourInterval(time1,time2) {
	var date1 = toTimeObject(time1);
	var date2 = toTimeObject(time2);
	var hour = 1000 * 3600; //1시간

 	return parseInt((date2 - date1) / hour, 10);
}

/**
 * 현재 시각을 Time 형식으로 리턴
 */
function getCurrentTime() {
 	return toTimeString(new Date());
}

/**
 * 현재 시각과 y년 m월 d일 h시 차이나는 Time을 리턴
 */
function getRelativeTime(y,m,d,h) {
	/*
	 var date = new Date();
	
	 date.setFullYear(date.getFullYear() + y); //y년을 더함
	 date.setMonth(date.getMonth() + m); //m월을 더함
	 date.setDate(date.getDate() + d); //d일을 더함
	 date.setHours(date.getHours() + h); //h시를 더함
	
	 return toTimeString(date);
	*/
 	return shiftTime(getCurrentTime(),y,m,d,h);
}

/**
 * 현재 年을 YYYY형식으로 리턴
 */
function getYear() {
	/*
	 var now = new Date();
	 return now.getFullYear();
	*/
 	return getCurrentTime().substr(0,4);
}

/**
 * 현재 月을 MM형식으로 리턴
 */
function getMonth() {
	/*
	 var now = new Date();
	
	 var month = now.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
	 if (("" + month).length == 1) { month = "0" + month; }
	
	 return month;
	*/
 	return getCurrentTime().substr(4,2);
}

/**
 * 현재 日을 DD형식으로 리턴
 */
function getDay() {
	/*
	 var now = new Date();
	
	 var day = now.getDate();
	 if (("" + day).length == 1) { day = "0" + day; }
	
	 return day;
	*/
	return getCurrentTime().substr(6,2);
}

/**
 * 현재 時를 HH형식으로 리턴
 */
function getHour() {
	/*
	 var now = new Date();
	
	 var hour = now.getHours();
	 if (("" + hour).length == 1) { hour = "0" + hour; }
	
	 return hour;
	*/
	return getCurrentTime().substr(8,2);
}

/**
 * 오늘이 무슨 요일이야?
 * ex) alert('오늘은 ' + getDayOfWeek() + '요일입니다.');
 * 특정 날짜의 요일을 구하려면? => 여러분이 직접 만들어 보세요.
 */
function getDayOfWeek() {
	var now = new Date();

 	var day = now.getDay(); //일요일=0,월요일=1,...,토요일=6
 	var week = new Array('일','월','화','수','목','금','토');

 	return week[day];
}  


function isValidYmd(theDate)
{
    yy = parseInt(theDate.substring(0,4),10); 
    mm = parseInt(theDate.substring(4,6),10); 
    dd = parseInt(theDate.substring(6,8),10); 
    if (mm == 1) 
                max_days = 31 
    else if (mm == 2) { 
        if ((( yy % 4 == 0) && (yy % 100 != 0)) || (yy % 400 == 0)) 
                        max_days = 29; 
                else 
                        max_days = 28; 
    } 
    else if (mm == 3) 
                        max_days = 31;
    else if (mm == 4) 
                        max_days = 30;
    else if (mm == 5) 
                        max_days = 31;
    else if (mm == 6) 
            max_days = 30;
    else if (mm == 7) 
            max_days = 31;
    else if (mm == 8) 
            max_days = 31;
    else if (mm == 9) 
            max_days = 30;
    else if (mm == 10) 
            max_days = 31;
    else if (mm == 11) 
            max_days = 30;
    else if (mm == 12) 
            max_days = 31;
    else { 
                alert("입력한 월(1-12)이 틀립니다.."); 
        return false; 
    } if (dd < 1 || dd > max_days) { 
                alert(mm + "월에는 " + max_days + "일까지만 선택해야 합니다."); 
        return false;
        } else 
                return true;
}

/* 날짜 체크루틴 ex) YYYYMMDD or YYYY/MM/DD
    <input type="text" name="Tb_CntrYyyymm" size="8" maxlength=10
    onBlur="javascript:isValidDate(form.Tb_CntrYyyymm);"> */
function isValidDate(theDate)
{
    var checkStr = RemoveChr(theDate.value,'-');

        if (!isFieldBlank(theDate)) {
                var numStr = "-0123456789";

                for ( var j = 0 ; j < theDate.value.length ; j++ )
                {
                        if ( numStr.indexOf( theDate.value.charAt(j) ) == -1 ) {
                                alert("숫자만 [YYYYMMDD] 또는 [YYYY-MM-DD] 형태로 입력하세요.");
                        theDate.value = "";
                        theDate.focus();
                        return false;
                        }
                }

                if (checkStr.length != 8) { 
                        alert("[YYYYMMDD] 또는 [YYYY-MM-DD] 형태로 입력하세요."); 
                   theDate.value = "";
                   theDate.focus();
                   return false; 
                } else if (!isValidYmd(checkStr)) {
                   theDate.value = "";
                   theDate.focus();
                   return false;
                } else{
                        theDate.value = checkStr.substring(0,4) + "-" + checkStr.substring(4,6) + "-" + checkStr.substring(6,8)
                        return true;
                }
        }
        return true;
}
/* 입력받은 문자를 제거한다 */
function RemoveChr( theDate, remChr )
{
        var RemString="";

        for( j=0; j<=theDate.length-1; j++)
                if( theDate.charAt(j) != remChr )
                        RemString = RemString + theDate.charAt(j);

        return RemString;
}

function isFieldBlank(theField) 
{ 
    var str = theField.value;
        return (str == "" || str.charAt(0) == " ") ? true : false;
} 