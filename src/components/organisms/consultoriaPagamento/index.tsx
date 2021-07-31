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

                    <div className="col-md-12 col-lg-5 text-center">
                        <div className="ratio ratio-9x16 mh-80 my-1">
                            <Film src={videoMain} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 order-md-0 order-last p-0 my-1 text-center">
                        <ConsultoriaCard
                            image={cardPlano.card.image}
                            buttonLabel={cardPlano.card.buttonLabel}
                            target="_blank"
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
