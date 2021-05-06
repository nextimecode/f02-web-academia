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
            <div className="container p-2">
                <div className="row mt-3">
                    <div className="col-md-12 col-lg-5">
                        <Avatar
                            foto="assets/img/avatars/avatar.jpg"
                            nome="Vinícius Dias"
                            profissao="Personal Trainer"
                            width="160px"
                            height="160px"
                        />
                        <p className="apresentacao">
                            Olá, meu nome é Vinícius Dias! Hoje, venho dividir
                            meu método de treinamento para você destravar seus
                            resultados, conseguir emagrecer, definir seu corpo e
                            conquistar sua melhor versão em qualquer lugar que
                            esteja.
                        </p>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <DepoimentoSlider depoimentos={depoimentos} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DepoimentosTexto
