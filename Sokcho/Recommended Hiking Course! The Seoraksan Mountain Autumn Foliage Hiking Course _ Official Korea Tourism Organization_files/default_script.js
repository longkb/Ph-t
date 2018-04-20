// JavaScript Document
try {
  document.execCommand('BackgroundImageCache', false, true);
} catch(e) {}

function code_change(code) {
	for ( var i=0; i<menuCode.length; i++ ) {
		if ( code == menuCode[i][0] ) {
			return menuCode[i][1];
		}
	}
}

pagenum = code_change(pagecode);

function show_top_menu(val) {
	var obj1Depth = document.getElementById("Lang_TopMenu_1Depth").getElementsByTagName("dl")[0].getElementsByTagName("dt");
	var obj2Depth = document.getElementById("Lang_TopMenu_1Depth").getElementsByTagName("dl")[0].getElementsByTagName("dd");
	for ( var i=0; i < obj1Depth.length; i++ ) {
		var obj1DepthMenu = obj1Depth.item(i).getElementsByTagName("a")[0];
		var obj2DepthMenu = obj2Depth.item(i);
		if ( i ==  val ) {
			obj1DepthMenu.className = "on";
			obj2DepthMenu.style.display = "block";
		} else {
			obj1DepthMenu.className = null;
			obj2DepthMenu.style.display = "none";
		}
	}
}

function show_top_menu_fn(val) {
	var current_top_menu = Number(val.substring(0,2)) - 1;
	show_top_menu(current_top_menu);
}

