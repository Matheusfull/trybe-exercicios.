import React from "react";

class FormularioProfissional extends React.Component {
    render() {
        const { passandoFuncao1 } = this.props
        return (
            <fieldset>
                resumo do currículo:
                <textarea
                    name="curriculo"
                    maxLength="1000"
                    required
                    onChange={passandoFuncao1}
                />
                <label>
                    Cargo:
                    <input

                        type="text"
                        name="cargo"
                        required
                        maxLength="40"
                        onChange={passandoFuncao1}
                        onClick={() => {
                            alert('preencha com cuidado essa informação!')
                        }}
                    />
                </label>
                <label>
                    Descrição do cargo:
                    <textarea
                        name="descricao"
                        maxLength="500"
                        required
                        onChange={passandoFuncao1}
                    />
                </label>
            </fieldset>
        )
    }
}

export default FormularioProfissional;