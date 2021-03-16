import React from 'react'
import CardTreino from '../../organisms/cardTreino'

const PlanoTreino = () => {
    return (
        <section>
            <div className="container">
                <h1>Plano de treino criado somente para você</h1>
                <h3>
                    Receba um plano de treinamento elaborado dentro das suas
                    necessidades individuais, de acordo com suas condições
                    físicas e sua rotina.
                </h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                    <CardTreino
                        title="Objetivos"
                        image="assets/img/training-custom.png"
                    >
                        <p>
                            Um treinamento online personalizado, focado no seu
                            objetivo: redução de % de gordura, definição
                            abdominal, hipertrofia de glúteos - foco no seu
                            resultado.
                        </p>
                    </CardTreino>
                    <CardTreino
                        title="Individualidade"
                        image="assets/img/training-man.png"
                    >
                        <p>
                            Considerando o contexto de cada aluno, como dores,
                            nível de treinamento, dias e tempo disponíveis,
                            distribuição dos equipamentos da sua academia,
                            materiais disponíveis na sua residência.
                        </p>
                    </CardTreino>
                    <CardTreino
                        title="Preferências"
                        image="assets/img/training-woman.png"
                    >
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
