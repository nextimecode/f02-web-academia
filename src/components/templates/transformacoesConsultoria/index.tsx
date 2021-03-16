import React from 'react'
import Slider from '../../organisms/slider'

const TransformacoesConsultoria = () => {
    const carouselPhotos = [
        {
            photo: {
                src: 'assets/img/carouselPhotos/img01.jpg',
                alt: 'description'
            }
        },
        {
            photo: {
                src: 'assets/img/carouselPhotos/img02.jpg',
                alt: 'description'
            }
        },
        {
            photo: {
                src: 'assets/img/carouselPhotos/img03.jpg',
                alt: 'description'
            }
        }
    ]

    return (
        <section>
            <h1>Transformações em nossa consultoria personalizada</h1>
            <Slider photos={carouselPhotos} />
        </section>
    )
}

export default TransformacoesConsultoria
