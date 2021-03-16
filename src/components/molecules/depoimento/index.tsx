import React from 'react'
import Avatar from '../avatar'
import TextoDepoimento from '../../atoms/textoDepoimento'

type Props = {
    depoimento: Record<string, any>
}

const Depoimento = ({ depoimento }: Props) => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <TextoDepoimento textoDepoimento={depoimento.texto} />
                <Avatar
                    foto={depoimento.foto}
                    nome={depoimento.nome}
                    profissao={depoimento.profissao}
                />
            </div>
        </div>
    )
}

export default Depoimento
