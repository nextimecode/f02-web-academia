import React from 'react'

type Props = {
    frequency: string
}

const PriceFrequency = ({ frequency }: Props) => {
    return <span className="fs-6 fw-lighter"> /{frequency}</span>
}

export default PriceFrequency
