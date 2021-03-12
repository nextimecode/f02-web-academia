import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import CardPlanos from '../../organisms/cardPlanos'

const Planos = () => {
    return (
        <section>
            <div className="container">
                <Title label="Conheça nosssos planos" />
                <Subhead label="Em casa ou na academia agora é a hora de construir a sua melhor versão!" />
                <div className="my-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <CardPlanos
                            accentColor="#FD3282"
                            title="Treino feminino"
                            price={40}
                            image="/assets/img/training-woman.png"
                        >
                            <ul className="fw-lighter card-text">
                                <li className="p-2">
                                    Assinatura mensal com renovação automática
                                </li>
                                <li className="p-2">Cancele quando quiser</li>
                                <li className="p-2">Garantia de 7 Dias</li>
                                <li className="p-2">
                                    Este plano não é individualizado como na
                                    Consultoria
                                </li>
                            </ul>
                        </CardPlanos>
                        <CardPlanos
                            accentColor="#FFC401"
                            recommended={true}
                            title="Consultoria personalizada"
                            image="/assets/img/training-custom.png"
                        >
                            <ul className="fw-lighter">
                                <li className="p-2">
                                    Plano de treino criado somente para você.
                                </li>
                                <li className="p-2">
                                    Atendimento personalizado com São Miguelito
                                </li>
                                <li className="p-2">
                                    Vídeos para auxiliar a execução
                                </li>
                            </ul>
                        </CardPlanos>
                        <CardPlanos
                            accentColor="#5429DA"
                            title="Treino masculino"
                            price={40}
                            image="/assets/img/training-man.png"
                        >
                            <ul className="fw-lighter">
                                <li className="p-2">
                                    Assinatura mensal com renovação automática
                                </li>
                                <li className="p-2">Cancele quando quiser</li>
                                <li className="p-2">Garantia de 7 Dias</li>
                                <li className="p-2">
                                    Este plano não é individualizado como na
                                    Consultoria
                                </li>
                            </ul>
                        </CardPlanos>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planos
