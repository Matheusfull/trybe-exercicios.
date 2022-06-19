const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
//                                   exercício 1

/*  const changeTurno = (obj, turno, noite) => {
    obj[turno] = noite;
}
 console.log(changeTurno(lesson2, "turno", "noite")); 
 */

//                                    exercício 2

/*
const listObject = (object) => {
    return Object.keys(object)
}
console.log(listObject(lesson3)) */

//                                     exercício 3

/* const listObject = (object) => {
    const keys = Object.keys(object)
    return keys.length
}
console.log(listObject(lesson3))
*/

//                                     exercício 4

/* const value = (object) => {
    return Object.values(object)
}

console.log(value(lesson1)) */

//                                     exercício 5 

const allLessons1 = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons1) 


//                                     EXERCÍCIO 6 
/*  function totalAluns(obj) {
    let soma = 0;
    let valueOfObj = Object.values(obj)
    // return valueOfObj
    for (index = 0; index < valueOfObj.length; index += 1) {
        let cadaNumero = parseInt(valueOfObj[index].numeroEstudantes);
        soma += cadaNumero
    }
    return soma
}
console.log(totalAluns(allLessons1))  */

//                                      EXERCÍCIO 7

/* const getValueByNumber = (lesson, number) => {
    const pairKeyValue = Object.entries(lesson);
    return pairKeyValue[number][number];
}

console.log(getValueByNumber(lesson1, 0)) */

//                                      EXERCÍCIO 8  

/* const verifyPair = (lesson, key, value) => {
    let situation = false;
    const pairKeyValue = Object.entries(lesson);
    //return pairKeyValue;
    for (let index = 0; index < pairKeyValue.length; index += 1) {
        if (pairKeyValue[index][0] === key && pairKeyValue[index][1] === value) {
            situation = true;
        }
    }
    return situation;
}

console.log(verifyPair(lesson2, 'professor', 'Carlos')); */