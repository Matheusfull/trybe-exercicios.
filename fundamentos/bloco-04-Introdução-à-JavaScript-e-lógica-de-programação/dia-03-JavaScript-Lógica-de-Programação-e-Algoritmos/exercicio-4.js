let n = 50
let numeros
for (let x = 2; x <= n; x += 1) {
    let primo = true
    for (let y = 2; y < x; y += 1) {
        if (x % y === 0) {
            primo = false
        }
    }
    if(primo){
       numeros = x
    }
}
console.log(numeros)