function show_menu(code) {
	var menu_code;
	var array_depth_3 = new Array();
	var array_depth_4 = new Array();
	var array_depth_5 = new Array();
	var array_depth_6 = new Array();
	var count_3 = 0; var count_4 = 0; var count_5 = 0; var count_6 = 0;
	var depth_3 = 0; var depth_4 = 0; var depth_5 = 0; var depth_6 = 0;
	var display_3 = 0; var display_4 = 0; var display_5 = 0; var display_6 = 0;
	var menu_total = menu.length;
	var current_menu = code.substring(0,4);
	var current_menu_file = "";
	var next_menu_file = "";
	var current_menu_code = "";	
	var objBox = document.getElementById("Left_Menu_Box");
	
	for ( var i=0; i<menu_total; i++ ) {
		menu_code = menu[i][0];
		if ( current_menu == menu[i][0] ) {
			var current_menu_alt = menu[i][1];
			current_menu_file = menu[i][2];
			current_menu_code = menu[i][0];
			if ( i != menu_total -1 ) {
				for (var k = i+1; k < menu_total; k++) {
					next_menu_file = menu[k][2];
					if (next_menu_file != '#' && next_menu_file != '') {
						break;
					}
				}
			}			
		}
		if ( current_menu == menu_code.substring(0,4) ) {
			if ( menu_code.length == 6 ) {
				array_depth_3[count_3] = new Array(menu_code,menu[i][1],menu[i][2],menu[i][3],"off");
				count_3++; depth_3++;
				depth_4 = 0;
			} else if ( menu_code.length == 8 ) {
				array_depth_4[count_4] = new Array(menu_code,menu[i][1],menu[i][2],menu[i][3],"off",depth_3-1);
				count_4++; depth_4++;
				depth_5 = 0;
			} else if ( menu_code.length == 10 ) {
				array_depth_5[count_5] = new Array(menu_code,menu[i][1],menu[i][2],menu[i][3],"off",depth_3-1,depth_4-1);
				count_5++; depth_5++;
				depth_6 = 0;
			} else if (menu_code.length == 4){
				array_depth_3[count_3] = new Array(menu_code,menu[i][1],menu[i][2],menu[i][3],"off");
				depth_4 = 0;
			}
		}
	}

	depth_3 = 0;
	for ( var i=0; i<array_depth_3.length; i++ ) {
		depth_4 = 0;
		for ( var j=0; j<array_depth_4.length; j++ ) { 
			if ( array_depth_4[j][5] == depth_3 ) {
				array_depth_3[i][4] = "on";
				depth_5 = 0;
				for ( var k=0; k<array_depth_5.length; k++ ) {
					if ( array_depth_5[k][5] == depth_3 && array_depth_5[k][6] == depth_4 ) {
						array_depth_4[j][4] = "on";
						for ( var l=0; l<array_depth_6.length; l++ ) {
							if ( array_depth_6[l][5] == depth_3 && array_depth_6[l][6] == depth_4 && array_depth_6[l][7] == depth_5 ) {
								array_depth_5[k][4] = "on";
							}
						}
						depth_5++;
					}
				}
				depth_4++;
			}
		}
		depth_3++;
	}
	
	var objDiv = document.getElementById("Lang_Left_Wrap");
	var objLeftSubDiv = document.createElement("div");
	objLeftSubDiv.id = "Lang_Left_Wrap_Sub";
	objDiv.appendChild(objLeftSubDiv);
	var objLeftTi = document.createElement("p");
	objLeftTi.className = "Lang_Left_Title";
	objLeftSubDiv.appendChild(objLeftTi);
	var ImageName = "";
	if (current_menu_file == '#') {
		current_menu_file = next_menu_file;
	}
	if (current_menu_file.indexOf("kto") != -1 || current_menu_file.indexOf("cms") != -1) {
		ImageName = current_menu_code;
	} else {
		ImageName = current_menu_file.substring(8).replace('.jsp','').replace(' ','');
	}	
	//alert(ImageName);
	objLeftTi.style.backgroundImage = "url(/ena/images/menu_title/" + ImageName + ".gif)";
	
	var str = "";

	depth_3 = 0;
	for ( var i=0; i<array_depth_3.length; i++ ) {
		// 3뎁스 출력
		
		var objLeftDl = document.createElement("dl");
		objLeftSubDiv.appendChild(objLeftDl);
		
		var objLeftDt = document.createElement("dt");

		if ( array_depth_3[i][4] == "on" ) {
			// 2007.11.04 "#" -> array_depth_3[i][2]
			objLeftDt.innerHTML = "<a href=\"" + array_depth_3[i][2] + "\" onclick=\"javascript:display_menu(" + depth_3 +  "," + array_depth_3.length + ",'" + array_depth_3[i][2] + "', '');\" onfocus=\"javascript:display_menu(" + depth_3 +  "," + array_depth_3.length + ",'" + array_depth_3[i][2] + "','');\">" + array_depth_3[i][1] +"</a>";
			objLeftDt.className = "step1";
		} else if ( array_depth_3[i][4] == "off" ) {
			if ( array_depth_3[i][3] == 1 ) {
				objLeftDt.innerHTML = "<a href=" + array_depth_3[i][2] + " onfocus=\"javascript:display_menu(" + depth_3 +  "," + array_depth_3.length + ",'" + array_depth_3[i][2] + "','blank');\" target='_blank'>" + array_depth_3[i][1] + "</a>";
			} else {
				objLeftDt.innerHTML = "<a href=" + array_depth_3[i][2] + " onfocus=\"javascript:display_menu(" + depth_3 +  "," + array_depth_3.length + ",'" + array_depth_3[i][2] +"', '');\">" + array_depth_3[i][1] + "</a>";
			}
		}
		if ( code.length == 6 && array_depth_3[i][0].substring(0,6) == code.substring(0,6) ) {
			//objLeftDt.getElementsByTagName("a")[0].className = "current";
			objLeftDt.className = "current";
		}
		objLeftDl.appendChild(objLeftDt);
		
		objLeftDd = document.createElement("dd");
		objLeftDd.id = "Depth3_" + depth_3;
		objLeftDl.appendChild(objLeftDd);
		
		if ( code.length > 4 ) {
			if ( array_depth_3[i][0].substring(0,6) == code.substring(0,6) && array_depth_3[i][4] == "on" ) {
				objLeftDt.className = "current";
				objLeftDd.style.display = "block";
			}
		}
		
		if ( array_depth_3[i][4] == "on" ) {
			depth_4 = 0;
			objLeft4DepthUl = document.createElement("ul");
			objLeftDd.appendChild(objLeft4DepthUl);
			for ( var j=0; j<array_depth_4.length; j++ ) {
				if ( array_depth_3[i][4] == "on" && array_depth_4[j][5] == depth_3 ) {
					// 4뎁스 출력
					
					
					objLeftli = document.createElement("li");
					
					if ( array_depth_4[j][3] == 1 ) {
						objLeftli.innerHTML = "<a href=\"" + array_depth_4[j][2] + "\" target='_blank'>" + array_depth_4[j][1] + "</a>";
						str = str +  objLeftli.innerHTML;
					} else {

						objLeftli.innerHTML = "<a href=\"" + array_depth_4[j][2] + "\">" + array_depth_4[j][1] + "</a>";
						str = str +  objLeftli.innerHTML;
					}

					//alert(code.length + '자, ' + array_depth_4[j][0].substring(0,8) + '이고 페이지번호는 ' + code.substring(0,8));
					if ( code.length == 8 && array_depth_4[j][0].substring(0,8) == code.substring(0,8) ) {
						//objLeftDt.getElementsByTagName("a")[0].className = "current";
						objLeftli.className = "current_menu";
					}					

					objLeft4DepthUl.appendChild(objLeftli);

					depth_5 = 0;
					
					for ( var k=0; k<array_depth_5.length; k++ ) {
						if ( array_depth_4[j][0] == code.substring(0,8) && array_depth_5[k][0].substring(0,8) == code.substring(0,8) ) {
							// 5뎁스 출력

							if (depth_5 == 0) {
								objLeft5DepthUl = document.createElement("ol");
								//objLeft5DepthUl.className = "Tis_Lang_Left_Wrap";
								objLeft4DepthUl.appendChild(objLeft5DepthUl);
							}
							
							
							objLeftli = document.createElement("li");
							
							if ( array_depth_5[k][3] == 1 ) {
								objLeftli.innerHTML = "<a href=\"" + array_depth_5[k][2] + "\" target='_blank'>" + array_depth_5[k][1] + "</a>";
								str = str +  objLeftli.innerHTML;
							} else {

								objLeftli.innerHTML = "<a href=\"" + array_depth_5[k][2] + "\">" + array_depth_5[k][1] + "</a>";
								str = str +  objLeftli.innerHTML;
							}

							if ( code.length >= 10 && array_depth_5[k][0].substring(0,10) == code.substring(0,10) ) {
								//objLeftDt.getElementsByTagName("a")[0].className = "current";
								objLeftli.className = "current_menu";
								//objLeftli.getElementsByTagName("a")[0].className = "current_menu";
							}

							objLeft5DepthUl.appendChild(objLeftli);

							depth_5++;
						}

					} //end for

					depth_4++;
				}
			}
		}
		depth_3++;
	}
}

