const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    // let array = []
    const list = names.reduce((acc, curr) => {
        if (curr.indexOf('a') || curr.indexOf('A')) {
            // array.push(curr.indexOf('a'))
            //array.push(curr.indexOf('A')) 
            acc += Math.abs(curr.indexOf('a'))
            acc += Math.abs(curr.indexOf('A'))
            return acc
        }
    }, 0)
    return list
}

console.log(containsA())