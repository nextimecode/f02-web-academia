import React from 'react'
import Title from '../../atoms/title'
import { telefone } from '../../../pages/index'

import './style.scss'
import Film from '../../atoms/film'
import CardPlanos from '../../molecules/cardPlanos'

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
    return (
        <section id="planos">
            <div className="container">
                <div className="row my-5">
                    <Title label="Consultoria Personalizada" />

                    <div className="col-md-12 col-lg-5 text-center">
                        <div className="ratio ratio-9x16 mh-80 my-1">
                            <Film src={videoMain} />
                        </div>
                    </div>
                    <CardPlanos
                        title={cardPlano.card.title}
                        image={cardPlano.card.image}
                        linkPage={cardPlano.card.linkUrl}
                        buttonLabel={cardPlano.card.buttonLabel}
                    >
                        <div className="card-consultoria-list">
                            <ul className="fw-lighter card-text">
                                <li className="p-1">
                                    Assinatura mensal com renovação automática
                                </li>
                                <li className="p-1">Cancele quando quiser</li>
                                <li className="p-1">Garantia de 7 Dias</li>
                                <li className="p-1">
                                    Este plano não é individualizado como na
                                    Consultoria
                                </li>
                            </ul>
                        </div>
                    </CardPlanos>
                </div>
            </div>
        </section>
    )
}

export default ConsultoriaPagamento
