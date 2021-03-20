import React from 'react'
import { PerguntasRespostas } from '../../../types/types'
import Separator from '../../atoms/separator'
import BeneficiosConsultoria from '../../organisms/beneficiosConsultoria'
import EntendaConsultoria from '../../organisms/entendaConsultoria'
import Faq from '../../organisms/faq'
import Hero from '../../organisms/hero'
import PlanoTreino from '../../organisms/planoTreino'
import RelacaoConsultoria from '../../organisms/relacaoConsultoria'
import TransformacoesConsultoria from '../../organisms/transformacoesConsultoria'
import VideoConsultoria from '../../organisms/videoConsultoria'

type Props = {
    heroImage: string
    perguntasRespostasFaq: PerguntasRespostas[]
}

const ConsultoriaTemplate = ({ heroImage, perguntasRespostasFaq }: Props) => {
    return (
        <>
            <Hero heroImage={heroImage}></Hero>
            <BeneficiosConsultoria />
            <RelacaoConsultoria />
            <Separator />
            <VideoConsultoria />
            <Separator />
            <PlanoTreino />
            <Separator />
            <TransformacoesConsultoria />
            <EntendaConsultoria />
            <Separator />
            <Faq perguntasRespostas={perguntasRespostasFaq} />
        </>
    )
}

export default ConsultoriaTemplate
