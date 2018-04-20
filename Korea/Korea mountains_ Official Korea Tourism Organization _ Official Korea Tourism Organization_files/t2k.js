function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
MM_reloadPage(true);

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function goski_snow(konum){
		switch(konum.toString()){
			case "5": top.document.location.href = '/03Sightseeing/SKI/ski05_01.asp?kosm=m3_7&konum='+konum;	break;
			case "6": top.document.location.href = 'http://club.tour2korea.com/bookings';				break;
		}
}
	
function gosubski_snow(pArg){
		switch(pArg.substring(4,5)){
			case "3":	
				if (pArg.length == 7)
					sNum 	= "0"+pArg.substring(pArg.length-1);
				else 	sNum 	= pArg.substring(pArg.length-2);

				top.document.location = '/03Sightseeing/SKI/ski0'+pArg.substring(4,5)+'_'+sNum+'.asp?kosm=m3_7&konum='+pArg;	break;

			case "4":	top.document.location = '/03Sightseeing/SKI/ski04_01.asp?kosm=m3_7&konum=subm4_'+pArg.substring(pArg.length-1)+'#0'+pArg.substring(pArg.length-1);	break;

				
			default:
				sNum 	= "0"+pArg.substring(pArg.length-1);

				top.document.location = '/03Sightseeing/SKI/ski0'+pArg.substring(4,5)+'_'+sNum+'.asp?kosm=m3_7&konum='+pArg;	break;
		}			
}


function goPlanner_11(konum){
		if (konum==2){
			top.document.location.href ='/11Overseas/Toronto/happening_list.asp?kosm=m1_9&konum='+konum;
		} else if (konum==3){
			top.document.location.href ='/11Overseas/Toronto/entry.asp?kosm=m1_9&konum='+konum;
		} else if (konum==4){
			top.document.location.href ='/04Bookings/Overseas/packages_list.asp?kosm=m4_3&nation=38&air=C000&konum=2';
		} else if (konum==5){
			top.document.location.href ='/04Bookings/overseas/agencies_list.asp?kosm=m4_3&cntry_cd=CA&konum=2';
		} else if (konum==6){
			top.document.location.href ='/11Overseas/Toronto/qanda_list.asp?kosm=m1_9&konum='+konum;
		} else if (konum==7){
			top.document.location.href ='/11Overseas/Toronto/reference_list.asp?kosm=m1_9&konum='+konum;
		} else if (konum==8){
			top.document.location.href ='/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5';
		}
}
	
function gosubPlanner_11(konum){
		if (konum=='subm1_1'){
			top.document.location.href ='/11Overseas/Toronto/office_tt01.asp?kosm=m1_9&konum='+konum;
		} else if (konum=='subm1_2'){
			top.document.location.href ='/11Overseas/Toronto/office_tt01_f.asp?kosm=m1_9&konum='+konum;
		} 
}


function goBooking_01(konum){
		var sURL 	= "";
		switch(konum.toString()){
			
			case "3": sURL = '/04Bookings/Accommodations/hotelnews_list.asp?kosm=m4_1&konum='+konum; break;
                        		case "4": sURL = 'http://club.tour2korea.com/bookings'
			
		}		  
		
		if (sURL != "")
			top.document.location.href = sURL;
}

function gosubBooking_01(konum){
		var sURL 	= "";
		switch(konum.toString()){
			case "subm1_1": sURL = '/04Bookings/Accommodations/hotellist.asp?kosm=m4_1&konum='+konum; 			break;
			case "subm1_2": sURL = '/04Bookings/Accommodations/hotel_list.asp?kosm=m4_1&konum='+konum; 			break;
			
				
			case "subm2_1": sURL = '/04Bookings/Accommodations/templeStay.asp?pType=I&kosm=m4_1&konum='+konum; 	break;
			case "subm2_2": sURL = '/04Bookings/Accommodations/templeStay.asp?pType=R&kosm=m4_1&konum='+konum; 	break;
		}		  
		
		if (sURL != "")
			top.document.location.href = sURL;
}

function goPlanner_16(pArg){
		var sKosm 	= "m7_6";
		
		switch(pArg.toString()){
			case "4": document.location = '/04Bookings/Overseas/packages_list.asp?konum=subm3_1&kosm=m4_3&nation=223&air=UA00'; break;
			case "5": document.location = '/04Bookings/overseas/agencies_list.asp?kosm=m4_3&cntry_cd=AE&konum=subm3_2'; break;
			case "7": document.location = 'reference_list.asp?lan_id=e&city=DB&kosm=m7_7&konum=7'; break;
			case "8": document.location = '/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5'; break;
			default:
				document.location = 'dubai0'+pArg+'.asp?lan_id=e&city=DB&kosm='+sKosm+'&konum='+pArg; 
		}		
}

function goPlanner_17(pArg){
		var sKosm 	= "m7_6";
		
		switch(pArg.toString()){
			case "4": document.location = '/04Bookings/Overseas/packages_list.asp?konum=subm3_1&kosm=m4_3&nation=129&air=M000'; break;
			case "5": document.location = '/04Bookings/Overseas/agencies_list.asp?kosm=m4_3&konum=subm3_2&lan_id=e&cntry_cd=MY'; break;
			case "7": document.location = 'reference_list.asp?lan_id=e&city=KL&kosm=m7_6&konum=7'; break;
			case "8": document.location = '/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5'; break;
			default:
				document.location = 'kuala0'+pArg+'.asp?lan_id=e&city=KL&kosm='+sKosm+'&konum='+pArg; 

		}		
}


function gosubBooking_04(pArg){
		if (pArg.substring(4,5) == "1"){
			if (pArg.substring(pArg.length-1) != "1")
					document.location = '/04Bookings/MobilePhoneRental/phone_sk0'+pArg.substring(pArg.length-1)+'.asp?konum=subm1_'+pArg.substring(pArg.length-1)+'&kosm=m4_4';
			else 	document.location = '/04Bookings/MobilePhoneRental/phone_sk01_01.asp?konum=subm1_1&kosm=m4_4';
		} else if (pArg.substring(4,5) == "2"){
			switch(pArg.substring(pArg.length-1)){
				case "1": document.location = '/04Bookings/MobilePhoneRental/ktf/ktf_serviceoverview.asp?konum=subm2_1&kosm=m4_4'; break;
				case "2": document.location = '/04Bookings/MobilePhoneRental/ktf/ktf_rentalfree.asp?konum=subm2_2&kosm=m4_4'; break;
				case "3": document.location = '/04Bookings/MobilePhoneRental/ktf/ktf_handset.asp?konum=subm2_3&kosm=m4_4'; break;
				case "4": document.location = '/04Bookings/MobilePhoneRental/ktf/ktf_howtouse02.asp?konum=subm2_4&kosm=m4_4'; break;
				case "5": document.location = '/04Bookings/MobilePhoneRental/ktf/ktf_location.asp?konum=subm2_5&kosm=m4_4'; break;
				case "6": document.location = '/04Bookings/MobilePhoneRental/ktf/ktf_reservation.asp?konum=subm2_6&kosm=m4_4'; break;
			}		
		}
}  

function gosubBooking_05(pArg){
		switch(pArg){
			case "subm1_1": document.location = '/04bookings/Flights/asiana_news01.asp?kosm=m4_5&konum='+pArg; break;
			case "subm1_2": document.location = '/04bookings/Flights/asiana_about01.asp?kosm=m4_5&konum='+pArg; break;
			case "subm1_3": window.open("http://flyasiana.com/global"); break;
			case "subm1_4": document.location = '/04bookings/Flights/asiana_contact01.asp?kosm=m4_5&konum='+pArg; break;
			case "subm2_1": document.location = '/04Bookings/Flights/information.asp?kosm=m4_5&konum='+pArg; break;
			case "subm2_2": document.location = '/04Bookings/Flights/hanwha.asp?kosm=m4_5&konum='+pArg; break;
		}		
}  


function pop(pop,width,height,flag)
{
	var url = pop;
	var wd = width;
	var he = height;
    
    if (flag == 0 )
    {
        window.open(url,"","toolbar=0,menubar=0,scrollbars=no,resizable=no,width=" + wd +",height=" + he + ";")
    }
    else
    {
        window.open(url,"","toolbar=0,menubar=0,scrollbars=yes,resizable=no,width=" + wd +",height=" + he + ";")
    }
}

function popmovie(pop,width,height,flag)
{
	var url = pop;
	var wd = 770;
	var he = 350;
    
    if (flag == 0 )
    {
        window.open(url,"","toolbar=0,menubar=0,scrollbars=no,resizable=no,width=" + wd +",height=" + he + ";")
    }
    else
    {
        window.open(url,"","toolbar=0,menubar=0,scrollbars=yes,resizable=no,width=" + wd +",height=" + he + ";")
    }
}

function pop2(pop,width,height,flag)
{
	var url = pop;
	var wd = width;
	var he = height;
    
    if (flag == 0 )
    {
        window.open(url,"","toolbar=yes,menubar=0,scrollbars=no,resizable=no,width=" + wd +",height=" + he + ";")
    }
    else
    {
        window.open(url,"","toolbar=yes,menubar=0,scrollbars=yes,resizable=no,width=" + wd +",height=" + he + ";")
    }
}


function pop3(pop,width,height,flag,t_margin,l_margin)
{
	var url = pop;
	var wd = width;
	var he = height;
    
    if (flag == 0 )
    {
        window.open(url,"","toolbar=no,menubar=0,scrollbars=no,resizable=no,top="+t_margin+",left="+l_margin+",width=" + wd +",height=" + he + ";")
    }
    else
    {
        window.open(url,"","toolbar=no,menubar=0,scrollbars=yes,resizable=no,top="+t_margin+",left="+l_margin+",width=" + wd +",height=" + he + ";")
    }
}



/***********************************************************************************/
/**  Menu Display Function Module  
      IE5.0 / NS6.1 
**/

var tz=1;

