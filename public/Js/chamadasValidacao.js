async function chamarValidarNome() {
	const nome = document.getElementById('nome').value
	console.log(nome)
	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarNome', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: nome})
	});

	const data = await response.json();
	console.log(data.sucesso)
	if (data.sucesso) {
		document.getElementById('span-nome').innerText = "" //edita o texto do span
		document.getElementById('nome').style.border = '' //edita a borda do input
		document.getElementById('span-nome').style.display = 'none' //edita a visibilidade do texto do span
	}
	else {
		document.getElementById('span-nome').innerText = "O nome deve ser válido" //edita o texto do span
		document.getElementById('nome').style.border = '1px solid red' //edita a borda do input
		document.getElementById('span-nome').style.display = 'block' //edita a visibilidade do texto do span
	}
	return data.sucesso
}

async function chamarValidarEmail() {
	const email = document.getElementById('email').value
	console.log(email)
	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarEmail', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: email})
	});

	const data = await response.json();
	console.log(data.sucesso)
	/*if (data.sucesso) {
		document.getElementById('span-nome').innerText = "" //edita o texto do span
		document.getElementById('nome').style.border = '' //edita a borda do input
		document.getElementById('span-nome').style.display = 'none' //edita a visibilidade do texto do span
	}
	else {
		document.getElementById('span-nome').innerText = "O nome deve ser válido" //edita o texto do span
		document.getElementById('nome').style.border = '1px solid red' //edita a borda do input
		document.getElementById('span-nome').style.display = 'block' //edita a visibilidade do texto do span
	}
		*/
	console.log(data.valor)
	return data.sucesso
}

async function chamarValidarConfirmarEmail(){
	const confirmarEmail = document.getElementById('confirmar-email').value
	console.log(confirmarEmail)
	// Realizando a requisição com dados no corpo (body)
	const response = await fetch('/api/validarEmail', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: email})
	});

	const data = await response.json();
	console.log(data.sucesso)
	let email = document.getElementById('email').value
	if (data.valor){
		document.getElementById('confirmar-email').style.border = ''
		document.getElementById('span-compara-email').innerText = ""
		document.getElementById('span-compara-email').style.display = "none"
		if (email == data.valor) {
			document.getElementById('email').style.border = ''
			document.getElementById('span-email').innerText = ""
			document.getElementById('span-email').style.display = "none"
			document.getElementById('confirmar-email').style.border = ''
			document.getElementById('span-compara-email').innerText = ""
			document.getElementById('span-compara-email').style.display = "none"
		}else{
			document.getElementById('email').style.border = '1px solid red'
			document.getElementById('span-email').innerText = "Os emails devem ser identicos"
			document.getElementById('span-email').style.display = "block"
			document.getElementById('confirmar-email').style.border = '1px solid red'
			document.getElementById('span-compara-email').innerText = "Os emails devem ser identicos"
			document.getElementById('span-compara-email').style.display = "block"
		}
	}else{
		document.getElementById('email').style.border = '1px solid red'
		document.getElementById('span-compara-email').innerText = "O email deve ser válido"
		document.getElementById('span-compara-email').style.display = "block"
	}
	return data.sucesso
}

async function chamarValidarSenha(){
	const senha = document.getElementById('senha')
	const comparaSenha = document.getElementById('confirmar-senha')
	console.log(senha)
	// Realizando a requisição com dados no corpo (body)
	const responseSenha = await fetch('/api/validarSenha', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: senha})
	});

	const data = await response.json();
	console.log(data.sucesso)
	if (data.sucesso) {
		document.getElementById('senha').style.border = ''
		document.getElementById('span-senha').innerText = ""
		document.getElementById('span-senha').style.display = "none"
		if (senha.value == confirmaSenha.value) {
			document.getElementById('senha').style.border = ''
			document.getElementById('span-senha').innerText = ""
			document.getElementById('span-senha').style.display = "none"
			document.getElementById('confirmar-senha').style.border = ''
			document.getElementById('span-compara-senha').innerText = ""
			document.getElementById('span-compara-senha').style.display = "none"
		}else{
			document.getElementById('senha').style.border = '1px solid red'
			document.getElementById('span-senha').innerText = "As senhas devem ser identicas"
			document.getElementById('span-senha').style.display = "block"
			document.getElementById('confirmar-senha').style.border = '1px solid red'
			document.getElementById('span-compara-senha').innerText = "As senhas devem ser identicas"
			document.getElementById('span-compara-senha').style.display = "block"
		}
	}else{
		document.getElementById('senha').style.border = '1px solid red'
		document.getElementById('span-senha').innerText = "Insira uma senha válida(entre 10 e 20 caracteres, contando caractere especial, número e maiuscula)"
		document.getElementById('span-senha').style.display = "block"
	}
	return data.sucesso
}

async function chamarValidarConfirmarSenha(){
	let senha = document.getElementById('senha')
	const confirmarSenha = document.getElementById('confirmar-senha').value
	console.log(senha)
	// Realizando a requisição com dados no corpo (body)
	const responseSenha = await fetch('/api/validarSenha', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({campoFront: senha})
	});

	const data = await response.json();
	console.log(data.sucesso)
	if (data.sucesso) {
		document.getElementById('senha').style.border = ''
		document.getElementById('span-senha').innerText = ""
		document.getElementById('span-senha').style.display = "none"
		if (senha.value == confirmaSenha.value) {
			document.getElementById('senha').style.border = ''
			document.getElementById('span-senha').innerText = ""
			document.getElementById('span-senha').style.display = "none"
			document.getElementById('confirmar-senha').style.border = ''
			document.getElementById('span-compara-senha').innerText = ""
			document.getElementById('span-compara-senha').style.display = "none"
		}else{
			document.getElementById('senha').style.border = '1px solid red'
			document.getElementById('span-senha').innerText = "As senhas devem ser identicas"
			document.getElementById('span-senha').style.display = "block"
			document.getElementById('confirmar-senha').style.border = '1px solid red'
			document.getElementById('span-compara-senha').innerText = "As senhas devem ser identicas"
			document.getElementById('span-compara-senha').style.display = "block"
		}
	}else{
		document.getElementById('senha').style.border = '1px solid red'
		document.getElementById('span-senha').innerText = "Insira uma senha válida(entre 10 e 20 caracteres, contando caractere especial, número e maiuscula)"
		document.getElementById('span-senha').style.display = "block"
	}
	return data.sucesso
}


async function validarTudo(){
	let boolNome = await chamarValidarNome()
	console.log("nome foi")
	let boolEmail = await chamarValidarEmail()
	console.log("email foi")
	/*
	let boolConfirmaremail = await chamarValidarConfirmarEmail()
	console.log("validar email foi")
	let boolSenha = await chamarValidarSenha()
	console.log("email foi")
	let boolConfirmarsenha = await chamarValidarConfirmarSenha()
*/
}