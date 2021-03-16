import React from 'react'

import './style.scss'

type Props = {
    foto: string,
    nome: string,
    profissao?: string
}

const Avatar = ({ foto, nome, profissao = '' }: Props) => (
    <div>
        <div className="row">
            <img className="profile-pic fit-image" src={foto}/>
        </div>
        <div className="row">
            <p className="profile profile-name">{nome}</p>
            <p className="profile profile-profession">{profissao}</p>
        </div> 
    </div>
       
)

export default Avatar
