import { Model, INTEGER, STRING } from 'sequelize';
import db from './index';

class Author extends Model {
  declare id: number;
  declare name: string;
}

Author.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(30),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'authors',
  timestamps: false,
});

export default Author;

/*
Exercício 4 
1 - Vamos criar uma classe e usar a extensão da classe Model do sequelize e declarar cada coluna da tabela como um atributo
2 - Agora, vamos utilizar o método .init da nossa classe Author para iniciar a configuração para acesso ao banco de dados no primeiro parâmetro
3 - Por fim, no segundo parâmetro vamos adicionar a configuração do sequelize que vamos importar de index.ts
*/