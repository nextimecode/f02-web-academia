import React from 'react'
import CardPlanos from '../../../molecules/cardPlanos'
import Film from '../../film'
import Title from '../../title'

type Props = {
    srcVideo: string
    labelTituloLinha1: string
    labelTituloLinha2: string
    videoTreinoText: string
    cardPlanoTitle: string
    cardPlanoPreco: Record<string, any>
    cardPlanoImage: string
    cardPlanoLinkPage: string
    cardPlanoButtonLabel: string
}

const VideoTreino = ({
    srcVideo,
    labelTituloLinha1,
    labelTituloLinha2,
    videoTreinoText,
    cardPlanoTitle,
    cardPlanoPreco,
    cardPlanoImage,
    cardPlanoLinkPage,
    cardPlanoButtonLabel
}: Props) => {
    return (
        <section id="planos">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <div className="text-center">
                                <Title label={labelTituloLinha1} />
                                <Title
                                    label={labelTituloLinha2}
                                    className="text-primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mx-3">
                    <div className="col-12 d-flex">
                        <p>{videoTreinoText}</p>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col-md-12 col-lg-5 text-center">
                        <Film src={srcVideo} classes="mh-80" />
                    </div>
                    <div className="col-md-12 col-lg-7 order-md-0 order-last border border-primary p-0">
                        <CardPlanos
                            title={cardPlanoTitle}
                            price={cardPlanoPreco}
                            image={cardPlanoImage}
                            linkPage={cardPlanoLinkPage}
                            buttonLabel={cardPlanoButtonLabel}
                            buttonClass="btn-buy btn-buy-course"
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

export default VideoTreino
