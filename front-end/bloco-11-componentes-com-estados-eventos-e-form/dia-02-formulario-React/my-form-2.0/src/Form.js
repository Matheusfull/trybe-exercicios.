import React from "react";
import Formulario from "./Formulario";
import FormularioProfissional from "./FormularioProfissional";

const initialState = {
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
    submite: false,
}

class Form extends React.Component {
    constructor() {
        super()
        this.state = initialState
    }

    validateAddress = (address) => address.replace(/[^\w\s]/gi, '')

    changeHandle = ({ target }) => {
        const { name } = target
        let { value } = target
        if (name === 'endereco') value = this.validateAddress(value)
        if (name === 'nome') value = value.toUpperCase()
        this.setState({
            [name]: value
        })
    }

    onBlurHandle = (event) => {
        const { name } = event.target
        let { value } = event.target
        if (name === 'cidade') value = value.match(/^\d/) ? '' : value
        this.setState({
            [name]: value,
        })
    }
    sendForm = (event) => {
        event.preventDefault()
        this.setState({ submite: true })
    }

    render() {
        const { submite } = this.state
        return (
            <>
                <form onSubmit={this.sendForm} >
                    <h1>Cadastro</h1>
                    {/* 
                2 - Chama os componentes para passar o estado e o  acesso às funções via props, para os filhos terem acesso.
                */}
                    <Formulario
                        passandoFuncao1={this.changeHandle}
                        passandoFuncao2={this.onBlurHandle}
                        /* 
                        4 - Precisamos passar o estado também
                        */
                        state={this.state}
                    />
                    <FormularioProfissional
                        passandoFuncao1={this.changeHandle}
                        passandoFuncao2={this.onBlurHandle}
                    />
                    <input type="submit" value="Enviar tudão" />
                </form >
                {
                    submite && (<h1>Os dados foram atualizados</h1>)
                }
            </>
        )
    }
}

export default Form;