function menuclick(ti)
{

// Browser type : Explore 

    if (document.all) 
    {
        if(document.all["menuclick"+ti].style.display=="")
        {
            document.all["menuclick"+ti].style.display="none";
            tz=0;
        }
        else
        {
            if(tz != 0)
            {
                document.all["menuclick"+tz].style.display="none";
                document.all["menuclick"+ti].style.display="";
            }
            
            document.all["menuclick"+ti].style.display="";
            tz=ti;
        }
    }
    
// Browser type : Netscape 6.0

    else
    {
        if(document.getElementById("menuclick"+ti).style.display=="")
        {
            document.getElementById("menuclick"+ti).style.display="none";
            tz=0;
        }
        else
        {
            if(tz != 0)
            {
                document.getElementById("menuclick"+tz).style.display="none";
                document.getElementById("menuclick"+ti).style.display="";
            }
            document.getElementById("menuclick"+ti).style.display="";
            tz=ti;
        }
    }
}


function LayerSH(LayerName,Status) 
{

//    ns4 = (document.getElementById)?true:false;
//    ie4 = (document.all)?true:false;

    if (navigator.appName == "Netscape")
    {
		LayerN = document.getElementById(LayerName).style;
		if (Status == 'show') LayerN.visibility = 'visible';
		if (Status == 'hide') LayerN.visibility = 'hidden';
    }	
    else
    {
		LayerN = document.all[LayerName].style;
		if (Status == 'show') LayerN.visibility = 'visible';
		if (Status == 'hide') LayerN.visibility = 'hidden';
	}
}

/**********************************************************************************
	Image Roll Over
***********************************************************************************/

function preload(imgObj,imgSrc) {
	if (document.images) {
		eval(imgObj+' = new Image()')
		eval(imgObj+'.src = "'+imgSrc+'"')
	}
}
function imgChg(imgName,imgObj) {
	if (document.images) {
		document.images[imgName].src = eval(imgObj+".src")
	}
}


ns4 = (document.layers)?true:false
ie4 = (document.all)?true:false



////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////  Destination Flash Link Script  ///////////////////////////////////////////


function map01()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=1";   //seoul
	
}

function map02()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=6";   //Busan
	
}

function map03()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=2";   //Incheon
	
}

function map04()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=31";   //Gyeonggi-do
	
}

function map05()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=32";   //Gangwon-do
	
}

function map06()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=33";   //Chungcheongbuk-do
	
}

function map07()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=34";   //Chungcheongnam-do
	
} 

function map08()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=37";   //Jeollabuk-do
	
}

function map09()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=38";   //Jeollanam-do
	
}

function map10()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=35";   //Gyeongsangbuk-do
	
}

function map11()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=36";   //Gyeongsangnam-do
	
}

function map12()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=39";   //Jeju-do
	
}

function map13()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=35,2";   //Gyeongju
	
}

function map14()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=32,5";   //Sokcho
	
}


function map15()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=4";   //Daegu
	
}

function map16()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=5";   //Gwangju
	
}

function map17()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=3";   //Daejeon
	
}

function map18()
{
	top.document.location.href = "/enu/SI/SI_EN_3_1_1_1.jsp?areaCode=7";  //Ulsan
	
}


// City Hightlight

function city01()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=1364601";   //seoul
	
}

function city02()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=258277";  //busan
	
}

function city03()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=1068530";  //jeju
	
}

function city04()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=255885";   //gyeongju
	
}

function city05()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=996479";   //gyeongju
	
}

function city06()
{
	//top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=256208";   //Gangneung
	// 2010-11-12 OK
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=1070801";   //Gangneung
}

function city07()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=256443";   //Chuncheon
	
}

function city08()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=256284";   //Jeonju
	
}

function city09()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=255802";   //Suwon
	
}

function city10()
{
	top.document.location.href = "/enu/SI/SI_EN_3_6.jsp?cid=256762";   //Andong
	
}



//////////////////////////////////////// HOTEL LIST FLASH /////////////////////////

function hotel01()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=6142&kosm=m1_5&konum=subm1_3";   //SEOUL
}
function hotel02()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=8551&kosm=m1_5&konum=subm1_3";   //busan
}
function hotel03()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=10277&kosm=m1_5&konum=subm1_3";   //daegu
}
function hotel04()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=11614&kosm=m1_5&konum=subm1_3";   //incheon
}
function hotel05()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=12521&kosm=m1_5&konum=subm1_3";   //Gwangju
}
function hotel06()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=13314&kosm=m1_5&konum=subm1_3";   //daejeon
}
function hotel07()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=13918&kosm=m1_5&konum=subm1_3";   //ulsan
}
function hotel08()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=15741&kosm=m1_5&konum=subm1_3";   //gangwon-do
}
function hotel09()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=21134&kosm=m1_5&konum=subm1_3";   //gyeonggi-do
}
function hotel10()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=24703&kosm=m1_5&konum=subm1_3";   //gyeongsangnam-do
}
function hotel11()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=29207&kosm=m1_5&konum=subm1_3";   //gyeongsanbuk-do
}
function hotel12()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=32863&kosm=m1_5&konum=subm1_3";   //jeollanam-do
}
function hotel13()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=36071&kosm=m1_5&konum=subm1_3";   //jellabuk-do
}
function hotel14()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=36100&kosm=m1_5&konum=subm1_3";   //jeju-do
}
function hotel15()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=38693&kosm=m1_5&konum=subm1_3";   //chungcheongnam-do
}
function hotel16()
{
	top.document.location.href = "/01TripPlanner/Accommodations/hotellist.asp?RegionCode=25712&kosm=m1_5&konum=subm1_3";   //chungcheongbuk-do
}

///////////////////////////////////////////////////////////////////////////////////



function view_visa( cpNum ) {
	opener.location.href = "/reservation/coupon/visa/visa_read.asp?cpNum=" + cpNum ;
}

//////////////////////////////////////////////////////////////////////////// //////////////  
//resize popup :: 이미햨E크기에맞춰서 팝업이떠퓖E

function view(what) {
var imgwin = window.open("",'WIN','scrollbars=auto,status=yes,toolbar=no,resizable=1,location=no,menu=no,width=10,height=10'); 
imgwin.focus(); 
imgwin.document.open(); 
imgwin.document.write('<html>\n'); 
imgwin.document.write('<head>\n'); 
imgwin.document.write('<title>Tour2korea</title>\n'); 

imgwin.document.write('<sc'+'ript>\n'); 
imgwin.document.write('function resize() {\n'); 
imgwin.document.write('pic = document.il;\n'); 
imgwin.document.write('if (eval(pic).height) { var name = navigator.appName\n'); 
imgwin.document.write('  if (name == "Microsoft Internet Explorer") { myHeight = eval(pic).height + 50; myWidth = eval(pic).width + 12;\n'); 

imgwin.document.write('  } else { myHeight = eval(pic).height + 9; myWidth = eval(pic).width; }\n'); 
imgwin.document.write('  clearTimeout();\n'); 
imgwin.document.write('  var height = screen.height;\n'); 
imgwin.document.write('  var width = screen.width;\n'); 
imgwin.document.write('  var leftpos = width / 2 - myWidth / 2;\n'); 
imgwin.document.write('  var documentpos = height / 2 - myHeight / 2; \n'); 
imgwin.document.write('  self.moveTo(leftpos, documentpos);\n'); 
imgwin.document.write('  self.resizeTo(myWidth, myHeight);\n'); 
imgwin.document.write('}else setTimeOut(resize(), 100);}\n'); 
imgwin.document.write('</sc'+'ript>\n'); 

imgwin.document.write('</head>\n'); 
imgwin.document.write('<body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#FFFFFF" oncontextmenu="return false" ondragstart="return false" onselectstart="return false">\n'); 

imgwin.document.write('<img border=0 src='+what+' xwidth=100 xheight=9 name=il onload="resize();" onClick="self.close();">\n'); 
imgwin.document.write('</body>\n'); 
imgwin.document.close(); 

} 

//////////////////////////////////////////////////////////////////////////// //////////////  
//resize popup :: 이미햨E크기에맞춰서 팝업이떠퓖E

function view2(what) { 

var imgwin = window.open("",'WIN','scrollbars=yes,status=no,toolbar=no,resizable=0,location=no,menu=no,width=10,height=10'); 

imgwin.focus(); 
imgwin.document.open(); 
imgwin.document.write("<html>\n"); 
imgwin.document.write("<head>\n"); 
imgwin.document.write("<title>Tour2korea</title>\n"); 

imgwin.document.write("<script>\n"); 
imgwin.document.write("function resize() {\n"); 
imgwin.document.write("pic = document.il;\n"); 
imgwin.document.write("if (eval(pic).height) { var name = navigator.appName\n"); 
imgwin.document.write("  if (name == 'Microsoft Internet Explorer') { myHeight = eval(pic).height + 12; myWidth = eval(pic).width + 12;\n"); 

imgwin.document.write("  } else { myHeight = eval(pic).height + 9; myWidth = eval(pic).width; }\n"); 
imgwin.document.write("  clearTimeout();\n"); 
imgwin.document.write("  var height = screen.height;\n"); 
imgwin.document.write("  var width = screen.width;\n"); 
imgwin.document.write("  var leftpos = width / 2 - myWidth / 2;\n"); 
imgwin.document.write("  var toppos = height / 2 - myHeight / 2; \n"); 
imgwin.document.write("  self.moveTo(leftpos, toppos);\n"); 
imgwin.document.write("  self.resizeTo(myWidth, myHeight);\n"); 
imgwin.document.write("}else setTimeOut(resize(), 100);}\n"); 
imgwin.document.write("</script>\n"); 

imgwin.document.write("</head>\n"); 
imgwin.document.write('<body topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" bgcolor="#FFFFFF">\n'); 

imgwin.document.write("<a href='javascript:window.close();'><img border=0 src="+what+" xwidth=100 xheight=9 name=il onload='resize();'></a>\n"); 
imgwin.document.write("</body>\n"); 
imgwin.document.close(); 
}


/******************************************************************************/

function goColorMenu(num){

	if (num==1){
		top.document.location.href='/01TripPlanner/main.asp?kosm=m1_1';
	} else if (num==2){
		top.document.location.href='/02Culture/main.asp?kosm=m2_1';
	} else if (num==3){
		top.document.location.href='/03Sightseeing/main.asp?kosm=m3_1';
	} else if (num==4){
		top.document.location.href='/04Bookings/main.asp?konum=1&kosm=m4_1';
	} else if (num==5){
		top.document.location.href='/05food/main.asp?kosm=m5_1';
	} else if (num==6){
		top.document.location.href='/06shopping/main.asp?kosm=m6_1';
	} else if (num==7){
		top.document.location.href='/07T2KZone/main.asp?kosm=m7_1';
	}
}

