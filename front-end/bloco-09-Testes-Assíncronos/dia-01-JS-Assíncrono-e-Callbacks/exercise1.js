// -----------------------------------------exercise 1-------------------------------------


/* const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
 */
// A,B,C


// -----------------------------------------exercise 2-------------------------------------

/* const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
    `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
    name: "Mars",
    distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
    },
};

const venus = {
    name: "Venus",
    distanceFromSun: {
        value: 108200000,
        measurementUnit: "kilometers",
    },
};

const jupiter = {
    name: "Jupiter",
    distanceFromSun: {
        value: 778500000,
        measurementUnit: "kilometers",
    },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C */

// A,C,B

// -----------------------------------------exercise 3-------------------------------------

/* const getPlanet = () => {
    setTimeout(() => { 
        const mars = {
            name: "Mars",
            distanceFromSun: {
              value: 227900000,
              measurementUnit: "kilometers",
            },
          };
          console.log("Returned planet: ", mars);
    }, 4000)
};

getPlanet(); // imprime Marte depois de 4 segundos */

// -----------------------------------------exercise 4-------------------------------------

/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};
const sendMarsTemperature = () => {
    const temperaturaAtual = getMarsTemperature();
    setTimeout(() => {
        console.log(`Mars temperature is: ${temperaturaAtual} degree Celsius`)
    }, messageDelay())
}

// crie a função sendMarsTemperature abaixo

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo */


// -----------------------------------------exercise 5-------------------------------------

/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (cb) => {
    const temperaturaAtual = getMarsTemperature();
    setTimeout(() => {
        return cb(temperaturaAtual)
    }, messageDelay())
}

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
 */

// -----------------------------------------exercise 6-------------------------------------

/* const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (cb, err) => {
  const temperaturaAtual = getMarsTemperature();
  const probabilidadeDoRoboResponder = Math.random() >= 0.6;
  // Parte mais complicada foi saber dessa condição de probabilidade, pois fiquie meio que calculando os 60% de responder com os 5s de tempo de resposta, sem muita lógica.
  setTimeout(() => {
    if (probabilidadeDoRoboResponder) {
      cb(temperaturaAtual)
    } else {
      err('Robot is busy')
    }
  }, messageDelay())
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError); */

// -----------------------------------------exercise 7-------------------------------------

