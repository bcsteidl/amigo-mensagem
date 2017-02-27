'use strict'

const $ = require('jquery')

const mensagem = require('..')

mensagem({
    tipo: "Aviso",
    mensagem: "<b>Aviso[10]:</b><br/>Esta é uma mensagem de aviso, apaga tudo?",
    largura: 400,
    altura: 160,
    ok: () => {
        mensagem({
            tipo: "Erro",
            mensagem: "<b>Erro[1000]:</b><br/>Ferrou tudo!!!",
            largura: 400,
            altura: 160
        });
    },
    cancelar: () => {
        mensagem({
            tipo: "Normal",
            mensagem: "<b>Normal[0]:</b><br/>Ufa, ainda bem...",
            largura: 400,
            altura: 160
        });
    }
});
