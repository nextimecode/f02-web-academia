import React from 'react'
import { PhotoProps } from '../../../types/types'
import Separator from '../../atoms/separator'
import DepoimentosTexto from '../../organisms/depoimentosTexto'
import Faq from '../../organisms/faq'
import Resultados from '../../organisms/resultados'
import TreinoConteudo from '../../organisms/treinoConteudo'
import TreinoPreco from '../../organisms/treinoPreco'
import TreinosFuncionam from '../../organisms/treinosFuncionam'
import VideoTreino from '../../organisms/videoTreino'
import { depoimentos } from '../../../pages/index'
type Props = {
    sex: string
    srcVideo: string
    buttonLabel: string
    buttonHref: string
    sectionConteudoSubtitle: string
    sectionConteudoTitle: string
    treinosFuncionamTitle?: string
    treinosFuncionamText?: string
    treinosFuncionamVideo1: string
    treinosFuncionamVideo2: string
    carouselPhotos: Record<string, PhotoProps>[]
    cardPlanoTitle: string
    cardPlanoPreco: Record<string, any>
    cardPlanoImage: string
    cardPlanoLinkPage: string
    cardPlanoButtonLabel: string
}

const TreinoTemplate = ({
    sex = 'woman',
    srcVideo,
    buttonLabel,
    buttonHref,
    sectionConteudoSubtitle,
    sectionConteudoTitle,
    treinosFuncionamTitle,
    treinosFuncionamText,
    treinosFuncionamVideo1,
    treinosFuncionamVideo2,
    carouselPhotos,
    cardPlanoTitle,
    cardPlanoPreco,
    cardPlanoImage,
    cardPlanoLinkPage,
    cardPlanoButtonLabel
}: Props) => {
    const patternCardImage = `assets/img/training-${sex}.png`

    const cardAcessos = [
        {
            card: {
                image: patternCardImage,
                label: 'Em qualquer lugar',
                text:
                    'Treinos completos para fazer em casa e na academia, feminino e masculino'
            }
        },
        {
            card: {
                image: patternCardImage,
                label: 'Planilhas completas',
                text:
                    'Planilhas de treinos completas divididas por nível – inciante / intermediário / avançado'
            }
        },
        {
            card: {
                image: patternCardImage,
                label: 'Lives',
                text: 'Lives salvas dos meus treinos em casa'
            }
        },
        {
            card: {
                image: patternCardImage,
                label: 'Bônus de abdômen',
                text: 'Treinos bônus abdômen e cárdio'
            }
        },
        {
            card: {
                image: patternCardImage,
                label: 'Bônus de pernas',
                text: 'Treinos bônus glúteos e posteriores'
            }
        },
        {
            card: {
                image: patternCardImage,
                label: 'Bônus de dieta',
                text:
                    'Dicas de como desenvolver seu planejamento alimentar e seleção dos suprimentos com nutrólogas e nutricionistas'
            }
        },
        {
            card: {
                image: patternCardImage,
                label: 'Bônus de suplementação',
                text: 'Dicas de suplementação para emagrecimento e hipertrofia'
            }
        }
    ]

    return (
        <>
            <VideoTreino
                labelTituloLinha1="A mais completa plataforma de"
                labelTituloLinha2="treinos online"
                videoTreinoText="Treinos exclusivos que ajudam mulheres e homens de todas as idades tanto no brasil como no exterior: Estados Unidos, Irlanda, Portugal, etc.  Visando cuidar da saúde e da mente e manter a autoestima sempre elevada."
                srcVideo={srcVideo}
                buttonLabel={buttonLabel}
                buttonHref={buttonHref}
            />
            <Separator />
            <TreinoConteudo
                cardsAcessos={cardAcessos}
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
            <Faq />
            <Separator />
            <DepoimentosTexto depoimentos={depoimentos} />
        </>
    )
}

export default TreinoTemplate
