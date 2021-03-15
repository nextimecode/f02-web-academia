import React from 'react'
import Separator from '../components/atoms/separator'
import EntendaConsultoria from '../components/templates/entendaConsultoria'
import PlanoTreino from '../components/templates/planoTreino'
import ConsultoriaPersonalizada from '../components/templates/consultoriaPersonalizada'
import Faq from '../components/templates/faq'
import PageTemplate from '../components/templates/pageTemplate'
import BeneficiosConsultoria from '../components/templates/beneficiosConsultoria'
import VideoConsultoria from '../components/templates/videoConsultoria'

const Consultoria: React.FC = () => {
    return (
        <PageTemplate>
            <ConsultoriaPersonalizada />
            <BeneficiosConsultoria />
            <VideoConsultoria />
            <PlanoTreino />
            <Separator />
            <EntendaConsultoria />
            <Separator />
            <Faq />
        </PageTemplate>
    )
}

export default Consultoria
