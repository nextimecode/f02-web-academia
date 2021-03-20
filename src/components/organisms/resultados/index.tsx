import { Container } from 'next/app'
import React from 'react'
import { PhotoProps } from '../../../types/types'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import PhotoSlider from '../../organisms/photoSlider'

type Props = {
    carouselPhotos: Record<string, PhotoProps>[]
}

const Resultados = ({ carouselPhotos }: Props) => {
    const subtitulo = `
        Já são mais de 5 mil vidas transformadas
        através de @instrutordefitness.
    `

    return (
        <section>
            <Container>
                <Title label="Resultados reais" />
                <Subhead label={subtitulo} />

                <PhotoSlider photos={carouselPhotos} />
            </Container>
        </section>
    )
}

export default Resultados