function goMenu(name){
	if (name=="m1_1"){
		top.document.location.href='/01TripPlanner/KoreaInBrief/location.asp?konum=1&kosm='+name;
	} else if (name=="m1_2"){
		top.document.location.href='/01TripPlanner/EntryInfo/entry.asp?konum=1&kosm='+name;
	} else if (name=="m1_3"){
		top.document.location.href='/01TripPlanner/EssentialInfo/currency.asp?konum=1';
	} else if (name=="m1_4"){
		top.document.location.href='/01TripPlanner/Transportation/air_main.asp?konum=1&kosm='+name;
	} else if (name=="m1_5"){
		top.document.location.href='/01TripPlanner/Accommodations/hotel.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m1_6"){
		top.document.location.href='/01TripPlanner/TravelAgencies/Tours_Packages.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m1_7"){
		top.document.location.href='/01TripPlanner/TouristInfo/1330.asp?konum=1&kosm='+name;
	} else if (name=="m1_8"){
		top.document.location.href='/01TripPlanner/map/t2kservice.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m1_9"){
		top.document.location.href='/01TripPlanner/CurrencyExchange/introduction.asp?konum=1&kosm='+name;


	} else if (name=="m2_1"){
		top.document.location.href='/02Culture/events/events.asp?kosm='+name;
	} else if (name=="m2_2"){
		top.document.location.href='/02Culture/performances/theaters.asp?konum=1&kosm='+name;
	} else if (name=="m2_3"){
		top.document.location.href='/02Culture/TraditionalCulture/pottery.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m2_4"){
		top.document.location.href='/02Culture/ReligionBeliefs/buddhism_01.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m2_5"){
		top.document.location.href='/02Culture/Movies/movie_02.asp?konum=2&kosm='+name;
	} else if (name=="m2_6"){
		top.document.location.href='/02Culture/TVMiniseries/synopsis_location.asp?kosm='+name;
	} else if (name=="m2_7"){
		top.document.location.href='/02Culture/Entertainment/news.asp?konum=1&kosm='+name;
	} else if (name=="m2_8"){
		top.document.location.href='/02Culture/Sports/taegwondo.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m2_9"){
		top.document.location.href='/02Culture/KoreanLanguage/l_korean/learnKorean.asp?konum=subm1_1&kosm='+name;

	} else if (name=="m3_1"){
		top.document.location.href='/03Sightseeing/DestinationsByRegions/03_1.asp?kosm='+name;
	} else if (name=="m3_2"){
		top.document.location.href='/03Sightseeing/DestinationsByThemes/03_2.asp?kosm='+name;
	} else if (name=="m3_3"){
		top.document.location.href='/03Sightseeing/ThemeTours/city_tour.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m3_4"){
		top.document.location.href='/03Sightseeing/transittour/transittour_01.asp?konum=subm1_1&kosm='+name;		
	} else if (name=="m3_5"){
		top.document.location.href='/03Sightseeing/JourneysByMetro/03_4_1.asp?kosm='+name;
	} else if (name=="m3_6"){
		top.document.location.href='/03Sightseeing/NorthKoreaTours/main_list.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m3_7"){
		top.document.location.href='/03Sightseeing/SKI/ski01_01.asp?kosm='+name;
	} else if (name=="m3_8"){
		top.document.location.href='/03Sightseeing/TravelSpot/travelspot.asp?konum=subm1_1&kosm='+name;

	} else if (name=="m4_1"){		
		top.document.location.href='/04Bookings/Accommodations/hotellist.asp?konum=1&kosm='+name;
	} else if (name=="m4_2"){
		top.document.location.href='/04Bookings/Performances/introduction.asp?konum=1&kosm='+name;
	} else if (name=="m4_3"){
		top.document.location.href ='/04Bookings/tourpackages/domestictours.asp?kosm=m4_3&konum=1';
	} else if (name=="m4_4"){
		top.document.location.href='/04Bookings/MobilePhoneRental/phone_sk01.asp?kosm='+name;
	} else if (name=="m4_5"){
//		top.document.location.href='/04Bookings/Flights/information.asp?konum=1&kosm='+name;		
		top.document.location.href='/04Bookings/Flights/asiana_main.asp?konum=1&kosm='+name;
		
	} else if (name=="m4_6"){
		top.document.location.href='/04Bookings/CarRental/service_Info.asp?konum=1&kosm='+name;
	} else if (name=="m4_7"){
		top.document.location.href='/04Bookings/Coupon/GEONGGI/coupon_main.asp?konum=&kosm='+name;
		
	} else if (name=="m5_1"){
		top.document.location.href='/05food/Introduction/lifestyle_food.asp?konum=1&kosm='+name;
	} else if (name=="m5_2"){
		top.document.location.href='/05food/WhatToEat/quintessential_snacks.asp?konum=1&kosm='+name;
	} else if (name=="m5_3"){
		top.document.location.href='/05food/LocalFood/cls_main.asp?konum=1&kosm='+name;
	} else if (name=="m5_4"){
		top.document.location.href='/05food/ArtOfEating/setting_table02.asp?konum=1&kosm='+name;


	} else if (name=="m6_1"){
		top.document.location.href='/06shopping/ShoppingInkorea/duty_information01.asp?konum=1&kosm='+name;
	} else if (name=="m6_2"){
		top.document.location.href='/06shopping/ShoppingInSeoul/insadong01.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m6_3"){
		top.document.location.href='/06shopping/WhatToBuy/uniquely_pottery.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m6_4"){
		top.document.location.href='/06shopping/KoreaTravelCard/ktc.asp?konum=subm1_1&kosm='+name;
	} else if (name=="m6_5"){
		top.document.location.href='/06Shopping/OnlineShopping/books_dvds.asp?kosm=m6_6&konum=1';
	} else if (name=="m6_6"){
		top.document.location.href='/06shopping/KoreaGrandSale/main.asp?konum=1&kosm='+name;
		
	} else if (name=="m7_1"){
		top.document.location.href='http://club.tour2korea.com/club4';
	} else if (name=="m7_2"){
		top.document.location.href='/07T2KZone/Chronicles/mystory_korea_list.asp?konum=1&kosm='+name;
	} else if (name=="m7_3"){
		top.document.location.href='/07T2KZone/PostPhotos/photocentral.asp?konum=1&kosm='+name;
	} else if (name=="m7_4"){	
		top.document.location.href='/07T2KZone/KoreaInImages/ad_gallery.asp?konum=1&kosm='+name;				
	} else if (name=="m7_5"){
		top.document.location.href='/07T2KZone/Inquiries/faq_list.asp?konum=1&kosm='+name;
	} else if (name=="m7_6"){
		top.document.location.href='/07T2KZone/aboutus/overview.asp?konum=1&kosm='+name;
	}
}	

/******************************************************************************/

function goPlanner_TravelAgencies(konum){
	if (konum==1){
		top.document.location.href ='/01TripPlanner/TravelAgencies/Tours_Packages.asp?kosm=m1_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/01TripPlanner/TravelAgencies/Overseas/agencies_list.asp?kosm=m1_6&konum='+konum;
	}

}

function goPlanner_01(konum){
	if (konum==1){
		top.document.location.href ='/01TripPlanner/KoreaInBrief/location.asp?kosm=m1_1&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/01TripPlanner/KoreaInBrief/na_symbols.asp?kosm=m1_1&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/01TripPlanner/KoreaInBrief/climate.asp?kosm=m1_1&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/01TripPlanner/KoreaInBrief/language.asp?kosm=m1_1&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/01TripPlanner/KoreaInBrief/history.asp?kosm=m1_1&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/01TripPlanner/KoreaInBrief/religion.asp?kosm=m1_1&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/01TripPlanner/KoreaInBrief/customs.asp?kosm=m1_1&konum='+konum;
	//} else if (konum==8){
	//	top.document.location.href ='/01TripPlanner/KoreaInBrief/international.asp?kosm=m1_1&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/07T2KZone/KoreaInImages/ad_gallery.asp?kosm=m7_5&konum=1';
	}

}

function goPlanner_02(konum){
	if (konum==1){
		top.document.location.href ='/01TripPlanner/EntryInfo/entry.asp?kosm=m1_2&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/01TripPlanner/EntryInfo/registration.asp?kosm=m1_2&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/01TripPlanner/EntryInfo/customs.asp?kosm=m1_2&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/01TripPlanner/EntryInfo/quarantine.asp?kosm=m1_2&konum='+konum;
	}
}

function goPlanner_03(konum){
	if (konum==1){
		top.document.location.href ='/01TripPlanner/EssentialInfo/currency.asp?konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/01TripPlanner/EssentialInfo/atm.asp?konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/01TripPlanner/EssentialInfo/correspondence.asp?konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/01TripPlanner/EssentialInfo/emergency.asp?konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/01TripPlanner/EssentialInfo/holidays.asp?konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/01TripPlanner/EssentialInfo/business_hours.asp?konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/01TripPlanner/EssentialInfo/dress.asp?konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/01TripPlanner/EssentialInfo/time_differences.asp?konum='+konum;
	} else if (konum==9){
		top.document.location.href ='/01TripPlanner/EssentialInfo/voltage.asp?konum='+konum;
	} else if (konum==10){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases01.asp?kosm=m2_9&konum=subm2_1';

	}
}

function goPlanner_04(konum){

	if (konum==1){
		top.document.location.href ='/01TripPlanner/Transportation/air_main.asp?kosm=m1_4&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/01TripPlanner/Transportation/ferry_main.asp?kosm=m1_4&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/01TripPlanner/Transportation/rail_main.asp?kosm=m1_4&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/01TripPlanner/Transportation/subway_main.asp?kosm=m1_4&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/01TripPlanner/Transportation/taxi.asp?kosm=m1_4&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/04Bookings/CarRental/service_Info.asp?konum=1&kosm=m4_6';

	}


}

function gosubPlanner_04(konum){
	if (konum=='subm5_1'){
		top.document.location.href ='/01TripPlanner/Transportation/bus_seoul.asp?kosm=m1_4&konum='+konum;
	} else if (konum=='subm5_2'){
		top.document.location.href ='/01TripPlanner/Transportation/bus_main.asp?kosm=m1_4&konum='+konum;
	} 
}

