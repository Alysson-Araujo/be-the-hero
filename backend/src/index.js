// importando uma função do express. Esse express irá ter todas as funcionalidades que o express possui
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

//Cria uma variável que vai armazenar a aplicação. (instanciar)
const app = express();

//precisamos informar ao app que estaremos utilizando o json para as requisições
app.use(cors());
app.use(express.json());
app.use(routes);


//porta 3333 para o backend. Padrão
app.listen(3333);