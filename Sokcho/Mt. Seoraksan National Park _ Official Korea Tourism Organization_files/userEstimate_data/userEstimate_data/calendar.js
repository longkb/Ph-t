
	var target;																	// 호출한 Object의 저장
	var stime;
	document.write("<div id=minical oncontextmenu='return false' ondragstart='return false' onselectstart='return false' style=\"background:buttonface; margin:5; padding:5;margin-top:2;border-top:1 solid buttonshadow;border-left: 1 solid buttonshadow;border-right: 1 solid buttonshadow;border-bottom:1 solid buttonshadow;width:160;display:none;position: absolute; z-index: 99\" onmouseleave=doHide();></div>");

function Calendar(obj, event) {
												// jucke
	var now = obj.value.split("-");
	var x, y;
	
	target = obj;																// Object 저장;

	x = event.clientX;
	y = event.clientY;
	minical.style.top = y+5;
	minical.style.left = x-50;
	minical.style.display = (minical.style.display == "block") ? "none" : "block";

	if (now.length == 3) {														// 정확한지 검사
		Show_cal(now[0], now[1], now[0],now[1],now[2]);							// 넘어온 값을 년월일로 분리
	} else {
		now = new Date();
		Show_cal(now.getFullYear(), now.getMonth()+1, now.getFullYear(), now.getMonth()+1, now.getDate());		// 현재 년/월/일을 설정하여 넘김.
	}
}
	
function doOver() {																// 마우스가 칼렌다위에 있으면
	var el = window.event.srcElement;
	cal_Day = el.title;

	if (cal_Day.length > 7) {													// 날자 값이 있으면.
		el.style.borderTopColor = el.style.borderLeftColor = "buttonhighlight";
		el.style.borderRightColor = el.style.borderBottomColor = "buttonshadow";
	}
	window.clearTimeout(stime);													// Clear
}

function doClick(cal_Day) {															// 날자를 선택하였을 경우
//	cal_Day = window.event.srcElement.title;
//	window.event.srcElement.style.borderColor = "red";							// 테두리 색을 빨간색으로
	if (cal_Day.length > 7) {													// 날자 값이있으면
		target.value=cal_Day													// 값 설정
	}
	minical.style.display='none';												// 화면에서 지움
}

function doOut() {
	var el = window.event.fromElement;
	cal_Day = el.title;

	if (cal_Day.length > 7) {
		el.style.borderColor = "white";
	}
	//stime=window.setTimeout("minical.style.display='none';", 200);
}

function doHide() {
	stime=window.setTimeout("minical.style.display='none';", 1000);
	//minical.style.display='none';
}

function day2(d) {																// 2자리 숫자료 변경
	var str = new String();
	
	if (parseInt(d) < 10) {
		str = "0" + parseInt(d);
	} else {
		str = "" + parseInt(d);
	}
	return str;
}

