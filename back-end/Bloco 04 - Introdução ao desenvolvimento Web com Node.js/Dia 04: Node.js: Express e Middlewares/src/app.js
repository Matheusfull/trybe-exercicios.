const express = require('express');
const validateName = require('./middlewares/validateName')
const validatePrice = require('./middlewares/validatePrice')
const validateDescription = require('./middlewares/validateDescription')
const validateCreatedAt = require('./middlewares/validateCreatedAt')
const validateRating = require('./middlewares/validateRating')
const validateDifficulty = require('./middlewares/validateDifficulty')
const auth = require('./middlewares/auth')
const crypto = require('crypto');

const app = express();

// exercício 2
app.use(express.json());

app.post('/activities', /* (req, res, next) => {
    // console.log('1 middle ')
    //Crie um middleware de validação para a chave name. Ela deve:
    //Ser obrigatória;
    //Retornar o status 400 e uma mensagem em formato json
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ "message": "O campo name é obrigatório" })
    }

    //Ter mais de 4 caracteres;
    //Retornar o status 400 e uma mensagem em formato json;

    if (name.length <= 4) {
        return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" })
    }
    next()
} */ validateName, /* (req, res, next) => {
    // Crie um middleware de validação para a chave price. Ela deve:
    // Ser obrigatória;
    // Retornar o status 400 e uma mensagem em formato json;
    const { price } = req.body;

    if (price == undefined) {
        return res.status(400).json({ "message": "O campo price é obrigatório" })
    }

    // Ser um número maior ou igual a zero;
    // Retornar o status 400 e uma mensagem em formato json;

    if (price < 0 || typeof price !== 'number') {
        return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" })
    }
    next()
} */ validatePrice, /* (req, res, next) => {

    // Crie um middleware de validação para a chave description que possui as chaves createdAt, rating e difficulty. Ela deve:
    // Ter todas as chaves obrigatórias;
    const { description } = req.body;
    // const { rating, difficulty, createdAt } = description;

    if (!description) {
        return res.status(400).json({ "message": "O campo description é obrigatório" })
    }
    if (!description.createdAt) {
        return res.status(400).json({ "message": "O campo createdAt é obrigatório" })
    }
    if (!description.rating) {
        return res.status(400).json({ "message": "O campo rating é obrigatório" })
    }
    if (!description.difficulty) {
        return res.status(400).json({ "message": "O campo difficulty é obrigatório" })
    }
    next()

} */ validateDescription, /* (req, res, next) => {
    // Crie um middleware de validação para a chave createdAt. Ela deve:
    // Ter uma data válida no formato dd/mm/aaaa;
    // Retornar o status 400 e uma mensagem em formato json;
    const { description } = req.body;

    const data = description.createdAt.split("/")

    if (data.length !== 3 || data[0].length < 2 || data[1].length < 2 || data[2].length < 4) {
        return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
    }
    next()
} */ validateCreatedAt, /* (req, res, next) => {
    // Crie um middleware de validação para a chave rating. Ela deve:
    // Ter um número inteiro entre 1 e 5;
    const { description } = req.body;
    // console.log(description.rating)

    if (description.rating < 1 || description.rating > 5) {
        return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" })
    }

    next()
} */ validateRating, /* (req, res, next) => {
    // Crie um middleware de validação para a chave difficulty. Ela deve:
    // Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
    const { description } = req.body;
    const classifications = ['Fácil', 'Médio', 'Difícil'];

    if (!classifications.includes(description.difficulty)) {
        return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" })
    }
    next()

} */ validateDifficulty, /* (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization || authorization.length == 16) {
        res.status(401).json({ message: 'Token inválido!' })
    }
    next()
} */ auth,
    (_req, res) => {
        // console.log('agora deu bom na criação')
        res.status(201).json({ message: 'Atividade registrada com sucesso!' })
    }
);

function generateToken() {
    return crypto.randomBytes(8).toString('hex');
}

app.post('/signup', (req, res) => {
    const { email, password, firstName, phone } = req.body;

    if (!email || !password || !firstName || !phone) {
        res.status(401).json({ "message": "Campos ausentes!" })
    }

    res.status(200).json({ "message": generateToken() })
})

module.exports = app;

/*
Exercício 1
1 - Para a criação de um servidor, basta:
  - baixar o express
  - no arquivo app, importa o express, execute-o e exporte-o
*/

/*
Exercício 2
O middleware responsável por interpretar um conteúdo JSON é o express.json(), porém para usá-lo precisa como o use: app.use(express.json())
*/

/*
Exercício 3
- Usaremos o método post (que é responsável por postar/criar algo)
- Passaremos a rota que o exercício mandou, como primeiro parâmetro
- Como segundo parâmetro passaremos uma callback responsável por lidar com as requisições(_req) e respostas(res) do servidor
- Utilizaremos o método status enviando o código de resposta HTTP 201 com a mensagem informando que a atividade foi cadastrada com sucesso.
ex:
app.post('/activities', (_req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

*/

/*
Exercício 4
Devemos importar o middle de verificação do nome e colocar no segundo parâmetro.
*/

/*
Exercício 5
Devemos importar o middle de verificação de price e colocar no e parâmetro
*/

/*
Exercício 6
Devemos importar o middle de verificação de descrição e colocar no 4 parâmetro
*/

/*
Exercício 7
Devemos importar o middle de verificação de data e colocar no 5 parâmetro
*/

/*
Exercício 8
Devemos importar o middle de verificação de rating e colocar no 6 parâmetro
*/

/*
Exercício 9
Devemos importar o middle de verificação de difficulty e colocar no 7 prâmetro
*/

/*
Exercício 2.1 
1 - Pegaremos o email,o password,o firstName e o phone do corpo da requisição
2 - Vamos fazer a condicional de que se essas chaves não existirem, mandaremos uma mensagem de erro.
3 - Caso contrário, se existirem, mandaremos um token para o cliente.
4 - Vale ressaltar que esse token vem de uma função que gera um número aleatório.
*/

/*
Exercício 2.2
Devemos importar o middle de verificação de difficulty e colocar no 8 prâmetro
*/