import React from 'react'
import Title from '../../atoms/title'
import ConsultoriaCard from '../../molecules/consultoriaCard'
import { telefone } from '../../templates/pageTemplate'

import './style.scss'

const mensagem =
    'Olá, Vinícius! Gostaria de agendar uma vaga na sua consultoria.'
const linkContato = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`

const cardPlano = {
    card: {
        title: 'Consultoria Personalizada',
        price: 300,
        image: 'assets/img/personal.png',
        buttonLabel: 'Vagas',
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

const ConsultoriaPagamento = () => {
    return (
        <section>
            <div className="container">
                <div className="row my-5">
                    <Title label="Vagas" />
                    <div className="col-md-6 col-sm-12">
                        <ConsultoriaCard
                            title={cardPlano.card.title}
                            image={cardPlano.card.image}
                            buttonLabel={cardPlano.card.buttonLabel}
                            linkUrl={cardPlano.card.linkUrl}
                            price={cardPlano.card.price}
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
                    <div className="col-md-6 col-sm-12 m-auto">
                        <div className="justify-content-center align-middle mt-5">
                            <div className="row text-center">
                                <a href={cardPlano.card.linkUrl}>
                                    <img
                                        className="consultoria-contato"
                                        src="assets/img/logos/whatsapp.png"
                                    />
                                </a>
                            </div>
                            <div className="row mt-2">
                                <a href={cardPlano.card.linkUrl}>
                                    <Title label="Garanta sua vaga" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultoriaPagamento
