import Author from "./database/models/AuthorModel";
import Book from "./database/models/BookModel";

(async () => {
  const authors = await Book.findAll();
  console.table(authors.map((author) => author.toJSON()));

  process.exit(0);
})();

/*
Exercício 4
4 - Aqui vamos testar o Model.
*/