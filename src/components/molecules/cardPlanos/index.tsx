import React from 'react'
import Price from '../../molecules/price'
import Button from '../../atoms/button'

type Props = {
    children: React.ReactNode
    price?: Record<string, any>
    recommended?: boolean
    title: string
    image: string
    linkPage: string
    buttonLabel: string
    buttonClass?: string
}

const CardPlanos = ({
    children,
    price,
    title,
    recommended,
    image,
    linkPage,
    buttonLabel,
    buttonClass
}: Props) => {
    return (
        <div className="col h-100">
            <div
                className={`card rounded bg-dark overflow-hidden ${
                    recommended && 'border border-primary'
                }
                ' `}
            >
                <div
                    className="card-header h-50 bg-image"
                    style={{
                        backgroundImage: `url(${image})`,
                        minHeight: '300px'
                    }}
                ></div>
                <div className="card-body">
                    <div className="fs-3 fw-normal card-title">{title}</div>
                    {price && (
                        <Price
                            price={price.value}
                            frequency={price.frequency}
                        />
                    )}
                    {!price && (
                        <div className="lh-lg my-4 text-center">
                            <span className="text-primary display-6">
                                <strong>Venha ser VIP</strong>
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
                    <Button
                        label={buttonLabel}
                        className={`${buttonClass} btn rounded`}
                        href={linkPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardPlanos
