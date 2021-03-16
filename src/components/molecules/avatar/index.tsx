import React from 'react'

import './style.scss'

type Props = {
    foto: string
    nome: string
    profissao?: string
}

const Avatar = ({ foto, nome, profissao = '' }: Props) => (
    <div className="d-flex justify-content-center">
        <div className="m-auto">
            <img className="profile-pic fit-image" src={foto} />
            <p className="profile profile-name text-center">{nome}</p>
            <p className="profile profile-profession text-center">{profissao}</p>
        </div>
    </div>
)

export default Avatar
