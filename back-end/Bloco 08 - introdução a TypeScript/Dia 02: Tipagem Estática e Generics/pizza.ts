type pedacos =  4 | 6 | 8 // Eis um type alias para dizer quais números podemos usar.

/*
Exercício 3
1 - Vamos criar uma interface simples, em que esta será um molde para a construções das pizzas.
*/

interface pizza  {
    flavor: string;
    slices: pedacos;
}
// Exercício 3.a - Sabe aquele molde que criamos para a pizza, então, agora só usar. Passaremos o sabor e depois a quantidade de fatias.
// Pizza sabor Calabresa de 8 fatias;
let calabresa: pizza = {
    flavor: 'calabresa',
    slices: 8,
}
// Exercício 3.b - Sabe aquele molde que criamos para a pizza, então, agora só usar. Passaremos o sabor e depois a quantidade de fatias.
// Pizza sabor Marguerita de 6 fatias;
let marguerita: pizza = {
    flavor: 'Marguerita',
    slices: 6,
}

// Exercício 3.c - Sabe aquele molde que criamos para a pizza, então, agora só usar. Passaremos o sabor e depois a quantidade de fatias.
// Pizza sabor Nutela de 4 fatias;
let nutela: pizza = {
    flavor: 'Nutela',
    slices: 4,
}

// EXERCÍCIO 4 - Vamos agora estender nossa interface Pizza com novos tipos de pizza

// Eis um type alias para dizer quais sabores podemos usar.
type comum = 'Calabresa' | 'Frango' | 'Pepperoni';
type vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type doce = 'Nutela' | 'Goiabada com Queijo' |'Marshmallow';

// EXERCÍCIO 4 - Vamos pegar o molde já criado, porém agora vamos colocar os sabore fixos. Mas não vamos criar a interface tudo de novo... retrabalho. Vamos pegar a que já criamos e somente adicionar os sabores já definidos. Com isso, criaremos um novo molde em que já vem com as quantidades de fatias e apenas uma atualização nas opções de sabores.
interface NewPizzas extends pizza {
    flavor : comum | vegetariana | doce
}
// EXERCÍCIO 4 - Vamos fazer o mesmo raciocínio da interface acima, porém, aqui a quantidade de fatias é fixa. Portanto, vamos pegar o molde de pizza já criado, até porque para não ter retrabalho, pois ele já tem os sabores e as fatias, e vamos apenas atualizar o quantidade de fatias, deixando como 4 para todas as pizzas doces.
interface NewPizzasSugar extends pizza {
    flavor : doce;
    slices: 4
}

// Agora crie:

// 3 pizzas do tipo comum, sendo que a calabresa já foi criado acima

// Depois é só criar cada pizza com os moldes já estabelecidos, tais como o NewPizzas e NewPizzasSugar.

let frango: NewPizzas = {
    flavor: 'Frango',
    slices: 8,
}

let Pepperoni: NewPizzas = {
    flavor: 'Pepperoni',
    slices: 8,
}

let FamilyPepperoni: NewPizzas = {
    flavor: 'Pepperoni',
    slices: 6,
}

// 2 pizzas do tipo vegetariana;

let Palmito: NewPizzas = {
    flavor: 'Palmito',
    slices: 8,
}

let Cogumelo: NewPizzas = {
    flavor: 'Cogumelo',
    slices: 8,
}

// 1 pizza do tipo doce

let Marshmallow: NewPizzasSugar = {
    flavor: 'Marshmallow',
    slices: 4,
}