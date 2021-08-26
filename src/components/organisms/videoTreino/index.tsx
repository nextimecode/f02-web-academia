import React from 'react'
import CardPlanos from '../../molecules/cardPlanos'
import Film from '../../atoms/film'
import Title from '../../atoms/title'
import FilmBox from '../../molecules/filmBox'

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
    gender?: string
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
    cardPlanoButtonLabel,
    gender = 'female'
}: Props) => {

    const benefits = [
        'Assinatura mensal com renovação automática',
        'Cancele quando quiser',
        'Garantia de 7 Dias',
        'Este plano não é individualizado como na Consultoria'
    ]

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
                        <FilmBox
                            src={srcVideo}
                            proportion='9x16'
                            classes="mh-80 my-1"
                        />
                    </div>
                    <CardPlanos
                        title={cardPlanoTitle}
                        price={cardPlanoPreco}
                        image={cardPlanoImage}
                        linkPage={cardPlanoLinkPage}
                        buttonLabel={cardPlanoButtonLabel}
                        gender={gender}
                    >
                        <div className="card-consultoria-list">
                            <ul className="card-text">
                                {benefits.map(b => (
                                    <li className="p-1 fs-5 fw-bold">
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardPlanos>
                </div>
            </div>
        </section>
    )
}

export default VideoTreino
