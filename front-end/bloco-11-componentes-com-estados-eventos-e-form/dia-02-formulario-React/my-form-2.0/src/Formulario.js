import React from "react";

/* const initialState = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: '',
    curriculo: '',
    cargo: '',
    descricao: '',
}
1 - Remove todo o estado inicial e coloca para o 'pai'
*/

class Formulario extends React.Component {
    /* constructor() {
        super()
        this.state = initialState
    }
    Não usaremos mais o constructor, porque não há mais o state aqui.
    */

    /* validateAddress = (address) => address.replace(/[^\w\s]/gi, '')
    Não vai subir ninguém, todo vão para o pai
    */

    /* changeHandle = ({ target }) => {
        const { name } = target
        let { value } = target
        if (name === 'endereco') value = this.validateAddress(value)
        if (name === 'nome') value = value.toUpperCase()
        this.setState({
            [name]: value
        })
    }
    2 - Passa as funções para o 'pai também'
    */

    /* onBlurHandle = (event) => {
        const { name } = event.target
        let { value } = event.target
        if (name === 'cidade') value = value.match(/^\d/) ? '' : value
        this.setState({
            [name]: value,
        })
    }
    Mais uma passada de função
    */

    render() {

        /* const { nome, email, cpf, endereco, cidade, estado, tipo, curriculo, descricao } = this.state */
        /* 
        3 - Importa as funções para serem usadas aqui neste componente
        */

        /* 
        4 - importa o state e usa nos form
        */

        const { state: { nome, endereco, cidade } } = this.props

        const { passandoFuncao1, passandoFuncao2 } = this.props

        return (
            <div>

                <fieldset>

                    <label>
                        Nome:
                        <input
                            value={nome}
                            type="name"
                            required
                            name="nome"
                            maxLength="40"
                            onChange={passandoFuncao1}

                        />
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            required
                            name="email"
                            maxLength="50"
                            onChange={passandoFuncao1}
                        />
                    </label>

                    <label>
                        CPF:
                        <input
                            type="text"
                            required
                            name="cpf"
                            maxLength="11"
                            onChange={passandoFuncao1}
                        />
                    </label>

                    <label>
                        Endereço:
                        <input
                            type="text"
                            name="endereco"
                            required
                            value={endereco}
                            maxLength="200"
                            onChange={passandoFuncao1}
                        />
                    </label>

                    <label>
                        Cidade:
                        <input
                            type="text"
                            name="cidade"
                            required
                            onChange={passandoFuncao1}
                            maxLength="28"
                            onBlur={passandoFuncao2}
                            value={cidade}
                        />
                    </label>

                    <label>
                        Estado:
                        <select
                            name="estado"
                            required
                            onChange={passandoFuncao1}
                        >
                            <option>AC</option>
                            <option>AL</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>PA</option>
                        </select>
                    </label>

                    <label>
                        Tipo:
                        <label>Casa</label>
                        <input
                            type="radio"
                            name="tipo"
                            value="house"
                            onChange={passandoFuncao1}
                        />
                        <label>Apartamento</label>
                        <input
                            type="radio"
                            name="tipo"
                            value="apartament"
                            onChange={passandoFuncao1}
                        />
                    </label>

                </fieldset>

            </div>
        )
    }
}

export default Formulario;