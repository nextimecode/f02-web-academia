import { Container } from 'next/app'
import React from 'react'
import DepoimentoSlider from '../../organisms/depoimentoSlider'

type Props = {
    depoimentos: Record<string, any>
}

const DepoimentosTexto = ({ depoimentos }: Props) => {
    return (
        <section>
            <div className="row mx-3 my-5">
                <div className="row col-md-6 col-sm-12 px-2 m-auto">
                    <img
                        className="w-75 m-auto"
                        src="assets/img/avatars/personal.jpg"
                    />
                    <p className="apresentacao">
                        Olá, Meu nome é João da Silva. Possuo 8 anos atuando
                        como Personal Trainer e há 5 anos com o atendimento
                        online. Preparei o melhor do meu método de
                        treinamento (o mesmo que utilizo diariamente com as
                        minhas alunas presenciais) para ajudar você a
                        alcançar sua melhor forma em qualquer lugar mundo.
                    </p>
                </div>
                <div className="col-md-6 col-sm-12 m-auto">
                    <DepoimentoSlider depoimentos={depoimentos} />
                </div>
            </div>
        </section>
    )
}

export default DepoimentosTexto
