const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
    /* Utilizamos o Joi para validar o schema do body */
    /* Estamos usando o método messages() para customizar as mensagens de erro das validações */
    Joi.object({
        username: Joi.string().min(5).required().messages({
            'string.min': '"username" length must be 5 characters long',
            'string.required': '"username" is required',
        }),
        password: Joi.string().min(5).required().messages({
            'string.min': '"password" length must be 5 characters long',
            'string.required': '"password" is required',
        }),
    }).validate(body);

module.exports = async (req, res, next) => {
    /* Construímos um schema do Joi */
    const { error } = validateBody(req.body);

    /* Caso ocorra erro na validação do Joi, passamos esse */
    /* erro para o express, que chamará nosso middleware de erro */
    if (error) return next(error);

    const { username, password } = req.body;

    /* if (username === 'admin' && password !== 's3nh4S3gur4???') {
        const err = new Error('Invalid username or password');
        err.statusCode = 401;
        return next(err);
    } */

    // const admin = username === 'admin' && password === 's3nh4S3gur4???';

    // Aqui que começa a brincadeira de criar o JWT. São só 3 passos. 🔐🔐🔐
    // 1
    const payload = {
        username: req.body.username,
        admin: false,
    };

    if (username === 'admin' && password === 's3nh4S3gur4???') {
        payload.admin = true;
    }

    // 2
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
    });

    // 3
    res.status(200).json({ token });
};

/*
Exercício 1 - análise.
1 - Recebe os dados de nome e senha para cadastrar alguém
2 - Se os dados tiverem no padrão, vamos retornar um 'aviso', token, conforme o enunciado
3 - Temos as condições de nome e senha para validar o cadastro 
*/

/*
Exercício 1 - Solução detalhada
1 - Vamos criar um controller para ser o validador do que vem no corpo da requisição, para isso usaremos um middleware.
2 - Agora precisamos validar o que vem no corpo da requisição. Ou seja, vamos analisar o objeto que vem através de um função que chamaremos de validateBody:
  1 - Se o username tem as características do enunciado assim como a senha
  ex: username: Joi.string().min(5).alphanum().required()
  2 - Caso não tenha, enviaremos uma mensagem exatamente de onde deu erro
  ex: 'string.min': '"username" length must be 5 characters long'
  3 - Lá no middleware criado, vamos usar essa função responsável por analisar o que vem no corpo da requisição para ver se tem erro
  ex:const { error } = validateBody(req.body);
  if (error) return next(error);
3 - Instalaremos a biblioteca para trabalhar com o jwt: npm i jsonwebtoken
4 - Agora importaremos o jwt e o segrego 🙊🙊🙊. Lá no middleware que exportaremos para a rota, faremos 3 ações:

   1 - Como não deu erro com as validações do corpo da requisição, então vamos criar um novo objeto com o username enviado e uma chave admin com valor false (isso tá no enunciado)
   ex: const payload = {
    username: req.body.username,
    admin: false,
  };

  2- Criaremos o token, que será construído com ajuda do jwt.sign. Passaremos então :
       1 - a hora de expiração
       2 - o objeto criado acima
       3 - o segredo 🙊🙊🙊 

  3 - Enviaremos o token normalmente
  ex:res.status(200).json({ token });
5 - Depois é só adicionar o segredo ao arquivo .env, exportar o controller pelo index e criar a rota usando esse middleware de verificação.
*/

/*
Exercício 2
Vamos só colocar uma condição de username e password para ter um administrador true.
*/
