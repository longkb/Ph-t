
function validateNumber() {
	e = window.event; //윈도우의 event를 잡는것입니다. 그냥 써주심됩니당.
	
	//숫자열 0 ~ 9 : 48 ~ 57, 키패드 0 ~ 9 : 96 ~ 105 ,8 : backspace, 46 : delete -->키코드값을 구분합니다. 저것들이 숫자랍니다.
	if(e.keyCode >= 48 && e.keyCode <= 57 || 
	   e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode == 8 || e.keyCode == 46) {

		//0을 눌렀을경우
        if(e.keyCode == 48 || e.keyCode == 96) {
			
			//아무것도 없는상태에서 0을 눌렀을경우
			if(txtMileage.value == "" ) e.returnValue=false; //-->입력되지않는다.
			
			//다른숫자뒤에오는 0은
            else return; //-->입력시킨다.
		}
		
		//0이 아닌숫자
        else return; //-->입력시킨다.
	}
	//숫자가 아니면 넣을수 없다.
	else e.returnValue=false;
}

/** =============================================
Comment: 입력값(sVal)의 앞/뒤 공백을 제거한 후 길이가 0 이면 false
Return : boolean
Usage  : if (fn_isNotNullByVal(chrr_nm.value, ...) == false) return false;
--------------------------------------------- **/
function fn_isNotNullByVal()
{
    var isTrue = true;
    var sStr = "";
    for (var ii=0; ii < arguments.length; ii++) {
        sStr = fn_trim(arguments[ii]);
        if (sStr == "" || sStr == "null" || sStr == "undefined") {
            isTrue = false;
            break;
        }
    }
    return isTrue;
}

/** =============================================
Comment: 입력된 객체의 값의 앞/뒤 공백을 제거한 후 길이가 0 이면 false
Return : boolean
Usage  : fn_isNotNullByVal() 참조
--------------------------------------------- **/
function fn_isNotNullByObj()
{
    var isTrue = true;
    var sStr = "";
    for (var ii=0; ii < arguments.length; ii++) {
        obj = arguments[ii];
        if (obj.type == "text" || obj.type == "textarea") {
            sStr = fn_trim(obj.value);
            if (sStr == "" || sStr == "null" || sStr == "undefined") {
                //alert(obj.alt + "(은)는 필수 입력 항목입니다.\n입력 후 작업하세요");
                isTrue = false;
                break;
            }
        } else if (obj.type == "select-one" || obj.type == "select-multiple") {
            if (obj.selectedIndex < 1) {
                //alert(obj.alt + "(은)는 필수 입력 항목입니다.\n선택 후 작업하세요");
                isTrue = false;
                break;
            }
        }
    }
    return isTrue;
}

/** =============================================
Comment: 입력받은 text 의 앞뒤에 붙은 WhiteSpace(Space, Tab, CRLF) 제거 (값)
Return : String
Usage  :
--------------------------------------------- **/
function fn_trim(text)
{
    if (text == null) {
        return "";
    }

    var txt = text + "";
    var flag = false;

    // 앞쪽 트림
    var ii = 0;

    while (!flag) {
        var ch = txt.charAt(ii);
        if ( (ch == ' ') || (ch == '\t') || (ch == '\n') || (ch == '\r') ) {
            if (ii < txt.length) {
                ii++;
            } else {
                flag = true;
            }
        } else {
            flag = true;
        }
    }

    if (ii == (txt.length)) {
        return "";
    } else {
        txt = txt.substring(ii);
    }

    // 뒤쪽 트림
    flag = false;
    var jj = txt.length - 1;

    while (!flag) {
        var ch = txt.charAt(jj);
        if ( (ch == ' ') || (ch == '\t') || (ch == '\n') || (ch == '\r') ) {
            if ( jj > 0 ) {
                jj--;
            } else {
                flag = true;
            }
        } else {
            flag = true;
        }
    }

    txt = txt.substring(0, jj+1);
    return txt;
}

function ieActiveX(id) {
	document.write(id.innerHTML.replace("<!--","<").replace("-->",">")); id.id="";
}

function trim(str) {
	while(str && str.indexOf(" ") == 0)
	str = str.substring(1);

	while(str && str.lastIndexOf(" ") == str.length-1)
		str = str.substring(0, str.length-1);
		
	return str;
 }

