import React from 'react'
import Subhead from '../../subhead'
import Title from '../../title'
import CardPlanos from '../../../molecules/cardPlanos'

const Planos = () => {
    const cardPlanos = [
        {
            card: {
                title: 'Treino Feminino',
                recommended: false,
                price: {
                    value: 40
                },
                image: '/assets/img/cards/card_01.jpg',
                linkPage: '/treino-mulheres',
                buttonLabel: 'Saiba mais',
                cardText: {
                    listClasses: 'fw-lighter card-text',
                    listItemClasses: 'p-2',
                    listItems: [
                        {
                            item:
                                'Treinos em casa e na academia por um valor acessível.'
                        },
                        {
                            item:
                                'Assinatura mensal / com renovação automática.'
                        },
                        {
                            item:
                                'Este plano é para todas da plataforma / porém não é individualizado como na consultoria personalizada.'
                        },
                        { item: '7 dias de garantia.' }
                    ]
                }
            }
        },
        {
            card: {
                title: 'Consultoria Personalizada',
                recommended: true,
                image: '/assets/img/cards/card_02.jpg',
                linkPage: '/consultoria',
                buttonLabel: 'Saiba mais',
                cardText: {
                    listClasses: 'fw-lighter',
                    listItemClasses: 'p-2',
                    listItems: [
                        { item: 'CONSULTORIA2021TIMEVINIDIAS' },
                        {
                            item:
                                'Consultoria online: seu treino na palma da sua mão.'
                        },
                        { item: 'Atendimento personalizado com VINIDIAS' },
                        { item: 'Acompanhamento online' }
                    ]
                }
            }
        },
        {
            card: {
                title: 'Treino Masculino',
                recommended: false,
                price: {
                    value: 40
                },
                image: '/assets/img/cards/card_03.jpg',
                linkPage: '/treino-homens',
                buttonLabel: 'Saiba mais',
                cardText: {
                    listClasses: 'fw-lighter card-text',
                    listItemClasses: 'p-2',
                    listItems: [
                        {
                            item:
                                'Treinos em casa e na academia por um valor acessível.'
                        },
                        {
                            item:
                                'Assinatura mensal / com renovação automática.'
                        },
                        {
                            item:
                                'Este plano é para todos da plataforma / porém não é individualizado como na consultoria personalizada.'
                        },
                        { item: '7 dias de garantia.' }
                    ]
                }
            }
        }
    ]

    return (
        <section id="planos" className="pt-extra">
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
                                buttonLabel={c.card.buttonLabel}
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