function goPlanner_05(konum){

	if (konum==1){
		top.document.location.href ='/01TripPlanner/Accommodations/hotel.asp?kosm=m1_5&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/01TripPlanner/Accommodations/motel.asp?kosm=m1_5&konum='+konum;
	}  else if (konum==3){
		top.document.location.href ='/01TripPlanner/Accommodations/condo.asp?kosm=m1_5&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/01TripPlanner/Accommodations/hostel.asp?kosm=m1_5&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/01TripPlanner/Accommodations/templestay.asp?kosm=m1_5&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/01TripPlanner/Accommodations/guesthouse.asp?kosm=m1_5&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/01TripPlanner/Accommodations/hanok.asp?kosm=m1_5&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/01TripPlanner/Accommodations/others.asp?kosm=m1_5&konum='+konum;
	} else if (konum==9){
		top.document.location.href ='/01TripPlanner/Accommodations/handy_korean_phrases02.asp?kosm=m1_5&konum='+konum;
	} else if (konum==10){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases02.asp?kosm=m2_9&konum='+konum;

	}
}

function gosubPlanner_05(konum){
	if (konum=='subm1_1'){
		top.document.location.href ='/01TripPlanner/Accommodations/hotel.asp?kosm=m1_5&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/04Bookings/Accommodations/hotelsearch.asp?konum=1&kosm=m4_1';
	} else if (konum=='subm1_3'){
		top.document.location.href ='/01TripPlanner/Accommodations/hotellist.asp?kosm=m1_5&konum='+konum;
	} 


}

function goPlanner_06(konum){
	if (konum==1){
		top.document.location.href ='/01TripPlanner/TouristInfo/1330.asp?kosm=m1_7&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/01TripPlanner/TouristInfo/introduction.asp?kosm=m1_7&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/01TripPlanner/TouristInfo/e_book.asp?kosm=m1_7&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/01TripPlanner/TouristInfo/tcc.asp?kosm=m1_7&konum='+konum;		
	} else if (konum==7){
		top.document.location.href ='/01TripPlanner/Report_Error/Promotion.asp?kosm=m1_7&konum='+konum;
	}else if (konum==8){
		top.document.location.href ='/07T2KZone/Inquiries/qna_main.asp?kosm=m7_6&konum=2'
	}

}

function gosubPlanner_06(konum){
	if (konum=='subm2_1'){
		top.document.location.href ='/01TripPlanner/TouristInfo/about_tic.asp?kosm=m1_7&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/01TripPlanner/TouristInfo/local_tic.asp?kosm=m1_7&konum='+konum;
	} 


}


function goPlanner_07(konum){
	if (konum==1){
		top.document.location.href ='/01TripPlanner/map/t2kservice.asp?kosm=m1_8&konum='+konum;
	} 
}

function gosubPlanner_07(konum){
	if (konum=='subm2_1'){
		top.document.location.href ='/01TripPlanner/Map/seoul.asp?kosm=m1_8&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/01TripPlanner/Map/fmgv.asp?kosm=m1_8&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/01TripPlanner/Map/jongno.asp?kosm=m1_8&konum='+konum;
	} else if (konum=='subm2_4'){
		top.document.location.href ='/01TripPlanner/Map/insa.asp?kosm=m1_8&konum='+konum;
	} else if (konum=='subm2_5'){
		top.document.location.href ='/01TripPlanner/Map/dongdae.asp?kosm=m1_8&konum='+konum;
	} else if (konum=='subm2_6'){
		top.document.location.href ='/01TripPlanner/Map/namdae.asp?kosm=m1_8&konum='+konum;
	} else if (konum=='subm2_7'){
		top.document.location.href ='/01TripPlanner/Map/myeong.asp?kosm=m1_8&konum='+konum;
	} else if (konum=='subm2_8'){
		top.document.location.href ='/01TripPlanner/Map/itaewon.asp?kosm=m1_8&konum='+konum;

	} 


}

function goPlanner_08(konum){
	if (konum==1){
		top.document.location.href ='/01TripPlanner/CurrencyExchange/introduction.asp?kosm=m1_9&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/01TripPlanner/CurrencyExchange/foreign.asp?kosm=m1_9&konum='+konum;
	} else if (konum==3){
	
		//top.document.location.href ='#';
		
		window.open('http://www.shinhan.com/ps/Prod/exchange/exchange/current_rate.jsp','_new','width=665,height=600,scrollbars=yes');
	} else if (konum==4){
		top.document.location.href ='/01TripPlanner/CurrencyExchange/where.asp?kosm=m1_9&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/01TripPlanner/CurrencyExchange/exchange.asp?kosm=m1_9&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/01TripPlanner/CurrencyExchange/report.asp?kosm=m1_9&konum='+konum;
	}
}

function goPlanner_10(konum){
	if (konum==1){
		//top.document.location.href ='/11overseas/UnitedStates/office.asp?kosm=m7_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/11Overseas/UnitedStates/happening_list.asp?lan_id=e&city=&kosm=m7_6&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/11overseas/UnitedStates/entry.asp?lan_id=e&city=&kosm=m7_6&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/04Bookings/Overseas/packages_list.asp?kosm=m4_3&nation=225&air=U000&konum=subm3_1';
	} else if (konum==5){
		top.document.location.href ='/04Bookings/Overseas/agencies_list.asp?kosm=m4_3&konum=subm3_2';
	} else if (konum==6){
		top.document.location.href ='/11Overseas/UnitedStates/qanda_list.asp?lan_id=e&city=&kosm=m7_6&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/11Overseas/UnitedStates/reference_list.asp?lan_id=e&city=&kosm=m7_6&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5';
	}
}

function gosubPlanner_10(konum){
	if (konum=='subm1_1'){
		top.document.location.href ='/11overseas/UnitedStates/office.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/11Overseas/UnitedStates/office_la01.asp?kosm=m7_6&konum='+konum+'&lan_id=e&city=LA';
	} else if (konum=='subm1_3'){
		top.document.location.href ='/11Overseas/UnitedStates/office_ny01.asp?kosm=m7_6&konum='+konum+'&lan_id=e&city=NY';
	} else if (konum=='subm1_4'){
		top.document.location.href ='/11Overseas/UnitedStates/office_cg01.asp?kosm=m7_6&konum='+konum+'&lan_id=e&city=CH';
	}
}

function goPlanner_12(konum){
	if (konum==1){
		top.document.location.href ='/11Overseas/Singapore/office_sp01.asp?kosm=m7_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/11Overseas/Singapore/happening_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/11Overseas/Singapore/entry01.asp?kosm=m7_6&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/11Overseas/Singapore/Travel_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/04Bookings/Overseas/packages_list.asp?kosm=m4_3&nation=187&air=S000&konum=subm3_1';
	} else if (konum==8){
		top.document.location.href ='/04Bookings/overseas/agencies_list.asp?kosm=m4_3&cntry_cd=SG&konum='+konum;
	} else if (konum==9){
		top.document.location.href ='/11Overseas/Singapore/qanda_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==10){
		top.document.location.href ='/11Overseas/Singapore/reference_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==11){
		top.document.location.href ='/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5';
	}


}

function gosubPlanner_12(konum){
	if (konum=='subm4_1'){
		top.document.location.href ='/11Overseas/Singapore/Four_seasons_four_senses.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm4_2'){
		top.document.location.href ='/11Overseas/Singapore/flora_korea.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm4_3'){
		top.document.location.href ='http://english.tour2korea.com/06shopping/ShoppingInSeoul/insadong01.asp?konum=subm1_1&kosm=m6_2';
	} else if (konum=='subm4_4'){
		top.document.location.href ='/11Overseas/Singapore/maple_korea.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm4_5'){
		top.document.location.href ='/11Overseas/Singapore/ski_korea.asp?kosm=m7_6&konum='+konum;

	} else if (konum=='subm5_1'){
		top.document.location.href ='/11Overseas/Singapore/free_easy_travel.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm5_2'){
		top.document.location.href ='/11Overseas/Singapore/korea_wave.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm5_3'){
		top.document.location.href ='/11Overseas/Singapore/muslim.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm5_4'){
		top.document.location.href ='/11Overseas/Singapore/weddingKorea.asp?kosm=m7_6&konum='+konum;
	} else if (konum=='subm5_5'){
		top.document.location.href ='/11Overseas/Singapore/romanticjeju.asp?kosm=m7_6&konum='+konum;

	} 
}

function goPlanner_13(konum){
	if (konum==1){
		top.document.location.href ='/11Overseas/HongKong/office_hk01.asp?kosm=m7_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/11Overseas/HongKong/happening_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/11Overseas/HongKong/entry.asp?kosm=m7_6&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/04Bookings/Overseas/packages_list.asp?kosm=m4_3&nation=97&air=H000&konum=subm3_1';
	} else if (konum==5){
		top.document.location.href ='/04Bookings/overseas/agencies_list.asp?kosm=m4_3&cntry_cd=HK&konum=subm3_2';
	} else if (konum==6){
		top.document.location.href ='/11Overseas/HongKong/qanda_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/11Overseas/HongKong/reference_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5'

	}

}


function goPlanner_14(konum){
	if (konum==1){
		top.document.location.href ='/11Overseas/London/office_ld01.asp?kosm=m7_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/11Overseas/London/happening_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/11Overseas/London/entry.asp?kosm=m7_6&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/04Bookings/Overseas/packages_list.asp?kosm=m4_3&nation=224&air=UK00&konum=subm3_1';
	} else if (konum==5){
		top.document.location.href ='/04Bookings/overseas/agencies_list.asp?kosm=m4_3&cntry_cd=UK&konum=subm3_2';
	} else if (konum==6){
		top.document.location.href ='/11Overseas/London/qanda_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/11Overseas/London/reference_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5'

	}

}

function goPlanner_15(konum){
	if (konum==1){
		top.document.location.href ='/11Overseas/Sydney/office_sn01.asp?kosm=m7_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/11Overseas/Sydney/happening_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/11Overseas/Sydney/entry.asp?kosm=m7_6&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/04Bookings/Overseas/packages_list.asp?kosm=m4_3&nation=13&air=A000&konum=subm3_1';
	} else if (konum==5){
		top.document.location.href ='/04Bookings/overseas/agencies_list.asp?kosm=m4_3&cntry_cd=AU&konum=subm3_2';
	} else if (konum==6){
		top.document.location.href ='/11Overseas/Sydney/qanda_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/11Overseas/Sydney/reference_list.asp?kosm=m7_6&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/01TripPlanner/TouristInfo/b.asp?kosm=m1_7&konum=5'

	}

}