/**
 * RemoveComma(Object) 숫자에 콤마를 제거하는  함수               
 * @param       Object      객체
 * @histroy     2002.3.28 최동균        
 */
function RemoveComma(InputBox)
{
        var CommaString="";
        
        for( j=0; j<=InputBox.value.length-1; j++)
                if( InputBox.value.charAt(j) != "," )
                        CommaString = CommaString + InputBox.value.charAt(j);
        
        if(InputBox.value == "0") CommaString = "0";
        InputBox.value = CommaString;
        
        return CommaString;
}


/**
 * InsertComma(Object) 숫자에 콤마를 넣는 함수              
 * @param       InputBox      객체
 * @see         RemoveComma(field)
 * @histroy     2002.3.28 최동균 
 */
function InsertComma( inputBox )
{
            var args = inputBox.value;
            
            if (args == "") return;
            
            try{
	     var keyCode =window.event.keyCode;
             if (!containsElement(keyCode)){
		            args = deleteStr(args,",");
		                var  symbol = "";
		                var idx = args.indexOf(".");
		                var CommaString = "";
		                if(idx > 0){
		                     CommaString = args.substring(idx, args.length);
		                     args = args.substring(0, idx);
		                }
		                if(args ==""){
		                        inputBox.value = args.concat(CommaString);
		                        //return args.concat(CommaString);
		                }
		                symbol = args.substring(0,1);
		                
		                if(symbol== "-") {//마이너스일때
		                        var  va = "";
		                        if(args.length <= 4){
		                                inputBox.value = args.concat(CommaString);
		                                //return args.concat(CommaString);
		                        }
		                        
		                        va = args.substring(1,args.length);
		                        var  value = "";
		                        var i = 1;
		                        var k = va.length;
		                        
		                        for(var j=va.length; j > 0; j--) {
		                                if(i%3 == 0 && i != 1 && i !=k ) {
		                                        value = ","+va.charAt(j-1)+value;
		                                }else {         
		                                        value = va.charAt(j-1)+value;
		                                }
		                                        i++;
		                        }
		                        
		                        inputBox.value = (symbol.concat(value)).concat(CommaString);    
		                        //return (symbol.concat(value)).concat(CommaString);    
		                  }
		                  //마이너스일때                        
		                else {
		                
		                if(args.length <= 3){
		                        inputBox.value =  args.concat(CommaString);
		                        //return args.concat(CommaString);;
		                }
		                var  val = args;
		                var  value = "";
		                var i = 1;
		                var k = val.length;
		                for(var j=val.length; j > 0; j--) {
		                        if(i%3 == 0 && i != 1 && i !=k ) {
		                                value = ","+val.charAt(j-1)+value;
		                        }else {         
		                                value = val.charAt(j-1)+value;
		                        }
		                                i++;
		                }
		                inputBox.value =  value.concat(CommaString);   
		//                inputBox.select();
		                //return  value.concat(CommaString);
		          }
		}
            
            }catch(e) {


		            args = deleteStr(args,",");
		                var  symbol = "";
		                var idx = args.indexOf(".");
		                var CommaString = "";
		                if(idx > 0){
		                     CommaString = args.substring(idx, args.length);
		                     args = args.substring(0, idx);
		                }
		                if(args ==""){
		                        inputBox.value = args.concat(CommaString);
		                        //return args.concat(CommaString);
		                }
		                symbol = args.substring(0,1);
		                
		                if(symbol== "-") {//마이너스일때
		                        var  va = "";
		                        if(args.length <= 4){
		                                inputBox.value = args.concat(CommaString);
		                                //return args.concat(CommaString);
		                        }
		                        
		                        va = args.substring(1,args.length);
		                        var  value = "";
		                        var i = 1;
		                        var k = va.length;
		                        
		                        for(var j=va.length; j > 0; j--) {
		                                if(i%3 == 0 && i != 1 && i !=k ) {
		                                        value = ","+va.charAt(j-1)+value;
		                                }else {         
		                                        value = va.charAt(j-1)+value;
		                                }
		                                        i++;
		                        }
		                        
		                        inputBox.value = (symbol.concat(value)).concat(CommaString);    
		                        //return (symbol.concat(value)).concat(CommaString);    
		                  }
		                  //마이너스일때                        
		                else {
		                
		                if(args.length <= 3){
		                        inputBox.value =  args.concat(CommaString);
		                        //return args.concat(CommaString);;
		                }
		                var  val = args;
		                var  value = "";
		                var i = 1;
		                var k = val.length;
		                for(var j=val.length; j > 0; j--) {
		                        if(i%3 == 0 && i != 1 && i !=k ) {
		                                value = ","+val.charAt(j-1)+value;
		                        }else {         
		                                value = val.charAt(j-1)+value;
		                        }
		                                i++;
		                }
		                inputBox.value =  value.concat(CommaString);   
		//                inputBox.select();
		                //return  value.concat(CommaString);
		          }


            }            
            
            
         
}


