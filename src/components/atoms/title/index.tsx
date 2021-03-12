import React from 'react'

type Props = {
    label: string
}

const Title = ({ label }: Props) => <h1 className="h1 pb-4">{label}</h1>

export default Title
