// src/app.js
const express = require('express');
const { writeFile } = require('fs');
const fs = require('fs').promises;
const path = require('path');

const app = express();

// exercício 4
app.use(express.json())

const moviesPath = path.resolve(__dirname, './movies.json');

const leadFile = async () => {
    try {
        const data = await fs.readFile(moviesPath)
        return JSON.parse(data)
    } catch (err) {
        console.log(err)
    }
}

// leadFile();

app.get('/movies/:id', async (req, res) => {
    try {
        const movies = await leadFile();
        const { id } = req.params;
        const movie = movies.find((movie) => movie.id === Number(id))
        if (!movie) return res.status(404).json({ message: "Nenhum filme encontrado" });
        return res.status(200).json(movie);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

app.get('/movies', async (req, res) => {
    try {
        const movies = await leadFile();
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

app.post('/movies', async (req, res) => {
    try {
        const newMovie = req.body
        const movies = await leadFile();
        const newId = movies.length + 1;
        newMovie.id = newId;
        movies.push(newMovie);
        const moviesString = JSON.stringify(movies)
        await fs.writeFile(moviesPath, moviesString)
        return res.status(201).json(movies);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

app.put('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { movie, price } = req.body
        const movies = await leadFile();
        const findmovies = movies.find((movie) => movie.id === Number(id))
        findmovies.movie = movie
        findmovies.price = price
        const moviesUpDate = [...movies]
        const moviesString = JSON.stringify(moviesUpDate)
        await fs.writeFile(moviesPath, moviesString)
        return res.status(200).json(movies);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

app.delete('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movies = await leadFile();
        const findmovies = movies.filter((movie) => movie.id !== Number(id))
        const moviesNotDelete = [...findmovies]
        const moviesString = JSON.stringify(moviesNotDelete)
        await fs.writeFile(moviesPath, moviesString)
        return res.status(204).json(movies);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

module.exports = app;

/*
exercício 4 
Utilizaremos try/catch em todas as nossas rotas para capturar possíveis erros.

1 - Colocaremos que o app.use instala alguma coisa e essa coisa será a leitura de json no express
2 - ('fs').promises); será um leitor de arquivo assíncrono
3 - require('path'); será o caminho para o leitor achar o arquivo
4 - Esse path recebe dois parâmetros que o dirname e o caminho, só o usaremos o segundo.
5 - Vamos fazer a leitura do arquivo, porém será retornado uma stringo e por isso precisamos cnverter para objeto.
6 - Nossa função será basicamente fazer um try/catch para leitura. Em caso de tudo dar certo, vamos retornar o objeto lido, caso contrário, vamos retornar o erro no console.
*/

/*
exercício 5
1 - Dentro da parte que dá bom, do try, vamos fazer alguns passos:
- Pegar todos os filmes
- pegar o id que foi passado pela rota
- encontrar qual filme, da lista passada, tem o mesmo id da veio na rota
- Se encontrarmos, vamos avisar e se não encontrar, também avisaremo
2 - Para caso de ruim, vamos mandar como resposta o erro
*/

/*
Requisito 6
Dentro do try vamos ter:
- pegaremos todos os filmes que foram lidos pela função leadFile e mandaremos-os como resposta da requisição.
Caso tudo de ruim, entrará no catch e vamos avsar o erro que deu
*/

/*
Requisito 7
Dentro do try vamos colocar o que vai dar bom
- Pego os dados do corpo da requisição.
- Depois pego todos os filmes para que posso colocar o que veio na requisição por último
- como vamos colocar por último, eu preciso adicionar a este filme um id, basta só fazer o tamanho do array
- Depois adiciona esse ai do filme vindo pelo corpo e coloca-o no final do array dos filmes. O famoso push
- Precisamos slvar no arquivo json. Vamos então colocar tudo em string e depois reescrever o arquivo json
- Pega os filmes já reescrito e manda como resposta.
Caso tudo de ruim, entrará no catch e vamos avsar o erro que deu 
*/

/*
Requisito 8
Na parte que dá bom, no try, vamos colocar toda a lógica:
- Vamos pefar o id que vem da rota para saber qual filme vamos atualizar e depois todas as informações que queremos colocar nesse filme, ou seja, as atualizações
- Leremos todos os filmes e depois vamos encontrar aquele que vem com o mesmo id no parâmetro de rota
- Ao encontrá-lo, vamos colocar as informações que que mandamos no corpo da requisição, que no caso são as atualizações.
- Depois pegaremos já a lista de livro com tudo certo, com o livro específico atualizado e vamos passar para string e depois reescrever o arquivo json.
- Por último, só mandar a lista de filme para conferir
Caso tudo de ruim, entrará no catch e vamos avsar o erro que deu
*/

/*
Requisito 9
Na parte que dá bom, vamos colocar toda lógica:
- Vamos pegar o id que vem na rota, que será do filme em específico que vamos deletar
- Depois só ler todos os filmes e buscar aqueles que não têm o mesmo id passado em rota
- Feito isso, pega todos os filmes acima e passa para stringo e reescreve no arquivo json.
- Depois é só mandar a lista com os filmes já atualizada como resposta.
Caso tudo de ruim, entrará no catch e vamos avsar o erro que deu
*/