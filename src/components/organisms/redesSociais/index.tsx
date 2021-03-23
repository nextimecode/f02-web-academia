import { Container } from 'next/app'
import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'

const RedesSociais = () => {
    return (
        <section>
            <Container className="px-2 my-2">
                <Title label="Já me segue no Instagram?" />
                <Subhead label="TODO DIA UM CONTEÚDO DIFERENTE COM AS MIGUELETES PARA TE AJUDAR E INCENTIVAR NESTA JORNADA." />
                <div className="row px-2" style={{ backgroundColor: 'red' }}>
                    AQUI ESTÁ A PARTE DO INSTAGRAM
                </div>
            </Container>
        </section>
    )
}

export default RedesSociais
