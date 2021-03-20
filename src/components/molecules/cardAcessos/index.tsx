import React from 'react'
import Title from '../../atoms/title'

type Props = {
    cardImage: string
    cardLabel: string
    cardText: string
}

const CardAcessos = ({ cardImage, cardLabel, cardText }: Props) => {
    return (
        <div
            className="col-md-12 d-flex border-bottom border-warning rounded m-2"
            style={{
                backgroundImage: `url(${cardImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '300px'
            }}
        >
            <div className="justify-content-center align-middle m-auto p-3">
                <Title label={cardLabel} />
                <p>{cardText}</p>
            </div>
        </div>
    )
}

export default CardAcessos