/**
 * deleteStr(Object.value, ch) 해당 문자를 없얘는 함수   
 * 예) deleteStr("123,456", ",") -> 123456
 * @param       theDate         값
 * @param       ch              없앨 문자 
 * @return      SlashString
 * @histroy     2002.3.28 최동균 
 */
function deleteStr(theDate, ch)
{
        var SlashString="";
        for( j=0; j<=theDate.length-1; j++)     {
                if( theDate.charAt(j) != ch )   {
                        SlashString = SlashString + theDate.charAt(j);
                }
        }
        return SlashString;
}


/**
 * addComma(Object) 콤마를 집어 넣는 함수     
 * @param       inputBox        객체
 * @see         addComma(field)
 * @histroy     2002.3.28 최동균 
 */
function addComma(inputBox){
            
            try{
    	     var keyCode =window.event.keyCode;
             if (!containsElement(keyCode)){
            	var args = inputBox.value;
            	if (args == "") return;             	

		            args = deleteStr(args,",");
		                var  symbol = "";
		                var idx = args.indexOf(".");
		                var CommaString = "";
		                if(idx > 0){
		                     CommaString = args.substring(idx, args.length);
		                     args = args.substring(0, idx);
		                }
		                if(args ==""){
		                        inputBox.value = args.concat(CommaString);
		                        //return args.concat(CommaString);
		                }
		                symbol = args.substring(0,1);
		                
		                if(symbol== "-") {//마이너스일때
		                        var  va = "";
		                        if(args.length <= 4){
		                                inputBox.value = args.concat(CommaString);
		                                //return args.concat(CommaString);
		                        }
		                        
		                        va = args.substring(1,args.length);
		                        var  value = "";
		                        var i = 1;
		                        var k = va.length;
		                        
		                        for(var j=va.length; j > 0; j--) {
		                                if(i%3 == 0 && i != 1 && i !=k ) {
		                                        value = ","+va.charAt(j-1)+value;
		                                }else {         
		                                        value = va.charAt(j-1)+value;
		                                }
		                                        i++;
		                        }
		                        
		                        inputBox.value = (symbol.concat(value)).concat(CommaString);    
		                        //return (symbol.concat(value)).concat(CommaString);    
		                  }
		                  //마이너스일때                        
		                else {
		                
		                if(args.length <= 3){
		                        inputBox.value =  args.concat(CommaString);
		                        //return args.concat(CommaString);;
		                }
		                var  val = args;
		                var  value = "";
		                var i = 1;
		                var k = val.length;
		                for(var j=val.length; j > 0; j--) {
		                        if(i%3 == 0 && i != 1 && i !=k ) {
		                                value = ","+val.charAt(j-1)+value;
		                        }else {         
		                                value = val.charAt(j-1)+value;
		                        }
		                                i++;
		                }
		                inputBox.value =  value.concat(CommaString);   
		//                inputBox.select();
		                //return  value.concat(CommaString);
		          }


             }
            
            }catch(e) {
            	var args = inputBox.value;
            	if (args == "") return;        	
		            args = deleteStr(args,",");
		                var  symbol = "";
		                var idx = args.indexOf(".");
		                var CommaString = "";
		                if(idx > 0){
		                     CommaString = args.substring(idx, args.length);
		                     args = args.substring(0, idx);
		                }
		                if(args ==""){
		                        inputBox.value = args.concat(CommaString);
		                        //return args.concat(CommaString);
		                }
		                symbol = args.substring(0,1);
		                
		                if(symbol== "-") {//마이너스일때
		                        var  va = "";
		                        if(args.length <= 4){
		                                inputBox.value = args.concat(CommaString);
		                                //return args.concat(CommaString);
		                        }
		                        
		                        va = args.substring(1,args.length);
		                        var  value = "";
		                        var i = 1;
		                        var k = va.length;
		                        
		                        for(var j=va.length; j > 0; j--) {
		                                if(i%3 == 0 && i != 1 && i !=k ) {
		                                        value = ","+va.charAt(j-1)+value;
		                                }else {         
		                                        value = va.charAt(j-1)+value;
		                                }
		                                        i++;
		                        }
		                        
		                        inputBox.value = (symbol.concat(value)).concat(CommaString);    
		                        //return (symbol.concat(value)).concat(CommaString);    
		                  }
		                  //마이너스일때                        
		                else {
		                
		                if(args.length <= 3){
		                        inputBox.value =  args.concat(CommaString);
		                        //return args.concat(CommaString);;
		                }
		                var  val = args;
		                var  value = "";
		                var i = 1;
		                var k = val.length;
		                for(var j=val.length; j > 0; j--) {
		                        if(i%3 == 0 && i != 1 && i !=k ) {
		                                value = ","+val.charAt(j-1)+value;
		                        }else {         
		                                value = val.charAt(j-1)+value;
		                        }
		                                i++;
		                }
		                inputBox.value =  value.concat(CommaString);   
		//                inputBox.select();
		                //return  value.concat(CommaString);
		          }
            }
         
}