function Show_cal(vYear, vMonth, sYear, sMonth, sDay) {
	var Months_day = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31)
	var Weekday_name = new Array("일", "월", "화", "수", "목", "금", "토");
	var intThisYear = new Number(), intThisMonth = new Number(), intThisDay = new Number();
	var intViewYear = new Number(), intViewMonth = new Number();
	document.all.minical.innerHTML = "";
	datToday = new Date();													// 현재 날자 설정
	

	intThisYear = parseInt(sYear);
	intThisMonth = parseInt(sMonth);
	intThisDay = parseInt(sDay);

	intViewYear = parseInt(vYear);
	intViewMonth = parseInt(vMonth);
	
	if (intThisYear == 0) intThisYear = datToday.getFullYear();				// 값이 없을 경우
	if (intThisMonth == 0) intThisMonth = parseInt(datToday.getMonth())+1;	// 월 값은 실제값 보다 -1 한 값이 돼돌려 진다.
	if (intThisDay == 0) intThisDay = datToday.getDate();
	
	if (intViewYear == 0) intViewYear = datToday.getFullYear();
	if (intViewMonth == 0) intViewMonth = parseInt(datToday.getMonth())+1;
	
	switch(intViewMonth) {
		case 1:
				intPrevYear = intViewYear -1;
				intPrevMonth = 12;
				intNextYear = intViewYear;
				intNextMonth = 2;
				break;
		case 12:
				intPrevYear = intViewYear;
				intPrevMonth = 11;
				intNextYear = intViewYear + 1;
				intNextMonth = 1;
				break;
		default:
				intPrevYear = intViewYear;
				intPrevMonth = parseInt(intViewMonth) - 1;
				intNextYear = intViewYear;
				intNextMonth = parseInt(intViewMonth) + 1;
				break;
	}

	NowThisYear = datToday.getFullYear();										// 현재 년
	NowThisMonth = datToday.getMonth()+1;										// 현재 월
	NowThisDay = datToday.getDate();											// 현재 일
	
	datFirstDay = new Date(intViewYear, intViewMonth-1, 1);						// 현재 달의 1일로 날자 객체 생성(월은 0부터 11까지의 정수(1월부터 12월))
	intFirstWeekday = datFirstDay.getDay();										// 현재 달 1일의 요일을 구함 (0:일요일, 1:월요일)
	
	intSecondWeekday = intFirstWeekday;
	intThirdWeekday = intFirstWeekday;
	
	datThisDay = new Date(intThisYear, intThisMonth, intThisDay);				// 넘어온 값의 날자 생성
	intThisWeekday = datThisDay.getDay();										// 넘어온 날자의 주 요일

	varThisWeekday = Weekday_name[intThisWeekday];								// 현재 요일 저장
	
	intPrintDay = 1																// 달의 시작 일자
	secondPrintDay = 1
	thirdPrintDay = 1
	
	Stop_Flag = 0
	
	if ((intViewYear % 4)==0) {													// 4년마다 1번이면 (사로나누어 떨어지면)
		if ((intViewYear % 100) == 0) {
			if ((intViewYear % 400) == 0) {
				Months_day[2] = 29;
			}
		} else {
			Months_day[2] = 29;
		}
	}
	intLastDay = Months_day[intViewMonth];										// 마지막 일자 구함
	Stop_flag = 0
	
	Cal_HTML = "<TABLE WIDTH=100% BORDER=0 CELLPADDING=0 CELLSPACING=0 ONMOUSEOVER=doOver(); ONMOUSEOUT=doOut(); STYLE='font-size:8pt;font-family:Tahoma;'>"
			+ "<TR ALIGN=CENTER><TD COLSPAN=7 nowrap=nowrap ALIGN=CENTER><SPAN TITLE='이전달' STYLE=cursor:hand; onClick='Show_cal("+intPrevYear+","+intPrevMonth+","+intThisYear+","+intThisMonth+","+intThisDay+");'><FONT COLOR=Navy>◀</FONT></SPAN> "
			+ "<B STYLE=color:red>"+get_Yearinfo(intViewYear,intViewMonth,intThisYear,intThisMonth,intThisDay)+"년"+get_Monthinfo(intViewYear,intViewMonth,intThisYear,intThisMonth,intThisDay)+"월</B>"
			+ " <SPAN TITLE='다음달' STYLE=cursor:hand; onClick='Show_cal("+intNextYear+","+intNextMonth+","+intThisYear+","+intThisMonth+","+intThisDay+");'><FONT COLOR=Navy>▶</FONT></SPAN></TD></TR>"
			+ "<TR ALIGN=CENTER BGCOLOR=ThreedFace STYLE='color:White;font-weight:bold;'><TD>일</TD><TD>월</TD><TD>화</TD><TD>수</TD><TD>목</TD><TD>금</TD><TD>토</TD></TR>";
			
	for (intLoopWeek=1; intLoopWeek < 7; intLoopWeek++) {						// 주단위 루프 시작, 최대 6주
		Cal_HTML += "<TR ALIGN=RIGHT BGCOLOR=WHITE>"
		for (intLoopDay=1; intLoopDay <= 7; intLoopDay++) {						// 요일단위 루프 시작, 일요일 부터
			if (intThirdWeekday > 0) {											// 첫주 시작일이 1보다 크면
				Cal_HTML += "<TD>";
				intThirdWeekday--;
			} else {
				if (thirdPrintDay > intLastDay) {								// 입력 날짝 월말보다 크다면
					Cal_HTML += "<TD style:cursor:hand>";
				} else {														// 입력날짜가 현재월에 해당 되면
					Cal_HTML += "<TD style:cursor:hand title="+intViewYear+"-"+day2(intViewMonth).toString()+"-"+day2(thirdPrintDay).toString()+" STYLE=\"cursor:Hand;border:1px solid white;";

					if (intThisYear==intViewYear && intThisMonth==intViewMonth && intThisDay==thirdPrintDay) {
						Cal_HTML += "background-color:cyan;";
					}
					
					switch(intLoopDay) {
						case 1:													// 일요일이면 빨간 색으로
							Cal_HTML += "color:red;"
							break;
						case 7:
							Cal_HTML += "color:blue;"
							break;
						default:
							Cal_HTML += "color:black;"
							break;
					}
					
					Cal_HTML += "\">"+"<a href=\"#\" onclick=\"javascript:doClick('" + (intViewYear + "-" + day2(intViewMonth).toString() + "-" + day2(thirdPrintDay).toString()) + "');\">" + thirdPrintDay + "</a>";
				}
				thirdPrintDay++;
				
				if (thirdPrintDay > intLastDay) {								// 만약 날짜 값이 월말 값보다 크면 루프문 탈출
					Stop_Flag = 1;
				}
			}
			Cal_HTML += "</TD>";
		}
		Cal_HTML += "</TR>";
		if (Stop_Flag==1) break;
	}
	Cal_HTML += "<TR><TD colspan=7 onclick=doClick(); title="+NowThisYear+"-"+day2(NowThisMonth).toString()+"-"+day2(NowThisDay).toString()+" style='cursor:hand;'>오늘 : "+NowThisYear+"-"+day2(NowThisMonth).toString()+"-"+day2(NowThisDay).toString()+"</TD></TR>";
	Cal_HTML += "</TABLE>";

	document.all.minical.innerHTML = Cal_HTML;
}

