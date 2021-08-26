import React from 'react'
import Title from '../../atoms/title'
import { telefone } from '../../../pages/index'

import './style.scss'
import CardPlanos from '../../molecules/cardPlanos'
import FilmBox from '../../molecules/filmBox'

const mensagem =
    'Olá, Vinícius! Gostaria de agendar uma vaga na sua consultoria.'
const linkContato = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`

const cardPlano = {
    card: {
        title: 'Vagas',
        price: '300',
        image: 'assets/img/cards/card_08.jpg',
        buttonLabel: 'Garanta sua vaga',
        linkUrl: linkContato,
        cardText: {
            listClasses: 'fw-lighter card-text',
            listItemClasses: 'p-2',
            listItems: [
                { item: 'Assinatura mensal com renovação automática' },
                { item: 'Cancele quando quiser' },
                { item: 'Garantia de 7 Dias' },
                {
                    item: 'Este plano não é individualizado como na Consultoria'
                }
            ]
        }
    }
}

type Props = {
    videoMain: string
}

const ConsultoriaPagamento = ({ videoMain }: Props) => {

    const benefits = [
        'Assinatura mensal com renovação automática',
        'Cancele quando quiser',
        'Garantia de 7 Dias',
        'Acompanhamento Individual'
    ]

    return (
        <section id="planos">
            <div className="container">
                <div className="row my-5">
                    <Title label="Consultoria Personalizada" />

                    <div className="col-md-12 col-lg-5 text-center">
                        <FilmBox
                            src={videoMain}
                            proportion='9x16'
                            classes="mh-80 my-1"
                        />
                    </div>
                    <CardPlanos
                        title={cardPlano.card.title}
                        image={cardPlano.card.image}
                        linkPage={cardPlano.card.linkUrl}
                        buttonLabel={cardPlano.card.buttonLabel}
                        recommended={true}
                    >
                        <div className="card-consultoria-list">
                            <ul className="fw-lighter card-text py-3">
                                {benefits.map(b => (
                                    <li className="p-1 fs-5 fw-bold">
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardPlanos>
                </div>
            </div>
        </section>
    )
}

export default ConsultoriaPagamento
