// exercício 1
function exercicio1() {
    document.getElementsByTagName("p")[0].innerText = 'Imagino-me sabendo muita programação e vivendo coisas incríveis'
    document.getElementsByTagName("p")[1].innerText = 'Que também empreender na área da educação usando tecnologia'
}
exercicio1()

// exercício 2 

function exercicio2() {
    document.getElementsByTagName("main")[0].style.backgroundColor = 'rgb(76,164,109)'
}
exercicio2()

// exercício 3

function exercicio3() {
    document.getElementsByTagName("section")[0].style.backgroundColor = 'white'
}
exercicio3()

// exercício 4

function exercicio4() {
    document.getElementsByClassName("title")[0].innerText = 'Título renovado'
}
exercicio4()

// exercício 5

function exercicio5() {
    document.getElementsByTagName("p")[0].style.textTransform = 'uppercase'

}
exercicio5()

// exercício 6

function exercicio6() {
    let tag1 = document.getElementsByTagName("p")[0].innerText
    console.log(tag1)
    let tag2 = document.getElementsByTagName("p")[1].innerText
    console.log(tag2)
    let tag3 = document.getElementsByTagName("p")[2].innerText
    console.log(tag3)
}
exercicio6()