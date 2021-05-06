import React from 'react'
import Title from '../../title'

type Props = {
    treinosFuncionamTitle: string
    treinosFuncionamText: string
}

const TreinosFuncionam = ({
    treinosFuncionamTitle = 'Os treinos online realmente funcionam?',
    treinosFuncionamText = 'Sem dúvida alguma, tudo que envolve a sua saúde física, mental e estética eu vou te ajudar; treinovinidias você emagrece de forma saudável e também para aqueles que desejam aumentar a massa muscular (o shape) respeitando seus objetivos, limitações, gostos e focando claro nos seus limites como treinos iniciantes intermediário e avançados, treinovinidias é para todas as idades.'
}: Props) => {
    return (
        <section className="py-2">
            <div className="container">
                <div className="justify-content-center align-middle m-auto">
                    <Title label={treinosFuncionamTitle} />
                    <p>{treinosFuncionamText}</p>
                </div>
            </div>
        </section>
    )
}

export default TreinosFuncionam
