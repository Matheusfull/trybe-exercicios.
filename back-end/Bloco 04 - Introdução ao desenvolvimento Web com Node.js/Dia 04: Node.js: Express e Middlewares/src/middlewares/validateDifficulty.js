module.exports = (req, res, next) => {
    const { description } = req.body;
    const classifications = ['Fácil', 'Médio', 'Difícil'];

    if (!classifications.includes(description.difficulty)) {
        return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" })
    }
    next()

}

/*
Exercício 9
1 - Vamos pegar a descrição que está na rqusição do body, pois a partir dela temos acesso à dificuldade
2 - Vamos criar um array com as dificuldades que desejamos
3 - Vamos fazer uma condição onde se dentre as dificuldades que colocamos no array não tiver nenhuma inclusa vindo da descrição, mandaremos um aviso de que alguma coisa está errada
*/