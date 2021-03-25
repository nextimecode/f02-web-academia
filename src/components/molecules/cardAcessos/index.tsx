import React from 'react'
import Title from '../../atoms/title'

import './style.scss'

type Props = {
    cardImage: string
    cardLabel: string
    cardText: string
}

const CardAcessos = ({ cardImage, cardLabel, cardText }: Props) => {
    return (
        <div className="col my-2">
            <div
                className="border-bottom border-primary rounded card-acesso p-3 m-auto"
                style={{ backgroundImage: `url(${cardImage})` }}
            >
                <Title label={cardLabel} />
                <div className="card-acesso-texto p-2 rounded">
                    <p>{cardText}</p>
                </div>
            </div>
        </div>
    )
}

export default CardAcessos
