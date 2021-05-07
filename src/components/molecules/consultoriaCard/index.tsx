import React from 'react'
import Button from '../../atoms/button'

type Props = {
    children: React.ReactNode
    image: string
    buttonLabel: string
    linkUrl: string
}

const ConsultoriaCard = ({ children, image, buttonLabel, linkUrl }: Props) => {
    return (
        <div
            className="h-100 d-flex border border-primary card-consultoria"
            style={{
                backgroundColor: 'black',
                backgroundImage: `url("${image}")`
            }}
        >
            <div className="card-body align-self-end">
                <div className="card-consultoria-texto rounded p-2">
                    <div className="card-consultoria-list">{children}</div>
                    <div className="text-center my-3">
                        <Button
                            label={buttonLabel}
                            prefixIcon="whatsapp"
                            href={linkUrl}
                            target="_blank"
                            className="btn rounded btn-buy btn-buy-vip"
                            style={{ backgroundColor: '$orange' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsultoriaCard
