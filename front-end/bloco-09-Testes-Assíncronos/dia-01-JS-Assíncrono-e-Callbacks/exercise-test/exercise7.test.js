const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

// uppercase('matheus', console.log)

describe('teste para ver se está funcionando a função', () => {
    it('passando matheus para MATHEUS', () => {
        expect(uppercase('matheus', console.log)).toEqual('MATHEUS')
    })
})
