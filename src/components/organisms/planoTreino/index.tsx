import React from 'react'
import Subtitle from '../../atoms/subtitle'
import Title from '../../atoms/title'
import CardTreino from '../../molecules/cardTreino'

const PlanoTreino = () => {
    return (
        <section>
            <div className="container">
                <Title label="Plano de treino criado somente para você" />
                <Subtitle
                    label="Receba um plano de treinamento elaborado dentro das suas
                    necessidades individuais, de acordo com suas condições
                    físicas e sua rotina."
                />
                <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                    <CardTreino title="Objetivos">
                        <p>
                            Um treinamento online personalizado, focado no seu
                            objetivo: redução de % de gordura, definição
                            abdominal, hipertrofia de glúteos - foco no seu
                            resultado.
                        </p>
                    </CardTreino>
                    <CardTreino title="Individualidade">
                        <p>
                            Considerando o contexto de cada aluno, como dores,
                            nível de treinamento, dias e tempo disponíveis,
                            distribuição dos equipamentos da sua academia,
                            materiais disponíveis na sua residência.
                        </p>
                    </CardTreino>
                    <CardTreino title="Preferências">
                        <p>
                            Levar em consideração seus gostos e preferências é
                            de extrema importância. Sobretudo, o que você não
                            gosta de fazer. Só assim o treino será REALMENTE
                            realista, agradável e motivante e o objetivo
                            alcançado.
                        </p>
                    </CardTreino>
                </div>
            </div>
        </section>
    )
}

export default PlanoTreino
