// src/app.js

const express = require('express');

const Book = require('./src/controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/books', Book.getAll);
app.get('/books/:id', Book.getById);
app.post('/books', Book.createBook);
app.put('/books/:id', Book.createBook);
app.delete('/books/:id', Book.deleteBook);

module.exports = app;

/* 
Exercício 5
Aqui é só criar a rota com os endereços e funções do controller.
*/