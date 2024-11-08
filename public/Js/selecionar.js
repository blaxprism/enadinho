async function selecionarBanco(sql){
	const knex = require('knex');

	// Configuração do banco de dados
	const db = knex({
	client: 'mysql',
	connection: {
		host: "localhost",
		user: "root",
		password: "",
		database: "enadinho"
	}
	});

	try {
		// Executa a query com parâmetros e retorna os resultados
		const results = await db.raw(sql);
		return results[0] // Retorna apenas os dados do resultado
	} catch (error) {
		console.error('Erro ao executar a query:', error);
		throw error;
	}
}

//Seleciona todos os coordenadores
async function selecionarCoordenadores(){
	query = "SELECT * FROM `coordenadores` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//seleciona coordenador pelo id
async function selecionarCoordenadorId(id_coordenador){
	query = "SELECT * FROM `coordenadores` WHERE `id_coordenador`="+ id_coordenador +""
	retorno = await selecionarBanco(query)
	return retorno
}

//seleciona coordenador pelo nome
async function selecionarCoordenadorNome(nome_coordenador){
	query = "SELECT * FROM `coordenadores` WHERE `nome_coordenador`='"+ nome_coordenador +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona coordenador pelo email
async function selecionarCoordenadorEmail(email_institucional){
	query = "SELECT * FROM `coordenadores` WHERE `email_institucional`='"+ email_institucional +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona todos os professores
async function selecionarProfessores(){
	query = "SELECT * FROM `professores` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona professor pelo id
async function selecionarProfessorId(id_professor){
	query = "SELECT * FROM `professores` WHERE `id_professor`="+ id_professor +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona professor pelo nome
async function selecionarProfessorNome(nome_professor){
	query = "SELECT *  FROM `professores` WHERE `nome_professor`='"+ nome_professor +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona professor pelo email
async function selecionarProfessorEmail(email_institucional){
	query = "SELECT * FROM `professores` WHERE `email_institucional`='"+ email_institucional +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona professor pelo id do coordenador responsável pelo cadastro
async function selecionarProfessorCoordenador(fk_coordenador){
	query = "SELECT * FROM `professores` WHERE `fk_coordenador`="+ fk_coordenador +""
	retorno = await selecionarBanco(query)
	return retorno
}


//Seleciona todos os alunos
async function selecionarAlunos(){
	query = "SELECT * FROM `alunos` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona um aluno pelo ID
async function selecionarAlunoId(id_aluno){
	query = "SELECT * FROM `alunos` WHERE `id_aluno`="+ id_aluno +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona aluno pelo nome completo
async function selecionarAlunoNome(nome_aluno){
	query = "SELECT `nome_aluno`, `data_nascimento`, `email_institucional`, `fk_tipo_usuario` FROM `alunos` WHERE `nome_aluno`='"+ nome_aluno +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona aluno pelo email
async function selecionarAlunoEmail(email_institucional){
	query = "SELECT * FROM `alunos` WHERE `email_institucional`='"+ email_institucional +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona todos os cursos
async function selecionarCursos(){
	query = "SELECT * FROM `cursos` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona curso pelo id
async function selecionarCursoId(id_curso){
	query = "SELECT * FROM `cursos` WHERE `id_curso` = "+ id_curso +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona curso pelo nome
async function selecionarCursoNome(nome_curso){
	query = "SELECT * FROM `cursos` WHERE `nome_curso` = '"+ nome_curso +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona curso pelo id do coordenador que o cadastrou
async function selecionarCursoCoordenador(fk_coordenador){
	query = "SELECT * FROM `cursos` WHERE `fk_coordenador` = "+ fk_coordenador +""
	retorno = await selecionarBanco(query)
	return retorno
}


//seleciona todas as disciplinas
async function selecionarDisciplinas(){
	query = "SELECT * FROM `disciplinas` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//seleciona disciplina pelo id
async function selecionarDisciplinaId(id_disciplina){
	query = "SELECT * FROM `disciplinas` WHERE `id_disciplina` = "+ id_disciplina +""
	retorno = await selecionarBanco(query)
	return retorno
}

//seleciona disciplina pelo nome
async function selecionarDisciplinaNome(nome_disciplina){
	query = "SELECT * FROM `disciplinas` WHERE `nome_disciplina` = '"+ nome_disciplina +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona disciplina pelo id do coordenador que cadastrou
async function selecionarDisciplinaCoordenador(fk_coordenador){
	query = "SELECT * FROM `disciplinas` WHERE `fk_coordenador` = "+ fk_coordenador +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona disciplina pelo id do coordenador que cadastrou
async function selecionarDisciplinaCurso(fk_curso){
	query = "SELECT * FROM `disciplinas` WHERE `fk_curso` = "+ fk_curso +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona todos os enunciados
async function selecionarEnunciados(){
	query = "SELECT * FROM `enunciados` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona enunciado pelo ID
async function selecionarEnunciadoId(id_enunciado){
	query = "SELECT * FROM `enunciados` WHERE `id_enunciado` = "+ id_enunciado +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona enunciado pelo titulo
async function selecionarEnunciadoTitulo(titulo_enunciado){
	query = "SELECT * FROM `enunciados` WHERE `titulo_enunciado` = '"+ titulo_enunciado +"'"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona enunciado pelo professor que cadastrou
async function selecionarEnunciadoId(fk_professor){
	query = "SELECT * FROM `enunciados` WHERE `fk_professor` = "+ fk_professor +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona enunciado pela disciplina ao qual pertence
async function selecionarEnunciadoDisciplina(fk_disciplina){
	query = "SELECT * FROM `enunciados` WHERE `fk_disciplina` = "+ fk_disciplina +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona todas as questões
async function selecionarQuestoes(){
	query = "SELECT * FROM `questoes` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona questão por ID
async function selecionarQuestaoId(id_questao){
	query = "SELECT * FROM `questoes` WHERE `id_questao` = "+ id_questao +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona questão por dificuldade
async function selecionarQuestaoDificuldade(dificuldade){
	query = "SELECT * FROM `questoes` WHERE `dificuldade` = "+ dificuldade +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona questão por id de enunciado
async function selecionarQuestaoEnunciado(fk_enunciado){
	query = "SELECT * FROM `questoes` WHERE `fk_enunciado` = "+ fk_enunciado +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Seleciona questão por id do professor que cadastrou
async function selecionarQuestaoProfessor(fk_professor){
	query = "SELECT * FROM `questoes` WHERE `fk_professor` = "+ fk_professor +""
	retorno = await selecionarBanco(query)
	return retorno
}

//seleciona todos os feedbacks
async function selecionarFeedbacks(){
	query = "SELECT * FROM `feedbacks` WHERE 1"
	retorno = await selecionarBanco(query)
	return retorno
}

//selecionar feedback pelo id
async function selecionarFeedbackId(id_feedback){
	query = "SELECT * FROM `feedbacks` WHERE `id_feedback` = "+ id_feedback +""
	retorno = await selecionarBanco(query)
	return retorno
}

//selecionar feedback pelo id da questão
async function selecionarFeedbackQuestao(fk_questao){
	query = "SELECT * FROM `feedbacks` WHERE `fk_questao` = "+ fk_questao +""
	retorno = await selecionarBanco(query)
	return retorno
}

//seleciona feedback pelo id do professor responsável pelo cadastro
async function selecionarFeedbackProfessor(fk_professor){
	query = "SELECT * FROM `feedbacks` WHERE `fk_professor` = "+ fk_professor +""
	retorno = await selecionarBanco(query)
	return retorno
}

//Como chamar funções de select
/*
(async () => {
	retorno = await Nomefunção()
	console.log(retorno)
})()
*/

module.exports = {
	selecionarAlunoEmail,
	selecionarAlunoId,
	selecionarAlunoNome,
	selecionarAlunos,
	selecionarBanco,
	selecionarCoordenadorEmail,
	selecionarCoordenadorId,
	selecionarCoordenadorNome,
	selecionarCoordenadores,
	selecionarCursoCoordenador,
	selecionarCursoId,
	selecionarCursoNome,
	selecionarCursos,
	selecionarDisciplinaCoordenador,
	selecionarDisciplinaCurso,
	selecionarDisciplinaId,
	selecionarDisciplinaNome,
	selecionarDisciplinas,
	selecionarEnunciadoDisciplina,
	selecionarEnunciadoId,
	selecionarEnunciadoTitulo,
	selecionarEnunciados,
	selecionarFeedbackId,
	selecionarFeedbackProfessor,
	selecionarFeedbackQuestao,
	selecionarFeedbacks,
	selecionarProfessorCoordenador,
	selecionarProfessorEmail,
	selecionarProfessorId,
	selecionarProfessorNome,
	selecionarProfessores,
	selecionarQuestaoDificuldade,
	selecionarQuestaoEnunciado,
	selecionarQuestaoId,
	selecionarQuestaoProfessor,
	selecionarQuestoes,
}