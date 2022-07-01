import React from "react";

class FormDataDisplay extends React.Component {
    render() {
        const { nome, email, cpf, endereco, cidade, estado, tipo, curriculo, cargo, descricao } = this.props.passandoEstado
        return (
            <div>
                <p>{`Nome : ${nome}`}</p>
                <p>{`email : ${email}`}</p>
                <p>{`cpf : ${cpf}`}</p>
                <p>{`endereço : ${endereco}`}</p>
                <p>{`cidade : ${cidade}`}</p>
                <p>{`estado : ${estado}`}</p>
                <p>{`tipo : ${tipo}`}</p>
                <p>{`curriculo : ${curriculo}`}</p>
                <p>{`cargo : ${cargo}`}</p>
                <p>{`descricao : ${descricao}`}</p>
            </div>
        )
    }
}

export default FormDataDisplay;