function get_Yearinfo(vyear,vmonth,year,month,day) {								// 년 정보를 콤보 박스로 표시
	/*
	var min = parseInt(vyear) - 100;
	var max = parseInt(vyear) + 10;
	*/
	var datToday = new Date();
	var min = parseInt(datToday.getFullYear()) - 10;
	var max = parseInt(datToday.getFullYear()) + 10;
	var i = new Number();
	var str = new String();

	str = "<SELECT onChange='Show_cal(this.value,"+vmonth+","+year+","+month+","+day+");' ONMOUSEOVER=doOver();>";
	for (i=min; i<=max; i++) {
		if (i == parseInt(vyear)) {
			str += "<OPTION VALUE="+i+" selected ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		} else {
			str += "<OPTION VALUE="+i+" ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		}
	}
	str += "</SELECT>";
	return str;
}


function get_Monthinfo(vyear,vmonth,year,month,day) {								// 월 정보를 콤보 박스로 표시
	var i = new Number();
	var str = new String();
	
	str = "<SELECT onChange='Show_cal("+vyear+",this.value,"+year+","+month+","+day+");' ONMOUSEOVER=doOver();>";
	for (i=1; i<=12; i++) {
		if (i == parseInt(vmonth)) {
			str += "<OPTION VALUE="+i+" selected ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		} else {
			str += "<OPTION VALUE="+i+" ONMOUSEOVER=doOver();>"+i+"</OPTION>";
		}
	}
	str += "</SELECT>";
	return str;
}