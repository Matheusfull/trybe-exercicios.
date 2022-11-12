// usamos a palavra reservada class para definir uma classe
class Car {
    brand: string;
    color: string;
    doors: number;
    // aprenderemos mais sobre o construtor na próxima seção
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(brand: string, color: string, doors: number) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuímos o valor do parâmetro recebido a propriedade da instância da classe
        this.brand = brand;
        this.color = color;
        this.doors = doors;

    }
    honk(): void {
        console.log('Biiiiih, biiiih!')
    }
    turnOn(): void {
        console.log('fufufufufufufufuf!')
    }
    turnOff(): void {
        console.log('Tiummm!')
    }
    speedUp(): void {
        console.log('Vruuuum!')
    }
    speedDown(): void {
        console.log('Hoooom!')
    }
    stop(): void {
        console.log('iiiiiiiiiiiiiih!')
    }
    turn(direction: string): void {
        console.log(`Vire à ${direction}`)
    }
}

export default Car;

/*
Exercício 1
1 - Para formar um classe precisamos primeiro ter os atributos do constructor. Neles, vamos tipar
2 - Já a função constructor vamos receber os parâmetros também tipados e nisso vamos juntar os atributos com os parâmetros.
3 - Agora que está tudo tipado e junto ( atributos e parâmetros ), vamos construir os métodos.
4 - Só exportar para que essa classe sirva de molde para alguma constante.
*/