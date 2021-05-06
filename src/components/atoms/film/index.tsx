import React from 'react'

type Props = {
    src: string
    classes?: string
}

const Film = ({ src, classes }: Props) => (
    <video controls className={`${classes} my-1`}>
        <source src={src} />
    </video>
)

export default Film
