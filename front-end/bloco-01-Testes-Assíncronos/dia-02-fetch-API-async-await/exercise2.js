const url = `https://api.coincap.io/v2/assets`
const lista = document.getElementById('moedas')

// exercise 2.4

const theFirst = (data) => {
    const primeiras = data.filter((element) => {
        if (element.rank <= 10) {
            const li = document.createElement('li')
            li.innerHTML = `${element.name} (${element.symbol}): ${element.vwap24Hr}`
            lista.appendChild(li)
        }
    })
    return primeiras
}

const getCash = () => {
    const promise = fetch(url)
        .then((response) => response.json())
        .then((info) => {
            // exercise 2.1 

            const moeda = info.data
            // console.log(moeda)
            theFirst(moeda);

            // exercise 2.3

            /* moeda.forEach(element => {
                const li = document.createElement('li')
                li.innerHTML = `${element.name} (${element.symbol}): ${element.vwap24Hr}`
                lista.appendChild(li)
            }); */
        })
}

getCash()
theFirst()