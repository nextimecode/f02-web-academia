import { Container } from 'next/app'
import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'

const Planos = () => {
    return (
        <section>
            <Container className="px-2 my-2">
                <Title label="Conheça nosssos planos" />
                <Subhead label="Em casa ou na academia agora é a hora de cosntruir a sua melhor versão!" />
                <div className="row px-2" style={{ backgroundColor: 'red' }}>
                    AQUI ESTÃO OS CARDS
                </div>
            </Container>
        </section>
    )
}

export default Planos
