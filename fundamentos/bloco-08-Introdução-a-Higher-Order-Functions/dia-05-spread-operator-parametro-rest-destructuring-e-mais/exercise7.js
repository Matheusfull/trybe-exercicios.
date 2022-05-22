const ships = [
    {
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

// escreva shipLength abaixo

/* const shipLength = (array) => {
    const ships = array.map(({ name, length, measurementUnit }) => {
        // console.log(element)
        // const { name, length, measurementUnit } = ships
        return `${name} is ${length} ${measurementUnit} long`
    })
    return ships
} */

// Outra solução!

const shipLength = ({ name, length, measurementUnit }) => (
    `${name} is ${length} ${measurementUnit} long`
)

/*  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
 console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
 console.log(shipLength(ships[2])); */ // 'Yamato is 256 meters long'

console.log(shipLength(ships))