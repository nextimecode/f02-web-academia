import React from 'react'
import Separator from '../../atoms/separator'
import ConsultoriaBeneficios from '../../organisms/consultoriaBeneficios'
import ConsultoriaPagamento from '../../organisms/consultoriaPagamento'
import ConsultoriaEntenda from '../../organisms/consultoriaEntenda'
import Faq from '../../organisms/faq'
import Hero from '../../organisms/hero'
import PlanoTreino from '../../organisms/planoTreino'
import ConsultoriaRelacao from '../../organisms/consultoriaRelacao'
import ConsultoriaVideo from '../../organisms/consultoriaVideo'
import Resultados from '../../organisms/resultados'
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
