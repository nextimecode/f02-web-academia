import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import HomeTemplate from '../components/templates/homeTemplate'

export const telefone = '5531991464894'
export const instagramLink =
    'https://www.instagram.com/instrutordefitnessvinicius/'

export const HOTMART_COURSE_WOMEN = 'https://pay.hotmart.com/L50679467Q'
export const HOTMART_COURSE_MEN = 'https://pay.hotmart.com/H57214382C'

const fotosInstagram = []
const fotosInstagramPath = 'assets/img/instagramPosts/'
const nFotosInstagram = 8
for (let i = 0; i < nFotosInstagram; i++) {
    const photo = {
        photo: {
            src: `${fotosInstagramPath}insta_${i}.jpg`,
            alt: `photo_${i + 1}`
        }
    }
    fotosInstagram.push(photo)
}
export const carouselFotosInstagram = fotosInstagram

const pessoasResultados = [
    {
        pessoa: {
            nome: 'BRUNO',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'CAMILA',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'FLAVIA',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'FLAVIASANTIAGO',
            antes: 2,
            depois: 2
        }
    },
    {
        pessoa: {
            nome: 'FRED',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'HELEM',
            antes: 1,
            depois: 2
        }
    },
    {
        pessoa: {
            nome: 'IZABELA',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'JULIA',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'MARIANA',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'MARIANA2',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'MARIANA3',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'MARILIA',
            antes: 1,
            depois: 1
        }
    },
    {
        pessoa: {
            nome: 'ROSILENE',
            antes: 1,
            depois: 1
        }
    }
]
const fotosResultados = []
const fotosResultadosPath = 'assets/img/antesEDepois/'

pessoasResultados.map(p => {
    for (let i = 0; i < p.pessoa.antes; i++) {
        const photoAntes = {
            photo: {
                src: `${fotosResultadosPath}${p.pessoa.nome}/${
                    p.pessoa.nome
                }-ANTES-${i + 1}.jpg`,
                alt: `${p.pessoa.nome} - Antes`
            }
        }
        fotosResultados.push(photoAntes)
    }
    for (let i = 0; i < p.pessoa.depois; i++) {
        const photoDepois = {
            photo: {
                src: `${fotosResultadosPath}${p.pessoa.nome}/${
                    p.pessoa.nome
                }-DEPOIS-${i + 1}.jpg`,
                alt: `${p.pessoa.nome} - Depois`
            }
        }
        fotosResultados.push(photoDepois)
    }
    return 0
})
const carouselFotosResultados = fotosResultados

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
    },
    {
        depoimento: {
            nome: 'Daniela',
            texto:
                'Bom dia Vinícius, tudo bem? Passando só para falar que estou gostando muito! Tem duas semanas que estou treinado e já super recomendo; inclusive minha amiga marcou avaliação com vc pra quarta-feira!! 😊😊 Eu  vou e ainda levo as amigas hahahaha.'
        }
    },
    {
        depoimento: {
            nome: 'Rafaela',
            texto:
                'Você é bravo demais; já vi evolução no meu corpo e na minha saúde, até meu filho comentou sobre minhas pernas e bumbum. Estou evoluindo muito rápido! Agora preciso acertar na alimentação, obg e em breve estarei aqui novamente para te agradecer. Tmj!'
        }
    },
    {
        depoimento: {
            nome: 'Renata',
            texto:
                'Obg Vini pela aula de hoje. Super gostei do treino, até que as horas passaram rápido por ser a primeira aula. Foi muito bom, porque se não, estaria morta. Confesso que amei a sua dedicação ao trabalho. Sou iniciante e jamais conseguiria treinar se não estivesse com um ótimo profissional que é você. Abraços'
        }
    }
]

const Index: React.FC = () => {
    const wallpaper = 'assets/img/background.jpg'
    const videoMain = 'assets/video/consultoria.MOV'

    const videos = [
        {
            video: {
                src: 'assets/video/video_1.mp4',
                alt: 'description'
            }
        },
        {
            video: {
                src: 'assets/video/video_2.MOV',
                alt: 'description'
            }
        },
        {
            video: {
                src: 'assets/video/video_3.MOV',
                alt: 'description'
            }
        },
        {
            video: {
                src: 'assets/video/video_4.MOV',
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
                carouselPhotos={carouselFotosResultados}
                videos={videos}
                depoimentos={depoimentos}
                txtBemVindo={txtBemVindo}
                instagramPosts={carouselFotosInstagram}
                videoMain={videoMain}
            />
        </PageTemplate>
    )
}

export default Index
