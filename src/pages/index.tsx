import React from 'react'
import Separator from '../components/atoms/separator'
import BemVindo from '../components/templates/bemVindo'
import Home from '../components/templates/home'
import Planos from '../components/templates/planos'
import Resultados from '../components/templates/resultados'
import DepoimentosVideo from '../components/templates/depoimentosVideo'
import RedesSociais from '../components/templates/redesSociais'
import DepoimentosTexto from '../components/templates/depoimentosTexto'
import PageTemplate from '../components/templates/pageTemplate'

const Index: React.FC = () => {
    const wallpaper = 'assets/img/personal.jpg'

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

    const videos = [
        {
            video: {
                src: 'assets/video/video_test.mp4',
                alt: 'description'
            }
        },
        {
            video: {
                src: 'assets/video/video_test.mp4',
                alt: 'description'
            }
        },
        {
            video: {
                src: 'assets/video/video_test.mp4',
                alt: 'description'
            }
        },
        {
            video: {
                src: 'assets/video/video_test.mp4',
                alt: 'description'
            }
        }
    ]

    return (
        <PageTemplate title="Home">
            <Home urlWallpaper={wallpaper} />
            <Separator />

            <BemVindo />
            <Separator />

            <Planos />
            <Separator />

            <Resultados carouselPhotos={carouselPhotos} />
            <DepoimentosVideo videos={videos} />
            <Separator />

            <RedesSociais />
            <Separator />

            <DepoimentosTexto />
        </PageTemplate>
    )
}

export default Index
