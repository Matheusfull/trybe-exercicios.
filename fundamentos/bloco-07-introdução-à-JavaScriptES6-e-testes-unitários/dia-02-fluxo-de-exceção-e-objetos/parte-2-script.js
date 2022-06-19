const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    // Exercício 1 
    return ` Olá, Ana Silveira.Entrega para: ${order.name}, Telefone : ${order.phoneNumber}, R.${order.address.street}, N${order.address.number}, AP:${order.address.apartment}`

}

// console.log(customerInfo(order))

order.name = 'Matheus Felipe'
order.payment.total = 'R$ 50,00'
// console.log(order)

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    // Exercício 2
    return `Olá, ${order.name}. O total do seu pedido de marguerita, pepperoni e ${order.order.drinks.coke.type} é ${order.payment.total}.`

}

 console.log(orderModifier(order)) 