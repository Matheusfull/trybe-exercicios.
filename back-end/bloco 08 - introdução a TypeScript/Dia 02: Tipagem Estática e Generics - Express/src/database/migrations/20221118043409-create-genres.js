'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      genre: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('genres');
  }
};

/*
Exercício 2
1 - Na função up vamos subir o banco de dados e para isso:
2 - usaremos a função createTable do queryInterface. A função createTable recebe dois parâmetros:
O primeiro recebe uma string com o nome da tabela;
O segundo recebe um objeto com os campos, e suas condições, da tabela.
3 - passaremos então o nome da tabela em minúsculo e no plural
4 - depois só passar cada coluna da tabela com as características 
*/