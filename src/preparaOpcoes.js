'use strict'

const preparaOpcoes = require('./preparaOpcoes')

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
