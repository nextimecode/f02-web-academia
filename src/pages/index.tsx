import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import HomeTemplate from '../components/templates/homeTemplate'

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

    const txtBemVindo = [
        {
            paragrafo: {
                texto: `Conheça Vinícius Dias..`,
                classes: ""
            }
        },
        {
            paragrafo: {
                texto: `
                    Vinícius Dias é ex-atleta e ex-jogador de
                    futebol. Conhecido nas suas redes sociais
                    como @instrutordefitness, é formado em
                    Educação Física há 6 anos e atua como
                    personal trainer. Tornou-se especialista
                    em treinos para emagrecimento, hipertrofia
                    e hoje atua como referência nessas áreas.
                `,
                classes: ""
            }
        },
        {
            paragrafo: {
                texto: `
                    Hoje, venho dividir meu método de treinamento
                    para você destravar seus resultados, conseguir
                    emagrecer, definir seu corpo e conquistar sua
                    melhor versão em qualquer lugar que esteja.
                `,
                classes: "font-italic"
            }
        },
        {
            paragrafo: {
                texto: `
                    Já são mais de 4 mil atendimentos personalizados
                    que transformaram a vida dos alunos. São mais de
                    6 mil na plataforma de treinos online. Agora você
                    não estará mais sozinha!
                `,
                classes: "font-italic"
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
                txtBemVindo={txtBemVindo}
            />
        </PageTemplate>
    )
}

export default Index