function display_menu(val,total, url, blank) {
	if (url.indexOf("#") == -1 && blank != 'blank') {
		location.href = url;
	}
	for ( var i=0; i<total; i++ ) {
		var objVal = document.getElementById("Depth3_" + i);
		if ( i == val ) {
			objVal.style.display = "block";
			objVal.parentNode.getElementsByTagName("dt")[0].className = "current";
		} else {
			objVal.style.display = "none";
			objVal.parentNode.getElementsByTagName("dt")[0].className = null;
		}
	}
}
function show_contents(n){
	if (n==1){
		d1.style.display='inline';
		d2.style.display='none';
	} else {
		
		d1.style.display='none';
		d2.style.display='inline';
	}
}
function show_location(code) {
	var menu_location_total = code.length;
	var menu_total = menu.length;
	var objH1 = document.getElementById("Lang_Content_Layer").getElementsByTagName("h1")[0].getElementsByTagName('span')[0];
	for ( var i=0; i<menu_total;i++ ) {
		if ( code == menu[i][0] ) {
			objH1.innerHTML = menu[i][1];
		}
	}

	var objDiv = document.getElementById("Lang_BreadCrumbs");
	var objLocationP = document.createElement("p");
	objDiv.appendChild(objLocationP);
	var objHomeLink = document.createElement("a");
	objHomeLink.href = "http://asiaenglish.visitkorea.or.kr/ena/index.kto";
	objHomeLink.className = "Bread_Home";
	objHomeLink.innerHTML = "Home";
	objLocationP.appendChild(objHomeLink);
	
	for( var j=0; j<menu_location_total; j=j+2 ) {
		parseCode = code.substring(0,j+2);
		for ( var i=0; i<menu_total;i++ ) {
			if ( parseCode == menu[i][0] ) {
				var objLocationLink = document.createElement("a");
				objLocationLink.href = menu[i][2];
				if ( parseCode.length == menu_location_total ) {
					objLocationLink.className = "Bread_Current";
				}
				objLocationLink.innerHTML = menu[i][1];
				objLocationP.appendChild(objLocationLink);
			}
		}
	}
}

function image_clock(val,objDiv) {
	var obj = document.getElementById(objDiv).getElementsByTagName("dl")[0];
	var objdt = obj.getElementsByTagName("dt");
	var objdd = obj.getElementsByTagName("dd");
	for ( var i=0; i<objdt.length; i++ ) {
		var objdta = objdt.item(i);
		var objdda = objdd.item(i);
		objdta.style.left = ( 12 * i  ) + 5 + "px";
		if ( val == i ) {
			objdta.getElementsByTagName("a")[0].className = "current";
			objdda.style.display = "block";
		} else {
			objdta.getElementsByTagName("a")[0].className = null;
			objdda.style.display = "none";
		}
	}
}

function image_text_clock(val,total) {
	for ( var i=0; i<total; i++ ) {
		var objdta = document.getElementById("Image_Text_Btn_"+i);
		var objdda = document.getElementById("Image_Text_"+i);
		objdta.style.left = ( 12 * i  ) + 5 + "px";
		if ( val == i ) {
			objdta.getElementsByTagName("a")[0].className = "current";
			objdda.style.display = "block";
		} else {
			objdta.getElementsByTagName("a")[0].className = null;
			objdda.style.display = "none";
		}
	}
}

function Map_Click(val,total) {
	for ( var i=0; i<total; i++ ) {
		var objbtn = document.getElementById("Transportation_Btn").getElementsByTagName("li")[i];
		var obj = document.getElementById("Transportation_Box_" + i );
		if ( val == i ) {
			objbtn.className = "current";
			obj.style.display = "block";
		} else {
			objbtn.className = null;
			obj.style.display = "none";
		}
	}
}

