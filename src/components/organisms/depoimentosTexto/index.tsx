import React from 'react'
import { DepoimentoProps } from '../../../types/types'
import Avatar from '../../molecules/avatar'
import DepoimentoSlider from '../depoimentoSlider'

type Props = {
    depoimentos: Record<string, DepoimentoProps>[]
}

const DepoimentosTexto = ({ depoimentos }: Props) => {
    return (
        <section>
            <div className="container">
                <div className="row p-3">
                    <div className="col-sm-12 col-md-3 col-lg-2 m-auto">
                        <Avatar
                            foto="assets/img/avatars/personal.jpg"
                            nome="Vinícius Dias"
                            profissao="Personal Trainer"
                            width="160px"
                            height="160px"
                        />
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-5 m-auto">
                        <p className="apresentacao px-2">
                            Olá, meu nome é Vinícius Dias! Hoje, venho dividir
                            meu método de treinamento para você destravar seus
                            resultados, conseguir emagrecer, definir seu corpo e
                            conquistar sua melhor versão em qualquer lugar que
                            esteja.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 m-auto">
                        <DepoimentoSlider depoimentos={depoimentos} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DepoimentosTexto
