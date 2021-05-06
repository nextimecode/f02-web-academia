import React from 'react'
import Separator from '../../atoms/separator'
import ConsultoriaBeneficios from '../../organisms/consultoriaBeneficios'
import ConsultoriaPagamento from '../../organisms/consultoriaPagamento'
import ConsultoriaEntenda from '../../organisms/consultoriaEntenda'
import Faq from '../../organisms/faq'
import Hero from '../../organisms/hero'
import PlanoTreino from '../../organisms/planoTreino'
import ConsultoriaRelacao from '../../organisms/consultoriaRelacao'

type Props = {
    heroImage: string
    videoConsultoria: string
}

const ConsultoriaTemplate = ({ heroImage, videoConsultoria }: Props) => {
    return (
        <>
            <Hero
                heroImage={heroImage}
                label1="Consultoria"
                label2="Personalizada"
            />
            <ConsultoriaBeneficios />
            <ConsultoriaRelacao />
            <Separator />
            <ConsultoriaPagamento videoMain={videoConsultoria} />
            <Separator />
            <PlanoTreino />
            <Separator />
            <ConsultoriaEntenda />
            <Separator />
            <Faq />
        </>
    )
}

export default ConsultoriaTemplate
