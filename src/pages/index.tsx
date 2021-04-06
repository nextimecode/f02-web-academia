import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import HomeTemplate from '../components/templates/homeTemplate'

export const telefone = '5531991464894'
export const instagramLink =
    'https://www.instagram.com/instrutordefitnessvinicius/'

export const instagramPosts = [
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_0.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_1.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_3.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_4.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_5.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_6.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_7.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_8.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_9.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/instagramPosts/insta_10.jpg',
            alt: 'description'
        }
    }
]
export const carouselPhotos = [
    {
        photo: {
            src: 'assets/img/carouselPhotos/r1.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r2.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r3.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r4.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r5.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r6.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r7.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r8.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r9.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r10.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r11.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r12.jpg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r13.jpeg',
            alt: 'description'
        }
    },
    {
        photo: {
            src: 'assets/img/carouselPhotos/r14.jpeg',
            alt: 'description'
        }
    }
]

export const depoimentos = [
    {
        depoimento: {
            nome: 'Poliane',
            texto:
                'Na primeira semana todo o meu corpo doía, devido a falta de preparo e condicionamento. Depois de um tempo me apaixonei pelos treinos e nos meses seguintes fui vendo os resultados. O Vinicius é uma pessoa extremamente profissional e cuidadoso com cada aluno. Estou amando as aulas e pretendo continuar por muito tempo!'
        }
    },
    {
        depoimento: {
            nome: 'Carla Tati',
            texto:
                'Quero agradecer muito a você, treinador Vinicius, pois estamos juntos à 3 anos graças ao seu profissionalismo e dedicação com meus treinos consegui alcançar resultados incríveis que fizeram e fazem grande diferença no meu corpo e condicionamento físico. Antes de conhecer você me iludi com falsas promessas de treinos milagrosos, e-books, etc. Muito obrigado por tudo!'
        }
    },
    {
        depoimento: {
            nome: 'Carolyne',
            texto:
                'Já são 3 meses treinando com o Vinícius, 3 meses que vem transformando minha vida! O treinamento está me ajudando muito, principalmente pelo fato de eu ter hérnia de disco. Parabéns pelo trabalho e paciência comigo, profissional que sempre se empenha para ver o melhor para seus alunos.'
        }
    }
]

const Index: React.FC = () => {
    const wallpaper = 'assets/img/personal.png'

    const videos = [
        {
            video: {
                src: 'assets/video/video_1.mp4',
                alt: 'description'
            }
        },
        {
            video: {
                src: 'assets/video/video_2.mp4',
                alt: 'description'
            }
        }
    ]

    const txtBemVindo = [
        {
            paragrafo: {
                texto: 'Conheça Vinícius Dias..',
                classes: ''
            }
        },
        {
            paragrafo: {
                texto: `
                    Vinicius Dias, ex-atleta jogador de futebol, conhecido nas suas redes sociais como @instrutordefitness, formado em educação física há  6 anos atuando como personal trainer, tornou-se especialista em treinos para emagrecimento , hipertrofia e hoje atua como referência nesta área.
                `,
                classes: ''
            }
        },
        {
            paragrafo: {
                texto: `
                    E hoje venho dividir meu método de treinamento para você destravar seus resultados, conseguir emagrecer, definir o seu corpo e conquistar sua melhor versão em qualquer lugar que esteja.
                `,
                classes: 'font-italic'
            }
        },
        {
            paragrafo: {
                texto: `
                    Já são mais de 4 mil atendimentos personalizados que transformou a vida dos alunos, e mais de 6 mil na plataforma de treinos online. Agora você não estará mais sozinha.
                `,
                classes: 'font-italic'
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
                instagramPosts={instagramPosts}
            />
        </PageTemplate>
    )
}

export default Index
