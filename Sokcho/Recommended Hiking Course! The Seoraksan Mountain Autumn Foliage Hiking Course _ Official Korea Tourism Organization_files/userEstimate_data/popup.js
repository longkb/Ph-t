function openWin(name, url, wval, hval)
{
	var win ;
	var left = (screen.availWidth/2) - 410;
	var top = (screen.availHeight/2) - 300;
	width = wval;
	height = hval;
	toolbar_str = "no";
	menubar_str = "no";
	statusbar_str = "yes";
	scrollbar_str = "yes";
	resizable_str = "no";
	win = window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
	if (win.focus) win.focus();
}