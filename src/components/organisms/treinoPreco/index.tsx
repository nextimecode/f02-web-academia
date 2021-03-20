import React from 'react'
import Title from '../../atoms/title'
import CardPlanos from '../../molecules/cardPlanos'

type Props = {
    cardPlanoTitle: string
    cardPlanoPreco: number
    cardPlanoImage: string
    cardPlanoLinkPage: string
    cardPlanoButtonLabel: string
}

const TreinoPreco = ({
    cardPlanoTitle,
    cardPlanoPreco,
    cardPlanoImage,
    cardPlanoLinkPage,
    cardPlanoButtonLabel
}: Props) => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <CardPlanos
                            title={cardPlanoTitle}
                            price={cardPlanoPreco}
                            image={cardPlanoImage}
                            linkPage={cardPlanoLinkPage}
                            buttonLabel={cardPlanoButtonLabel}
                        >
                            <ul className="fw-lighter card-text">
                                <li className="p-2">
                                    Assinatura mensal com renovação automática
                                </li>
                                <li className="p-2">Cancele quando quiser</li>
                                <li className="p-2">Garantia de 7 Dias</li>
                                <li className="p-2">
                                    Este plano não é individualizado como na
                                    Consultoria
                                </li>
                            </ul>
                        </CardPlanos>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="justify-content-center align-middle m-auto">
                            <Title label="Junte-se a nós" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TreinoPreco
