import { Container } from 'next/app'
import React from 'react'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
import PhotoSlider from '../../organisms/photoSlider'

type Props = {
    carouselPhotos: Record<string, any>
}

const Resultados = ({ carouselPhotos }: Props) => {
    return (
        <section>
            <Container>
                <Title label="Resultados reais" />
                <Subhead label="#HASHTAGPERSONAL" />

                <PhotoSlider photos={carouselPhotos} />
            </Container>
        </section>
    )
}

export default Resultados
