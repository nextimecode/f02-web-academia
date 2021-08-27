import React from 'react'

type Props = {
    price: string
}

const PriceValue = ({ price }: Props) => {
    return (
<<<<<<< HEAD
        <span className="display-3 lh-1" style={{ fontWeight: 600 }}>
=======
        <span className="display-3 lh-1" style={{ fontWeight: 300 }}>
>>>>>>> 2ee54fd29d317ce287705fa07ab57d049c0e702c
            {price}
        </span>
    )
}

export default PriceValue
