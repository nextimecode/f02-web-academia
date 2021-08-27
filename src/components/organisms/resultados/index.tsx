import React from 'react'
import LazyLoad from 'react-lazyload'
import { PhotoProps } from '../../../types/types'
import Subhead from '../../atoms/subhead'
import Title from '../../atoms/title'
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
            <div className="container">
                <Title label="Resultados reais" />
                <Subhead label={subtitulo} />

                <LazyLoad offset={100}>
                    <PhotoSlider
                        photos={carouselPhotos}
                        showDots={false}
                        draggable={true}
                    />
                </LazyLoad>
            </div>
        </section>
    )
}

export default Resultados
