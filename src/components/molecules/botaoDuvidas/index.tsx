import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'react-bootstrap'

const BotaoDuvidas = () => {
    const telefone = '5531991464894'
    const mensagem = 'Olá, gostaria de saber mais sobre os treinamentos.'

    return (
        <Button
            href={`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`}
            type="button"
            className="btn text-light rounded-pill fs-5 border-0"
            style={{ backgroundColor: '#25D366' }}
            target="_blank"
        >
            <FontAwesomeIcon icon={faWhatsapp} />
            <span className="px-2">Dúvidas?</span>
        </Button>
    )
}

export default BotaoDuvidas