function NoticeTabChange(val,total) {
	var obj = document.getElementById("NoticeGorup");
	for ( var i=0; i<total; i++ ) {
		var objh2Left = obj.getElementsByTagName("h2")[i];
		var objbtn = objh2Left.getElementsByTagName("a")[0].getElementsByTagName("img")[0];
		var objDiv = document.getElementById("newsNoticeDl_"+i);
		if ( i == val ) {
			objbtn.src = objbtn.src.replace("_off.gif",".gif");
			if ( i == 1 ) {
				objh2Left.style.left = "123px";
			}
			objDiv.style.display = "block";
		} else {
			if ( objbtn.src.indexOf("_off.gif") == -1 ) {
				objbtn.src = objbtn.src.replace(".gif","_off.gif");
				if ( i == 1 ) {
					objh2Left.style.left = "140px";
				}
			}
			objDiv.style.display = "none";
		}
	}
}

function NoticeSubTabChange(val,total) {
	var obj = document.getElementById("SubContentGorup");
	for ( var i=0; i<total; i++ ) {
		var objh2Left = obj.getElementsByTagName("h2")[i];
		var objbtn = objh2Left.getElementsByTagName("a")[0].getElementsByTagName("img")[0];
		var objDiv = document.getElementById("SubNotice_Box_"+i);
		if ( i == val ) {
			objbtn.src = objbtn.src.replace("_off.gif",".gif");
			if ( i == 1 ) {
				objh2Left.style.left = "123px";
			}
			objDiv.style.display = "block";
		} else {
			if ( objbtn.src.indexOf("_off.gif") == -1 ) {
				objbtn.src = objbtn.src.replace(".gif","_off.gif");
				if ( i == 1 ) {
					objh2Left.style.left = "140px";
				}
			}
			objDiv.style.display = "none";
		}
	}
}

function OverseasNews(val,movesc,movediv) {
	var obj = document.getElementById(movediv);
	var objdl = obj.getElementsByTagName("dl");
	var objdlnum = objdl.length;
	for ( var i=0; i<objdlnum; i++ ) {
		var objdisplay = document.getElementById("Content_Right_News_"+i);
		if ( i == val ) {
			objdisplay.style.display = "block";
		} else {
			objdisplay.style.display = "none";
		}
	}
	
	var prevnum;
	var nextnum;
	
	if ( val == 0 ) {
		prevnum = objdlnum - 1;
		nextnum = val + 1;
	} else if ( val == objdlnum - 1 ) {
		prevnum = val - 1;
		nextnum = 0;
	} else {
		prevnum = val - 1;
		nextnum = val + 1;
	}
	document.getElementById("Content_Right_News_Btn_1").href = "#Content_Right_News_"+prevnum;
	document.getElementById("Content_Right_News_Btn_1").onclick = function() {
		eval("OverseasNews("+prevnum+",'prev','Content_Right_News');");
	}
	document.getElementById("Content_Right_News_Btn_2").href = "#Content_Right_News_"+nextnum;
	document.getElementById("Content_Right_News_Btn_2").onclick = function() {
		eval("OverseasNews("+nextnum+",'prev','Content_Right_News');");
	}
}

function FooterScroll() {
	this.GoodsSetTime = null;
	this.Speed = 2;
}

FooterScroll.prototype.GoodsSetting = function() {
	this.DivName = "Lang_Footer_Banner_Box";
	this.BtnName = "Lang_Footer_Banner_Btn";
	this.ScrollName = "FooterScroll_1";
	this.MovieWidth = 150;
	
	this.LiBox_Left = new Array();
	this.Last_Left = new Array();
	
	this.BannerUl = document.getElementById(this.DivName).getElementsByTagName("ul")[0];
	this.BannerBox = this.BannerUl.getElementsByTagName("li");
	this.BannerBoxNum = this.BannerBox.length;
	
	document.getElementById(this.BtnName).getElementsByTagName("a")[0].href = "javascript:" + this.ScrollName + "._prevBtn();";
	document.getElementById(this.BtnName).getElementsByTagName("a")[1].href = "javascript:" + this.ScrollName + "._nextBtn();";
	
	for ( var i=0; i<this.BannerBoxNum*1; i++ ) {
		this.objNewli = this.BannerBox.item(i).cloneNode(true);
		this.BannerUl.appendChild(this.objNewli)
	}
	
	this.Default_left = -this.BannerBoxNum*this.MovieWidth;
	
	this.BannerBoxNum = this.BannerBox.length;
	
	for ( var i=0; i < this.BannerBoxNum; i++ ) {
		this.LiBox_Left[i] = this.Default_left + ( i * this.MovieWidth );
		this.BannerBox.item(i).style.left = this.LiBox_Left[i] + "px";
	}
	
	this.Last_Left = this.LiBox_Left[this.BannerBoxNum-1];
	
	this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",3000);
}

