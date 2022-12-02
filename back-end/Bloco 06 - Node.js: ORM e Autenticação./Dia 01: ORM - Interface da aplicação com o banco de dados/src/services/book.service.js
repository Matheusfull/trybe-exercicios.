const { Book } = require('../models');

// 🚀 Listando os livros 🚀
const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

// 🚀 Buscando um livro pelo id
const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

// 🚀 Cadastrando um livro
const createBook = async (title, author, pageQuantity) => {
  const [newBook] = await Book.create({ title, author, pageQuantity })
  return newBook;
}

// 🚀 Editando um livro
const update = async (id, { title, author, pageQuantity }) => {
  const [bookUpdate] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );
  return bookUpdate;
};

const remove = async (id) => {
  const bookRemoved = await Book.destroy(
    { where: { id } },
  );

  console.log(bookRemoved)
  return bookRemoved;
};

module.exports = {
  getAll,
  getById,
  createBook,
  update,
  remove,
};

/* 
Exercçio 3 -
Agora é o mesmo de sempre: cria a função, coloca numa variável o retorno que vem do banco de dados e depois só enviar esse retorno.
*/