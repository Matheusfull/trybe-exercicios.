// src/middlewares/admin.js

// module.exports = (req, res, next) => {
// const { user } = req;

/* Caso `req.user` não exista */
// if (!user) {
/* Criamos um objeto de erro */
// const err = new Error('This endpoint requires authentication');
/* Atribuímos o status `401 Unauthorized` ao erro */
//  err.statusCode = 401;
/* E enviamos o erro para o middleware de erro */
// return next(err);
// }

/* Caso o usuário não seja admin */
// if (!user.admin) {
/* Criamos um novo erro com status `403 Forbidden` */
// const err = new Error('Restricted access');
// err.statusCode = 403;
/* Enviamos o erro para ser processado no middleware de erros */
// return next(err);
// }

/* Se nenhuma das condições acima forem verdadeiras, */
/* a pessoa é admin e podemos continuar com a request */
// return next();
// };
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            error: {
                message: 'Token not found',
            },
        });
    }

    try {
        const admin = jwt.verify(token, JWT_SECRET);
        console.log(admin);
        req.admin = admin;

        next();
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

/*
Exercício 4
Vamos fazer um validador que nem o auth.js, com as 3 possibilidades de verificação do token
1 - Caso não há o token na cabeça
Dentro do tryqcatch
2 - Caso há a verificação de jwt certa, salve o objeto gerado na req
3 - Caso há erro na verificação, envie o erro
*/