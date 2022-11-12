import Car from './exercise1Car'

const gol = new Car('volkswagen', 'prata', 4)

// liga o carro
gol.turnOn();
// Siga em frente;
gol.speedUp();
// Em 600 metros vire a esquerda;
gol.speedDown();
// Vire a esquerda;
gol.turn('esquerda');
// Em 200 metros na rotatória pegue a segunda saída a direita;
gol.speedUp();
gol.speedDown();
gol.turn('direita');
// Mantenha em frente pelos próximos 1,2 quilômetros;
gol.speedUp();
// Em 300 metros vire a direita;
gol.speedDown();
// Vire a direita;
gol.turn('direita');
// Em 400 metros você chegará ao seu destino;
gol.speedUp();
// Você chegou ao seu destino.
gol.speedDown();
gol.stop();


// Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.

// Siga em frente;
gol.speedUp();
// Em 300 metros vire a direita;
gol.speedDown();
// Vire a direita;
gol.turn('direita');
// Mantenha em frente pelos próximos 2 quilômetros;
gol.speedUp();
// Em 200 metros vire a esquerda;
gol.speedDown();
// Vire a esquerda;
gol.turn('esquerda');
// Em 400 metros vire a direita;
gol.speedUp();
// Vire a direita;
gol.speedDown();
gol.turn('direita')
// Em 100 metros você chegará ao destino.
gol.speedUp();
// Você chegou ao destino.
gol.speedDown();
gol.stop();


/*
Exercício 2
1 - Vamos usar o molde da classe Car para criar um carro com as características que quisermos.
2 - Depois, só usar cada método criado anteriormente para escrever o script.
*/