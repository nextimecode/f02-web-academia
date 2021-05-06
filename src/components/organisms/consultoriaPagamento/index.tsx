import React from 'react'
import Title from '../../atoms/title'
import ConsultoriaCard from '../../molecules/consultoriaCard'
import { telefone } from '../../../pages/index'

import './style.scss'
import Film from '../../atoms/film'

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
                    <div className="col-md-6 col-sm-12 m-auto text-center">
                        <Film src={videoMain} classes="mh-80" />
                    </div>
                    <div className="col-md-6 col-sm-12 m-auto">
                        <ConsultoriaCard
                            image={cardPlano.card.image}
                            buttonLabel={cardPlano.card.buttonLabel}
                            linkUrl={cardPlano.card.linkUrl}
                        >
                            <ul className={cardPlano.card.cardText.listClasses}>
                                {cardPlano.card.cardText.listItems.map(
                                    (i, index) => (
                                        <li
                                            key={index}
                                            className={
                                                cardPlano.card.cardText
                                                    .listItemClasses
                                            }
                                        >
                                            {i.item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </ConsultoriaCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultoriaPagamento
