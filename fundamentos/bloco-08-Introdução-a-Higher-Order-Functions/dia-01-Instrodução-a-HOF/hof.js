// EXERCÍCIO 1 
/* 
 const generaterObject = (name) => {
    return {
        nomeCompleto: `${name}`,
        email: `${name.replace(' ', '_').toLowerCase()}@trybe.com`
    }
}

const newEmployees = (callback) => {
    const employees = {
        id1: generaterObject('Pedro Guerra'),
        id2: generaterObject('Luiza Drumond'),
        id3: generaterObject('Matheus Felipe')
    }
    return employees;
};

console.log(newEmployees(generaterObject)); 
 */
// EXERCÍCIO 2


 /* const checar = (myNumber, number) => {
    if (myNumber === number) {
        return true;
    } else
        return false;
}

const hof = (myNumber, callback) => {
    const numberDrawn = Math.floor((Math.random() * 2) + 1)
    if (callback(myNumber, numberDrawn) === true) {
        return 'Parabéns você ganhou'
    } else {
        return 'Tente novamente'
    }

}

console.log(hof(2, checar)) 
 */
// EXERCÍCIO 3

 let soma = 0

const checkAnswer = (correctAnswer, myAnswer) => {
    if (myAnswer === correctAnswer) {
        soma += 1

    } else if (myAnswer === 'N.A') {
        soma += 0

    } else {
        soma -= 0.5

    }

}

const hof = (correctAnswer, myAnswer, callback) => {
    for (let index = 0; index < correctAnswer.length; index += 1) {
        callback(correctAnswer[index], myAnswer[index])
    }

    return soma
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A'];

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer)) 
