import React from 'react'
import {
    CardAcessosProps,
    DepoimentoProps,
    PerguntasRespostas,
    PhotoProps
} from '../../../types/types'
import Separator from '../../atoms/separator'
import ConteudoTreino from '../../organisms/conteudoTreino'
import DepoimentosTexto from '../../organisms/depoimentosTexto'
import Faq from '../../organisms/faq'
import Resultados from '../../organisms/resultados'
import TreinoPreco from '../../organisms/treinoPreco'
import TreinosFuncionam from '../../organisms/treinosFuncionam'
import VideoTreino from '../../organisms/videoTreino'

type Props = {
    labelTituloLinha1: string
    labelTituloLinha2: string
    srcVideo: string
    buttonLabel: string
    buttonHref: string
    cardsAcessos: Record<string, CardAcessosProps>[]
    sectionConteudoSubtitle: string
    sectionConteudoTitle: string
    treinosFuncionamTitle: string
    treinosFuncionamText: string
    treinosFuncionamVideo1: string
    treinosFuncionamVideo2: string
    carouselPhotos: Record<string, PhotoProps>[]
    depoimentos: Record<string, DepoimentoProps>[]
    perguntasRespostasFaq: PerguntasRespostas[]
    cardPlanoTitle: string
    cardPlanoPreco: number
    cardPlanoImage: string
    cardPlanoLinkPage: string
    cardPlanoButtonLabel: string
}

const TreinoTemplate = ({
    labelTituloLinha1,
    labelTituloLinha2,
    srcVideo,
    buttonLabel,
    buttonHref,
    cardsAcessos,
    sectionConteudoSubtitle,
    sectionConteudoTitle,
    treinosFuncionamTitle,
    treinosFuncionamText,
    treinosFuncionamVideo1,
    treinosFuncionamVideo2,
    carouselPhotos,
    depoimentos,
    perguntasRespostasFaq,
    cardPlanoTitle,
    cardPlanoPreco,
    cardPlanoImage,
    cardPlanoLinkPage,
    cardPlanoButtonLabel
}: Props) => {
    return (
        <>
            <VideoTreino
                labelTituloLinha1={labelTituloLinha1}
                labelTituloLinha2={labelTituloLinha2}
                srcVideo={srcVideo}
                buttonLabel={buttonLabel}
                buttonHref={buttonHref}
            />
            <Separator />
            <ConteudoTreino
                cardsAcessos={cardsAcessos}
                sectionConteudoSubtitle={sectionConteudoSubtitle}
                sectionConteudoTitle={sectionConteudoTitle}
            />
            <TreinosFuncionam
                treinosFuncionamTitle={treinosFuncionamTitle}
                treinosFuncionamText={treinosFuncionamText}
                treinosFuncionamVideo1={treinosFuncionamVideo1}
                treinosFuncionamVideo2={treinosFuncionamVideo2}
            />
            <Separator />
            <Resultados carouselPhotos={carouselPhotos} />
            <Separator />
            <TreinoPreco
                cardPlanoTitle={cardPlanoTitle}
                cardPlanoPreco={cardPlanoPreco}
                cardPlanoImage={cardPlanoImage}
                cardPlanoLinkPage={cardPlanoLinkPage}
                cardPlanoButtonLabel={cardPlanoButtonLabel}
            />
            <Separator />
            <Faq perguntasRespostas={perguntasRespostasFaq} />
            <Separator />
            <DepoimentosTexto depoimentos={depoimentos} />
        </>
    )
}

export default TreinoTemplate
