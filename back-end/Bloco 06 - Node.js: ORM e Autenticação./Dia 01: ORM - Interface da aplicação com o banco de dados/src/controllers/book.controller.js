const BooksService = require('../services/book.service');

// 🚀 Listando os livros 🚀
const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro, nenhuma lista de livros encotrada.' });
  }
};

// 🚀 Buscando um livro pelo id
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' })

    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'bad request' })
  }
}

// 🚀 Cadastrando um livro
const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BooksService.createBook(title, author, pageQuantity);

    if(!book) return res.status(404).json({ message: 'Book not created' })

    return res.status(201).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'bad request' })
  }
}

// 🚀 Editando um livro
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  try {
    const updateBook = await BooksService.update(id, { title, author, pageQuantity })
    if (!updateBook) return res.status(404).json({ message: 'Book not found!' })
    return res.status(200).json(updateBook);
  } catch (err) {
    res.status(500).json({ message: 'Bad request!' })
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const oque = await BooksService.remove(id);

    // const books = await BooksService.getAll();
    return res.status(200).json(oque);
  } catch (err) {
    res.status(500).json({ message: 'Deu ruim' })
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};

/* 
Exercício 4 - 
Vamos ter um padrão de resposta no controller:
1 - Quando der certo, pelo try, vamos pegar o retorno da função que vem do service.
2 - Enviaremos esse retorno com um status de ok
3 - Se der ruim, através do catch, vamos avisar.
*/