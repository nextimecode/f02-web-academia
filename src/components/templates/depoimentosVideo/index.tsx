import { Container } from 'next/app'
import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'

const DepoimentosVideo = () => {
    return (
        <section>
            <Container className="px-2 my-2">
                <Title label="Resultados reais" />
                <Subhead label="#TeamSaoMiguelito" />
                <div className="row px-2 " style={{ backgroundColor: 'red' }}>
                    AQUI ESTÃO OS DEPOIMENTOS EM VIDEO
                </div>
            </Container>
        </section>
    )
}

export default DepoimentosVideo
