    /**
	 * 제한 사이즈 초과시 에러 메시지 출력
	 */
	function overSize( limitSize )
	{
		var message = "허용 업로드 사이즈는 " + limitSize + "입니다.";

		alert( message );
	}

	/**
	 * 플래쉬 파일 리스트에 추가된 파일을 전송
	 */
	//function fileUpload(obj, flag)
	function fileUpload(obj)
	{
		/*
		//파일등록이 필수인지 체크 
		if(flag==true && totalSize == 0 ){
			alert("파일첨부는 필수 입력 항목입니다.");
			return;
		}*/

		// 동일 SESSION ID에 이미 등록 되어 있는 파일이 있는경우 삭제 
		fileDelete();
		
	    /*
	    if(validate(obj)== false){
			return false;
		}
		*/
		
		var movie = window.document.upload;
		var totalSize = movie.GetVariable("totalSize");

		// 업로드된 파일이 있을 경우 실행
		if( totalSize > 0 )
		{
			movie.SetVariable( "fileUpload", "" );
			
			// 전송 버튼 비활성화
//			obj.send_button.disabled = true;
		}
		else
		{
			// 업로드 완료 후 처리 메쏘드 실행
		    send();
		}
	}
	
	/**
	 * 동일 SESSION ID에 이미 등록 되어 있는 파일이 있는경우 삭제 
	 */	
	function fileDelete(){
		
		//동일 SESSIONID에  남아있는 첨부파일 내역 삭제                 
		var xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
		
		//파일 삭제 jsp 호출
		xmlhttp.open('GET','/kor/common/uploadx/fileDelete.jsp',false);
		xmlhttp.send();			
	}
	
	/**
	 * 허용하지 않은 형식의 파일일 경우 에러 메시지 출력
	 */
	function fileTypeError( notAllowFileType )
	{
		alert("확장자가 " + notAllowFileType + "인 파일들은 업로드 할수 없습니다.");
	}

	/**
	 * 플래쉬 버전이 8 미만일 경우 에러 메시지 출력
	 */
	function versionError()
	{
		alert("플래쉬 버전을 확인하여 주십시오.( 버전 8 이상만 가능합니다. )\n이미 설치하신 경우는 브라우저를 전부 닫고 다시 시작하여 주십시오.");
	}

	/**
	 * http 에러 발생시 출력 메시지
	 */
	function httpError()
	{
		alert("네트워크 에러가 발생하였습니다. 잠시후 다시 시도하여 주십시오.");
	
	}

	/**
	 * 파일 입출력 에러 발생시 출력 메시지
	 * ( 주로 업로드 하려는 파일을 다른 프로그램에서 사용중일 경우 발생 )
	 */
	function ioError()
	{
		alert("입출력 에러가 발생하였습니다.\n( 다른 프로그램에서 이 파일을 사용하고 있는지 확인하신 후 다시 시도하여 주십시오. )");
	}