function goCulture_02(konum){

	if (konum==1){
		top.document.location.href ='/02Culture/performances/theaters.asp?kosm=m2_2&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/04Bookings/Performances/introduction.asp?kosm=m4_2&konum=1';
	} 

}

function goCulture_03(konum){

	if (konum==6){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco01.asp?kosm=m2_3&konum='+konum;
	} else if (konum==1){
		top.document.location.href ='/02Culture/TraditionalCulture/pottery.asp?kosm=m2_3&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/02Culture/TraditionalCulture/music.asp?kosm=m2_3&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/02Culture/TraditionalCulture/dance.asp?kosm=m2_3&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/02Culture/TraditionalCulture/clothing.asp?kosm=m2_3&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/02Culture/TraditionalCulture/houses.asp?kosm=m2_3&konum='+konum;
	}


}

function gosubCulture_03(konum){
	if (konum=='subm6_1'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco01.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_2'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco02.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_3'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco03.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_4'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco04.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_5'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco05.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_6'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco08.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_7'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco09.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_8'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco06.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_9'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco07.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_10'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco10.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_11'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco11.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_12'){
		top.document.location.href ='/02Culture/TraditionalCulture/unesco12.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_13'){
		top.document.location.href ='/02Culture/TraditionalCulture/pansori.asp?kosm=m2_3&konum='+konum;
	} else if (konum=='subm6_14'){
		top.document.location.href ='/02Culture/TraditionalCulture/dano.asp?kosm=m2_3&konum='+konum;
	}
}

function goCulture_04(konum){

	if (konum==1){
		top.document.location.href ='/02Culture/ReligionBeliefs/buddhism_01.asp?kosm=m2_4&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/02Culture/ReligionBeliefs/protestanism.asp?kosm=m2_4&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/02Culture/ReligionBeliefs/catholicism.asp?kosm=m2_4&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/02Culture/ReligionBeliefs/shamanism.asp?kosm=m2_4&konum='+konum;
	}


}

function gosubCulture_04(konum){

	if (konum=='subm1_1'){
		top.document.location.href ='/02Culture/ReligionBeliefs/buddhism_01.asp?kosm=m2_4&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/02Culture/ReligionBeliefs/buddhism_02.asp?kosm=m2_4&konum='+konum;
	} else if (konum=='subm1_3'){
		top.document.location.href ='/02Culture/ReligionBeliefs/buddhism_03.asp?kosm=m2_4&konum='+konum;
	}


}


function goCulture_05(konum){

	if (konum==1){
		top.document.location.href ='/02Culture/Movies/movie_01.asp?kosm=m2_5&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/02Culture/Movies/movie_02.asp?kosm=m2_5&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/02Culture/Movies/movie_03.asp?kosm=m2_5&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/02Culture/Movies/movie_05.asp?kosm=m2_5&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/02Culture/Movies/movie_06.asp?kosm=m2_5&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/02Culture/Movies/movie_07.asp?kosm=m2_5&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/02Culture/Movies/movie_08.asp?kosm=m2_5&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/02Culture/Movies/movie_09.asp?kosm=m2_5&konum='+konum;
	} else if (konum==9){
		top.document.location.href ='/02Culture/Movies/movie_10.asp?kosm=m2_5&konum='+konum;
	} else if (konum==10){
		top.document.location.href ='/02Culture/Movies/movie_11.asp?kosm=m2_5&konum='+konum;
	} else if (konum==11){
		top.document.location.href ='/06Shopping/OnlineShopping/books_dvds.asp?kosm=m6_6&konum=1';
	}


}

function goCulture_06(konum){

	if (konum==2){
		top.document.location.href ='/02Culture/TVMiniseries/movie_03.asp?kosm=m2_6&konum='+konum;
	}
	else if (konum==1){
		top.document.location.href ='/02Culture/TVMiniseries/synopsis_location.asp?kosm=m2_6&konum='+konum;
	}

}

function gosubCulture_06(konum){

	if (konum=='subm1_1'){
		top.document.location.href ='/02Culture/TVMiniseries/drama_wintersonata.asp?kosm=m2_6&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/02Culture/TVMiniseries/drama_allin.asp?kosm=m2_6&konum='+konum;
	} else if (konum=='subm1_3'){
		top.document.location.href ='/02Culture/TVMiniseries/drama_gaeul.asp?kosm=m2_6&konum='+konum;
	} else if (konum=='subm1_4'){
		top.document.location.href ='/02Culture/TVMiniseries/drama_yeoreum.asp?kosm=m2_6&konum='+konum;
	} else if (konum=='subm3_1'){
		top.document.location.href ='/02Culture/TVMiniseries/back_wintersonata.asp?kosm=m2_6&konum='+konum;
	} else if (konum=='subm3_2'){
		top.document.location.href ='/02Culture/TVMiniseries/back_allin.asp?kosm=m2_6&konum='+konum;
	} else if (konum=='subm3_3'){
		top.document.location.href ='/02Culture/TVMiniseries/back_gaeul.asp?kosm=m2_6&konum='+konum;
	} else if (konum=='subm3_4'){
		top.document.location.href ='/02Culture/TVMiniseries/back_yeoreum.asp?kosm=m2_6&konum='+konum;

	}


}

function goCulture_07(konum){

	if (konum=='2'){
		top.document.location.href ='/02Culture/Sports/taekkyeon.asp?kosm=m2_8&konum='+konum;
	} 
}

function gosubCulture_07(konum){

	if (konum=='subm1_1'){
		top.document.location.href ='/02Culture/Sports/taegwondo.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/02Culture/Sports/t_history.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm1_3'){
		top.document.location.href ='/02Culture/Sports/t_rule.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm1_4'){
		top.document.location.href ='/02Culture/Sports/t_rule02.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm1_5'){
		top.document.location.href ='/02Culture/Sports/t_study.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm1_6'){
		top.document.location.href ='/02Culture/Sports/t_tour.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm1_7'){
		top.document.location.href ='/02Culture/Sports/t_festival.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm1_8'){
		top.document.location.href ='/02Culture/Sports/t_photo.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm2_1'){
		top.document.location.href ='/02Culture/Sports/tour_02.asp?kosm=m2_8&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/02Culture/Sports/tour_01.asp?kosm=m2_8&konum='+konum;

	}

}

function goCulture_08(konum){

	if (konum=='1'){
		top.document.location.href ='/02Culture/KoreanLanguage/learn_korean_language.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='3'){
		top.document.location.href ='/02Culture/KoreanLanguage/summer_main.asp?kosm=m2_9&konum='+konum;
	}
}

function gosubCulture_08(konum){

	if (konum=='subm1_1'){
		top.document.location.href ='/02Culture/KoreanLanguage/learn_korean_language.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/02Culture/KoreanLanguage/l_korean/KoreanAdventure.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm2_1'){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases01.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases02.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases03.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm2_4'){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases04.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm2_5'){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases05.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm2_6'){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases06.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm2_7'){
		top.document.location.href ='/02Culture/KoreanLanguage/handy_korean_phrases07.asp?kosm=m2_9&konum='+konum;


	} else if (konum=='subm4_1'){
		top.document.location.href ='/02Culture/KoreanLanguage/roman_korean_language.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm4_2'){
		top.document.location.href ='/02Culture/KoreanLanguage/roman_korean_system.asp?kosm=m2_9&konum='+konum;
	} else if (konum=='subm4_3'){
		top.document.location.href ='/02Culture/KoreanLanguage/roman_korean_example.asp?kosm=m2_9&konum='+konum;

	}
}

function goCulture_09(konum){

	if (konum=='2'){
		top.document.location.href ='http://world.kbs.co.kr/english/enter/music_inter.htm';
	} else if (konum=='1'){
		top.document.location.href ='/02Culture/Entertainment/news.asp?kosm=m2_7&konum='+konum;
	}
}

function goSightseeing_03(konum){
	if (konum==1){
		top.document.location.href ='/03Sightseeing/ThemeTours/city_tour.asp?kosm=m3_3&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/03Sightseeing/ThemeTours/walking_deoksugung.asp?kosm=m3_3&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/03Sightseeing/ThemeTours/nighttour.asp?kosm=m3_3&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/03Sightseeing/ThemeTours/drama_tour.asp?kosm=m3_3&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/03Sightseeing/ThemeTours/park.asp?kosm=m3_3&konum='+konum;
	} 
                 else if (konum==7){
		top.document.location.href ='/03Sightseeing/ThemeTours/dmz.asp?kosm=m3_3&konum='+konum;
	} 
	  else if (konum==9){
		top.document.location.href ='/03Sightseeing/ThemeTours/beauty.asp?kosm=m3_3&konum='+konum;
	} else if (konum==10){
		top.document.location.href ='/03Sightseeing/ThemeTours/sum.asp?kosm=m3_3&konum='+konum;
	} else if (konum==12){
		top.document.location.href ='/03Sightseeing/ThemeTours/four_seasons.asp?kosm=m3_3&konum='+konum;
	}	
}

function gosubSightseeing_03(konum){
	if (konum=='subm2_1'){
		top.document.location.href ='/03Sightseeing/ThemeTours/daehak.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/03Sightseeing/ThemeTours/sinchon.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/03Sightseeing/ThemeTours/leewha.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm2_4'){
		top.document.location.href ='/03Sightseeing/ThemeTours/apgujeong.asp?kosm=m3_3&konum='+konum;
	}  else if (konum=='subm8_1'){
		top.document.location.href ='/03Sightseeing/ThemeTours/experience.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm8_2'){
		top.document.location.href ='/02Culture/ReligionBeliefs/buddhism_03.asp?kosm=m2_4&konum=subm1_3';
	} else if (konum=='subm8_3'){
		top.document.location.href ='/03Sightseeing/ThemeTours/kimchi.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm8_4'){
		top.document.location.href ='/02Culture/Sports/t_tour.asp?kosm=m2_7&konum=subm1_6';
	} else if (konum=='subm11_1'){
		top.document.location.href ='/03Sightseeing/ThemeTours/visiting.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm11_2'){
		top.document.location.href ='/03Sightseeing/ThemeTours/year01.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm11_3'){
		top.document.location.href ='/03Sightseeing/ThemeTours/where01.asp?kosm=m3_3&konum='+konum;
	} else if (konum=='subm11_4'){
		top.document.location.href ='/03Sightseeing/ThemeTours/tour_main.asp?kosm=m3_3&konum='+konum;
	}
}

