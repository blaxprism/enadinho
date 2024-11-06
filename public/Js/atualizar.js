const knex = require('knex')({
	client: 'mysql',
	connection: {
		host: "localhost",
		user: "root",
		password: "",
		database: "enadinho"
	}
});

async function atualizarBanco(query) {
	try {
		await knex.raw(query);
		console.log("Registro atualizado com sucesso");
	} catch (err) {
		console.error("Erro ao atualizar registro:", err);
	}
}

async function atualizarCoordenador(id, nome, data_nascimento, email_institucional, senha) {
	await atualizarBanco(knex('coordenadores').where('id', id).update({
		nome_coordenador: nome,
		data_nascimento: data_nascimento,
		email_institucional: email_institucional,
		senha: senha,
		fk_tipo_usuario: 1
	}).toString());
}

async function atualizarProfessor(id, nome, data_nascimento, email_institucional, senha, id_coordenador) {
	await atualizarBanco(knex('professores').where('id', id).update({
		nome_professor: nome,
		data_nascimento: data_nascimento,
		email_institucional: email_institucional,
		senha: senha,
		fk_coordenador: id_coordenador,
		fk_tipo_usuario: 2
	}).toString());
}

async function atualizarAluno(id, nome, data_nascimento, email_institucional, senha) {
	await atualizarBanco(knex('alunos').where('id', id).update({
		nome_aluno: nome,
		data_nascimento: data_nascimento,
		email_institucional: email_institucional,
		senha: senha,
		fk_tipo_usuario: 3
	}).toString());
}

async function atualizarCurso(id, nome, eixo, id_coordenador) {
	await atualizarBanco(knex('cursos').where('id', id).update({
		nome_curso: nome,
		eixo: eixo,
		fk_coordenador: id_coordenador
	}).toString());
}

async function atualizarDisciplina(id, nome, ementa, objetivo, id_coordenador, id_curso) {
	await atualizarBanco(knex('disciplinas').where('id', id).update({
		nome_disciplina: nome,
		ementa: ementa,
		objetivo: objetivo,
		fk_coordenador: id_coordenador,
		fk_curso: id_curso
	}).toString());
}

async function atualizarEnunciado(id, titulo, texto, id_professor, id_disciplina) {
	await atualizarBanco(knex('enunciados').where('id', id).update({
		titulo_enunciado: titulo,
		texto: texto,
		fk_professor: id_professor,
		fk_disciplina: id_disciplina
	}).toString());
}

async function atualizarQuestao(id, texto, alt_a, alt_b, alt_c, alt_d, alt_e, alt_certa, dificuldade, tempo, id_enunciado, id_professor) {
	await atualizarBanco(knex('questoes').where('id', id).update({
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
	}).toString());
}

async function atualizarFeedback(id, texto, id_questao, id_professor) {
	await atualizarBanco(knex('feedbacks').where('id', id).update({
		texto: texto,
		fk_questao: id_questao,
		fk_professor: id_professor
	}).toString());
}

// Exemplo de uso
(async () => {
	try {
		await atualizarCoordenador(1, "João Atualizado", "1990-01-01", "joao@instituicao.com", "nova_senha123");
		// Adicione chamadas para as outras funções conforme necessário
	} finally {
		await knex.destroy();
		console.log("Conexão fechada. Programa encerrado.");
	}
})();
