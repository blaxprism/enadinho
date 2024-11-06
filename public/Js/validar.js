
//nome
function erroNome(){
	let index = document.getElementById('nome') //campo
	if (validarNome(index)) {
		document.getElementById('span-nome').innerText = "" //edita o texto do span
		document.getElementById('nome').style.border = '' //edita a borda do input
		document.getElementById('span-nome').style.display = 'none' //edita a visibilidade do texto do span
	}
	else {
		document.getElementById('span-nome').innerText = "O nome deve ser válido" //edita o texto do span
		document.getElementById('nome').style.border = '1px solid red' //edita a borda do input
		document.getElementById('span-nome').style.display = 'block' //edita a visibilidade do texto do span
	}
}


function validarNome(campo){
	var Pattern = /^(?=.{3,100}$)([A-Za-zÀ-ÿ]+(\s[A-Za-zÀ-ÿ]+)*)$/
	return Pattern.test(campo.value)
}

//email
function validarEmail(campo) {
	// Expressão regular para validar endereços de e-mail
	var emailPattern = /^[a-zA-Z]{1,50}\.[a-zA-Z]{1,50}[0-9]{1,3}@fatec\.sp\.gov\.br$/
	return emailPattern.test(campo.value)
}

function erroEmail(){
	let index = document.getElementById('email')
	if (ValidarEmail(index)) {
		let email = document.getElementById('email')
		let confirmaEmail = document.getElementById('confirmar-email')
		document.getElementById('span-email').innerText = ""
		document.getElementById('email').style.border = '';
		document.getElementById('span-email').style.display = 'none';
		if (email.value == confirmaEmail.value) {
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
	}
	else {
		document.getElementById('span-email').innerText = "O email deve ser válido"
		document.getElementById('email').style.border = '1px solid red';
		document.getElementById('span-email').style.display = 'block';
	}
}

function erroComparaEmail(){
	let email = document.getElementById('email')
	let confirmaEmail = document.getElementById('confirmar-email')
	if (ValidarEmail(confirmaEmail)){
		document.getElementById('confirmar-email').style.border = ''
		document.getElementById('span-compara-email').innerText = ""
		document.getElementById('span-compara-email').style.display = "none"
		if (email.value == confirmaEmail.value) {
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
		document.getElementById('confirmar-email').style.border = '1px solid red'
		document.getElementById('span-compara-email').innerText = "O email deve ser válido"
		document.getElementById('span-compara-email').style.display = "block"
	}
}

//senha
function validarSenha(campo) {
	let senhaPattern = /^(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{10,20}$/
	return senhaPattern.test(campo.value)
}

function erroSenha(){
	let senha = document.getElementById('senha')
	let confirmaSenha = document.getElementById('confirmar-senha')
	if (validarSenha(senha)){
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
}

function erroComparaSenha(){
	let senha = document.getElementById('senha')
	let confirmaSenha = document.getElementById('confirmar-senha')
	if (validarSenha(confirmaSenha)){
		document.getElementById('confirmar-senha').style.border = ''
		document.getElementById('span-compara-senha').innerText = ""
		document.getElementById('span-compara-senha').style.display = "none"
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
		document.getElementById('confirmar-senha').style.border = '1px solid red'
		document.getElementById('span-compara-senha').innerText = "Insira uma senha válida(entre 10 e 20 caracteres, contando caractere especial, número e maiuscula)"
		document.getElementById('span-compara-senha').style.display = "block"
	}
}

module.exports = {
	validarNome
}