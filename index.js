'use strict'

require("./themes/amigo/jquery-ui.css")
require('./css/mensagem.css')
const $ = require('jquery')
require('jquery-ui')
const preparaOpcoes = require('./src/preparaOpcoes')

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
                "height": (parseInt(opcoes.altura) - 95),
                "border": "1px solid #000000",
                "background": "#FFFFDD"
            });

            // Formata o painel de botões
            $(this).parent().find(".ui-dialog-buttonpane").css({
                "border": "1px solid #000000",
                "margin-top": "1px"
            });

            // Formata os botões do painel
            $(this).parent().find("button").css({
                "border": "1px solid rgb(98, 94, 94)",
                "margin-top": "0px"
            });

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
