import React from 'react'

type Props = {
    price: number
}

const PriceValue = ({ price }: Props) => {
    return (
        <span className="display-3 lh-1" style={{ fontWeight: 400 }}>
            {price}
        </span>
    )
}

export default PriceValue
