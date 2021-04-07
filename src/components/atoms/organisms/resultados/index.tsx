import { Container } from 'next/app'
import React from 'react'
import { PhotoProps } from '../../../../types/types'
import Subhead from '../../subhead'
import Title from '../../title'
import PhotoSlider from '../photoSlider'

type Props = {
    carouselPhotos: Record<string, PhotoProps>[]
}

const Resultados = ({ carouselPhotos }: Props) => {
    const subtitulo = `
        Mais de 5 mil vidas transformadas através de @instrutordefitness
    `

    return (
        <section className="py-5">
            <Container>
                <Title label="Resultados reais" />
                <Subhead label={subtitulo} />

                <PhotoSlider photos={carouselPhotos} />
            </Container>
        </section>
    )
}

export default Resultados
