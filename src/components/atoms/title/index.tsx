import React from 'react'

type Props = {
    label: string
}

const Title = ({ label }: Props) => <h1 className="h1 mt-5 mb-2">{label}</h1>

export default Title
