module.exports = (req, res, next) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ "message": "O campo name é obrigatório" })
    }

    if (name.length <= 4) {
        return res.status(400).json({ "message": "O campo name deve ter pelo menos 4 caracteres" })
    }
    next()
}

/*
Exercício 4
- Criaremos um dretório com o middlewares e para cada um, haverá um arquivo correspondente
- Ele pega o nome que está escrito no corpo da requisição
- Se não existir ou for menor que 4 caracteres, utilizaremos o método status enviando o código de resposta HTTP 400 com a mensagem de que o campo tem de ser preenchido ou maior do que 4 caracteres, caso contrário: próximo middleware
*/