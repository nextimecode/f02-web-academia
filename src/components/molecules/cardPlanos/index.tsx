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
    gender?: string
}

const CardPlanos = ({
    children,
    price,
    title,
    recommended,
    image,
    linkPage,
    buttonLabel,
    gender = 'consult'
}: Props) => {
    const btnFS = recommended ? 1.8 : 1

    return (
        <div className="col">
            <div
                className={`card-planos h-100 d-flex border-3 border-solid border-${gender} `}
                style={{
                    backgroundColor: 'black',
                    backgroundImage: `url("${image}")`,
                }}
            >
                <div className={'bg-black-fade card-body d-flex'}>
                    <div
                        className={
                            'bg-black-fade rounded p-2 align-self-end w-100'
                        }
                    >
                        {price && (
                            <React.Fragment>
                                <div className="fs-3 fw-normal text-center">
                                    {title}
                                </div>
                                <Price
                                    price={price.value}
                                    frequency={price.frequency}
                                    textColor={gender}
                                />
                            </React.Fragment>
                        )}
                        {children}

                        <div className="text-center my-3">
                            {recommended && (
                                <Button
                                    label={buttonLabel}
                                    prefixIcon={'whatsapp'}
                                    href={linkPage}
                                    target="_blank"
                                    className={`btn rounded fw-500 text-uppercase btn-buy btn-buy-vip bg-${gender}`}
                                    style={{ fontSize: `${btnFS}rem` }}
                                />
                            )}
                            {!recommended && (
                                <Button
                                    label={buttonLabel}
                                    href={linkPage}
                                    target="_blank"
                                    className={`btn rounded fw-500 text-uppercase btn-buy btn-buy-vip bg-${gender}`}
                                    style={{ fontSize: `${btnFS}rem` }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPlanos
