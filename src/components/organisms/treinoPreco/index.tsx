import React from 'react'
import CardPlanos from '../../molecules/cardPlanos'
import FilmBox from '../../molecules/filmBox'

type Props = {
    cardPlanoTitle: string
    cardPlanoPreco: Record<string, any>
    cardPlanoImage: string
    cardPlanoLinkPage: string
    cardPlanoButtonLabel: string
    srcVideo: string
}

const TreinoPreco = ({
    cardPlanoTitle,
    cardPlanoPreco,
    cardPlanoImage,
    cardPlanoLinkPage,
    cardPlanoButtonLabel,
    srcVideo
}: Props) => {
    return (
        <section className="py-5" id="planos">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 m-auto text-center">
                        <FilmBox src={srcVideo} />
                    </div>
                    <div className="col-md-6 order-md-0 order-last">
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
                </div>
            </div>
        </section>
    )
}

export default TreinoPreco
