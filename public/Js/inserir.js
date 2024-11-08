const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: "localhost",
		user: "root",
		password: "",
		database: "enadinho"
	}
})

async function inserirBanco(query) {
	try {
		await knex.raw(query)
		console.log("Registro inserido com sucesso")
	} catch (err) {
		console.error("Erro ao inserir registro:", err)
	}
}

async function cadastrarCoordenador(nome, data_nascimento, email_institucional, senha) {
	// Inserir no banco
	await inserirBanco(knex('coordenadores').insert({
		nome_coordenador: nome,
		data_nascimento: data_nascimento,
		email_institucional: email_institucional,
		senha: senha,
		fk_tipo_usuario: 1
	}).toString())
}

async function cadastrarProfessor(nome, data_nascimento, email_institucional, senha, id_coordenador) {
	// Verificar se o Professor já está cadastrado (implementar lógica aqui)
	// Verificar se o ID de coordenador existe (implementar lógica aqui)

	// Inserir no banco
	await inserirBanco(knex('professores').insert({
		nome_professor: nome,
		data_nascimento: data_nascimento,
		email_institucional: email_institucional,
		senha: senha,
		fk_coordenador: id_coordenador,
		fk_tipo_usuario: 2
	}).toString())
}

async function cadastrarAluno(nome, data_nascimento, email_institucional, senha) {
	// Verificar se o aluno já está cadastrado (implementar lógica aqui)

	// Inserir no banco
	await inserirBanco(knex('alunos').insert({
		nome_aluno: nome,
		data_nascimento: data_nascimento,
		email_institucional: email_institucional,
		senha: senha,
		fk_tipo_usuario: 3
	}).toString())
}

async function cadastrarCurso(nome, eixo, id_coordenador) {
	// Verificar se o Curso já está cadastrado (implementar lógica aqui)

	// Inserir no banco
	await inserirBanco(knex('cursos').insert({
		nome_curso: nome,
		eixo: eixo,
		fk_coordenador: id_coordenador
	}).toString())
}

async function cadastrarDisciplina(nome, ementa, objetivo, id_coordenador, id_curso) {
	// Verificar se a Disciplina já está cadastrada (implementar lógica aqui)

	// Inserir no banco
	await inserirBanco(knex('disciplinas').insert({
		nome_disciplina: nome,
		ementa: ementa,
		objetivo: objetivo,
		fk_coordenador: id_coordenador,
		fk_curso: id_curso
	}).toString())
}

async function cadastrarEnunciado(titulo, texto, id_professor, id_disciplina) {
	// Verificar se o Enunciado já está cadastrado (implementar lógica aqui)

	// Inserir no banco
	await inserirBanco(knex('enunciados').insert({
		titulo_enunciado: titulo,
		texto: texto,
		fk_professor: id_professor,
		fk_disciplina: id_disciplina
	}).toString())
}

async function cadastrarQuestao(texto, alt_a, alt_b, alt_c, alt_d, alt_e, alt_certa, dificuldade, tempo, id_enunciado, id_professor) {
	// Inserir no banco
	await inserirBanco(knex('questoes').insert({
		texto: texto,
		alt_a: alt_a,
		alt_b: alt_b,
		alt_c: alt_c,
		alt_d: alt_d,
		alt_e: alt_e,
		alt_certa: alt_certa,
		dificuldade: dificuldade,
		tempo: tempo,
		fk_enunciado: id_enunciado,
		fk_professor: id_professor
	}).toString())
}

async function cadastrarFeedback(texto, id_questao, id_professor) {
	// Inserir no banco
	await inserirBanco(knex('feedbacks').insert({
		texto: texto,
		fk_questao: id_questao,
		fk_professor: id_professor
	}).toString())
}

/*
exemplo de execução das funções de insert
async function main() {
	try {
		await cadastrarCoordenador("João", "1990-01-01", "joao@instituicao.com", "senha123")
		// Adicione chamadas para as outras funções conforme necessário
	} finally {
		// Fecha a conexão do Knex
		await knex.destroy()
		console.log("Conexão fechada. Programa encerrado.")
	}
}

main().catch(err => {
	console.error("Erro na execução:", err)
	knex.destroy() // Garante que a conexão seja fechada mesmo em caso de erro
})
*/

module.exports = {
	cadastrarAluno,
	cadastrarCoordenador,
	cadastrarCurso,
	cadastrarDisciplina,
	cadastrarEnunciado,
	cadastrarFeedback,
	cadastrarProfessor,
	cadastrarQuestao
}