const { getMagicCard } = require('./magic')

describe('Testa a função getMagicCard', () => {
    // 1 - colocando async antes do parâmetro do it e o await antes da função que retorna o objeto.
    it('2 - Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
        const response = await getMagicCard('130550');
        // implemente seus testes aqui
        const { name } = response;
        expect(name).toBe('Ancestor\'s Chosen')
    });
    it('3 - verifique se getMagicCard é uma função', () => {
      expect(typeof response).toBe('function')
    })
});
