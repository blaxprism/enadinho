const express = require('express');
const app = express();
app.use(express.json());

// Configura o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

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
  });

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
