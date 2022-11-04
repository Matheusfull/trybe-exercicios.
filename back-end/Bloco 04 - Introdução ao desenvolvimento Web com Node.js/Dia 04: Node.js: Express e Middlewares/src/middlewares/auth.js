module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization || authorization.length == 16) {
        res.status(401).json({ message: 'Token inválido!' })
    }
    next()
}

/* Exercício 2.2
1 - Pegaremos a autorização que vem da cabeça da requisição
2 - Se não existir essa autorização ou for menor que 16 caracteres, avisaremos que o token é inválido
3 - Caso dê tudo certo, vamos para o último middleware que é avisar que deu tudo certo. */