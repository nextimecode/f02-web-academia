import React from 'react'
import Button from '../../molecules/button'

type Props = {
    telefone?: string
    mensagem?: string
}

const WhatsApp = ({
    telefone = '5531991464894',
    mensagem = 'Olá, gostaria de saber mais sobre os treinamentos.'
}: Props) => {
    return (
        <div className="fixed-bottom d-flex justify-content-end m-4">
            <Button
                label="Dúvidas?"
                prefixIcon="whatsapp"
                href={`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`}
                target="_blank"
                style={{ backgroundColor: '#25D366', color: '#fff' }}
            />
        </div>
    )
}

export default WhatsApp