/**
 * addCommaString(숫자형 문자열)                     
 * 숫자형 문자열에 콤마를 넣어서 return함
 * @param       숫자형 String
 * @histroy     2005.11.16 이형욱
 */ 
function addCommaString(args){
	try{
		args = deleteStr(args,",");
		var  symbol = "";
		var idx = args.indexOf(".");
		var CommaString = "";
		if(idx > 0){
			CommaString = args.substring(idx, args.length);
			args = args.substring(0, idx);
		}
		
		symbol = args.substring(0,1);
		
		if(symbol== "-"){//마이너스일때
			var  va = "";
			if(args.length <= 4){
				return args.concat(CommaString);
			}

			va = args.substring(1,args.length);
			var  value = "";
			var i = 1;
			var k = va.length;

			for(var j=va.length; j > 0; j--) {
				if(i%3 == 0 && i != 1 && i !=k ) {
					value = ","+va.charAt(j-1)+value;
				}else {         
					value = va.charAt(j-1)+value;
				}
				i++;
			}
			
			return	(symbol.concat(value)).concat(CommaString);
		
		}else {
		
			if(args.length <= 3){
				return args.concat(CommaString);;
			}
			var  val = args;
			var  value = "";
			var i = 1;
			var k = val.length;
			for(var j=val.length; j > 0; j--) {
				if(i%3 == 0 && i != 1 && i !=k ) {
					value = ","+val.charAt(j-1)+value;
				}else {         
					value = val.charAt(j-1)+value;
				}
				i++;
			}
			
			return  value.concat(CommaString);
		}
            
	}catch(e) {
		var args = inputBox.value;
		if (args == "") return;        	
		args = deleteStr(args,",");
		var  symbol = "";
		var idx = args.indexOf(".");
		var CommaString = "";
		if(idx > 0){
			CommaString = args.substring(idx, args.length);
			args = args.substring(0, idx);
		}
		if(args ==""){
			return args.concat(CommaString);
		}
		symbol = args.substring(0,1);
		
		if(symbol== "-") {//마이너스일때
			var  va = "";
			if(args.length <= 4){
				return args.concat(CommaString);
			}
			va = args.substring(1,args.length);
			var  value = "";
			var i = 1;
			var k = va.length;
		                        
			for(var j=va.length; j > 0; j--) {
				if(i%3 == 0 && i != 1 && i !=k ) {
					value = ","+va.charAt(j-1)+value;
				}else {         
					value = va.charAt(j-1)+value;
				}
				i++;
			}
			return (symbol.concat(value)).concat(CommaString);    

		}else {
			if(args.length <= 3){
				return args.concat(CommaString);;
			}
			var  val = args;
			var  value = "";
			var i = 1;
			var k = val.length;
			for(var j=val.length; j > 0; j--) {
				if(i%3 == 0 && i != 1 && i !=k ) {
					value = ","+val.charAt(j-1)+value;
				}else {         
					value = val.charAt(j-1)+value;
				}
				i++;
			}
			return  value.concat(CommaString);
		}
	}
}


/**
 * isValidHour(Object) 시간 체크                    
 * @param       hour          시간
 * @return      true, false
 * @see         isNumber
 * @histroy     2002.3.28 최동균 
 */  
