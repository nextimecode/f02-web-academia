import React from 'react'

import './style.scss'

type Props = {
    foto?: string
    nome: string
    profissao?: string
    width: string
    height: string
}

const patternAvatar = 'assets/img/avatars/user.png'

const Avatar = ({
    foto = patternAvatar,
    nome,
    profissao = '',
    width,
    height
}: Props) => (
    <div className="d-flex justify-content-center">
        <div className="m-auto">
            <img
                className="profile-pic fit-image"
                src={foto}
                width={width}
                height={height}
            />
            <p className="profile profile-name text-center">{nome}</p>
            <p className="profile profile-profession text-center">
                {profissao}
            </p>
        </div>
    </div>
)

export default Avatar
