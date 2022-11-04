module.exports = (req, res, next) => {
    const { description } = req.body;
    // console.log(description.rating)

    if (description.rating < 1 || description.rating > 5) {
        return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" })
    }

    next()
}

/*
Exercício 7
1 - Vamos pegar a descrição que vem no corpo da requisição, por isso req.body
2 - Vamos fazer as condicionais para a avalição que tem de ser entre 1 e 5. Fazemos isso pelo contrário, ou seja, não pode ser menor que 1 nem maior que 5
3 - Se o número não for válido, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve ser um inteiro entre 1 e 5.
4 - Vamos para o próximo middleware
*/