import React from 'react'
import PageTemplate from '../components/templates/pageTemplate'
import HomeTemplate from '../components/templates/homeTemplate'

export const telefone = '5531991464894'
export const instagramLink =
    'https://www.instagram.com/instrutordefitnessvinicius/'

export const HOTMART_COURSE_WOMEN = 'https://pay.hotmart.com/L50679467Q'
export const HOTMART_COURSE_MEN = 'https://pay.hotmart.com/H57214382C'

export const VIDEO_INVITATION = 'https://www.youtube.com/embed/gizcBiJ7I9Y'

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
                'Na primeira semana todo o meu corpo do??a, devido a falta de preparo e condicionamento. Depois de um tempo me apaixonei pelos treinos e nos meses seguintes fui vendo os resultados. O Vinicius ?? uma pessoa extremamente profissional e cuidadoso com cada aluno. Estou amando as aulas e pretendo continuar por muito tempo!'
        }
    },
    {
        depoimento: {
            nome: 'Carla Tati',
            texto:
                'Quero agradecer muito a voc??, treinador Vinicius, pois estamos juntos ?? 3 anos gra??as ao seu profissionalismo e dedica????o com meus treinos consegui alcan??ar resultados incr??veis que fizeram e fazem grande diferen??a no meu corpo e condicionamento f??sico. Antes de conhecer voc?? me iludi com falsas promessas de treinos milagrosos, e-books, etc. Muito obrigado por tudo!'
        }
    },
    {
        depoimento: {
            nome: 'Carolyne',
            texto:
                'J?? s??o 3 meses treinando com o Vin??cius, 3 meses que vem transformando minha vida! O treinamento est?? me ajudando muito, principalmente pelo fato de eu ter h??rnia de disco. Parab??ns pelo trabalho e paci??ncia comigo, profissional que sempre se empenha para ver o melhor para seus alunos.'
        }
    },
    {
        depoimento: {
            nome: 'Daniela',
            texto:
                'Bom dia Vin??cius, tudo bem? Passando s?? para falar que estou gostando muito! Tem duas semanas que estou treinado e j?? super recomendo; inclusive minha amiga marcou avalia????o com vc pra quarta-feira!! ???????? Eu  vou e ainda levo as amigas hahahaha.'
        }
    },
    {
        depoimento: {
            nome: 'Rafaela',
            texto:
                'Voc?? ?? bravo demais; j?? vi evolu????o no meu corpo e na minha sa??de, at?? meu filho comentou sobre minhas pernas e bumbum. Estou evoluindo muito r??pido! Agora preciso acertar na alimenta????o, obg e em breve estarei aqui novamente para te agradecer. Tmj!'
        }
    },
    {
        depoimento: {
            nome: 'Renata',
            texto:
                'Obg Vini pela aula de hoje. Super gostei do treino, at?? que as horas passaram r??pido por ser a primeira aula. Foi muito bom, porque se n??o, estaria morta. Confesso que amei a sua dedica????o ao trabalho. Sou iniciante e jamais conseguiria treinar se n??o estivesse com um ??timo profissional que ?? voc??. Abra??os'
        }
    }
]

const Index: React.FC = () => {
    const wallpaper = 'assets/img/background.jpg'

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
                src: 'assets/video/video_4.mp4',
                alt: 'description'
            }
        }
    ]

    const txtBemVindo = (
        <React.Fragment>
            <p>Conhe??a Vin??cius Dias...</p>
            <p>
                <span className="fw-500 color-primary">
                    Vinicius Dias, ex-atleta jogador de futebol conhecido como{' '}
                    <a href={instagramLink}>@instrutordefitness</a>, formado em
                    educa????o f??sica h?? 6 anos
                </span>{' '}
                atuando como personal trainer, tornou-se{' '}
                <span className="fw-500 color-primary">
                    especialista em treinos para emagrecimento e hipertrofia.
                </span>{' '}
                Hoje atua como refer??ncia na ??rea.
            </p>
            <p>
                E hoje{' '}
                <span className="fw-500 color-primary">
                    venho dividir meu m??todo de treinamento para voc?? destravar
                    seus resultados
                </span>
                , conseguir emagrecer,{' '}
                <span className="fw-500 color-primary">
                    definir o seu corpo e conquistar sua melhor vers??o em
                    qualquer lugar que esteja.
                </span>
            </p>
            <p>
                <span className="fw-500 color-primary">
                    J?? s??o mais de 4 mil atendimentos personalizados que
                    transformou a vida dos alunos, e mais de 6 mil na plataforma
                    de treinos online.
                </span>
            </p>
            <p>Agora voc?? n??o estar?? mais sozinha.</p>
        </React.Fragment>
    )

    return (
        <PageTemplate title="Home">
            <HomeTemplate
                wallpaper={wallpaper}
                carouselPhotos={carouselFotosResultados}
                videos={videos}
                depoimentos={depoimentos}
                instagramPosts={carouselFotosInstagram}
                txtBemVindo={txtBemVindo}
                videoMain={VIDEO_INVITATION}
            />
        </PageTemplate>
    )
}

export default Index
