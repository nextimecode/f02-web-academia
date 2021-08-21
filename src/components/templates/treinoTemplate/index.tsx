import React from 'react'
import Separator from '../../atoms/separator'
import DepoimentosTexto from '../../organisms/depoimentosTexto'
import Faq from '../../organisms/faq'
import TreinoConteudo from '../../organisms/treinoConteudo'
import TreinosFuncionam from '../../organisms/treinosFuncionam'
import VideoTreino from '../../organisms/videoTreino'
import { depoimentos } from '../../../pages/index'
import Hero from '../../organisms/hero'

type Props = {
    srcVideo: string
    sectionConteudoSubtitle: string
    sectionConteudoTitle: string
    treinosFuncionamTitle?: string
    treinosFuncionamText?: string
    cardPlanoTitle: string
    cardPlanoPreco: Record<string, any>
    cardPlanoImage: string
    cardPlanoButtonLabel: string
    cardPlanoLinkPage: string
    gender: string
}

const TreinoTemplate = ({
    srcVideo,
    sectionConteudoSubtitle,
    sectionConteudoTitle,
    treinosFuncionamTitle,
    treinosFuncionamText,
    cardPlanoPreco,
    cardPlanoImage,
    cardPlanoButtonLabel,
    cardPlanoLinkPage,
    gender = 'female'
}: Props) => {
    const patternCardImage = 'assets/img/cards/'
    const fileExtension = '.jpg'

    const heroImage = `assets/img/cards/plano_${gender}${fileExtension}`
    const cardPlanoTitle = `Plano ${gender === 'male' ? 'Masculino' : 'Feminino'}`

    const cardAcessos = [
        {
            card: {
                image: `${patternCardImage}card_01${fileExtension}`,
                label: 'Treinos Femininos',
                text: 'Treinos completos para fazer em casa e na academia'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_02${fileExtension}`,
                label: 'Consultoria Personalizada',
                text: 'Programas por WhatsApp e acesso a Instagram exclusivo'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_03${fileExtension}`,
                label: 'Treinos Masculinos',
                text: 'Treinos completos para fazer em casa e na academia'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_04${fileExtension}`,
                label: 'Planilhas completas',
                text:
                    'Planilhas de treinos completas divididas por nível – inciante / intermediário / avançado'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_05${fileExtension}`,
                label: 'Lives',
                text: 'Lives salvas dos meus treinos em casa'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_06${fileExtension}`,
                label: 'Bônus de abdômen',
                text: 'Treinos bônus abdômen e cárdio'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_07${fileExtension}`,
                label: 'Bônus de pernas',
                text: 'Treinos bônus glúteos e posteriores'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_08${fileExtension}`,
                label: 'Bônus de dieta',
                text:
                    'Dicas de como desenvolver seu planejamento alimentar e seleção dos suprimentos com nutrólogas e nutricionistas'
            }
        },
        {
            card: {
                image: `${patternCardImage}card_09${fileExtension}`,
                label: 'Bônus de suplementação',
                text: 'Dicas de suplementação para emagrecimento e hipertrofia'
            }
        }
    ]

    return (
        <>
            <Hero
                heroImage={heroImage}
                label1="A mais completa plataforma de"
                label2="Treinos Online"
            />
            <Separator />
            <VideoTreino
                labelTituloLinha1="Treinos"
                labelTituloLinha2="Exclusivos"
                videoTreinoText="que ajudam mulheres e homens de todas as idades tanto no brasil como no exterior: Estados Unidos, Irlanda, Portugal, etc.  Visando cuidar da saúde e da mente e manter a autoestima sempre elevada."
                srcVideo={srcVideo}
                cardPlanoTitle={cardPlanoTitle}
                cardPlanoPreco={cardPlanoPreco}
                cardPlanoImage={cardPlanoImage}
                cardPlanoLinkPage={cardPlanoLinkPage}
                cardPlanoButtonLabel={cardPlanoButtonLabel}
                gender={gender}
            />
            <Separator />
            <TreinoConteudo
                cardsAcessos={cardAcessos}
                sectionConteudoSubtitle={sectionConteudoSubtitle}
                sectionConteudoTitle={sectionConteudoTitle}
            />
            <Separator />
            <TreinosFuncionam
                treinosFuncionamTitle={treinosFuncionamTitle}
                treinosFuncionamText={treinosFuncionamText}
            />
            <Faq />
            <Separator />
            <DepoimentosTexto depoimentos={depoimentos} />
        </>
    )
}

export default TreinoTemplate