function goSightseeing_transit(konum){

	if (konum==1){
		top.document.location.href ='/03Sightseeing/transittour/transittour_01.asp?kosm=m3_4&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/03Sightseeing/transittour/transittour_02.asp?kosm=m3_4&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/03Sightseeing/transittour/transittour_03.asp?kosm=m3_4&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/03Sightseeing/transittour/transittour_04.asp?kosm=m3_4&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/03Sightseeing/transittour/transittour_05.asp?kosm=m3_4&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/03Sightseeing/transittour/transittour_06.asp?kosm=m3_4&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/03Sightseeing/transittour/transittour_07.asp?kosm=m3_4&konum='+konum;
	} 
                   else if (konum==8){
		top.document.location.href ='/03sightseeing/Themetours/dmz_ts01.asp?kosm=m3_3&konum=subm7_2';
	} 
}

function goSightseeing_05(konum){

 	if (konum==1){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/main_list.asp?kosm=m3_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/nk_tourist.asp?kosm=m3_6&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/nk_cultural.asp?kosm=m3_6&konum='+konum;
	}

}



function gosubSightseeing_05(konum){

 	if (konum=='subm4_1'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/list01.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_2'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/list02.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_3'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/list03.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_4'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/list07.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_5'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/geumgangsan.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_6'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/geumgangsan_staying.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_7'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/geumgangsan_optiontour.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_8'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/geumgangsan_information.asp?kosm=m3_6&konum='+konum;
	} else if (konum=='subm4_9'){
		top.document.location.href ='/03Sightseeing/NorthKoreaTours/geumgangsan_photo.asp?kosm=m3_6&konum='+konum;
	}
}

function goBooking_02(konum){
 	if (konum==1){
		top.document.location.href ='/04Bookings/Performances/introduction.asp?kosm=m4_2&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/04Bookings/Performances/seedetails.asp?oid=15&kosm=m4_2&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/04Bookings/Performances/seedetails.asp?oid=24&kosm=m4_2&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/04Bookings/Performances/reservations.asp?kosm=m4_2&konum='+konum;
	} else if (konum==5){
		//top.document.location.href ='/04Bookings/Performances/reviews.asp?kosm=m4_2&konum='+konum;
		top.document.location.href ='/04Bookings/Performances/referencecenter_list.asp?kosm=m4_2&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='http://club.tour2korea.com/bookings'
	}
}

function goBooking_03(konum){
 	if (konum==1){
		top.document.location.href = '/04Bookings/tourpackages/domestictours.asp?kosm=m4_3&konum='+konum;
              }else if (konum==2){
		top.document.location.href = '/04Bookings/Overseas/overseas.asp?kosm=m4_3&konum='+konum;
	} 
else if (konum==3){
		top.document.location.href = 'http://club.tour2korea.com/bookings'
	} 
}

function gosubBooking_03(konum){
 	if (konum=='subm1_1'){
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_2'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_3'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_4'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_5'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_6'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_7'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_8'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_9'){    
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} else if (konum=='subm1_10'){   
		top.document.location.href = '/04Bookings/HodoTour/HodoTour.asp?kosm=m4_3&konum='+konum;
	} 
}


function goSightseeing_07(konum){
 	if (konum==1){		
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_about01.asp?kosm=m3_8&konum='+konum;
	} else if (konum==2){
		
	} else if (konum==3){
		
	} else if (konum==4){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_accom.asp?kosm=m3_8&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_trans.asp?kosm=m3_8&konum='+konum;
	}
}


function gosubSightseeing_07(konum){
 	if (konum=='subm2_1'){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_famous.asp?kosm=m3_8&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_allin.asp?kosm=m3_8&konum='+konum;		
	}  else if (konum=='subm2_3'){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_trans.asp?kosm=m3_8&konum='+konum;
	} else if (konum=='subm3_1'){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_Best.asp?kosm=m3_8&konum='+konum;
	} else if (konum=='subm3_2'){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_udo.asp?kosm=m3_8&konum='+konum;
	} else if (konum=='subm3_3'){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_health.asp?kosm=m3_8&konum='+konum;
	} else if (konum=='subm3_4'){
		top.document.location.href ='/03Sightseeing/JejuTours/jeju_special.asp?kosm=m3_8&konum='+konum;
	}
}

function goBooking_04(konum){

 	if (konum==1){
		top.document.location.href ='/04Bookings/MobilePhoneRental/phone_sk01.asp?kosm=m4_4&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/04Bookings/MobilePhoneRental/phone_sk02.asp?kosm=m4_4&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/04Bookings/MobilePhoneRental/phone_sk04.asp?kosm=m4_4&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/04Bookings/MobilePhoneRental/phone_sk03.asp?kosm=m4_4&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/04Bookings/MobilePhoneRental/phone_sk05.asp?kosm=m4_4&konum='+konum;
	} else if (konum==6){
//		top.document.location.href ='/04Bookings/MobilePhoneRental/phone_sk_reservation01.asp?kosm=m4_4&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='http://club.tour2korea.com/bookings'
	}
}

function goBooking_05(konum){
 	if (konum==1){
		top.document.location.href ='/04Bookings/Flights/information.asp?kosm=m4_5&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/04Bookings/Flights/hanwha.asp?kosm=m4_5&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='http://club.tour2korea.com/bookings'
	}
}

function goBooking_06(konum){

 	if (konum==1){
		top.document.location.href ='/04Bookings/CarRental/service_Info.asp?kosm=m4_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/04Bookings/CarRental/reservation.asp?kosm=m4_6&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='http://club.tour2korea.com/bookings'
	}

}

function goBooking_07(konum){

 	if (konum==1){
		top.document.location.href ='/04Bookings/GoodwillGuide/introduction.asp?kosm=m4_7&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/04Bookings/GoodwillGuide/introduction02.asp?kosm=m4_7&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/04Bookings/GoodwillGuide/sorry.asp?kosm=m4_7&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/04Bookings/GoodwillGuide/sorry.asp?kosm=m4_7&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/04Bookings/GoodwillGuide/sorry.asp?kosm=m4_7&konum='+konum;

	}

}

function goBooking_08(konum){

 	if (konum==1){
 	
		//top.document.location.href ='/04Bookings/coupon/visa/visa_read.asp?kosm=m4_8&konum='+konum;
		
		visaCategory('001', konum)
	} else if (konum==2){
	
		//top.document.location.href ='/04Bookings/coupon/visa/visa_read.asp?kosm=m4_8&konum='+konum;
		
		visaCategory('002', konum)
	} else if (konum==3){
	
		//top.document.location.href ='/04Bookings/coupon/visa/visa_read.asp?kosm=m4_8&konum='+konum;
		
		visaCategory('003', konum)
	} else if (konum==4){
	
		//top.document.location.href ='/04Bookings/coupon/visa/visa_read.asp?kosm=m4_8&konum='+konum;
		
		visaCategory('004', konum)
	} else if (konum==5){
	
		//top.document.location.href ='/04Bookings/coupon/visa/visa_read.asp?kosm=m4_8&konum='+konum;
		
		visaCategory('005', konum)
	}

}




function goCoupon_01(konum){

 	if (konum==1){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_what.asp?kosm=m4_8&konum='+konum;
	} else if (konum==2){
		
	} else if (konum==3){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_offline.asp?kosm=m4_8&konum='+konum;
	} /*else if (konum==4){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_offline.asp?kosm=m4_8&konum='+konum;
	}*/


}

function gosubCoupon_01(konum){
 	if (konum=='subm2_1'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_table.asp?kosm=m4_8&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_01.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_3'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_02.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_4'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_03.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_5'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_04.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_6'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_05.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_7'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_06.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_8'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_07.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_9'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_08.asp?kosm=m4_8&konum='+konum;
	}else if (konum=='subm2_10'){
		top.document.location.href ='/04Bookings/Coupon/GEONGGI/coupon_list_09.asp?kosm=m4_8&konum='+konum;
	}
}




function goFood_01(konum){

 	if (konum==1){
		top.document.location.href ='/05food/Introduction/lifestyle_food.asp?kosm=m5_1&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/05food/Introduction/royal_cuisine.asp?kosm=m5_1&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/05food/Introduction/festive_foods.asp?kosm=m5_1&konum='+konum;
	}


}

function gosubFood_01(konum){
 	if (konum=='subm2_1'){
		top.document.location.href ='/05food/Introduction/ddt_kimchi01.asp?kosm=m5_1&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/05food/Introduction/ddt_kimchi02.asp?kosm=m5_1&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/05food/Introduction/ddt_kimchi03.asp?kosm=m5_1&konum='+konum;
	} else if (konum=='subm2_4'){
		top.document.location.href ='/05food/Introduction/ddt_kimchi04.asp?kosm=m5_1&konum='+konum;

	}
}

function goFood_02(konum){

 	if (konum==1){
		top.document.location.href ='/05food/WhatToEat/quintessential_snacks.asp?kosm=m5_2&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/05food/WhatToEat/ddt_wines.asp?kosm=m5_2&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/05food/WhatToEat/ddt_tea.asp?kosm=m5_2&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/05food/WhatToEat/popular_snacks.asp?kosm=m5_2&konum='+konum;

	}


}

function goFood_03(konum){

 	if (konum==1){
		top.document.location.href ='/05food/LocalFood/cls_main.asp?kosm=m5_3&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/05food/LocalFood/cls_su.asp?kosm=m5_3&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/05food/LocalFood/cls_gg.asp?kosm=m5_3&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/05food/LocalFood/cls_cc.asp?kosm=m5_3&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/05food/LocalFood/cls_gs.asp?kosm=m5_3&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/05food/LocalFood/cls_jl.asp?kosm=m5_3&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/05food/LocalFood/cls_gw.asp?kosm=m5_3&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/05food/LocalFood/cls_jj.asp?kosm=m5_3&konum='+konum;

	}


}

function goFood_04(konum){

 	if (konum==1){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=6142&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=8551&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=10277&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=11614&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=12521&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=13314&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=13918&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=21134&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==9){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=15741&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==10){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=40084&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==11){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=38693&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==12){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=36071&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==13){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=32863&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==14){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=29207&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==15){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=24703&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==16){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=36100&Address_2=&kosm=m5_4&konum='+konum;
	} else if (konum==17){
		top.document.location.href ='/05food/WhereToEat/Depth02.asp?Address_1=29207&Address_2=25712&kosm=m5_4&konum='+konum;
	}

}

