'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      author_id: {
        type: Sequelize.INTEGER,
        field: 'author_id',
        references: {
          model: 'authors', // aqui informamos que a relação será com nossa model 'authors'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      genre_id: {
        type: Sequelize.INTEGER,
        field: 'genre_id',
        references: {
          model: 'genres', // aqui informamos que a relação será com nossa model 'genres'
          key: 'id', // aqui informamos qual vai ser a coluna que será relacionada (no caso, a coluna 'id')
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('books');
  }
};

/*
Exercício 3
1 - Na função up vamos subir o banco de dados e para isso:
2 - usaremos a função createTable do queryInterface. A função createTable recebe dois parâmetros:
O primeiro recebe uma string com o nome da tabela;
O segundo recebe um objeto com os campos, e suas condições, da tabela.
3 - passaremos então o nome da tabela em minúsculo e no plural
4 - depois só passar cada coluna da tabela com as características 
*/