function isValidHour( hour )
{

      if(isNumber(hour.value) == false ){
         alert("시간이 올바르지 않습니다..");
         hour.focus();
         return false;
       }

      var sHourNo = parseInt(hour.value);
      if(sHourNo < 0 || sHourNo > 23){
         alert("00-23 사이의 시간을 입력하여 주십시오..");
         hour.focus();
         return false;
      }
}


/**
 * isValidMin(Object) 분 체크                    
 * @param       min           분
 * @return      true, false
 * @see         isNumber
 * @histroy     2002.3.28 최동균 
 */ 
function isValidMin( min )
{
      if(isNumber(min.value) == false ){
         alert("분이 올바르지 않습니다..");
         min.focus();
         return false;
       }

      var sMinNo = min.value;
      if(sMinNo < 0 || sMinNo > 59){
         alert("00-59 사이의 분을 입력하여 주십시오..");
         min.focus();
         return false;
      }
}

/**
 * isNumeric(Object) 필드가 숫자인지를 체크하는 함수 
 * @param       theField               필드
 * @return      true, false
 * @see         token(Object) 
 * @histroy      
 * 2005.09.28 이형욱 체크 결과를 alert 하도록 바꿈 
 */ 
function isNumeric(theField)
{
	try{
		var keyCode =window.event.keyCode;
		if (!containsElement(keyCode)){	
			var result = token(theField);
			if(result == "invalid"){
				alert('숫자만 입력가능합니다');
				theField.value = "";	
				theField.focus();				        			
			}	
				return;
		}	
	} catch(e) {	
		var result = token(theField);
		return (result == "invalid") ? false : true;
	}	
}

 //delete키와 그밖에 backspace키를 거르기 위한 메소드
function containsElement(keycd) 
{ 
//        var arr = [0,8,9,13,16,17,18,37,38,39,40,46];            	
        var arr = [8,9,13,16,17,18,37,38,39,40,46];            	        
	var found = false, index = 0; 
	while(!found && index < arr.length) 
	if(arr[index] == keycd) 
	found = true; 
	else 
	index++; 
	return found; 
}

/**
 * token(Object) 값의 타입을 체크 하는 함수 
 * @param       num            값
 * @return      ctype = "integer", "float", "invalid"
 * @histroy     
 */ 
function token(theField)
{
        var Status = 0;
        var num=0;
        var i;
        var ctype = "";
        
        i = 0;
        while (i < theField.value.length) {
                num = theField.value.charAt(i);
                if (Status == 0) {
                        if (isDigit(num)) {
                                Status = 1;
                                i++;  
                        } else {
                                Status = 10;
                                break;
                        }
                } else if (Status == 1) {
                        if (isDigit(num)) {
                                Status = 1;
                                i++;
                        } else if (num == ".") {
                                Status = 2;
                                i++;
                        } else {
                                Status = 10;
                                break;
                        }
                } else if (Status == 2) {
                        if (isDigit(num)) {
                                i++;
                        } else {
                                Status = 10;
                                break;
                        }
                }
        }

        if (Status == 1)        ctype = "integer";
        else if (Status == 2)   ctype = "float";
        else if (Status == 10)  ctype = "invalid";

        return ctype;
}

/**
 * isDigit(num) 값이 숫자 인지 체크하는 함수 
 * @param       num            값
 * @return      true, false
 * @histroy       
 */ 
function isDigit(num)
{

	try{
		var keyCode =window.event.keyCode;
	       if (!containsElement(keyCode)){	
    			return (num >= "0" && num <= "9") ? true : false; 
		}	
	
	} catch(e) {	
    		return (num >= "0" && num <= "9") ? true : false; 
      	}	
}

/**
 * isNumber(numValue) 숫자 체크 루틴 
 * @param       numValue              숫자
 * @return      allValid
 * @histroy     2002.3.28 최동균 
 */  
function isNumber(numValue)
{
      var checkOK = "-0123456789";
      var checkStr = numValue;
      var allValid = true;
      var decPoints = 0;
      var allNum = "";
      
      /* 숫자인가? */
      for (i = 0;  i < checkStr.length;  i++)
      {
        ch = checkStr.charAt(i);
        for (j = 0;  j < checkOK.length;  j++)
          if (ch == checkOK.charAt(j))
            break;
        if (j == checkOK.length)
        {
          allValid = false;
          break;
        }
      }
      return allValid;
}
