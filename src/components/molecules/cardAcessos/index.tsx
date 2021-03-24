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
                className="border-bottom border-primary rounded card-acesso p-3"
                style={{ backgroundImage: `url(${cardImage})` }}
            >
                <div className="justify-content-center align-middle m-auto">
                    <Title label={cardLabel} />
                    <div className="card-acesso-texto p-2 rounded">
                        <p>{cardText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardAcessos
