import React from 'react'

type Props = {
    label: string
    className?: string
}

const Title = ({ label, className = 'text-light p-2' }: Props) => (
    <h1 className={className}>{label}</h1>
)

export default Title
