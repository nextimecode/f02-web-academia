import React from 'react'
import Separator from '../../atoms/separator'
import BeneficiosConsultoria from '../../organisms/beneficiosConsultoria'
import Hero from '../../organisms/hero'
import EntendaConsultoria from '../../organisms/entendaConsultoria'
import Faq from '../../organisms/faq'
import PlanoTreino from '../../organisms/planoTreino'
import RelacaoConsultoria from '../../organisms/relacaoConsultoria'
import TransformacoesConsultoria from '../../organisms/transformacoesConsultoria'
import VideoConsultoria from '../../organisms/videoConsultoria'

type Props = {
    heroImage: string
}

const ConsultoriaTemplate = ({ heroImage }: Props) => {
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
            <Faq />
        </>
    )
}

export default ConsultoriaTemplate
