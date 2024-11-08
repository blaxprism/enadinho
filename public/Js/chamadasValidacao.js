async function chamarValidarNome() {
	const nome = document.getElementById('nome').value
	
	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarNome', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: nome})
	});

	const data = await response.json();
	return data
}

async function chamarValidarEmail() {
	const email = document.getElementById('email').value
	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarEmail', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: email})
	});

	const data = await response.json();
	return data
}

async function chamarValidarConfirmarEmail(){
	const confirmarEmail = document.getElementById('confirmar-email').value
	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarEmail', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: confirmarEmail})
	});

	const data = await response.json();
	return data
}

async function chamarValidarSenha(){
	const senha = document.getElementById('senha').value

	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarSenha', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: senha})
	});

	const data = await response.json();
	return data
}

async function chamarValidarConfirmarSenha(){
	let senha = document.getElementById('senha').value
	const confirmaSenha = document.getElementById('confirmar-senha').value
	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarSenha', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: senha})
	});

	const data = await response.json();
	return data
}


async function validarTudo(){
	console.log("=-=-=-=-=-=-=-=-=-=-=-")
	let dataNome = await chamarValidarNome()
	if (dataNome.sucesso){
		console.log("nome válido")	
		console.log(dataNome.valor)
		document.getElementById('span-nome').innerText = "" //edita o texto do span
		document.getElementById('nome').style.border = '' //edita a borda do input
		document.getElementById('span-nome').style.display = 'none' //edita a visibilidade do texto do span
	}else{
		console.log("Nome inválido")
		document.getElementById('span-nome').innerText = "O nome deve ser válido" //edita o texto do span
		document.getElementById('nome').style.border = '1px solid red' //edita a borda do input
		document.getElementById('span-nome').style.display = 'block' //edita a visibilidade do texto do span

	}

	console.log("----------------------")
	let dataEmail = await chamarValidarEmail()
	if (dataEmail.sucesso){
		console.log("Email válido")
		console.log(dataEmail.valor)
		document.getElementById('span-email').innerText = "" //edita o texto do span
		document.getElementById('email').style.border = '' //edita a borda do input
		document.getElementById('span-email').style.display = 'none' //edita a visibilidade do texto do span
	}else{
		console.log("email inválido")
		document.getElementById('span-email').innerText = "O email deve ser válido" //edita o texto do span
		document.getElementById('email').style.border = '1px solid red' //edita a borda do input
		document.getElementById('span-email').style.display = 'block' //edita a visibilidade do texto do span
	}

	console.log("----------------------")
	let dataConfirmarEmail = await chamarValidarConfirmarEmail()
	if (dataConfirmarEmail.sucesso){
		console.log("confirmação de email válida")
		console.log(dataConfirmarEmail.valor)
		document.getElementById('confirmar-email').style.border = ''
		document.getElementById('span-compara-email').innerText = ""
		document.getElementById('span-compara-email').style.display = "none"
	}else{
		console.log("confirmação de email inválida")
		document.getElementById('confirmar-email').style.border = '1px solid red'
		document.getElementById('span-compara-email').innerText = "O email deve ser válido"
		document.getElementById('span-compara-email').style.display = "block"
	}

	console.log("----------------------")
	let dataSenha = await chamarValidarSenha()
	if (dataSenha.sucesso){
		console.log("Data de nascimento válida")
		console.log(dataSenha.valor)
		document.getElementById('senha').style.border = ''
		document.getElementById('span-senha').innerText = ""
		document.getElementById('span-senha').style.display = "none"
	}else{
		console.log("senha inválida")
		document.getElementById('senha').style.border = '1px solid red'
		document.getElementById('span-senha').innerText = "Insira uma senha válida(entre 10 e 20 caracteres, contando caractere especial, número e maiuscula)"
		document.getElementById('span-senha').style.display = "block"
	}

	console.log("----------------------")
	let dataConfirmarSenha = await chamarValidarConfirmarSenha()
	if (dataConfirmarSenha.sucesso){
		console.log("Confirmação de senha válida")
		console.log(dataConfirmarSenha.valor)
			document.getElementById('senha').style.border = ''
			document.getElementById('span-senha').innerText = ""
			document.getElementById('span-senha').style.display = "none"
	}else{
		console.log("confirmação de senha inválida")
		document.getElementById('senha').style.border = '1px solid red'
		document.getElementById('span-senha').innerText = "Insira uma senha válida(entre 10 e 20 caracteres, contando caractere especial, número e maiuscula)"
		document.getElementById('span-senha').style.display = "block"
	}
	console.log("=-=-=-=-=-=-=-=-=-=-=-")
}