FooterScroll.prototype._nextFrame = function() {
	for ( var i=0; i<this.BannerBoxNum; i++ ) {
		this.LiBox_Left[i] = this.LiBox_Left[i] - this.Speed;
		if ( this.LiBox_Left[i] == ( this.Default_left - this.MovieWidth ) ) {
			this.LiBox_Left[i] = ( ( this.BannerBoxNum - 1 ) * this.MovieWidth ) + this.Default_left;
			this.BannerBox[i].style.left = this.LiBox_Left[i] + "px"
		} else {
			this.BannerBox[i].style.left = this.LiBox_Left[i]+"px";
		}
	}
	if ( Math.abs(this.LiBox_Left[0] % this.MovieWidth) < 1 ) {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",3000);
	} else {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",10);
	}
}
FooterScroll.prototype._prevFrame = function() {
	for ( var i=0; i<this.BannerBoxNum; i++ ) {
		this.LiBox_Left[i] = this.LiBox_Left[i] + this.Speed;
		if ( this.LiBox_Left[i] == this.Last_Left + this.MovieWidth ) {
			this.LiBox_Left[i] = this.Default_left;
			this.BannerBox[i].style.left = this.LiBox_Left[i] + "px"
		} else {
			this.BannerBox[i].style.left = this.LiBox_Left[i]+"px";
		}
	}
	if ( Math.abs(this.LiBox_Left[0] % this.MovieWidth)  < 1 ) {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",3000);
	} else {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._prevFrame()",10);
	}
}

FooterScroll.prototype._nextBtn = function() {
	clearTimeout(this.GoodsSetTime);
	this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",10);
}
FooterScroll.prototype._prevBtn = function() {
	clearTimeout(this.GoodsSetTime);
	this.GoodsSetTime = setTimeout(this.ScrollName + "._prevFrame()",10);
}

function ContentImageScroll() {
	this.GoodsSetTime = null;
	this.Speed = 2;
}

ContentImageScroll.prototype.GoodsSetting = function() {
	this.DivName = "Lang_Content_Banner_Box";
	this.BtnName = "Lang_Content_Banner_Btn";
	this.ScrollName = "ContentImageScroll_1";
	this.MovieHeight = 100;
	
	this.LiBox_Top = new Array();
	this.Last_Top = new Array();
	
	this.BannerDiv = document.getElementById(this.DivName)
	this.BannerUl = this.BannerDiv.getElementsByTagName("ul");
	this.BannerBoxNum = this.BannerUl.length;
	
	document.getElementById(this.BtnName).getElementsByTagName("a")[0].href = "javascript:" + this.ScrollName + "._prevBtn();";
	document.getElementById(this.BtnName).getElementsByTagName("a")[1].href = "javascript:" + this.ScrollName + "._nextBtn();";
	
	for ( var i=0; i<this.BannerBoxNum*1; i++ ) {
		this.objNewUl = this.BannerUl.item(i).cloneNode(true);
		this.BannerDiv.appendChild(this.objNewUl)
	}
	
	this.Default_Top = -1*this.MovieHeight;
	
	this.BannerBoxNum = this.BannerUl.length;
	
	for ( var i=0; i < this.BannerBoxNum; i++ ) {
		this.LiBox_Top[i] = this.Default_Top + ( i * this.MovieHeight );
		this.BannerUl.item(i).style.top = this.LiBox_Top[i] + "px";
	}
	
	this.Last_Top = this.LiBox_Top[this.BannerBoxNum-1];
	
	this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",3000);
}
ContentImageScroll.prototype._nextFrame = function() {
	for ( var i=0; i<this.BannerBoxNum; i++ ) {
		this.LiBox_Top[i] = this.LiBox_Top[i] - this.Speed;
		if ( this.LiBox_Top[i] == ( this.Default_Top - this.MovieHeight ) ) {
			this.LiBox_Top[i] = ( ( this.BannerBoxNum - 1 ) * this.MovieHeight ) + this.Default_Top;
			this.BannerUl[i].style.top = this.LiBox_Top[i] + "px"
		} else {
			this.BannerUl[i].style.top = this.LiBox_Top[i]+"px";
		}
	}
	if ( Math.abs(this.LiBox_Top[0] % this.MovieHeight) < 1 ) {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",3000);
	} else {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",10);
	}
}

ContentImageScroll.prototype._prevFrame = function() {
	for ( var i=0; i<this.BannerBoxNum; i++ ) {
		this.LiBox_Top[i] = this.LiBox_Top[i] + this.Speed;
		if ( this.LiBox_Top[i] == this.Last_Top + this.MovieHeight ) {
			this.LiBox_Top[i] = this.Default_Top;
			this.BannerUl[i].style.top = this.LiBox_Top[i] + "px"
		} else {
			this.BannerUl[i].style.top = this.LiBox_Top[i]+"px";
		}
	}
	if ( Math.abs(this.LiBox_Top[0] % this.MovieHeight)  < 1 ) {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",3000);
	} else {
		this.GoodsSetTime = setTimeout(this.ScrollName + "._prevFrame()",10);
	}
}


