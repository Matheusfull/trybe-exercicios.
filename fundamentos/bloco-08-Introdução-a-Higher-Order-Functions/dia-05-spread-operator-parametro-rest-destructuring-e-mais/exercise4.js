const people = [
    {
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];

// escreva filterPeople abaixo

const filterPeople = (array) => {

    const pessoa = array.filter((person) => {
        const { bornIn, nationality } = person
        // console.log(bornIn)

        if (bornIn < 2000 && nationality === 'Australian') {
            return person
        }

    })
    return pessoa
}

console.log(filterPeople(people))