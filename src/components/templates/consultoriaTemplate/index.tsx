import React from 'react'
import Separator from '../../atoms/separator'
import ConsultoriaBeneficios from '../../atoms/organisms/consultoriaBeneficios'
import ConsultoriaPagamento from '../../atoms/organisms/consultoriaPagamento'
import ConsultoriaEntenda from '../../atoms/organisms/consultoriaEntenda'
import Faq from '../../atoms/organisms/faq'
import Hero from '../../atoms/organisms/hero'
import PlanoTreino from '../../atoms/organisms/planoTreino'
import ConsultoriaRelacao from '../../atoms/organisms/consultoriaRelacao'

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
