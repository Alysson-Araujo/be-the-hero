const express = require('express');

const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const OngController = require('./controllers/OngController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/** 
 * criação de uma rota Principal.
 * colocando apenas a barra, significa que estamos pegando a rota principal
 * Após a vírgula, iremos passar uma função onde nela teremos dois parametros: a requisição(request) e resposta(response)
 * 
 * */
/**
 * Funções HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de Parãmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" e eles, geralmentem servem para filtros, páginação, entre outros
 * Route Params: Parâmetros utilizados para identificar recursos]
 * Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: SQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchBD, etc
 * 
 */


/**
 * request: quarda todos os dados que vem através da requisição do usuário.
 * response: responsável por retornar uma resposta para o usuário.
 */

