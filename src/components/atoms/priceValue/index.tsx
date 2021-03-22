import React from 'react'

type Props = {
    price: number
}

const PriceValue = ({ price }: Props) => {
    return <span className="display-5 lh-1 font-weight-bold">{price}</span>
}

export default PriceValue
