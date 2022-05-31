const names = [
    'Aanemarie', 'Adervandes', 'Akifusa', // 7
    'Abegildo', 'Adicellia', 'Aladonata', // 7
    'Abeladerco', 'Adieidy', 'Alarucha',  // 6
];

function containsA() {
    const name = names.reduce((acc, book) => {
        return `${acc} ${book}`
    }, '')
    const array = [];
    const stringEmArray = name.split('')
    for (let index of stringEmArray) {
        if (index === 'a' || index === 'A') {
            array.push(index)
        }
    }
    return array.length;
}

console.log(containsA())