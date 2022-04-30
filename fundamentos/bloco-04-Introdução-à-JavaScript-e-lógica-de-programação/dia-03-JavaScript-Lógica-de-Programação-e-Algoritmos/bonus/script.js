// EXERCÍCIO 1

/* for (let i = 5; i > 0; i -= 1) {
    let hast = "*"
    for (let y = 4; y > 0; y -= 1) {
        hast += '*'
    }
    console.log(hast)
} */

// EXERCÍCIO 2  

/* for (let i = 1; i <= 5; i += 1) {
    let hast = ""
    for (j = 0; j < i; j += 1) {
        hast += '*'
    }
    console.log(hast)
} */

// Exercício 3


/* for (let i = 1; i <= 5; i += 1) {
    let hast = ""
    let space = " "
    for (let s = 5 - i; s >= 1; s -= 1) {
        space += 1
    }
    for (j = 0; j < i; j += 1) {
        hast += '*'
    }
    console.log(space + hast)
} */

// EXERCÍCIO 4 

for (let i = 1; i <= 5 - ((5 - 1) / 2); i += 1) {
    let hast = ""
    let previousHast = ""
    for (k = 0; k < i; k += 1) {
        previousHast += '*'
    }
    for (j = 0; j < i; j += 1) {
        hast += '*'
    }
    console.log(previousHast + "" + hast)
}


/*     *
   ***    3 - 1 = 2
  *****   5 - 2 = 3
 *******  7 - 3 = 4
********* 9 - 4 = 5 */