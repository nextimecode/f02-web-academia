import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import CardPlanos from '../../molecules/cardPlanos'

const Planos = () => {
    const cardPlanos = [
        {
            card: {
                title: 'Treino feminino',
                recommended: false,
                price: 40,
                image: '/assets/img/training-woman.png',
                linkPage: '/consultoria',
                cardText: {
                    listClasses: 'fw-lighter card-text',
                    listItemClasses: 'p-2',
                    listItems: [
                        { item: 'Assinatura mensal com renovação automática' },
                        { item: 'Cancele quando quiser' },
                        { item: 'Garantia de 7 Dias' },
                        {
                            item:
                                'Este plano não é individualizado como na Consultoria'
                        }
                    ]
                }
            }
        },
        {
            card: {
                title: 'Consultoria personalizada',
                recommended: true,
                image: '/assets/img/training-custom.png',
                linkPage: '/consultoria',
                cardText: {
                    listClasses: 'fw-lighter',
                    listItemClasses: 'p-2',
                    listItems: [
                        { item: 'Plano de treino criado somente para você.' },
                        { item: 'Atendimento personalizado com Vini Dias' },
                        { item: 'Vídeos para auxiliar a execução' }
                    ]
                }
            }
        },
        {
            card: {
                title: 'Treino masculino',
                recommended: false,
                price: 40,
                image: '/assets/img/training-woman.png',
                linkPage: '/consultoria',
                cardText: {
                    listClasses: 'fw-lighter card-text',
                    listItemClasses: 'p-2',
                    listItems: [
                        { item: 'Assinatura mensal com renovação automática' },
                        { item: 'Cancele quando quiser' },
                        { item: 'Garantia de 7 Dias' },
                        {
                            item:
                                'Este plano não é individualizado como na Consultoria'
                        }
                    ]
                }
            }
        }
    ]

    return (
        <section id="planos" style={{ paddingTop: '80px' }}>
            <div className="container">
                <Title label="Conheça nossos planos" />
                <Subhead label="Em casa ou na academia agora é a hora de construir a sua melhor versão!" />
                <div className="my-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {cardPlanos.map((c, index) => (
                            <CardPlanos
                                key={index}
                                title={c.card.title}
                                recommended={c.card.recommended}
                                price={c.card.price}
                                image={c.card.image}
                                linkPage={c.card.linkPage}
                            >
                                <ul className={c.card.cardText.listClasses}>
                                    {c.card.cardText.listItems.map(
                                        (i, index) => (
                                            <li
                                                key={index}
                                                className={
                                                    c.card.cardText
                                                        .listItemClasses
                                                }
                                            >
                                                {i.item}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </CardPlanos>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planos
