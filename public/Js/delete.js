/*
	NÃO USAR, VAI GERAR ERROS NO BANCO APAGAR CAMPOS, SISTEMA DE INATIVAR DADOS SALVOS AINDA NÃO IMPLEMENTADO, ESSE CÓDIGO VAI SER APAGADO

*/

const knex = require('knex')({
	client: 'mysql',
	connection: {
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "enadinho"
	}
  });
  
  async function deletarBanco(query) {
	try {
	  await knex.raw(query);
	  console.log("Registro excluído com sucesso");
	} catch (err) {
	  console.error("Erro ao excluir registro:", err);
	}
  }
  
  async function deletarCoordenador(id) {
	await deletarBanco(knex('coordenadores').where('id', id).del().toString());
  }
  
  async function deletarProfessor(id) {
	await deletarBanco(knex('professores').where('id', id).del().toString());
  }
  
  async function deletarAluno(id) {
	await deletarBanco(knex('alunos').where('id', id).del().toString());
  }
  
  async function deletarCurso(id) {
	await deletarBanco(knex('cursos').where('id', id).del().toString());
  }
  
  async function deletarDisciplina(id) {
	await deletarBanco(knex('disciplinas').where('id', id).del().toString());
  }
  
  async function deletarEnunciado(id) {
	await deletarBanco(knex('enunciados').where('id', id).del().toString());
  }
  
  async function deletarQuestao(id) {
	await deletarBanco(knex('questoes').where('id', id).del().toString());
  }
  
  async function deletarFeedback(id) {
	await deletarBanco(knex('feedbacks').where('id', id).del().toString());
  }
  
  // Exemplo de uso
  (async () => {
	try {
	  await deletarCoordenador(1); // Substitua o ID pelo coordenador que deseja excluir
	  // Adicione chamadas para as outras funções conforme necessário
	} finally {
	  await knex.destroy();
	  console.log("Conexão fechada. Programa encerrado.");
	}
  })();
  