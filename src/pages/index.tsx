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
                src: 'assets/video/teste2.mp4',
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
                src: 'assets/video/teste2.mp4',
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

    const depoimentos = [
        {
            depoimento: {
                foto: 'assets/img/avatars/user.png',
                nome: 'Ana da Silva',
                profissao: 'Advogada',
                texto: 'Eu contratei o serviço e estou muito satisfeito.'
            }
        },
        {
            depoimento: {
                foto: 'assets/img/avatars/user.png',
                nome: 'Joana Felisbina',
                profissao: 'Engenheira',
                texto: 'Muito bom.'
            }
        },
        {
            depoimento: {
                foto: 'assets/img/avatars/user.png',
                nome: 'Maria Ferreira',
                profissao: 'Professora',
                texto: 'Gostei demais.'
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

            <DepoimentosTexto depoimentos={depoimentos}/>
        </PageTemplate>
    )
}

export default Index
