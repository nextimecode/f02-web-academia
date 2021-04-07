import React from 'react'
import Button from '../../atoms/button'
import Title from '../../atoms/title'
import Price from '../price'

import './style.scss'

type Props = {
    children: React.ReactNode
    image: string
    title: string
    buttonLabel: string
    linkUrl: string
    price: number
}

const ConsultoriaCard = ({
    children,
    image,
    title,
    buttonLabel,
    linkUrl,
    price
}: Props) => {
    return (
        <div
            className="container border border-primary pt-3 card-consultoria"
            style={{
                backgroundColor: 'black',
                backgroundImage: `url("${image}")`
            }}
        >
            <div className="row card-consultoria-texto rounded p-1">
                <Title label={title} />
            </div>
            <hr />
            <div className="card-body py-5">
                <div className="card-consultoria-texto rounded p-2">
                    <Price
                        price={price}
                        frequency="por Programa de Treinamento"
                    />
                    <div className="card-consultoria-list">{children}</div>
                    <div className="text-center my-3">
                        <Button
                            label={buttonLabel}
                            prefixIcon="whatsapp"
                            href={linkUrl}
                            target="_blank"
                            style={{ backgroundColor: '$orange' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultoriaCard
