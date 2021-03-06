import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import CardPlanos from '../../molecules/cardPlanos'

const Planos = () => {
    const cardPlanos = [
        {
            card: {
                title: 'Treino Feminino',
                gender: 'female',
                price: {
                    value: '41,90'
                },
                image: '/assets/img/cards/plano_female.jpg',
                linkPage: '/treino-mulheres',
                buttonLabel: 'Saiba mais',
                buttonClass: 'btn-buy btn-buy-course',
                cardText: {
                    boxClass: '',
                    listClasses: 'card-text',
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
                image: '/assets/img/cards/card_08.jpg',
                linkPage: '/consultoria',
                buttonLabel: 'Seja Vip',
                cardText: {
                    boxClass: 'card-consultoria-list',
                    listClasses: '',
                    listItemClasses: 'p-2',
                    listItems: [
                        { item: 'CONSULTORIA VINIDIAS' },
                        {
                            item: 'Seu treino na palma da sua mão.'
                        },
                        { item: 'Atendimento personalizado com VINIDIAS' },
                        { item: 'Acompanhamento Online' }
                    ]
                }
            }
        },
        {
            card: {
                title: 'Treino Masculino',
                gender: 'male',
                price: {
                    value: '41,90'
                },
                image: '/assets/img/cards/plano_male.jpg',
                linkPage: '/treino-homens',
                buttonLabel: 'Saiba mais',
                buttonClass: 'btn-buy btn-buy-course',
                cardText: {
                    boxClass: '',
                    listClasses: 'card-text',
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
            <div className="container mt-2">
                <Title label="Conheça os" />
                <Title label="Planos" className="text-primary" />
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
                                gender={c.card.gender}
                            >
                                <div className={c.card.cardText.boxClass}>
                                    <ul className={c.card.cardText.listClasses}>
                                        {c.card.cardText.listItems.map(
                                            (i, index) => (
                                                <li
                                                    key={index}
                                                    className={`${c.card.cardText.listItemClasses} fw-bolder`}
                                                >
                                                    {i.item}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </CardPlanos>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planos
