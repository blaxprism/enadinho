const express = require('express');
const app = express();
app.use(express.json());

app.use(express.static('public'));

// Funções de validação importadas corretamente
const validar = require('./public/Js/validar');

app.post('/api/validarNome', async (req, res) => {
    const { campoFront } = req.body;
    const campo = { value: campoFront };
    const retorno = await validar.validarNome(campo);
    res.json({ sucesso: retorno });
});

app.post('/api/validarEmail', async (req, res) => {
    const { campoFront } = req.body;
    const campo = { value: campoFront };
    let retorno = await validar.validarEmail(campo)
    res.json({ sucesso: retorno, valor: campo.value });
});

app.post('/api/validarSenha', async (req, res) => {
    const { campoFront } = req.body;
    const campo = { value: campoFront };
    const retorno = await validar.validarSenha(campo);
    res.json({ sucesso: retorno, valor: campo.value });
});

app.post('/api/validarDataNasc', async (req, res) => {
    const { campoFront } = req.body;
    const campo = { value: campoFront };
    const retorno = await validar.validarDataNasc(campo);
    res.json({ sucesso: retorno, valor: campo.value });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
