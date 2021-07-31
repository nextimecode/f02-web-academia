import React from 'react'
import CardPlanos from '../../molecules/cardPlanos'
import Film from '../../atoms/film'
import Title from '../../atoms/title'

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
            <div className="container py-2">
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
                        <div className="ratio ratio-9x16 mh-80 my-1">
                            <Film src={srcVideo} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 order-md-0 order-last border border-primary p-0 my-1 text-center">
                        <CardPlanos
                            title={cardPlanoTitle}
                            price={cardPlanoPreco}
                            image={cardPlanoImage}
                            linkPage={cardPlanoLinkPage}
                            buttonLabel={cardPlanoButtonLabel}
                            buttonClass="btn-buy btn-buy-course"
                        >
                            <div className="card-consultoria-list">
                                <ul className="fw-lighter card-text">
                                    <li className="p-1">
                                        Assinatura mensal com renovação
                                        automática
                                    </li>
                                    <li className="p-1">
                                        Cancele quando quiser
                                    </li>
                                    <li className="p-1">Garantia de 7 Dias</li>
                                    <li className="p-1">
                                        Este plano não é individualizado como na
                                        Consultoria
                                    </li>
                                </ul>
                            </div>
                        </CardPlanos>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoTreino
