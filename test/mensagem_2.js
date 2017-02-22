'use strict'

const $ = require('jquery')

$.fn.mensagem = require('..')

$().mensagem({
    tipo: "Normal",
    mensagem: "Normal[0]:<br/>Esta é uma mensagem normal.",
    largura: 400,
    altura: 160
});
