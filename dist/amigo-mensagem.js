/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const preparaOpcoes = __webpack_require__(0)

// Obtem o posicionamento do mouse no momento do clique
var mouseX = 0;
var mouseY = 0;
$("html").mousedown(function(mouse) {
    mouseX = mouse.pageX;
    mouseY = mouse.pageY;
});

module.exports = function(parametros) {
    var defaults = {
        tipo: "Normal", // Tipos: [Normal], [Aviso] e [Erro]
        mensagem: "",
        horizontal: "center",
        vertical: "center",
        largura: 250,
        altura: 150,
        ok: function() {},
        cancelar: function() {}
    };

    var opcoes = $.extend({}, defaults, parametros);

    return opcoes;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const preparaOpcoes = __webpack_require__(0)

// Obtem o posicionamento do mouse no momento do clique
var mouseX = 0;
var mouseY = 0;
$("html").mousedown(function(mouse) {
    mouseX = mouse.pageX;
    mouseY = mouse.pageY;
});

module.exports = function(parametros) {
    // Definindo valores padrões
    var opcoes = preparaOpcoes(parametros);

    //Cria a área de mensagens
    var jan = $("<div  title='" + opcoes.tipo + "'>").append("<p>" + opcoes.mensagem + "</p>").appendTo("body");

    // Define se haverá botão de Cancelamento
    var botoes = {
        OK: function() {
            $(this).dialog("close");
            opcoes.ok();
        }
    }
    if (opcoes.tipo == "Aviso") {
        botoes.Cancelar = function() {
            $(this).dialog("close");
            opcoes.cancelar();
        }
    }

    // Abre a janela Dialog de mensagens
    $(jan).dialog({
        resizable: false,
        width: opcoes.largura,
        height: opcoes.altura,
        closeOnEscape: true,
        resizable: true,
        draggable: true,
        modal: true,
        open: function(event, ui) {
            // Formata layout da área de mensagens
            $(this).css({
                "height": (parseInt(opcoes.altura) - 99),
                "border": "1px solid #000000",
                "background": "#FFFFDD",
                "-moz-border-radius": "4px",
                "-webkit-border-radius": "4px",
                "-o-border-radius": "4px",
                "-ms-border-radius": "4px",
                "border-radius": "4px",
                "padding": ".5em .5em"
            });

            // Formata o painel de botões
            $(this).parent().find(".ui-dialog-buttonpane").css({
                "height": "30px",
                "background": "#D6D6D6",
                "border": "1px solid #000000",
                "margin-top": "1px",
                "-moz-border-radius": "4px",
                "-webkit-border-radius": "4px",
                "-o-border-radius": "4px",
                "-ms-border-radius": "4px",
                "border-radius": "4px"
            });

            // Formata os botões
            var obj = $(this).parent().find(".ui-button")
            $(obj).removeClass("ui-state-default ui-corner-all ui-button-text-only ui-state-focus")
            $(obj).removeAttr("role")
            $(obj).height(20).width(60);

            // Posiciona a janela na área de trabalho com efeito animado
            opcoes.horizontal = (opcoes.horizontal == "center" ? ($(window).width() - opcoes.largura) / 2 : opcoes.horizontal);
            opcoes.vertical = (opcoes.vertical == "center" ? ($(window).height() - opcoes.altura - 6) / 2 : opcoes.vertical);
            $(this).parent().css("left", mouseX);
            $(this).parent().css("top", mouseY);
            $(this).parent().css("width", 0);
            $(this).parent().css("height", 0);
            $(this).parent().animate({
                left: opcoes.horizontal,
                top: opcoes.vertical,
                width: opcoes.largura,
                height: opcoes.altura - 6
            }, 500);

        },
        buttons: botoes
    });

    // Remove botão de fechar a janela padrão
    $(jan).parents(".ui-dialog:first").find(".ui-dialog-titlebar-close").remove();

}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function($) {

    $.fn.mensagem = __webpack_require__(1)

})(jQuery);


/***/ })
/******/ ]);
//# sourceMappingURL=amigo-mensagem.js.map