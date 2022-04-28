function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// EXERCÍCIO - 1

function exercicio1() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const mothDateList = document.getElementById("days")

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let date = dezDaysList[i]
        if (date === 24 || date === 31) {
            let dateListItem = document.createElement("li")
            dateListItem.className = 'day holiday'
            dateListItem.innerHTML = date

            mothDateList.appendChild(dateListItem)
        } else if (date === 4 || date === 11 || date === 18) {
            let dateListItem = document.createElement("li")
            dateListItem.className = 'day friday'
            dateListItem.innerHTML = date

            mothDateList.appendChild(dateListItem)
        } else if (date === 25) {
            let dateListItem = document.createElement("li")
            dateListItem.className = 'day friday holiday'
            dateListItem.innerHTML = date

            mothDateList.appendChild(dateListItem)
        } else {
            let dateListItem = document.createElement("li")
            dateListItem.className = 'day'
            dateListItem.innerHTML = date

            mothDateList.appendChild(dateListItem)
        }
    }
}
exercicio1()

// EXERCÍCIO 2

function exercicio2(Feriados) {
    let localButton = document.querySelector(".buttons-container")
    let button = document.createElement("button")
    button.id = 'btn-holiday'
    button.innerHTML = Feriados

    localButton.appendChild(button)

}
exercicio2('Feriado')


// EXERCÍCIO 3

let buttonCread = document.getElementById('btn-holiday')
buttonCread.addEventListener('click', changeColor)



function changeColor() {
    let daysHoliday = document.querySelectorAll(".holiday")
    for (let dayFeriado of daysHoliday) {
        dayFeriado.style.color = 'red'
    }
    buttonCread.addEventListener('click', previousColor)
}

function previousColor() {
    let daysHoliday = document.querySelectorAll(".holiday")
    for (let dayFeriado of daysHoliday) {
        dayFeriado.style.color = '#777'
    }
}


// EXERCÍCIO 4

function exercicio4(Sexta) {
    let localButton2 = document.querySelector(".buttons-container")
    let button2 = document.createElement("button")
    button2.id = 'btn-friday'
    button2.innerHTML = Sexta

    localButton2.appendChild(button2)
}
exercicio4("Sextoou")

// EXERCÍCIO 5

let buttonFriday = document.getElementById('btn-friday')
buttonFriday.addEventListener('click', changeColorFriday)

function changeColorFriday() {
    let fridayList = document.querySelectorAll(".friday")
    for (let allFriday of fridayList) {
        allFriday.style.color = 'red'
    }
    buttonFriday.addEventListener('click', previousFridayColor)
}

function previousFridayColor() {
    let daysFriday = document.querySelectorAll(".friday")
    for (let unicDayFriday of daysFriday) {
        unicDayFriday.style.color = '#777'
    }
}

// EXERCÍCIO 6


let date
for (let i = 0; i < 33; i += 1) {
    const date = document.getElementsByClassName('day')[i]
    //console.log(date)
    date.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px'
    })
    date.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px'
    })
}

// EXERCÍCIO 7

function justDoIt(tarefa) {
    const pai = document.querySelector('.my-tasks')
    const button = document.createElement('span')
    button.innerText = tarefa
    button.className = 'button'
    button.id = 'rgb(59, 212, 59)'
    pai.appendChild(button)
}

justDoIt("projeto")

function mudandoCor(event) {
    const corSelecionada = document.getElementsByClassName('button')[0].id;
    const dateSelecionado = event.target
    dateSelecionado.style.color=corSelecionada
    dateSelecionado.addEventListener('click', function(){
        dateSelecionado.style.color='#666'
    })
}

for (let i = 0; i < 33; i += 1) {
    const date = document.getElementsByClassName('day')[i]
    date.addEventListener('click', mudandoCor)
}

// EXERCÍCIO 8


