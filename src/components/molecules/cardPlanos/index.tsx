import React from 'react'
import Price from '../../atoms/price'
import Button from '../../atoms/button'

type Props = {
    children: React.ReactNode
    price?: number
    recommended?: boolean
    title: string
    image: string
    linkPage: string
    buttonLabel: string
}

const CardPlanos = ({
    children,
    price,
    title,
    recommended,
    image,
    linkPage,
    buttonLabel
}: Props) => {
    return (
        <div className="col">
            <div
                className={`card rounded bg-dark overflow-hidden h-100 ${
                    recommended && 'border border-primary'
                }
                ' `}
            >
                <img src={image} className="card-img-top"></img>
                <div className="card-body">
                    <div className="fs-3 fw-normal card-title">{title}</div>
                    {price && <Price price={price} />}
                    {!price && (
                        <div className="lh-lg my-4">
                            <span className="text-primary display-6">
                                <strong>Venha ser vip</strong>
                            </span>
                        </div>
                    )}
                    <hr />
                    {children}
                </div>
                <div
                    className={
                        'card-footer d-flex align-items-center justify-content-center'
                    }
                >
                    <Button label={buttonLabel} href={linkPage} />
                </div>
            </div>
        </div>
    )
}

export default CardPlanos
