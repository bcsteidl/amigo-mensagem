!function(t){function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}var e={};return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=2)}([function(t,r,e){"use strict";e(0);var o=0,i=0;$("html").mousedown(function(t){o=t.pageX,i=t.pageY}),t.exports=function(t){var r={tipo:"Normal",mensagem:"",horizontal:"center",vertical:"center",largura:250,altura:150,ok:function(){},cancelar:function(){}},e=$.extend({},r,t);return e}},function(t,r,e){"use strict";const o=e(0);var i=0,n=0;$("html").mousedown(function(t){i=t.pageX,n=t.pageY}),t.exports=function(t){var r=o(t),e=$("<div  title='"+r.tipo+"'>").append("<p>"+r.mensagem+"</p>").appendTo("body"),a={OK:function(){$(this).dialog("close"),r.ok()}};"Aviso"==r.tipo&&(a.Cancelar=function(){$(this).dialog("close"),r.cancelar()}),$(e).dialog({resizable:!1,width:r.largura,height:r.altura,closeOnEscape:!0,resizable:!0,draggable:!0,modal:!0,open:function(t,e){$(this).css({height:parseInt(r.altura)-99,border:"1px solid #000000",background:"#FFFFDD","-moz-border-radius":"4px","-webkit-border-radius":"4px","-o-border-radius":"4px","-ms-border-radius":"4px","border-radius":"4px",padding:".5em .5em"}),$(this).parent().find(".ui-dialog-buttonpane").css({height:"30px",background:"#D6D6D6",border:"1px solid #000000","margin-top":"1px","-moz-border-radius":"4px","-webkit-border-radius":"4px","-o-border-radius":"4px","-ms-border-radius":"4px","border-radius":"4px"});var o=$(this).parent().find(".ui-button");$(o).removeClass("ui-state-default ui-corner-all ui-button-text-only ui-state-focus"),$(o).removeAttr("role"),$(o).height(20).width(60),r.horizontal="center"==r.horizontal?($(window).width()-r.largura)/2:r.horizontal,r.vertical="center"==r.vertical?($(window).height()-r.altura-6)/2:r.vertical,$(this).parent().css("left",i),$(this).parent().css("top",n),$(this).parent().css("width",0),$(this).parent().css("height",0),$(this).parent().animate({left:r.horizontal,top:r.vertical,width:r.largura,height:r.altura-6},500)},buttons:a}),$(e).parents(".ui-dialog:first").find(".ui-dialog-titlebar-close").remove()}},function(t,r,e){!function(t){t.fn.mensagem=e(1)}(jQuery)}]);