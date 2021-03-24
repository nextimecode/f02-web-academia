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
            className='container border border-primary'
            style={{backgroundColor: 'black'}}
        >
            <div className="row">
                <Title label={title}/>
            </div>
            <hr />
            <div
                className="card-body card-consultoria py-5"
                style={{
                    backgroundImage: `url("${image}")`
                }}
            >
                <div className="card-consultoria-texto rounded p-2">
                    <Price
                        price={price}
                        frequency="por Programa de Treinamento"
                    />
                    <div className="card-consultoria-list">
                        {children}
                    </div>                 
                    <div className="text-center">
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