ContentImageScroll.prototype._nextBtn = function() {
	clearTimeout(this.GoodsSetTime);
	this.GoodsSetTime = setTimeout(this.ScrollName + "._nextFrame()",10);
}

ContentImageScroll.prototype._prevBtn = function() {
	clearTimeout(this.GoodsSetTime);
	this.GoodsSetTime = setTimeout(this.ScrollName + "._prevFrame()",10);
}

function QuickBtnChange(val,overa) {
	var objbtn = document.getElementById("Quick_Banner_Box").getElementsByTagName("dl")[0].getElementsByTagName("dd")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[val].getElementsByTagName("a")[0].getElementsByTagName("img")[0];
	if ( overa == "out") {
		if ( objbtn.src.indexOf("_off.gif") == -1 ) {
			objbtn.src = objbtn.src.replace("_on.gif","_off.gif");
		}
	} else if ( ovara = "over" ) {
		if ( objbtn.src.indexOf("_on.gif") == -1 ) {
			objbtn.src = objbtn.src.replace("_off.gif","_on.gif");
		}
	}
}

function initMoving(target, position, topLimit, btmLimit) {
	if (!target)
		return false;

	var obj = target;
	obj.initTop = position;
	obj.topLimit = topLimit;
	 obj.bottomLimit = document.body.scrollHeight - btmLimit;

	obj.style.position = "absolute";
	obj.top = obj.initTop;
	obj.left = obj.initLeft;

	if (typeof(window.pageYOffset) == "number") {
		obj.getTop = function() {
			return window.pageYOffset;
		}
 } else if (typeof(document.body.scrollTop) == "number") {
		obj.getTop = function() {
	 return document.body.scrollTop;
		}
	} else {
		obj.getTop = function() {
			return 0;
		}
	}

	if (self.innerHeight) {
		obj.getHeight = function() {
			return self.innerHeight;
		}
	} else if(document.documentElement.clientHeight) {
		obj.getHeight = function() {
			return document.documentElement.clientHeight;
		}
	} else {
		obj.getHeight = function() {
			return 2500;
		}
	}

	obj.move = setInterval(function() {
		if (obj.initTop > 0) {
			pos = obj.getTop() + obj.initTop;
		} else {
			pos = obj.getTop() + obj.getHeight() + obj.initTop;
			//pos = obj.getTop() + obj.getHeight() / 2 - 15;
		}

		if (pos > obj.bottomLimit)
			pos = obj.bottomLimit;
		if (pos < obj.topLimit)
			pos = obj.topLimit;

		interval = obj.top - pos;
		obj.top = obj.top - interval / 3;
		obj.style.top = obj.top + "px";
	}, 30)
}

// 탭컨텐츠
function initTabMenu(tabContainerID) {
	var tabContainer = document.getElementById(tabContainerID);
	var tabAnchor = tabContainer.getElementsByTagName("a");
	var i = 0;

	for(i=0; i<tabAnchor.length; i++) {
		if (tabAnchor.item(i).className == "tab")
			thismenu = tabAnchor.item(i);
		else
			continue;

		thismenu.container = tabContainer;
		thismenu.targetEl = document.getElementById(tabAnchor.item(i).href.split("#")[1]);
		thismenu.targetEl.style.display = "none";
		thismenu.imgEl = thismenu.getElementsByTagName("img").item(0);
		thismenu.onclick = function tabMenuClick() {
			currentmenu = this.container.current;
			if (currentmenu == this)
				return false;

			if (currentmenu) {
				currentmenu.targetEl.style.display = "none";
				currentmenu.parentNode.className = currentmenu.parentNode.className.replace("current", "");
				if (currentmenu.imgEl) {
					currentmenu.imgEl.src = currentmenu.imgEl.src.replace("_on.gif", ".gif");
				}
			}

			this.targetEl.style.display = "block";
			if (this.imgEl) {
				this.imgEl.src = this.imgEl.src.replace(".gif", "_on.gif");
			}
			this.parentNode.className += "current";
			this.container.current = this;

			return false;
		};

		if (!thismenu.container.first)
			thismenu.container.first = thismenu;
	}
	if (tabContainer.first)
		tabContainer.first.onclick();
}

//############################################################################
//		플래시 삽입 함수
//############################################################################
//showRoom 풀스크린
function FNfullscreen(Turl) {
	var X_max = screen.availWidth -10;
	var Y_max = screen.availHeight -40;

	var full_screen ="top=0, left=0, width=" + X_max + ", height=" + Y_max + ", resizable=no, menubar=no, scrollbars=no, status=no, toolbar=no";
	window.open(Turl,'win',full_screen);
	self.opener = self;
}




