import React from 'react'
import PhotoSlider from '../../organisms/photoSlider'

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
            <PhotoSlider photos={carouselPhotos} />
        </section>
    )
}

export default TransformacoesConsultoria
