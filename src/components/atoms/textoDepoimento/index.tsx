import React from 'react'

import '../textoDepoimento/style.scss'

type Props = {
    textoDepoimento: string
}

const TextoDepoimento = ({ textoDepoimento }: Props) => (
    <div>
        <div className="card-depoimento p-4">
            <p className="post"><span className="post-txt">{textoDepoimento}</span></p>
        </div>
        <div className="arrow-down"></div>
    </div>
       
)

export default TextoDepoimento