function goFood_05(konum){

 	if (konum==1){
		top.document.location.href ='/05food/ArtOfEating/setting_table02.asp?kosm=m5_5&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/05food/ArtOfEating/quick_referance.asp?kosm=m5_5&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/05food/ArtOfEating/useful_expression.asp?kosm=m5_5&konum='+konum;
	} 
}

function gosubFood_05(konum){

 	if (konum=='subm2_1'){
		top.document.location.href ='/05food/ArtOfEating/setting_ban.asp?kosm=m5_5&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/05food/ArtOfEating/setting_juk.asp?kosm=m5_5&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/05food/ArtOfEating/setting_juan.asp?kosm=m5_5&konum='+konum;
	} else if (konum=='subm2_4'){
		top.document.location.href ='/05food/ArtOfEating/setting_gyoja.asp?kosm=m5_5&konum='+konum;
	} else if (konum=='subm2_5'){
		top.document.location.href ='/05food/ArtOfEating/setting_dagwa.asp?kosm=m5_5&konum='+konum;

	} 
}

function goShopping_01(konum){

 	if (konum==1){ 
		top.document.location.href ='/06shopping/ShoppingInkorea/duty_information01.asp?kosm=m6_1&konum='+konum;
	} else if (konum==2){
   	top.document.location.href ='/06shopping/ShoppingInkorea/department01.asp?kosm=m6_1&konum='+konum;

	} else if (konum==3){ 
   	top.document.location.href ='/06shopping/ShoppingInkorea/shopping_advice.asp?kosm=m6_1&konum='+konum;  			

	} /* else if (konum==5){ 
		top.document.location.href ='/06shopping/ShoppingNews/Brand_read_recomm.asp';
		  //top.document.location.href ='/06shopping/ShoppingNews/Brand_list.asp?kosm=m6_1&konum='+konum;
	}  else if (konum==6){ 
		top.document.location.href ='/06shopping/ShoppingNews/coupon_list.asp?kosm=m6_1&konum='+konum;

	} */ else if (konum==4){ 
		top.document.location.href ='/06shopping/ShoppingInkorea/tax_refund.asp?kosm=m6_1&konum='+konum;
		
	}  else if (konum==5){ 
		top.document.location.href ='/06shopping/ShoppingInkorea/handy_korean_phrases04.asp?kosm=m6_1&konum='+konum;

	}
}

function gosubShopping_01(konum){

 	if (konum=='subm2_1'){
		top.document.location.href ='/06shopping/ShoppingInkorea/duty_information01.asp?kosm=m6_1&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/06shopping/ShoppingInkorea/duty_location.asp?kosm=m6_1&konum='+konum;
	}
}


function gosubShopping_02(konum){

 	if (konum=='subm1_1'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/insadong01.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/insadong02.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm1_3'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/insadong03.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm1_4'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/insadong04.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm1_5'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/insadong05.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm1_6'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/insadong06.asp?kosm=m6_2&konum='+konum;


	} else if (konum=='subm2_1'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/myeong01.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/myeong02.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/myeong03.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm2_4'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/myeong04.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm2_5'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/myeong05.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm2_6'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/myeong06.asp?kosm=m6_2&konum='+konum;


	} else if (konum=='subm3_1'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/nam01.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm3_2'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/nam02.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm3_3'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/nam03.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm3_4'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/nam04.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm3_5'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/nam05.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm3_6'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/nam06.asp?kosm=m6_2&konum='+konum;



	} else if (konum=='subm4_1'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/dong01.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm4_2'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/dong02.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm4_3'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/dong03.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm4_4'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/dong04.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm4_5'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/dong05.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm4_6'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/dong06.asp?kosm=m6_2&konum='+konum;

	} else if (konum=='subm5_1'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/itae01.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm5_2'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/itae02.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm5_3'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/itae03.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm5_4'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/itae04.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm5_5'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/itae05.asp?kosm=m6_2&konum='+konum;
	} else if (konum=='subm5_6'){
		top.document.location.href ='/06shopping/ShoppingInSeoul/itae06.asp?kosm=m6_2&konum='+konum;


	} 
}

function goShopping_03(konum){

 	if (konum==1){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=6142&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=8551&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=10277&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=11614&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=12521&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=13314&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=13918&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==8){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=21134&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==9){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=15741&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==10){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=40084&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==11){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=38693&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==12){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=36071&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==13){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=32863&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==14){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=29207&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==15){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=24703&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==16){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=36100&Address_2=&kosm=m6_3&konum='+konum;
	} else if (konum==17){
		top.document.location.href ='/06shopping/WhereToshop/Depth02.asp?Address_1=29207&Address_2=25712&kosm=m6_3&konum='+konum;
	}

}

function goShopping_04(konum){

 	if (konum=='3'){
		top.document.location.href ='/06shopping/WhatToBuy/clothing_leather.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='4'){
		top.document.location.href ='/06shopping/WhatToBuy/jewelry.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='5'){
		top.document.location.href ='/06shopping/WhatToBuy/electronics.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='6'){
		top.document.location.href ='/06shopping/WhatToBuy/others.asp?kosm=m6_4&konum='+konum;
	} 
}


function gosubShopping_04(konum){

 	if (konum=='subm1_1'){
		top.document.location.href ='/06shopping/WhatToBuy/uniquely_pottery.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='subm1_2'){
		top.document.location.href ='/06shopping/WhatToBuy/uniquely_kimchi.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='subm1_3'){
		top.document.location.href ='/06shopping/WhatToBuy/uniquely_ginseng.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='subm1_4'){
		top.document.location.href ='/06shopping/WhatToBuy/uniquely_gim.asp?kosm=m6_4&konum='+konum;



	} else if (konum=='subm2_1'){
		top.document.location.href ='/06shopping/WhatToBuy/souvenir_crafts.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/06shopping/WhatToBuy/souvenir_antiques.asp?kosm=m6_4&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/06shopping/WhatToBuy/souvenir_hanbok.asp?kosm=m6_4&konum='+konum;

	} 
}


function goShopping_06(konum){

 	if (konum=='1'){      
		top.document.location.href ='/06Shopping/OnlineShopping/books_dvds.asp?kosm=m6_6&konum='+konum;
	} else if (konum=='2'){
		window.open('http://mall.epost.go.kr/index_us.jsp ','');
	} 
}


function goShopping_07(konum){

 	if (konum=='1'){
		top.document.location.href ='/06shopping/KoreaGrandSale/main.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='5'){
		top.document.location.href ='/06shopping/KoreaGrandSale/hotellist.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='6'){
		top.document.location.href ='/06shopping/KoreaGrandSale/others.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='7'){
		top.document.location.href ='/06Shopping/KoreaGrandSale/Hiseoul2004.asp?kosm=m6_7&konum='+konum;
	} 
}

function gosubShopping_07(konum){

 	if (konum=='subm2_1'){
		top.document.location.href ='/06Shopping/KoreaGrandSale/dong.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/06shopping/KoreaGrandSale/myeongdong.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/06shopping/KoreaGrandSale/itaewon.asp?kosm=m6_7&konum='+konum;

	} else if (konum=='subm3_1'){
		top.document.location.href ='/06shopping/KoreaGrandSale/lottedf.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='subm3_2'){
		top.document.location.href ='/06shopping/KoreaGrandSale/hotelshilladf.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='subm3_3'){
		top.document.location.href ='/06shopping/KoreaGrandSale/dongwhadf.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='subm3_4'){
		top.document.location.href ='/06shopping/KoreaGrandSale/walkerhilldf.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='subm3_5'){
		top.document.location.href ='/06shopping/KoreaGrandSale/skmdf.asp?kosm=m6_7&konum='+konum;

	} else if (konum=='subm4_1'){
		top.document.location.href ='/06shopping/KoreaGrandSale/lottedp.asp?kosm=m6_7&konum='+konum;
	} else if (konum=='subm4_2'){
		top.document.location.href ='/06shopping/KoreaGrandSale/shinsegyedp.asp?kosm=m6_7&konum='+konum;

	} 
}

function goT2KZone_01(konum){

	if (konum==1){
		top.document.location.href ='/07T2KZone/Communities/group.asp?kosm=m7_1&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/07T2KZone/Communities/group.asp?kosm=m7_1&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/07T2KZone/Communities/group.asp?kosm=m7_1&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/07T2KZone/Communities/group.asp?kosm=m7_1&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/07T2KZone/Communities/group.asp?kosm=m7_1&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/07T2KZone/Communities/group.asp?kosm=m7_1&konum='+konum;
	}

}


function goT2KZone_02(konum){

	if (konum==1){
		top.document.location.href ='/07T2KZone/Chronicles/mystory_korea_list.asp?kosm=m7_2&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/07T2KZone/Chronicles/forum_tk_list.asp?kosm=m7_2&konum='+konum;
	}

}


function goT2KZone_03(konum){

	if (konum==1){
		top.document.location.href ='/07T2KZone/PostPhotos/photocentral.asp?kosm=m7_3&konum='+konum;
	} else if (konum==2){
	
		//top.document.location.href ='/07T2KZone/PostPhotos/photo_list.asp?theme=Sightseeing&kosm=m7_3&konum='+konum;
		
		top.document.location.href ='/07T2KZone/PostPhotos/photo_list.asp?theme=Scenery&kosm=m7_3&konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/07T2KZone/PostPhotos/photo_list.asp?theme=Food&kosm=m7_3&konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/07T2KZone/PostPhotos/photo_list.asp?theme=Entertainment&kosm=m7_3&konum='+konum;
	} else if (konum==5){
		top.document.location.href ='/07T2KZone/PostPhotos/photo_list.asp?theme=People&kosm=m7_3&konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/07T2KZone/PostPhotos/photo_list.asp?theme=CulturenLife&kosm=m7_3&konum='+konum;
	} else if (konum==7){
		top.document.location.href ='/07T2KZone/PostPhotos/photo_list.asp?theme=Others&kosm=m7_3&konum='+konum;

	}

}

function goT2KZone_04(konum){

	if (konum==1){
		top.document.location.href ='/07T2KZone/T2knews/newsletter_list.asp?kosm=m7_4&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/07T2KZone/T2knews/enewsletter.asp?kosm=m7_4&konum='+konum;
	}

}

