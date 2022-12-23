const app = require('./app');

app.listen(3001, () => console.log('hello, Wolrd. Estou rodando na porta 3001'));

/*
Exercício 3
 1 - Importaremos a execução do módulo express
 2 - Vamos startar o servidor através do listen e passaremos dois parâmetros
   2.1 - Primeiro parâmetro será a porta
   2.2 - Segundo parâmentro será uma função e passaremos um console.log só para verficar se está tudo certo.
*/