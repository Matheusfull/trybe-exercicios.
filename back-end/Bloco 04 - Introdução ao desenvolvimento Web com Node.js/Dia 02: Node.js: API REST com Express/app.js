const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const movies = require('./src/movies.json')

const app = express();

app.use(express.json())

const moviesPath = path.resolve(__dirname, './src/movies.json')

// Exercício 4
const readAll = async () => {
    try {
        const file = await fs.readFile(moviesPath)
        console.log(JSON.parse(file))
    } catch (e) {
        console.error(`Deu esse erro: ${e}`);
    }
}

// readAll()

// exercício 5
app.get('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movie = movies.find((a) => a.id === Number(id))
        res.status(200).json(movie);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
})

/*  app.get('/movies/:id', async (req, res) => {
  try {
     const movies1 = await fs.readFile(moviesPath, 'utf-8');
     const movies = JSON.parse(movies1)
     const movie = movies.find(({ id }) => id === Number(req.params.id));
res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
 }); */

// exercício 6
app.get('/movies', (req, res) => res.status(200).json({ movies }));

// exercício 7
app.post('/movies', async (req, res) => {
    const { movie, price } = req.body;
    const id = movies.length + 1
    const newMovie = { id, movie, price }
    const allmovies = JSON.stringify([...movies, newMovie]);
    await fs.writeFile(moviesPath, allmovies);
    res.status(201).json({ newMovie })
})

// exercício 8

app.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const { movie, price } = req.body;

    const film = movies.find((team) => team.id === Number(id));

    if (!film) {
       return res.status(404).json({ message: 'Movie not found' });
    }

    film.movie = movie;
    film.price = price;
    const fillUpdate = JSON.stringify([...movies])
    await fs.writeFile(moviesPath, fillUpdate);
    res.status(200).json({ film });
});

// exercício 9

app.delete('/movies/:id', async (req, res) => {
    const { id } = req.params;

    const films = movies.filter((team) => team.id !== Number(id));

    if (!films) {
        res.status(404).json({ message: 'Movie not found' });
    }

    const moviesUpdate = JSON.stringify([...films])
    await fs.writeFile(moviesPath, moviesUpdate);
    res.status(204).end();
});

module.exports = app;

/*
exercício 3
Para criar um servidor Node.js que utilizando o framework Express, precisamos no arquivo app.js:
 -  importar o exmpress, uma vez que ele já foi instalado pelo npm i express@4.17 
 -  crie uma variável para instanciar o express
 -  Exportar essa variável em execução
 Continua a explicação no arquivo server.js
*/

/*
exercício 4
1 - vamos importar o fs.promises para leitura assíncrona e o path para localizar o arquivo
2 - Vamos implementar a função. Nela, vamos fazer um try/ catch, pois é algo bem comum numa leitura assíncrona de arquivo json.
3 - Caso tudo de certo, vamos pegar o arquivo, ler com o fs e depois converter com o json.parse e consolar para ver o arquivo em array
4 - Caso de errado, cai no catch e consolamos o erro.
*/

/*
exercício 5
Sempre usaremos um try/catch para uma boa prática
1 - Pegaremos o id da parâmetro de rota
2- Pegaremos o lista com o filmes, seja ela vindo de um arquivo ou sendo lida pelo método fs.readFile
3 - Usaremos um find para encontrar um objeto cujo id é o mesmo passado na rota
4 - responderemos com o status 200 e o objeto encontrado
*/

/*
exercício 6
1 - Questão simples, só restornar como resposta o array de filmes, seja vindo de um arquivo seja lido pelo método fs.readFile
*/

/*
exercício 7
Usaremos um try/catch para uma boa prática
1 - pega as informações que vêm no corpo da requisição
2 - cria um novo objeto com elas e se atende a criar um id dinâmico
3 - Pega os filmes anteriores, faz um spread operator e adicionar o novo objeto, e converse isso tudo para um json
4 - Pega o json e reescreve no arquivo que está todos os filmes
5 - Envia como resposta o filme que foi criado
*/

/*
exercício 8
1 - pegaremos as informações tais como o id que vem pela rota e que serve para localizarmos o objeto que vamos mudar. Já o que vem no corpo da requisição são as atualizações do objeto que queremos
2 - Fazemos um find para encontrar o objeto que tem o mesmo id passado na rota
3 - Se não encontrarmos objetos, avisaremos com um status 404 e uma mensagem 
4 - Depois vamos pegas as info do corpo da requisição e fazer as mudanças no objeto encontrado
5 - Com o objeto já modificado, vamos pegar todos o objetos, transformar em json e reescrever lá no arquivo que os guarda
6 - Por fim só responder a requisição com o objeto modificado
*/

/*
exercício 9
1 - pega o parâmetro que vem da rota. Ele que indica qual filme será excluído
2 - Faz um filtro dos filmes de tal modo que o filme que tenha o mesmo id passado na rota, seja excluído do filtro
3 - Se não encontrar nada no filtro, avisa
4 - Pega todos esses filmes filtrados e converte para json
5 - Reescreva no arquivo que está com todos os filmes
6 - Depois é só responder que finalizou
*/