function FNflash_insert(Tobj,flashvars){
	var tot_url =document.URL;
	var flashPath;

	if(tot_url.substr(0,4)=="http") flashPath="/ena/images/main_swf/";//==========>**플래시 경로설정(플래시 경로 확인)**
	else flashPath="/ena/images/main_swf/";

	var Fswf="";			var Fwidth="";		var Fheight="";
	var Fid="";			var Fwmode="";	var Falign="";
	var Fbgcolor="";	var Fquality="";		var FallowScriptAccess="";
	var FallowFullScreen="";

	var seperate1=",";	var seperate2="=";
	var ARobj=Tobj.split(seperate1);

	for(var i=0; i<=ARobj.length-1; i++){
		var prop=this["Ftag"+i]=ARobj[i].split(seperate2);
		if(prop[0].search("swf") !=-1) Fswf=prop[1];
		if(prop[0].search("tid") !=-1) Fid=prop[1];
		if(prop[0].search("width") !=-1) Fwidth=prop[1];
		if(prop[0].search("height") !=-1) Fheight=prop[1];
		if(prop[0].search("wmode") !=-1) Fwmode=prop[1];
		if(prop[0].search("align") !=-1) Falign=prop[1];
		if(prop[0].search("bgcolor") !=-1) Fbgcolor=prop[1];
		if(prop[0].search("quality") !=-1) Fquality=prop[1];
		if(prop[0].search("allowScriptAccess") !=-1) FallowScriptAccess=prop[1];
		if(prop[0].search("allowFullScreen") !=-1) FallowFullScreen=prop[1];
	}

	if(Fswf=="") alert("Flash_insert Err: 파일명");
	else Fswf=flashPath+Fswf;
	if(Fwidth=="") Fwidth="100%";
	if(Fheight=="") Fheight="100%";
	if(Fid==""){var Tid=Fswf.split("."); Fid=Tid[0];}
	if(Fwmode=="") Fwmode="";
	if(Falign=="") Falign="LT";
	if(Fbgcolor=="") Fbgcolor="#FFFFFF";
	if(Fquality=="") Fquality="best";
	if(FallowScriptAccess=="") FallowScriptAccess="always";
	if(FallowFullScreen=="") FallowFullScreen="false";

	if(flashvars == null) var Tvars="Rpath="+flashPath+"&";
	else var Tvars=flashvars+"&Rpath="+flashPath+"&";

	var str=new String();

	if (navigator.appName.indexOf("Microsoft") != -1){
		str+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
		str+='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" ';
		str+='id="'+Fid+'" height="'+Fheight+'"width="'+Fwidth+'">';
				str+='<param name="movie" value="'+Fswf+'"/>';
				str+='<param name="flashvars" value="'+Tvars+'">';
				str+='<param name="quality" value="'+Fquality+'"/>';
				str+='<param name="bgcolor" value="'+Fbgcolor+'"/>';
				str+='<param name="wmode" value="'+Fwmode+'"/>';
				str+='<param name="allowScriptAccess" value="'+FallowScriptAccess+'"/>';
				str+='<param name="allowFullScreen" value="'+FallowFullScreen+'"/>';
		str+= '</object>';
	}else{
		str+='<embed src="'+Fswf+'" ';
				str+='quality="'+Fquality+'" ';
				str+='bgcolor="'+Fbgcolor+'" ';
				str+='width="'+Fwidth+'" ';
				str+='height="'+Fheight+'" ';
				str+='name="'+Fid+'" ';
				str+='wmode="'+Fwmode+'" ';
				str+='allowScriptAccess="'+FallowScriptAccess+'" ';
				str+='allowFullScreen="'+FallowFullScreen+'" ';
				str+='flashvars="'+Tvars+'"';
				str+='type="application/x-shockwave-flash" ';
				str+='pluginspage="http://www.macromedia.com/go/getflashplayer">';
		str+='</embed>';
	}
	//alert("FID :"+Fid);

	document.write(str);

}


