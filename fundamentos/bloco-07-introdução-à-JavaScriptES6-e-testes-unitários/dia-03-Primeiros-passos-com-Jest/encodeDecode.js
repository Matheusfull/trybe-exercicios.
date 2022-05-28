/* function encode(string) {
    let array = string.split("")
    let cadaIndice
    for (let i = 0; i < array.length; i += 1) {
        cadaIndice = array[i]
        if (cadaIndice === "a") {
            array.splice(i, 1)
            array.splice(i, 0, 1)
        } else if (cadaIndice === "e") {
            array.splice(i, 1)
            array.splice(i, 0, 2)
        } else if (cadaIndice === "i") {
            array.splice(i, 1)
            array.splice(i, 0, 3)
        } else if (cadaIndice === "o") {
            array.splice(i, 1)
            array.splice(i, 0, 4)
        } else if (cadaIndice === "u") {
            array.splice(i, 1)
            array.splice(i, 0, 5)
        }
    }
    let novaString = array.join("")
    return novaString
}

function decode(string2) {
    let array2 = string2.split("")
    let cadaIndice2
    for (let x = 0; x < array2.length; x += 1) {
        cadaIndice2 = array2[x]
        if (cadaIndice2 === "1") {
            array2.splice(x, 1)
            array2.splice(x, 0, "a")
        } else if (cadaIndice2 === "2") {
            array2.splice(x, 1)
            array2.splice(x, 0, "e")
        } else if (cadaIndice2 === "3") {
            array2.splice(x, 1)
            array2.splice(x, 0, "i")
        } else if (cadaIndice2 === "4") {
            array2.splice(x, 1)
            array2.splice(x, 0, "o")
        } else if (cadaIndice2 === "5") {
            array2.splice(x, 1)
            array2.splice(x, 0, "u")
        }
    }
    let novaString2 = array2.join("")
    return novaString2
}

const functions = { encode, decode };
module.exports = functions;

console.log(encode('xtns')) */