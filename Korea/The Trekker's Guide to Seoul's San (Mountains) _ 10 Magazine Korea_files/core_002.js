if(typeof(PPS_DATA)=='undefined')
var PPS_DATA={};if(isNumber(PPS_DATA.animationSpeed))
PPS_DATA.animationSpeed=parseInt(PPS_DATA.animationSpeed);else if(jQuery.inArray(PPS_DATA.animationSpeed,['fast','slow'])==-1)
PPS_DATA.animationSpeed='fast';PPS_DATA.showSubscreenOnCenter=parseInt(PPS_DATA.showSubscreenOnCenter);var sdLoaderImgPps='<img src="'+ PPS_DATA.loader+'" />';var g_ppsAnimationSpeed=300;jQuery.fn.showLoaderPps=function(){return jQuery(this).html(sdLoaderImgPps);};jQuery.fn.appendLoaderPps=function(){jQuery(this).append(sdLoaderImgPps);};jQuery.sendFormPps=function(params){return jQuery('<br />').sendFormPps(params);};jQuery.fn.sendFormPps=function(params){var form=null;if(!params)
params={fid:false,msgElID:false,onSuccess:false};if(params.fid)
form=jQuery('#'+ fid);else
form=jQuery(this);var sentFromForm=(jQuery(form).tagName()=='FORM');var data=new Array();if(params.data)
data=params.data;else if(sentFromForm)
data=jQuery(form).serialize();if(params.appendData){var dataIsString=typeof(data)=='string';var addStrData=[];for(var i in params.appendData){if(dataIsString){addStrData.push(i+'='+ params.appendData[i]);}else
data[i]=params.appendData[i];}
if(dataIsString)
data+='&'+ addStrData.join('&');}
var msgEl=null;if(params.msgElID){if(params.msgElID=='noMessages')
msgEl=false;else if(typeof(params.msgElID)=='object')
msgEl=params.msgElID;else
msgEl=jQuery('#'+ params.msgElID);}
if(typeof(params.inputsWraper)=='string'){form=jQuery('#'+ params.inputsWraper);sentFromForm=true;}
if(sentFromForm&&form){jQuery(form).find('*').removeClass('ppsInputError');}
if(msgEl&&!params.btn){jQuery(msgEl).removeClass('ppsSuccessMsg').removeClass('ppsErrorMsg');if(!params.btn){jQuery(msgEl).showLoaderPps();}}
if(params.btn){jQuery(params.btn).attr('disabled','disabled');params.btnIconElement=jQuery(params.btn).find('.fa').size()?jQuery(params.btn).find('.fa'):jQuery(params.btn);if(jQuery(params.btn).find('.fa').size()){params.btnIconElement.data('prev-class',params.btnIconElement.attr('class')).attr('class','fa fa-spinner fa-spin');}}
var url='';if(typeof(params.url)!='undefined')
url=params.url;else if(typeof(ajaxurl)=='undefined')
url=PPS_DATA.ajaxurl;else
url=ajaxurl;jQuery('.ppsErrorForField').hide(PPS_DATA.animationSpeed);var dataType=params.dataType?params.dataType:'json';if(typeof(data)=='string'){data+='&pl='+ PPS_DATA.PPS_CODE;data+='&reqType=ajax';}else{data['pl']=PPS_DATA.PPS_CODE;data['reqType']='ajax';}
jQuery.ajax({url:url,data:data,type:'POST',dataType:dataType,success:function(res){toeProcessAjaxResponsePps(res,msgEl,form,sentFromForm,params);if(params.clearMsg){setTimeout(function(){if(msgEl)
jQuery(msgEl).animateClear();},typeof(params.clearMsg)=='boolean'?5000:params.clearMsg);}}});};jQuery.fn.animateClear=function(){var newContent=jQuery('<span>'+ jQuery(this).html()+'</span>');jQuery(this).html(newContent);jQuery(newContent).hide(PPS_DATA.animationSpeed,function(){jQuery(newContent).remove();});};jQuery.fn.animateRemovePps=function(animationSpeed,onSuccess){animationSpeed=animationSpeed==undefined?PPS_DATA.animationSpeed:animationSpeed;jQuery(this).hide(animationSpeed,function(){jQuery(this).remove();if(typeof(onSuccess)==='function')
onSuccess();});};function toeProcessAjaxResponsePps(res,msgEl,form,sentFromForm,params){if(typeof(params)=='undefined')
params={};if(typeof(msgEl)=='string')
msgEl=jQuery('#'+ msgEl);if(msgEl)
jQuery(msgEl).html('');if(params.btn){jQuery(params.btn).removeAttr('disabled');if(params.btnIconElement){params.btnIconElement.attr('class',params.btnIconElement.data('prev-class'));}}
if(typeof(res)=='object'){if(res.error){if(msgEl){jQuery(msgEl).removeClass('ppsSuccessMsg').addClass('ppsErrorMsg');}
var errorsArr=[];for(var name in res.errors){if(sentFromForm){var inputError=jQuery(form).find('[name*="'+ name+'"]');inputError.addClass('ppsInputError');if(inputError.attr('placeholder')){}
if(!inputError.data('keyup-error-remove-binded')){inputError.keydown(function(){jQuery(this).removeClass('ppsInputError');}).data('keyup-error-remove-binded',1);}}
if(jQuery('.ppsErrorForField.toe_'+ nameToClassId(name)+'').exists())
jQuery('.ppsErrorForField.toe_'+ nameToClassId(name)+'').show().html(res.errors[name]);else if(msgEl)
jQuery(msgEl).append(res.errors[name]).append('<br />');else
errorsArr.push(res.errors[name]);}
if(errorsArr.length&&params.btn&&jQuery.fn.dialog&&!msgEl){jQuery('<div title="'+ toeLangPps("Really small warning :)")+'" />').html(errorsArr.join('<br />')).appendTo('body').dialog({modal:true,width:'500px'});}}else if(res.messages.length){if(msgEl){jQuery(msgEl).removeClass('ppsErrorMsg').addClass('ppsSuccessMsg');for(var i=0;i<res.messages.length;i++){jQuery(msgEl).append(res.messages[i]).append('<br />');}}}}
if(params.onSuccess&&typeof(params.onSuccess)=='function'){params.onSuccess(res);}}
function getDialogElementPps(){return jQuery('<div/>').appendTo(jQuery('body'));}
function toeOptionPps(key){if(PPS_DATA.options&&PPS_DATA.options[key])
return PPS_DATA.options[key];return false;}
function toeLangPps(key){if(PPS_DATA.siteLang&&PPS_DATA.siteLang[key])
return PPS_DATA.siteLang[key];return key;}
function toePagesPps(key){if(typeof(PPS_DATA)!='undefined'&&PPS_DATA[key])
return PPS_DATA[key];return false;;}
function toeOptTimeoutHideDescriptionPps(){jQuery('#ppsOptDescription').removeAttr('toeFixTip');setTimeout(function(){if(!jQuery('#ppsOptDescription').attr('toeFixTip'))
toeOptHideDescriptionPps();},500);}
function toeOptShowDescriptionPps(description,x,y,moveToLeft){if(typeof(description)!='undefined'&&description!=''){if(!jQuery('#ppsOptDescription').size()){jQuery('body').append('<div id="ppsOptDescription"></div>');}
if(moveToLeft)
jQuery('#ppsOptDescription').css('right',jQuery(window).width()-(x- 10));else
jQuery('#ppsOptDescription').css('left',x+ 10);jQuery('#ppsOptDescription').css('top',y);jQuery('#ppsOptDescription').show(200);jQuery('#ppsOptDescription').html(description);}}
function toeOptHideDescriptionPps(){jQuery('#ppsOptDescription').removeAttr('toeFixTip');jQuery('#ppsOptDescription').hide(200);}
function toeInArrayPps(needle,haystack){if(haystack){for(var i in haystack){if(haystack[i]==needle)
return true;}}
return false;}
function toeShowDialogCustomized(element,options){options=jQuery.extend({resizable:false,width:500,height:300,closeOnEscape:true,open:function(event,ui){jQuery('.ui-dialog-titlebar').css({'background-color':'#222222','background-image':'none','border':'none','margin':'0','padding':'0','border-radius':'0','color':'#CFCFCF','height':'27px'});jQuery('.ui-dialog-titlebar-close').css({'background':'url("'+ PPS_DATA.cssPath+'img/tb-close.png") no-repeat scroll 0 0 transparent','border':'0','width':'15px','height':'15px','padding':'0','border-radius':'0','margin':'7px 7px 0'}).html('');jQuery('.ui-dialog').css({'border-radius':'3px','background-color':'#FFFFFF','background-image':'none','padding':'1px','z-index':'300000','position':'fixed','top':'60px'});jQuery('.ui-dialog-buttonpane').css({'background-color':'#FFFFFF'});jQuery('.ui-dialog-title').css({'color':'#CFCFCF','font':'12px sans-serif','padding':'6px 10px 0'});if(options.openCallback&&typeof(options.openCallback)=='function'){options.openCallback(event,ui);}
jQuery('.ui-widget-overlay').css({'z-index':jQuery(event.target).parents('.ui-dialog:first').css('z-index')- 1,'background-image':'none'});if(options.modal&&options.closeOnBg){jQuery('.ui-widget-overlay').unbind('click').bind('click',function(){jQuery(element).dialog('close');});}}},options);return jQuery(element).dialog(options);}
function toeSliderMove(event,ui){var id=jQuery(event.target).attr('id');jQuery('#toeSliderDisplay_'+ id).html(ui.value);jQuery('#toeSliderInput_'+ id).val(ui.value).change();}
function ppsCorrectJqueryUsed(){return(typeof(jQuery.fn.sendFormPps)==='function');}
function ppsReloadCoreJs(clb,params){var scriptsHtml='',coreScripts=['common.js','core.js'];for(var i=0;i<coreScripts.length;i++){scriptsHtml+='<script type="text/javascript" class="ppsReloadedScript" src="'+ PPS_DATA.jsPath+ coreScripts[i]+'"></script>';}
jQuery('head').append(scriptsHtml);if(clb){_ppsRunClbAfterCoreReload(clb,params);}}
function _ppsRunClbAfterCoreReload(clb,params){if(ppsCorrectJqueryUsed()){callUserFuncArray(clb,params);return;}
setTimeout(function(){ppsCorrectJqueryUsed(clb,params);},500);}