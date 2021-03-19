import React from 'react'

type Props = {
    label: string
}

const Subtitle = ({ label }: Props) => <h2 className="h2 p-4">{label}</h2>

export default Subtitle
