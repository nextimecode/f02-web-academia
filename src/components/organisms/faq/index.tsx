import React from 'react'
import { PerguntasRespostas } from '../../../types/types'
import Title from '../../atoms/title'
import PerguntasFrequentes from '../perguntasFrequentes'

type Props = {
    perguntasRespostas: PerguntasRespostas[]
}

const Faq = ({ perguntasRespostas }: Props) => {
    return (
        <section className="py-5">
            <Title label="Perguntas Frequentes" />
            <PerguntasFrequentes perguntasRespostas={perguntasRespostas} />
        </section>
    )
}

export default Faq