function FNflash_insert1(Tobj,flashvars){
	var tot_url =document.URL;
	var flashPath;

	if(tot_url.substr(0,4)=="http") flashPath="http://english.visitkorea.or.kr/enu/flash/";//==========>**플래시 경로설정(플래시 경로 확인)**
	else flashPath="http://english.visitkorea.or.kr/enu/flash/";

	var Fswf="";			var Fwidth="";		var Fheight="";
	var Fid="";			var Fwmode="";	var Falign="";
	var Fbgcolor="";	var Fquality="";		var FallowScriptAccess="";
	var FallowFullScreen="";

	var seperate1=",";	var seperate2="=";
	var ARobj=Tobj.split(seperate1);

	for(var i=0; i<=ARobj.length-1; i++){
		var prop=this["Ftag"+i]=ARobj[i].split(seperate2);
		if(prop[0].search("swf") !=-1) Fswf=prop[1];
		if(prop[0].search("tid") !=-1) Fid=prop[1];
		if(prop[0].search("width") !=-1) Fwidth=prop[1];
		if(prop[0].search("height") !=-1) Fheight=prop[1];
		if(prop[0].search("wmode") !=-1) Fwmode=prop[1];
		if(prop[0].search("align") !=-1) Falign=prop[1];
		if(prop[0].search("bgcolor") !=-1) Fbgcolor=prop[1];
		if(prop[0].search("quality") !=-1) Fquality=prop[1];
		if(prop[0].search("allowScriptAccess") !=-1) FallowScriptAccess=prop[1];
		if(prop[0].search("allowFullScreen") !=-1) FallowFullScreen=prop[1];
	}

	if(Fswf=="") alert("Flash_insert Err: 파일명");
	else Fswf=flashPath+Fswf;
	if(Fwidth=="") Fwidth="100%";
	if(Fheight=="") Fheight="100%";
	if(Fid==""){var Tid=Fswf.split("."); Fid=Tid[0];}
	if(Fwmode=="") Fwmode="";
	if(Falign=="") Falign="LT";
	if(Fbgcolor=="") Fbgcolor="#FFFFFF";
	if(Fquality=="") Fquality="best";
	if(FallowScriptAccess=="") FallowScriptAccess="always";
	if(FallowFullScreen=="") FallowFullScreen="false";

	if(flashvars == null) var Tvars="Rpath="+flashPath+"&";
	else var Tvars=flashvars+"&Rpath="+flashPath+"&";

	var str=new String();

	if (navigator.appName.indexOf("Microsoft") != -1){
		str+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ';
		str+='codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=version=8,0,0,0" ';
		str+='id="'+Fid+'" height="'+Fheight+'"width="'+Fwidth+'">';
				str+='<param name="movie" value="'+Fswf+'"/>';
				str+='<param name="flashvars" value="'+Tvars+'">';
				str+='<param name="quality" value="'+Fquality+'"/>';
				str+='<param name="bgcolor" value="'+Fbgcolor+'"/>';
				str+='<param name="wmode" value="'+Fwmode+'"/>';
				str+='<param name="allowScriptAccess" value="'+FallowScriptAccess+'"/>';
				str+='<param name="allowFullScreen" value="'+FallowFullScreen+'"/>';
		str+= '</object>';
	}else{
		str+='<embed src="'+Fswf+'" ';
				str+='quality="'+Fquality+'" ';
				str+='bgcolor="'+Fbgcolor+'" ';
				str+='width="'+Fwidth+'" ';
				str+='height="'+Fheight+'" ';
				str+='name="'+Fid+'" ';
				str+='wmode="'+Fwmode+'" ';
				str+='allowScriptAccess="'+FallowScriptAccess+'" ';
				str+='allowFullScreen="'+FallowFullScreen+'" ';
				str+='flashvars="'+Tvars+'"';
				str+='type="application/x-shockwave-flash" ';
				str+='pluginspage="http://www.macromedia.com/go/getflashplayer">';
		str+='</embed>';
	}
	//alert("FID :"+Fid);

	document.write(str);

}


//RSS 주소 복사 2008.10.30 김선미 추가
    function copyClip(meintext) {
        if(window.clipboardData) {
            window.clipboardData.setData("Text", meintext);
        } else if(window.netscape) {
            netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');

            var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
            if(!clip) return;

            var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
            if(!trans) return;

            trans.addDataFlavor('text/unicode');

            var str = new Object();
            var len = new Object();

            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);

            var copytext = meintext;
            str.data = copytext;

            trans.setTransferData("text/unicode",str,copytext.length*2);
            var clipid = Components.interfaces.nsIClipboard;
            if(!clipid) return false;

            clip.setData(trans,null,clipid.kGlobalClipboard);
        }

        alert("The RSS address has been copied.");
        return false;
    }
/* 2009.01.16 ena photogallery script*/
function flash_write(strSrc, strW, strH )
{
 document.write('<Object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" WIDTH="'+strW+'" HEIGHT="'+strH+'" id="company_flash_sub_v1" ALIGN="">');
 document.write('<PARAM NAME=movie VALUE="'+strSrc+'"> ');
 document.write('<PARAM NAME=menu VALUE=false> ');
 document.write('<PARAM NAME=quality VALUE=high> ');
 document.write('<PARAM NAME=wmode VALUE=transparent> ');
 document.write('<PARAM NAME=bgcolor VALUE=#ffffff> ');
 document.write('<PARAM name=allowScriptAccess value=always />');
 document.write('<EMBED src="'+strSrc+'" menu=false quality=high wmode=transparent bgcolor=#ffffff  WIDTH="'+strW+'" HEIGHT="'+strH+'" NAME="company_flash_sub_v1" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED>');
 document.write('</OBJECT>');
}


function goTourCmsContentView(cid, ctype) {
	cid = cid.replace(/(^\s*)|(\s*$)/g,"");
	window.open("/ena/cms/dispatcher.jsp?cid=" + cid + "&ctype=" + ctype, "", '');
}