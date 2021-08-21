import React from 'react'
import PriceValue from '../../atoms/priceValue'
import PriceFrequency from '../../atoms/priceFrequency'
import PriceCurrency from '../../atoms/priceCurrency'

type Props = {
    price: string
    frequency?: string
}

const Price = ({ price, frequency = 'mês' }: Props) => {
    return (
        <div className="my-4 d-flex text-red d-flex justify-content-center bg-black-fade rounded">
            <div className="align-items-top">
                <PriceCurrency />
            </div>

            <div className="align-items-baseline">
                <PriceValue price={price} />
                <PriceFrequency frequency={frequency} />
            </div>
        </div>
    )
}

export default Price
