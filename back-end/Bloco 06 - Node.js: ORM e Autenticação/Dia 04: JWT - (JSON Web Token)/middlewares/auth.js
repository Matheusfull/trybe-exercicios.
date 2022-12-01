const jwt = require('jsonwebtoken');

// Exercício 3 é o middleware auth.js

/* Mesma chave privada que usamos para criptografar o token.
   Agora, vamos usá-la para descriptografá-lo.
   Numa aplicação real, essa chave jamais ficaria hardcoded no código assim, mas aqui só estamos interessados em
   ilustrar seu uso ;) */
const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
    /* Aquele token gerado anteriormente virá na requisição através do
     header Authorization em todas as rotas que queremos que
     sejam autenticadas. */
    const token = req.headers.authorization;

    /* Caso o token não seja informado, simplesmente retornamos
     o código de status 401 - não autorizado. */
    if (!token) {
        // return res.status(401).json({ error: 'Token não encontrado' });
        const err = new Error('Token not fond');
        err.statusCode = 401;
        /* Aqui ele é enviado ao middleware de erro */
        return next(err);
    }

    /* Vamos agora validar o token e codar para cada possibilidade de dar certo ou erro. */
    try {
        /* Através o método verify, podemos validar e decodificar o nosso JWT. */
        const payload = jwt.verify(token, JWT_SECRET);
        // console.log(payload);
        /*
        A variável payload será um objeto equivalente ao seguinte:
        {
        username: 'admin', admin: false, iat: 1656616422, exp: 1657221222
        }
        */

        /* Caso o token esteja expirado, a própria biblioteca irá retornar um erro,
           por isso não é necessário fazer validação do tempo.
           Caso esteja tudo certo, nós então usamos o serviço de usuário para obter seus dados atualizados */

        /* Agora vamos armazenar o token verificado e 'descriptografado', 
        que contém todas as informações que foram necessárias para que ele fosse 
        encritografado. Ou seja, ele contém o username e admin, pois foram os dados usados para gerar o JWT.
        Vale ressaltar que o fato de armazenar esse objeto na requisição é uma forma de trazer um dados específico - seja do banco de dados - atrvés daquele token. Por exemplo: Se uma pessoa quissesse ter acesso a sua conta, seria necessário apenas informa o seu token que o acesso seria liberado, pois atrevés do token, iríamos desencriptografá-lo e ver qual seria o email da pessoa e com isso buscar esse email no banco de dados e encontrando-o, poderia autorizar o acesso.
        */
        req.user = payload;

        return next();
    } catch (err) {
        // Caso aconteça um erro ao validar o token, retorne o status 401 Unauthorized com o seguinte conteúdo no corpo
        err.statusCode = 401;
        /* E enviamos o erro para ser processador pelo middleware de erro. */
        return next(err);
    }
};