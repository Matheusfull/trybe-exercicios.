module.exports = (req, res, next) => {
    const { price } = req.body;

    if (price == undefined) {
        return res.status(400).json({ "message": "O campo price é obrigatório" })
    }

    if (price < 0 || typeof price !== 'number') {
        return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" })
    }
    next()
}

/*
Exercício 5
1 - pegaremos o price que estará no corpo da requisição para fazer as condições
2 - Se não tiver price, utilizamos o método status enviando o código de resposta HTTP 400 com uma mensagem informando que o campo é obrigatório
3 - Se for menor que 0 ou diferente de um número, também utilizamos o método status enviando o código de resposta HTTP 400 com uma mensagem informando que o campo deve ter um número >=0.
4 - Colocaremos o next a fim de que o próximo middleware seja executado, caso as condicionais sejam passadas.
5 - exportaremos o middle para que seja usado no app
*/