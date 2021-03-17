import React from 'react'
import Avatar from '../../molecules/avatar'
import DepoimentoSlider from '../../organisms/depoimentoSlider'

type Props = {
    depoimentos: Record<string, any>
}

const DepoimentosTexto = ({ depoimentos }: Props) => {
    return (
        <section>
            <div className="row">
                <div className="col-sm-12 col-md-3 m-auto">
                    <Avatar
                        foto="assets/img/avatars/personal.jpg"
                        nome="João da Silva"
                        profissao="Personal"
                        width="160px"
                        height="160px"
                    />
                </div>
                <div className="col-sm-12 col-md-4 m-auto">
                    <p className="apresentacao px-2">
                        Olá, Meu nome é João da Silva. Possuo 8 anos atuando
                        como Personal Trainer e há 5 anos com o atendimento
                        online. Preparei o melhor do meu método de treinamento
                        (o mesmo que utilizo diariamente com as minhas alunas
                        presenciais) para ajudar você a alcançar sua melhor
                        forma em qualquer lugar mundo.
                    </p>
                </div>
                <div className="col-sm-12 col-md-5 m-auto">
                    <DepoimentoSlider depoimentos={depoimentos} />
                </div>
            </div>
        </section>
    )
}

export default DepoimentosTexto
