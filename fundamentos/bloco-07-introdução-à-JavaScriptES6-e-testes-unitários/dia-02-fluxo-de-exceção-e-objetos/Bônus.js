// EXERCÍCIO 1

const allLessons = {
    lesson1:
    {
        materia: 'Matemática',
        numeroEstudantes: 20,
        professor: 'Maria Clara',
        turno: 'manhã'
    },
    lesson2:
    {
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'noite'
    },
    lesson3:
    {
        materia: 'Matemática',
        numeroEstudantes: 10,
        professor: 'Maria Clara',
        turno: 'noite'
    }
};

const watch = (obj) => {
    const array = Object.entries(obj);
    console.log(array[0])
    console.log(Object.entries(array))
    /*  for (index = 0; index < array.length; index += 1) {
         console.log(array[index])
    }
     */
} 

watch(allLessons)