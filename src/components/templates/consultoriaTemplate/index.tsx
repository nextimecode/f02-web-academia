import React from 'react'
import Separator from '../../atoms/separator'
import ConsultoriaBeneficios from '../../atoms/organisms/consultoriaBeneficios'
import ConsultoriaPagamento from '../../atoms/organisms/consultoriaPagamento'
import ConsultoriaEntenda from '../../atoms/organisms/consultoriaEntenda'
import Faq from '../../atoms/organisms/faq'
import Hero from '../../atoms/organisms/hero'
import PlanoTreino from '../../atoms/organisms/planoTreino'
import ConsultoriaRelacao from '../../atoms/organisms/consultoriaRelacao'
import ConsultoriaVideo from '../../atoms/organisms/consultoriaVideo'
import Resultados from '../../atoms/organisms/resultados'
import { carouselFotosResultados } from '../../../pages/index'

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
            <Resultados carouselPhotos={carouselFotosResultados} />
            <ConsultoriaEntenda />
            <Separator />
            <ConsultoriaPagamento />
            <Separator />
            <Faq />
        </>
    )
}

export default ConsultoriaTemplate
