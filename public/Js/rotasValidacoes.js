
//express
const express = require('express');
const app = express();
app.use(express.json());

//funções internas
const validar = require('./Js/validar')

//a rota no back end app.post tem que estar no front end fetch 
app.post('/api/validarNome', async (req, res) => {
	const {campoFront} = req.body
	const campo = { value: campoFront };
	const retorno = await validar.validarNome(campo);
	console.log(retorno)
	console.log("--------------------")
	res.json({ sucesso: retorno/*, dados: msgErro */});
  });