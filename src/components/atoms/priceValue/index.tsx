import React from 'react'

type Props = {
    price: string
}

const PriceValue = ({ price }: Props) => {
    return (
        <span className="display-3 lh-1" style={{ fontWeight: 600 }}>
            {price}
        </span>
    )
}

export default PriceValue
