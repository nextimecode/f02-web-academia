import React from 'react'
import Separator from '../components/atoms/separator'
import EntendaConsultoria from '../components/templates/entendaConsultoria'
import PlanoTreino from '../components/templates/planoTreino'
import ConsultoriaPersonalizada from '../components/templates/consultoriaPersonalizada'
import Faq from '../components/templates/faq'
import PageTemplate from '../components/templates/pageTemplate'
import BeneficiosConsultoria from '../components/templates/beneficiosConsultoria'
import VideoConsultoria from '../components/templates/videoConsultoria'
import TransformacoesConsultoria from '../components/templates/transformacoesConsultoria'
import RelacaoConsultoria from '../components/templates/relacaoConsultoria'

const Consultoria: React.FC = () => {
    return (
        <PageTemplate>
            <ConsultoriaPersonalizada />
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
        </PageTemplate>
    )
}

export default Consultoria
