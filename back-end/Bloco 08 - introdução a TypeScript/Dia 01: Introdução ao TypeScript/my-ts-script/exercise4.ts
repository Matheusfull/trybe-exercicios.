// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.

interface PeopleInput {
    name: string,
    age: number
}

const peopleInput = {
    name: 'Rui',
    age: 23,
  };
  
  const createSimpleSentence = (param:PeopleInput) => {
    return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
  }
  
  console.log(createSimpleSentence(peopleInput));