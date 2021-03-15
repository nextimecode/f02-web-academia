import React from 'react'

type Props = {
    src: string
}

const Film = ({ src }: Props) => <video controls><source src={src}/></video>

export default Film
