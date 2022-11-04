module.exports = (req, res, next) => {
    const { description } = req.body;

    const data = description.createdAt.split("/")

    if (data.length !== 3 || data[0].length < 2 || data[1].length < 2 || data[2].length < 4) {
        return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
    }
    next()
}

/*
Exercício 7
1 - pegaremos a descrição a partir do corpo da requisição
2 - Dividiremos a data a cada traço (/) e vamos fazer as verificações
3 - Se não tiver três espaços referentes ao dia, mês e ano
4 - Ou se o espaço referente ao dia não tiver espaço para dois números
5 - Ou o mes para o mes
6 - Ou o mesmo para o ano
7 - Se o formato não for válido, utilizamos o método status enviando o código de resposta HTTP 400 com a mensagem informando que o campo deve ter um formato válido. 
OBS: Há uma forma em que se usa o regex para verificar se está no formato de data
const { createdAt } = req.body.description;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(createdAt)) {

  }
*/