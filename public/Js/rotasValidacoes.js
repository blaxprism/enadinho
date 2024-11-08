const express = require('express');
const app = express();
app.use(express.json());

//funções internas
const validar = require('./public/Js/validar')

//a rota no back end app.post tem que estar no front end fetch 
app.post('/api/validarNome', async (req, res) => {
	const {campoFront} = req.body
	const campo = { value: campoFront };
	console.log(campo.value)
	console.log(validar)
	const retorno = await validar.validarNome(campo);
	console.log(retorno)
	console.log("--------------------")
	res.json({ sucesso: retorno/*, dados: msgErro */});
})

app.post('/api/validarEmail', async (req, res) => {
	const {campoFront} = req.body
	const campo = { value: campoFront };
	console.log(campo.value)
	console.log(validar)
	const retorno = await validar.validarEmail(campo);
	console.log(retorno)
	console.log("--------------------")
	res.json({ sucesso: retorno/*, dados: msgErro */});
})

app.post('/api/validarSenha', async (req, res) => {

	const {campoFront} = req.body
	const campo = {value: campoFront}
	console.log(campo.value)
	console.log(validar)
	const retorno = await validar.validarSenha(campo)
	console.log(retorno)
	console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
	res.json({sucesso: retorno, valor: campo})

})

app.post('/api/validarDataNasc', async (req, res) =>{
	const {campoFront} = req.body
	const campo = {value: campoFront}
	console.log(campo.value)
	console.log(validar)
	const retorno = await validar.validarDataNasc(campo)
	console.log(retorno)
	console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
	res.json({sucesso: retorno, campo})
})
