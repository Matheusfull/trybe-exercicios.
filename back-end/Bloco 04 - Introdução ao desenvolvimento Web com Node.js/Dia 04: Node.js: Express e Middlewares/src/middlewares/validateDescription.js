module.exports = (req, res, next) => {
    const { description } = req.body;
    // const { rating, difficulty, createdAt } = description;

    if (!description) {
        return res.status(400).json({ "message": "O campo description é obrigatório" })
    }
    if (!description.createdAt) {
        return res.status(400).json({ "message": "O campo createdAt é obrigatório" })
    }
    if (!description.rating) {
        return res.status(400).json({ "message": "O campo rating é obrigatório" })
    }
    if (!description.difficulty) {
        return res.status(400).json({ "message": "O campo difficulty é obrigatório" })
    }
    next()

}

/*
Exercício 6
1 - pegaremos a descrição, que é um objeto, no corpo da requisição
2 - Vamos fazer a condição de existência para cada chave e para a descrição, caso não haja, utilizamos o método status enviando o código de resposta HTTP 400 com uma mensagem
*/

/*
BIZU- Para a função não ficar muito grande, vamos criar um middleware dentro de outro middleware
*/

/* const validateDescription = (description, res, field) => {
    if(!description) {
        return res.status(400).json({ message: `O campo ${field}` })
    }
}

module.exports = (req, res, next) => {
    const { description } = req.body;

    return validateDescription(description, res, 'description')
    || validateDescription(description.createdAt, res, 'createdAt')
    || validateDescription(description.rating, res, 'rating')
    || validateDescription(description.difficulty, res, 'difficulty')
    || next();
} */