function goT2KZone_06(konum){

	if (konum==3){
		top.location.href ='/07T2KZone/KoreaInImages/poster.asp?kosm=m7_4&konum='+konum;
	} else if (konum==4){
		top.location.href ='/07T2KZone/KoreaInImages/newspaper/newspaper.asp?kosm=m7_4&konum='+konum;
	} else if (konum==2){
		top.location.href ='/07T2KZone/KoreaInImages/fantasy_korea.asp?kosm=m7_4&konum='+konum;
	} 
	

}

function gosubT2KZone_06(konum){

	if (konum=='subm5_1'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=1&num=10&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_2'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=2&num=10&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_3'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=3&num=10&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_4'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=4&num=10&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_5'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=5&num=10&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_6'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=6&num=10&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_7'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=7&num=11&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_8'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=8&num=15&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_9'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=9&num=19&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_10'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=10&num=15&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_11'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=11&num=15&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_12'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=12&num=16&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_13'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=13&num=15&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_14'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=14&num=15&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_15'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=15&num=15&no=1&kosm=m7_4&konum='+konum;
		
/*
	} else if (konum=='subm5_16'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=16&num=15&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_17'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=17&num=15&no=1&kosm=m7_4&konum='+konum;
	} else if (konum=='subm5_18'){
		top.document.location.href ='/07T2KZone/KoreaInImages/photo_gallery_view.asp?sel=18&num=15&no=1&kosm=m7_4&konum='+konum;
*/
	} else if (konum=='subm1_1'){
		top.location.href ='/07T2KZone/KoreaInImages/ad_gallery.asp?kosm=m7_4&konum='+konum;
	} else if (konum=='subm1_2'){
		top.location.href ='/07T2KZone/KoreaInImages/culture_gallery.asp?kosm=m7_4&konum='+konum;
	} 

}

function goT2KZone_05(konum){

	if (konum==1){
		top.document.location.href ='/07T2KZone/Inquiries/faq_list.asp?kosm=m7_5&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/07T2KZone/Inquiries/qna_main.asp?kosm=m7_5&konum='+konum;
	} else if (konum==3){          
		top.document.location.href ='/07T2KZone/Inquiries/HodoEn_consult.asp?kosm=m7_5&konum=3';
	}

}

function goT2KZone_07(konum){

	if (konum==1){
		top.document.location.href ='/07T2KZone/aboutus/overview.asp?kosm=m7_6&konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/07T2KZone/aboutus/past.asp?kosm=m7_6&konum='+konum;
	} else if (konum==3){          
		top.document.location.href ='/07T2KZone/aboutus/major.asp?kosm=m7_6&konum='+konum;
	} else if (konum==4){          
		top.document.location.href ='/07T2KZone/aboutus/chart.asp?kosm=m7_6&konum='+konum;
	} else if (konum==5){          
		top.document.location.href ='/07T2KZone/aboutus/offices.asp?kosm=m7_6&konum='+konum;
	}

}


function gomyT2k(konum){

	if (konum==1){
		top.document.location.href ='/08myt2k/main.asp?konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/08MyT2K/Reservation/t2k_reservations.asp?konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/08MyT2K/MyQnA/myqna_list.asp?konum='+konum;
		
		//alert("Comming Soon");
		
	} else if (konum==5){
		top.document.location.href ='/08MyT2K/Brochure/t2k_brochure.asp?konum='+konum;
	} else if (konum==6){
		top.document.location.href ='/08MyT2K/MyInfomation/nletter.asp?konum='+konum;

	}

}

function gosubmyT2k(konum){
	if (konum=='subm2_1'){
		top.document.location.href ='/common/login/t2kUpdate01.asp?konum='+konum;
	} else if (konum=='subm2_2'){
		top.document.location.href ='/08MyT2K/MyInfomation/change_pass.asp?konum='+konum;
	} else if (konum=='subm2_3'){
		top.document.location.href ='/08MyT2K/MyInfomation/cancel_membership.asp?konum='+konum;
	}
}

function goFooter(konum){

	
	if (konum==1){
		top.document.location.href ='/12Home/banner.asp?konum='+konum;
	} else if (konum==2){
		top.document.location.href ='/12Home/ad.asp?konum='+konum;
	} else if (konum==3){
		top.document.location.href ='/12Home/policy.asp?konum='+konum;
	} else if (konum==4){
		top.document.location.href ='/12Home/useful_link.asp?konum='+konum;
	}


}

function gosubT2KZone_01(konum){
	top.document.location.href ='/07T2KZone/Chronicles/forum_tk_list.asp?konum='+konum;
}


function goSubway(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_1_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goSubway2(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_2_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goSubway3(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_3_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goSubway4(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_4_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goSubway5(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_5_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goSubway6(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_6_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goSubway7(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_7_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goSubway8(num){
	var goURL ='/03Sightseeing/JourneysByMetro/03_4_8_1.asp?kosm=m3_5&subway_id=';
	top.document.location.href =goURL+num;

}

function goLocation(num){


	if (num==1){
		top.document.location.href ='/LA';
	} else if (num==2){
		top.document.location.href ='/toronto';
	} else if (num==3){
		top.document.location.href ='/Singapore';
	} else if (num==4){
		top.document.location.href ='/hongkong';
	} else if (num==5){
		top.document.location.href ='/london';
	} else if (num==6){
		top.document.location.href ='/sydney';
	} else if (num==7){
		top.document.location.href ='/KualaLumpur/Kuala00.asp?kosm=m7_6';
	} else if (num==8){
		top.document.location.href ='/Dubai/dubai00.asp?kosm=m7_6';
                }


}

function goMapMore(){

		top.document.location.href ='/mapInfo.kto?func_name=main&md=enu';
}

function goBranch(num){

	if (num==2){   //서울
		top.document.location.href ='/mapInfo.kto?func_name=depth2&md=enu&lang_se=ENG&area_code=1';
	} else if (num==7){   //부산
		top.document.location.href ='/mapInfo.kto?func_name=depth2&md=enu&lang_se=ENG&area_code=6';
	} else if (num==1){   //속초
		top.document.location.href ='/mapInfo.kto?func_name=depth3&md=enu&lang_se=ENG&area_code=32&sigungu_code=5&group_sigungu_code=1||7||5';
	} else if (num==4){   //경주
		top.document.location.href ='/mapInfo.kto?func_name=depth3&md=enu&lang_se=ENG&area_code=35&sigungu_code=2&group_sigungu_code=2';
	} else if (num==10){   //제주
		top.document.location.href ='/mapInfo.kto?func_name=depth2&md=enu&lang_se=ENG&area_code=39';
	} else if (num==5){   //충청북도
		top.document.location.href ='/mapInfo.kto?func_name=depth2&md=enu&lang_se=ENG&area_code=33';
	} else if (num==6){   //충청남도
		top.document.location.href ='/mapInfo.kto?func_name=depth2&md=enu&lang_se=ENG&area_code=34';
	} else if (num==8){   //전라북도
		top.document.location.href ='/mapInfo.kto?func_name=depth2&md=enu&lang_se=ENG&area_code=37';
	} else if (num==9){   //전라남도
		top.document.location.href ='/mapInfo.kto?func_name=depth2&md=enu&lang_se=ENG&area_code=38';
	}
}

function goEvent(num){

	if (num==2){   //서퓖E
	
		top.document.location.href ='/02Culture/events/events.asp?RegionCode=6142&kosm=m2_1';
	} else if (num==7){  //부퍊E
	
		top.document.location.href ='/02Culture/events/events.asp?RegionCode=8551&kosm=m2_1';
	} else if (num==4){   //경주
	
		top.document.location.href ='/02Culture/events/events.asp?RegionCode=29207&kosm=m2_1';
	} else if (num==10){   //제주
	
		top.document.location.href ='/02Culture/events/events.asp?RegionCode=36100&kosm=m2_1';
	}

}

function goPage(name){
	if(name=="menu1"){
		top.window.location.href = "/03Sightseeing/ski/01_Resorts_Slopes.asp?kosm=m3_8&konum=1"
	}

	if(name=="subm2_1"){
		top.window.location.href = "/03Sightseeing/ski/	/01_introduction.asp?kosm=m3_8&konum=subm2_1"
	}             
	if(name=="subm2_2"){
		top.window.location.href = "/03Sightseeing/ski/gyeonggi/02_festival01.asp?kosm=m3_9&konum=subm2_2"	
	}             
	if(name=="subm2_3"){
		top.window.location.href = "/03Sightseeing/ski/gyeonggi/03_resorts01.asp?kosm=m3_9&konum=subm2_3"	
	}             
	if(name=="subm2_4"){
		top.window.location.href = "/03Sightseeing/ski/gyeonggi/04_nearby01.asp?kosm=m3_9&konum=subm2_4"	
	}       
	if(name=="subm2_5"){
		top.window.location.href = "/03Sightseeing/ski/gyeonggi/05_ski.asp?kosm=m3_9&konum=subm2_5"	
	}       

	if(name=="subm3_1"){
		top.window.location.href = "/03Sightseeing/ski/gyeonggi/HodoTour_skiPack.asp?kosm=m3_9&konum=" + name;
	}                                                                 
	if(name=="subm3_2"){
		top.window.location.href = "/03Sightseeing/ski/gyeonggi/HodoTour_spa_skiPack.asp?kosm=m3_9&konum=" + name;
	}       
	
	                                          
	if(name=="menu4"){
		top.window.location.href = "/03Sightseeing/ski/04_Sk_SnowStories.asp?kosm=m3_8&konum=4"	
	}      
	if(name=="menu5"){
		top.window.location.href = "http://club.tour2korea.com/bookings"	
	}      
}


function MakeFlash(Url,Width,Height){ 
document.writeln("<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"" + Width + "\" height=\"" + Height + "\">"); 
document.writeln("<param name=\"movie\" value=\"" + Url + "\">"); 
document.writeln("<param name=\"quality\" value=\"high\" />"); 
document.writeln("<param name=\"wmode\" value=\"transparent\">"); 
document.writeln("<embed src=\"" + Url + "\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width=\"" + Width + "\" height=\"" + Height + "\">"); 
document.writeln("</object>"); 
}
/******************************************************************************/
//-->


function fnMovie(url)
{
  window.open('/enu/movie/movie.jsp?playmovie='+url,'t2ke','width=400,height=300')
}
