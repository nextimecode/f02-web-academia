import React from 'react'
import { PhotoProps } from '../../../types/types'
import Separator from '../../atoms/separator'
import DepoimentosTexto from '../../atoms/organisms/depoimentosTexto'
import Faq from '../../atoms/organisms/faq'
import Resultados from '../../atoms/organisms/resultados'
import TreinoConteudo from '../../atoms/organisms/treinoConteudo'
import TreinoPreco from '../../atoms/organisms/treinoPreco'
import TreinosFuncionam from '../../atoms/organisms/treinosFuncionam'
import VideoTreino from '../../atoms/organisms/videoTreino'
import { depoimentos } from '../../../pages/index'
type Props = {
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
    const patternCardImage = 'assets/img/cards/'
    const extensao = '.jpg'

    const cardAcessos = [
        {
            card: {
                image: `${patternCardImage}card_01${extensao}`,
                label: 'Treinos Femininos',
                text: 'Treinos completos para fazer em casa e na academia'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_02${extensao}`,
                label: 'Consultoria Personalizada',
                text: 'Programas por WhatsApp e acesso a Instagram exclusivo'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_03${extensao}`,
                label: 'Treinos Masculinos',
                text: 'Treinos completos para fazer em casa e na academia'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_04${extensao}`,
                label: 'Planilhas completas',
                text:
                    'Planilhas de treinos completas divididas por nível – inciante / intermediário / avançado'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_05${extensao}`,
                label: 'Lives',
                text: 'Lives salvas dos meus treinos em casa'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_06${extensao}`,
                label: 'Bônus de abdômen',
                text: 'Treinos bônus abdômen e cárdio'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_07${extensao}`,
                label: 'Bônus de pernas',
                text: 'Treinos bônus glúteos e posteriores'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_08${extensao}`,
                label: 'Bônus de dieta',
                text:
                    'Dicas de como desenvolver seu planejamento alimentar e seleção dos suprimentos com nutrólogas e nutricionistas'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_09${extensao}`,
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
