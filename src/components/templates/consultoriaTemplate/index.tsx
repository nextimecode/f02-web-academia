import React from 'react'
import Separator from '../../atoms/separator'
import ConsultoriaBeneficios from '../../organisms/consultoriaBeneficios'
import ConsultoriaPagamento from '../../organisms/consultoriaPagamento'
import ConsultoriaEntenda from '../../organisms/consultoriaEntenda'
import Faq from '../../organisms/faq'
import Hero from '../../organisms/hero'
import PlanoTreino from '../../organisms/planoTreino'
import ConsultoriaRelacao from '../../organisms/consultoriaRelacao'
import ConsultoriaTransformacoes from '../../organisms/consultoriaTransformacoes'
import ConsultoriaVideo from '../../organisms/consultoriaVideo'

type Props = {
    heroImage: string
}

const ConsultoriaTemplate = ({ heroImage }: Props) => {
    return (
        <>
            <Hero heroImage={heroImage}></Hero>
            <ConsultoriaBeneficios />
            <ConsultoriaRelacao />
            <Separator />
            <ConsultoriaVideo />
            <Separator />
            <PlanoTreino />
            <Separator />
            <ConsultoriaTransformacoes />
            <ConsultoriaEntenda />
            <Separator />
            <ConsultoriaPagamento />
            <Separator />
            <Faq />
        </>
    )
}

export default ConsultoriaTemplate
