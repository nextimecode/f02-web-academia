import React from 'react'

import './style.scss'

type Props = {
    cardImage: string
    cardLabel: string
}

const CardAcessos = ({ cardImage, cardLabel }: Props) => {
    return (
        <div className="col my-2 h-100 pb-3">
            <div
                className="border-bottom border-primary rounded card-acesso text-center p-3 h-100 position-relative"
                style={{ backgroundImage: `url(${cardImage})` }}
            >
                <h1 className="fs-2 position-absolute bottom-0 start-0 text-center w-100">
                    {cardLabel}
                </h1>
            </div>
        </div>
    )
}

export default CardAcessos
