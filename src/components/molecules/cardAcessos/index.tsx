import React from 'react'

import './style.scss'

type Props = {
    cardImage: string
    cardLabel: string
    cardText: string
}

const CardAcessos = ({ cardImage, cardLabel, cardText }: Props) => {
    return (
        <div className="col my-2 h-100 pb-3">
            <div
                className="border-bottom border-primary rounded card-acesso p-3 m-auto h-100"
                style={{ backgroundImage: `url(${cardImage})` }}
            >
                <h1 className="fs-2">{cardLabel}</h1>
                <div className="p-2 rounded">
                    <p className="card-acesso-texto">{cardText}</p>
                </div>
            </div>
        </div>
    )
}

export default CardAcessos
