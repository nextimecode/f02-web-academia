import React from 'react'

type Props = {
    label: string
}

const Subhead = ({ label }: Props) => <h3 className={'h3'}>{label}</h3>

export default Subhead
