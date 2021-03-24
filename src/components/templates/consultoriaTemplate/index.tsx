import React from 'react'
import { PerguntasRespostas } from '../../../types/types'
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
    perguntasRespostasFaq: PerguntasRespostas[]
}

const ConsultoriaTemplate = ({ heroImage, perguntasRespostasFaq }: Props) => {
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
            <Faq perguntasRespostas={perguntasRespostasFaq} />
        </>
    )
}

export default ConsultoriaTemplate
