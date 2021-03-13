import React from 'react'
import Head from 'next/head'
import Header from '../components/templates/header'
import Separator from '../components/atoms/separator'
import BemVindo from '../components/templates/bemVindo'
import Home from '../components/templates/home'
import Planos from '../components/templates/planos'
import Resultados from '../components/templates/resultados'
import DepoimentosVideo from '../components/templates/depoimentosVideo'
import RedesSociais from '../components/templates/redesSociais'
import DepoimentosTexto from '../components/templates/depoimentosTexto'
import Footer from '../components/templates/footer'

const Index: React.FC = () => {
    const listNavLinks = [
        {
            navLink: {
                href: '/',
                label: 'Home'
            }
        },
        {
            navLink: {
                href: '/comece',
                label: 'Começa Agora'
            }
        },
        {
            navLink: {
                href: '/planos',
                label: 'Planos'
            }
        },
        {
            navLink: {
                href: '/area-do-aluno',
                label: 'Área de Alunos'
            }
        }
    ]

    const wallpaper = 'assets/img/personal.jpg'
    const urlLogo = 'assets/img/logos/logo.png'

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
        <React.Fragment>
            <Head>
                <title>Homepage</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js"
                ></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <Header
                urlLogo={urlLogo}
                width="60px"
                height="60px"
                listNavLinks={listNavLinks}
            />

            <Home urlWallpaper={wallpaper}/>
            <Separator/>

            <BemVindo/>
            <Separator/>

            <Planos/>
            <Separator/>

            <Resultados carouselPhotos={carouselPhotos}/>
            <DepoimentosVideo/>
            <Separator/>

            <RedesSociais />
            <Separator />

            <DepoimentosTexto />
            <Footer />
        </React.Fragment>
    )
}

export default Index
