import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import HomeTemplate from '../components/templates/homeTemplate'

const Index: React.FC = () => {
    const wallpaper = 'assets/img/personal.png'

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
            <HomeTemplate
                wallpaper={wallpaper}
                carouselPhotos={carouselPhotos}
                videos={videos}
                depoimentos={depoimentos}
            />
        </PageTemplate>
    )
}

export default Index
