'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pageQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Books');
  }
};

/* 
Exercício 1
A migrition é responsável por criação e manutenção da tabela.
1 - Para criá-la, damos o comando npx sequelize migration:generate --name create-.... e já vem com um padrão, é só ir codando o que precisa.
2 - Tanto a função de criar quando a de dropar a tabela vem com 2 parâmetros. Sendo que o 1 parâmetro, o queryInterface, é usado pela biblioteca para modificar o banco de dados, seguindo o “dialeto” do banco que estamos utilizando.
3 - Como temos que esperar tudo acontecer, usamos o await, queryInterface e o método createTable para criar a tabela, pasmem kkkkk
4 - A createTable tem dois parâmetro, sendo o primeiro recebe uma string com o nome da tabela e 
o segundo recebe um objeto com os campos, e suas condições, da tabela.
5 - Depois é só fazer a função de dropar a tabela que usa a queryInterface.dropTable e nome da tabela.
6 - Depois de configurado o sequelize, damos: npx sequelize db:create
7 - Enfim vamos construir a tabela com: npx sequelize db:migrate
*/
